<script>
  import { onMount } from 'svelte';
  import { 
    Button, Modal, Label, Input, Tooltip, Fileupload, Helper
  } from "flowbite-svelte";
  import { PlusOutline, TrashBinOutline, SearchOutline, ImageOutline, EditOutline } from "flowbite-svelte-icons";

  import ShowToast from "../components/ShowToast.svelte";
  import BrokenImage from "$lib/assets/schooLogo.png";
  import RichTextEditor from "../components/RichTextEditor.svelte";
  import { supabase } from '$lib/supabaseClient';
  import { insertData, getData, updateData, deleteData, deleteThumbnail } from '$lib/galleryQuery';

  let toastRef = $state();
  let galleryItems = $state([]);
  let isLoading = $state(false);

  let fileuploadprops = {
    id: "user_avatar",
    accept: "image/*",
    multiple: false,
    capture: "environment",
    onUpload: (e) => {
      console.log(e);
    }
  };

  let searchTerm = $state("");
  let showUploadModal = $state(false);
  let showEditModal = $state(false);
  
  let newItem = $state({
    title: "",
    category: "General",
    description: "",
    file: null,
    previewUrl: null
  });

  let editingItem = $state({
    id: null,
    title: "",
    category: "",
    description: "",
    file: null,
    previewUrl: null
  });

  async function loadGalleryItems() {
    isLoading = true;
    try {
      const { data, error } = await getData();
      if (error) {
        console.error('Failed to load gallery:', error);
        toastRef?.add("Failed to load gallery items", "red");
      } else {
        galleryItems = data?.map(item => ({
          id: item.id,
          title: item.title,
          description: item.description,
          url: item.image_url,
          category: item.category || "General"
        })) || [];
      }
    } catch (err) {
      console.error('Error loading gallery:', err);
      toastRef?.add("Error loading gallery items", "red");
    } finally {
      isLoading = false;
    }
  }

  async function uploadImageToStorage(file) {
    const fileExt = file.name.split('.').pop();
    const fileName = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}.${fileExt}`;
    const filePath = `gallery/${fileName}`;

    const { error } = await supabase.storage
      .from('gallery')
      .upload(filePath, file, { upsert: true });

    if (error) {
      throw error;
    }

    const { data } = supabase.storage.from('gallery').getPublicUrl(filePath);
    return data?.publicUrl;
  }

  function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      newItem.file = file;
      if (newItem.previewUrl) {
        URL.revokeObjectURL(newItem.previewUrl);
      }
      newItem.previewUrl = URL.createObjectURL(file);
    }
  }

  function handleEditFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      editingItem.file = file;
      if (editingItem.previewUrl && editingItem.previewUrl.startsWith('blob:')) {
        URL.revokeObjectURL(editingItem.previewUrl);
      }
      editingItem.previewUrl = URL.createObjectURL(file);
    }
  }

  async function deleteItem(id, imageUrl) {
    try {
      if (confirm("Are you sure you want to delete this image?")) {
        const { error } = await deleteData(id);
        if (error) {
          toastRef?.add("Image delete failed", "red");
        } else {
          galleryItems = galleryItems.filter(item => item.id !== id);
          if (imageUrl && imageUrl.includes('storage.googleapis.com') || imageUrl.includes('supabase')) {
            await deleteThumbnail(imageUrl);
          }
          toastRef?.add("Image deleted successfully", "red");
        }
      }
    } catch (err) {
      console.error('Delete error:', err);
      toastRef?.add("Image delete failed", "red");
    }
  }

  async function handleUpload() {
    if (!newItem.title) {
      toastRef?.add("Please enter a title", "red");
      return;
    }

    try {
      let imageUrl = newItem.previewUrl;
      
      if (newItem.file) {
        imageUrl = await uploadImageToStorage(newItem.file);
      }

      const { data, error } = await insertData({
        title: newItem.title,
        category: newItem.category,
        description: newItem.description,
        image: imageUrl
      });

      if (error) {
        toastRef?.add("Failed to upload image", "red");
      } else {
        galleryItems = [...galleryItems, {
          id: data.id,
          title: data.title,
          description: data.description,
          url: data.image_url,
          category: data.category
        }];
        showUploadModal = false;
        newItem = { title: "", category: "General", description: "", file: null, previewUrl: null };
        toastRef?.add("Image uploaded successfully", "green");
      }
    } catch (err) {
      console.error('Upload error:', err);
      toastRef?.add("Image upload failed", "red");
    }
  }

  function editItem(item) {
    editingItem = { 
      ...item, 
      previewUrl: item.url,
      file: null 
    };
    showEditModal = true;
  }

  async function handleUpdate() {
    try {
      let imageUrl = editingItem.previewUrl;

      if (editingItem.file) {
        imageUrl = await uploadImageToStorage(editingItem.file);
      }

      const { data, error } = await updateData({
        id: editingItem.id,
        title: editingItem.title,
        category: editingItem.category,
        description: editingItem.description,
        image: imageUrl
      });

      if (error) {
        toastRef?.add("Image update failed", "red");
      } else {
        galleryItems = galleryItems.map(item => 
          item.id === editingItem.id 
            ? { 
                ...item, 
                title: editingItem.title, 
                category: editingItem.category, 
                description: editingItem.description,
                url: imageUrl
              } 
            : item
        );
        showEditModal = false;
        toastRef?.add("Image updated successfully", "blue");
      }
    } catch (err) {
      console.error('Update error:', err);
      toastRef?.add("Image update failed", "red");
    }
  }

  const filteredItems = $derived(
    galleryItems.filter(item => 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  onMount(() => {
    loadGalleryItems();
  });
</script>

<ShowToast bind:this={toastRef} />

<div class="p-4 space-y-4">
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold text-slate-900">Gallery Management</h1>
    </div>
    <Button onclick={() => showUploadModal = true} color="alternative" class="flex bg-[#0f2a92] hover:bg-[#0f2a92]/80 text-white hover:text-white cursor-pointer items-center gap-2">
      <PlusOutline class="w-5 h-5" /> Upload Image
    </Button>
  </div>

 <div class="flex items-center justify-between bg-white p-4 rounded-lg">
    <div class="relative w-full max-w-md">
      <div class="absolute z-10 inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
        <SearchOutline class="w-5 h-5 text-gray-500" />
      </div>
      <Input
        type="text"
        placeholder="Search news by title or category..."
        class="pl-10 focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0"
        bind:value={searchTerm}
      />
    </div>
  </div>

  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    {#each filteredItems as item}
      <div class="group relative bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100 transition-all hover:shadow-md">
        <div class="aspect-video w-full overflow-hidden bg-gray-100">
          <img src={item.url} alt={item.title} class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" />
        </div>
        
        <div class="p-4">
          <span class="text-[10px] font-bold text-blue-600 uppercase tracking-wider">{item.category}</span>
          <h3 class="text-sm font-semibold text-slate-900 truncate">{item.title}</h3>
        </div>

        <div class="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-2">
          <button 
            onclick={() => editItem(item)}
            class="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 shadow-lg"
          >
            <EditOutline class="w-4 h-4" />
          </button>
          <Tooltip>Edit Image</Tooltip>
          
          <button 
            onclick={() => deleteItem(item.id, item.url)}
            class="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 shadow-lg"
          >
            <TrashBinOutline class="w-4 h-4" />
          </button>
          <Tooltip>Delete Image</Tooltip>
        </div>
      </div>
    {/each}
  </div>

  {#if filteredItems.length === 0}
    <div class="flex flex-col items-center justify-center py-20 bg-white rounded-xl border-2 border-dashed border-gray-200">
      <ImageOutline class="w-16 h-16 text-gray-300 mb-4" />
      <p class="text-slate-500">No images found matching your search.</p>
    </div>
  {/if}
</div>


<Modal bind:open={showUploadModal} size="md" autoclose={false} class="w-full">
  <div class="p-6 space-y-6">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Upload New Image</h3>
    <div class="space-y-4">
      <div class="space-y-2">
        <Label for="image-title">Image Title</Label>
        <Input id="image-title" class="focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0" placeholder="e.g., Prize Giving Day" bind:value={newItem.title} />
      </div>

      <div class="space-y-2">
        <Label for="image-category">Category</Label>
        <Input id="image-category" class="focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0" placeholder="e.g., Academic" bind:value={newItem.category} />
      </div>

      <div class="space-y-2">
        <Label for="file-upload">Choose Image</Label>
        <Fileupload {...fileuploadprops} onchange={handleFileChange} id="file-upload" />
        <Helper>PNG, JPG or GIF (MAX. 800x400px).</Helper>
        
        {#if newItem.previewUrl}
          <div class="mt-4 relative aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
            <img src={newItem.previewUrl} alt="Preview" class="w-full h-full object-cover" />
            <button 
              type="button"
              onclick={() => {
                newItem.file = null;
                URL.revokeObjectURL(newItem.previewUrl);
                newItem.previewUrl = null;
              }}
              class="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 shadow-sm"
            >
              <TrashBinOutline class="w-4 h-4" />
            </button>
          </div>
        {/if}
      </div>

      <div class="space-y-2">
        <Label for="description">Image Description</Label>
        <RichTextEditor bind:content={newItem.description} placeholder="Image description..." />
      </div>

    </div>
    <div class="flex justify-end gap-3 mt-6">
      <Button color="alternative" class="hover:text-black" onclick={() => showUploadModal = false}>Cancel</Button>
      <Button color="alternative" class="text-white bg-[#0f2a92] hover:bg-[#0f2a92]/80 hover:text-white" onclick={handleUpload}>Upload</Button>
    </div>
  </div>
</Modal>

<Modal bind:open={showEditModal} size="md" autoclose={false} class="w-full">
  <div class="p-6 space-y-6">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">Edit Image Details</h3>
    <div class="space-y-4">
      <div class="space-y-2">
        <Label for="edit-image-title">Image Title</Label>
        <Input id="edit-image-title" class="focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0" placeholder="e.g., Prize Giving Day" bind:value={editingItem.title} />
      </div>

      <div class="space-y-2">
        <Label for="edit-image-category">Category</Label>
        <Input id="edit-image-category" class="focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0" placeholder="e.g., Academic" bind:value={editingItem.category} />
      </div>

      <div class="space-y-2">
        <Label for="edit-file-upload">Change Image</Label>
        <Fileupload {...fileuploadprops} onchange={handleEditFileChange} id="edit-file-upload" />
        <Helper>PNG, JPG or GIF (MAX. 800x400px). Leave empty to keep current image.</Helper>
        
        {#if editingItem.previewUrl}
          <div class="mt-4 relative aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
            <img src={editingItem.previewUrl} alt="Preview" class="w-full h-full object-cover" />
          </div>
        {/if}
      </div>

      <div class="space-y-2">
        <Label for="edit-description">Image Description</Label>
        <RichTextEditor bind:content={editingItem.description} placeholder="Image description..." />
      </div>

    </div>
    <div class="flex justify-end gap-3 mt-6">
      <Button color="alternative" class="hover:text-black" onclick={() => showEditModal = false}>Cancel</Button>
      <Button color="alternative" class="text-white bg-[#0f2a92] hover:bg-[#0f2a92]/80 hover:text-white" onclick={handleUpdate}>Save Changes</Button>
    </div>
  </div>
</Modal>
