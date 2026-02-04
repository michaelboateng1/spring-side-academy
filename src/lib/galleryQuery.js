import { supabase } from "./supabaseClient";

function getPathFromPublicUrl(url) {
    const marker = '/storage/v1/object/public/gallery/'
    const path = url.split(marker)[1]
    return path ? decodeURIComponent(path) : null
}

export const insertData = async (image) => {
    const { data, error } = await supabase
        .from('gallery_table')
        .insert([{
            title: image.title,
            description: image.description,
            image_url: image.image,
            category: image.category,
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

// export const getEvenBySlug = async (slug) => {
//     const { data, error } = await supabase
//         .from('gallery_table')
//         .select()
//         .eq('slug', slug)
//         .single()

//     return { data, error }
// }


export const updateData = async (image) => {
    const { data, error } = await supabase
        .from('gallery_table')
        .update({
            title: image.title,
            description: image.description,
            image_url: image.image_url,
            category: image.category,
        })
        .eq('id', image.id)
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

export const deleteImage = async (imageUrl) => {
    console.log("Attempting to delete image:", imageUrl)
    if (!imageUrl) return { error: 'No URL provided' }

    const filePath = getPathFromPublicUrl(imageUrl)
    console.log("Extracted file path:", filePath)

    if (!filePath) {
        console.error('Could not extract file path from URL:', imageUrl)
        return { error: 'Invalid URL' }
    }

    try {
        const { error, data } = await supabase.storage
            .from('gallery')
            .remove([filePath])

        if (error) {
            console.error('Image delete failed:', error)
            return { error }
        }

        console.log('Image deleted successfully:', filePath)
        return { data, error: null }
    } catch (err) {
        console.error('Delete exception:', err)
        return { error: err }
    }
}

export const getStat = async () => {
  const { count, error } = await supabase
  .from('gallery_table')
  .select('*', { count: 'exact', head: true })

  return { count, error }
}