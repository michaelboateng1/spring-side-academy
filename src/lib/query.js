import { supabase } from "./supabaseClient";

function getPathFromPublicUrl(url) {
  const marker = '/storage/v1/object/public/news_thumbnail/'
  return url.split(marker)[1]
}


export const insertData = async (currentArticle) => {
  const { data, error } = await supabase
    .from('news-table')
    .insert([{
      date_posted: currentArticle.date,
      category: currentArticle.category,
      title: currentArticle.title,
      body: currentArticle.description,
      thumbnail_url: currentArticle.thumbnail,
      slug: currentArticle.title
        .toLowerCase()
        .replace(/\s+/g, '-'),
    }])
    .select()
    .single()

  return { data, error }
}

export const getData = async () => {
  const { data, error } = await supabase
    .from('news-table')
    .select()
    .order('created_at', { ascending: false })

  return { data, error }
}


export const updateData = async (currentArticle) => {
  console.log(currentArticle.body)
  const { data, error } = await supabase
    .from('news-table')
    .update({
      date_posted: currentArticle.date,
      category: currentArticle.category,
      title: currentArticle.title,
      body: currentArticle.body,
      thumbnail_url: currentArticle.thumbnail_url,
      slug: currentArticle.title
        .toLowerCase()
        .replace(/\s+/g, '-'),
    })
    .eq('id', currentArticle.id)
    .select()
    .single()

  return { data, error }
}



export const deleteThumbnail = async (thumbnailUrl) => {
  if (!thumbnailUrl) return

  const filePath = getPathFromPublicUrl(thumbnailUrl)

  const { error } = await supabase.storage
    .from('news_thumbnail')
    .remove([filePath])

  if (error) {
    console.error('Thumbnail delete failed:', error)
  }
}
