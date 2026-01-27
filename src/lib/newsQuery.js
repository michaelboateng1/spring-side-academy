import { supabase } from "./supabaseClient";

function getPathFromPublicUrl(url) {
  const marker = '/storage/v1/object/public/news_thumbnail/'
  const path = url.split(marker)[1]
  return path ? decodeURIComponent(path) : null
}

export const insertData = async (currentArticle) => {
  const { data, error } = await supabase
    .from('news-table')
    .insert([{
      date_posted: currentArticle.date_posted,
      category: currentArticle.category,
      title: currentArticle.title,
      body: currentArticle.body,
      thumbnail_url: currentArticle.thumbnail_url,
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
      date_posted: currentArticle.date_posted,
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

export const deleteData = async (id) => {
  const { error } = await supabase
    .from('news-table')
    .delete()
    .eq('id', id)

  return { error }
}




export const deleteThumbnail = async (thumbnailUrl) => {
  console.log("Attempting to delete thumbnail:", thumbnailUrl)
  if (!thumbnailUrl) return

  const filePath = getPathFromPublicUrl(thumbnailUrl)
  console.log("Extracted file path:", filePath)

  if (!filePath) {
    console.error('Could not extract file path from URL:', thumbnailUrl)
    return { error: 'Invalid URL' }
  }

  const results = await supabase.storage
    .from('news_thumbnail')
    .remove([filePath])

  console.log("Supabase remove results:", results)

  if (results.error) {
    console.error('Thumbnail delete failed:', results.error)
  }

  return results;
}
