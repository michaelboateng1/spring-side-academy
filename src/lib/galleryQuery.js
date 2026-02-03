import { supabase } from "./supabaseClient";

function getPathFromPublicUrl(url) {
    const marker = '/storage/v1/object/public/gallery/'
    const path = url.split(marker)[1]
    return path ? decodeURIComponent(path) : null
}

export const insertData = async (currentEvent) => {
    const { data, error } = await supabase
        .from('gallery_table')
        .insert([{
            title: currentEvent.title,
            description: currentEvent.description,
            image_url: currentEvent.image,
            slug: currentEvent.title
                .toLowerCase()
                .replace(/\s+/g, '-'),
        }])
        .select()
        .single()

    return { data, error }
}

export const getData = async () => {
    const { data, error } = await supabase
        .from('gallery_table')
        .select()
        .order('created_at', { ascending: false })

    return { data, error }
}

export const getEventBySlug = async (slug) => {
    const { data, error } = await supabase
        .from('gallery_table')
        .select()
        .eq('slug', slug)
        .single()

    return { data, error }
}


export const updateData = async (currentEvent) => {
    const { data, error } = await supabase
        .from('gallery_table')
        .update({
            title: currentEvent.title,
            description: currentEvent.description,
            image_url: currentEvent.image,
            slug: currentEvent.title
                .toLowerCase()
                .replace(/\s+/g, '-'),
        })
        .eq('id', currentEvent.id)
        .select()
        .single()

    return { data, error }
}

export const deleteData = async (id) => {
    const { data, error } = await supabase
        .from('gallery_table')
        .delete()
        .eq('id', id)

    return { data, error }
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

    const { error, data } = await supabase.storage
        .from('gallery')
        .remove([filePath])

    if (error) {
        console.error('Thumbnail delete failed:', error)
    }

    return { error, data }
}

export const getStat = async () => {
  const { count, error } = await supabase
  .from('gallery_table')
  .select('*', { count: 'exact', head: true })

  return { count, error }
}