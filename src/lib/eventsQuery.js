import { supabase } from "./supabaseClient";

// function getPathFromPublicUrl(url) {
//     const marker = '/storage/v1/object/public/news_thumbnail/'
//     const path = url.split(marker)[1]
//     return path ? decodeURIComponent(path) : null
// }

export const insertData = async (currentEvent) => {
    const { data, error } = await supabase
        .from('events_table')
        .insert([{
            event_date: currentEvent.date,
            event_title: currentEvent.title,
            location: currentEvent.location,
            description: currentEvent.description,
            thumbnail_url: currentEvent.thumbnail_url
        }])
        .select()
        .single()

    return { data, error }
}

export const getData = async () => {
    const { data, error } = await supabase
        .from('events_table')
        .select()
        .order('created_at', { ascending: false })

    return { data, error }
}


export const updateData = async (currentEvent) => {
    const { data, error } = await supabase
        .from('events_table')
        .update({
            event_date: currentEvent.date,
            event_title: currentEvent.title,
            location: currentEvent.location,
            description: currentEvent.description,
            thumbnail_url: currentEvent.thumbnail_url,
        })
        .eq('id', currentEvent.id)
        .select()
        .single()

    return { data, error }
}

export const deleteData = async (id) => {
    const { data, error } = await supabase
        .from('events_table')
        .delete()
        .eq('id', id)

    return { data, error }
}




// export const deleteThumbnail = async (thumbnailUrl) => {
//     console.log("Attempting to delete thumbnail:", thumbnailUrl)
//     if (!thumbnailUrl) return

//     const filePath = getPathFromPublicUrl(thumbnailUrl)
//     console.log("Extracted file path:", filePath)

//     if (!filePath) {
//         console.error('Could not extract file path from URL:', thumbnailUrl)
//         return { error: 'Invalid URL' }
//     }

//     const results = await supabase.storage
//         .from('events_thumbnail')
//         .remove([filePath])

//     console.log("Supabase remove results:", results)

//     if (results.error) {
//         console.error('Thumbnail delete failed:', results.error)
//     }

//     return results;
// }


// export const deleteThumbnail = async (thumbnailUrl) => {
//     console.log("Attempting to delete thumbnail:", thumbnailUrl)
//     if (!thumbnailUrl) return

//     // Encode the URL to handle spaces and other special characters
//     const encodedThumbnailUrl = encodeURI(thumbnailUrl);
//     console.log("Encoded thumbnail URL:", encodedThumbnailUrl); // Log the encoded URL

//     const filePath = getPathFromPublicUrl(encodedThumbnailUrl) // Pass the encoded URL
//     console.log("Extracted file path:", filePath)

//     if (!filePath) {
//         console.error('Could not extract file path from URL:', thumbnailUrl)
//         return { error: 'Invalid URL' }
//     }

//     const results = await supabase.storage
//         .from('events_thumbnail')
//         .remove([filePath])

//     console.log("Supabase remove results:", results)

//     if (results.error) {
//         console.error('Thumbnail delete failed:', results.error)
//     }

//     return results;
// }

// export const deleteThumbnail = async (filePath) => {
//     const { data, error } = await supabase
//         .storage
//         .from('events_thumbnail')
//         .remove([filePath]);

//     return { data, error };
// }

export const deleteThumbnail = async (thumbnailUrl) => {
    console.log("Attempting to delete thumbnail:", thumbnailUrl)
    if (!thumbnailUrl) return

    //   const filePath = getPathFromPublicUrl(thumbnailUrl)
    //   console.log("Extracted file path:", filePath)

    //   if (!filePath) {
    //     console.error('Could not extract file path from URL:', thumbnailUrl)
    //     return { error: 'Invalid URL' }
    //   }

    const { error, data } = await supabase.storage
        .from('events_thumbnail')
        .remove([`thumbnails/${thumbnailUrl}`])

    return { error, data }
}