<script>
  import { 
    Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,
    Button, Modal, Label, Input, Select, Textarea, Tooltip, Fileupload, Helper} from "flowbite-svelte";
  import { PlusOutline, EditOutline, TrashBinOutline, SearchOutline } from "flowbite-svelte-icons";
  import { onMount } from 'svelte';
  
  import { supabase } from "$lib/supabaseClient";
  import { insertData, getData, updateData, deleteThumbnail, deleteData } from "$lib/newsQuery";

  import ShowToast from "../components/ShowToast.svelte";
  import RichTextEditor from "../components/RichTextEditor.svelte";

  import DataLoader from "../components/DataLoader.svelte";
  import UploadImage from "../components/UploadImage.svelte";

  let isLoading = $state(false);

  let toastRef = $state();

  let articles = $state([]);

  onMount(async () => {
    isLoading = true;
    const { data, error } = await getData();
    articles = data;
    console.log("Articles", articles);
    isLoading = false;
  });

  let searchTerm = $state("");
  let showModal = $state(false);
  let isEditing = $state(false);
  let isUploaded = $state(false);
  let currentArticle = $state({
    id: 0,
    date: "",
    category: "Academic",
    title: "",
    newsBody: "",
    thumbnail_url: null,
    previewUrl: null,
  });

  const categories = [
    { value: "Academic", name: "Academic" },
    { value: "Campus Life", name: "Campus Life" },
    { value: "Sports", name: "Sports" },
    { value: "General", name: "General" }
  ];

  function openAddModal() {
    isEditing = false;
    currentArticle = {
      id: articles.length + 1,
      date_posted: new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short' }),
      category: "Academic",
      title: "",
      body: "",
      thumbnail_url: null,
      previewUrl: null,
    };
    showModal = true;
  }

  function openEditModal(article) {
    isEditing = true;
    currentArticle = { ...article };
    showModal = true;
  }

  function saveArticle() {
    try {
      if (isEditing) {
        // articles = articles.map(a => a.id === currentArticle.id ? currentArticle : a);
        // console.log("Updating post", currentArticle.id);
        const { data, error } = updateData(currentArticle);
        // console.log("Update data",data,"Update error", error);

        if (error) {
          showModal = false;
          toastRef.add("Failed to update news", "red");
          return;
        }

        showModal = false;
        toastRef.add("Updated successfully", "green");
        return;
      }

      articles = [...articles, { ...currentArticle, id: Date.now() }];
      const { data, error } = insertData(currentArticle);
      // console.log("Insert data",data,"Insert error", error);

      if (error) {
        showModal = false;
        toastRef.add("Failed to create news post", "red");
        return;
      }

      showModal = false;
      toastRef.add("News post created successfully", "green");

    } catch (error) {
      console.log(error)
      toastRef.add("Failed to create news post", "red");
    }
  }

  async function deleteArticle(id) {
    try{
      if (confirm("Are you sure you want to delete this article?")) {
        const articleToDelete = articles.find(a => a.id === id);
        console.log("Deleting article:", articleToDelete);
        
        // Delete thumbnail if exists
        if (articleToDelete?.thumbnail_url) {
           console.log("Deleting thumbnail with URL:", articleToDelete.thumbnail_url);
           await deleteThumbnail(articleToDelete.thumbnail_url);
        }

        const { error } = await deleteData(id);
        
        if (error) {
           // console.log("Delete error", error);
           toastRef.add("Failed to delete news post", "red");
           return;
        }

        articles = articles.filter(a => a.id !== id);
        toastRef.add("News post deleted successfully", "green");
      }
    }catch (error) {
      console.log(error);
      toastRef.add("Failed to delete news post", "red");
    }
  }

  async function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      // currentArticle.thumbnail = file;

      console.log(file);
      const generateId = currentArticle.title.toLocaleLowerCase().replace(/\s/g, "-");
      
      
      if (currentArticle.thumbnail_url) {
        const response = await deleteThumbnail(currentArticle.thumbnail_url);

          console.log("Deleted previous data",response);
          currentArticle.thumbnail_url = "";
          currentArticle.previewUrl = "";
      }
      

      const filePath = `thumbnails/${generateId}-${file.name}`;

      const {data, error} = await supabase.storage.from('news_thumbnail').upload(filePath, file, { upsert: true });

      console.log("Uploaded data",data);
      console.log("Uploaded error",error);
      currentArticle.thumbnail_url = `https://ucyfuegykrqstmxnzlid.supabase.co/storage/v1/object/public/news_thumbnail/${data.path}`;
      currentArticle.previewUrl = `https://ucyfuegykrqstmxnzlid.supabase.co/storage/v1/object/public/news_thumbnail/${data.path}`;
      isUploaded = true;

      console.log(currentArticle.previewUrl);

    }
  }

  const filteredArticles = $derived(
    articles.filter(article => 
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.category.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
</script>

<ShowToast bind:this={toastRef} />

<div class="p-4 space-y-4">
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold text-slate-900">News Management</h1>
    </div>
    <Button onclick={openAddModal} color="alternative" class="flex bg-[#0f2a92] hover:bg-[#0f2a92]/80 text-white hover:text-white cursor-pointer items-center gap-2">
      <PlusOutline class="w-5 h-5" /> Add News
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

  <div class="bg-white rounded-lg shadow-sm overflow-hidden">
    <Table hoverable={true}>
      <TableHead class="bg-gray-50">
        <TableHeadCell>Date</TableHeadCell>
        <TableHeadCell>Category</TableHeadCell>
        <TableHeadCell>Title</TableHeadCell>
        <TableHeadCell>News Body</TableHeadCell>
        <TableHeadCell>Thumbnail</TableHeadCell>
        <TableHeadCell>Actions</TableHeadCell>
      </TableHead>
       <TableBody>
       {#if isLoading}
        <TableBodyRow>
          <TableBodyCell colspan="6">
            <div class="h-[500px] w-full flex items-center justify-center">
              <DataLoader />
            </div>
          </TableBodyCell>
        </TableBodyRow>

        {:else}
          {#each filteredArticles as article}
            <TableBodyRow>
              <TableBodyCell>{article.date_posted}</TableBodyCell>
              <TableBodyCell>
                <span class="px-2 py-1 text-xs font-semibold rounded-full bg-blue-100 text-blue-800">
                  {article.category}
                </span>
              </TableBodyCell>
              <TableBodyCell class="font-medium text-slate-900">{article.title}</TableBodyCell>
              <TableBodyCell class="max-w-xs truncate">{article.body}</TableBodyCell>
              <TableBodyCell class="max-w-xs truncate hover:text-blue-600 hover:underline cursor-pointer"><a href={article.thumbnail_url}>{article.thumbnail_url}</a></TableBodyCell>
              <TableBodyCell>
                <div class="flex items-center gap-2">
                  <button onclick={() => openEditModal(article)} class="text-blue-600 hover:text-blue-800">
                    <EditOutline class="w-5 h-5" />
                  </button>
                  <Tooltip>Edit Article</Tooltip>
                  <button onclick={() => deleteArticle(article.id)} class="text-red-600 hover:text-red-800">
                    <TrashBinOutline class="w-5 h-5" />
                  </button>
                  <Tooltip>Delete Article</Tooltip>
                </div>
              </TableBodyCell>
            </TableBodyRow>
          {/each}
        {/if}
        
        {#if !isLoading && filteredArticles.length === 0}
          <TableBodyRow>
            <TableBodyCell colspan="5" class="text-center py-8 text-slate-500">
              No news articles found matching your search.
            </TableBodyCell>
          </TableBodyRow>
        {/if}
      </TableBody>

    </Table>
  </div>
</div>

<Modal bind:open={showModal} size="md" autoclose={false} class="w-full">
  <div class="p-6 space-y-6">
    <h3 class="text-xl font-medium text-gray-900 dark:text-white">
      {isEditing ? 'Edit News Article' : 'Add News Article'}
    </h3>
    <div class="grid grid-cols-1 gap-6">

      <div class="space-y-2">
        <Label for="title">Title</Label>
        <Input id="title" placeholder="Article Title" class="focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0" bind:value={currentArticle.title} required />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <Label for="category">Category</Label>
          <Select id="category" items={categories} class="focus:ring-slate-500 focus:border-slate-500 focus:outline-none" bind:value={currentArticle.category} />
        </div>
        <div class="space-y-2">
          <Label for="date">Date</Label>
          <Input id="date" class="focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0" bind:value={currentArticle.date_posted} placeholder="e.g., 12 Oct" />
        </div>
      </div>

      <div class="space-y-2">
        <Label for="file-upload">Choose Thumbnail Image</Label>
        <Fileupload  onchange={handleFileChange} id="file-upload" />
        <Helper>PNG, JPG or GIF (MAX. 800x400px).</Helper>
        
        {#if currentArticle.thumbnail_url}
          <div class="mt-4 relative aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
            <img src={currentArticle.thumbnail_url} alt="Preview" class="w-full h-full object-cover" />
            <button 
              type="button"
              onclick={() => {
                currentArticle.thumbnail_url = null;
              }}
              class="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 shadow-sm"
            >
              <TrashBinOutline class="w-4 h-4" />
            </button>
            <!-- {#if currentArticle.thumbnail_url}
                <img src={currentArticle.thumbnail_url} alt="Thumbnail" class="w-24 h-24 object-cover" />
              {/if} -->
          </div>

        {:else if !currentArticle.thumbnail_url && isEditing}
          <div class="mt-4 relative aspect-video w-full rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
            <DataLoader />
          </div>
          {:else if !isUploaded}
          <div class="mt-4 relative aspect-video w-full rounded-lg overflow-hidden border border-gray-200 flex items-center justify-center">
            <UploadImage />
            <div class="absolute top-0 left-0 w-full h-full z-10 ">
              <Fileupload class="w-full aspect-video w-full opacity-0 h-full" onchange={handleFileChange} id="file-upload" />
            </div>
          </div>
        {/if}
      </div>

      <div class="space-y-2">
        <Label for="newsBody">News Body</Label>
        <RichTextEditor bind:content={currentArticle.body} placeholder="News body..." />
      </div>

    </div>
    <div class="flex justify-end gap-3">
      <Button color="alternative" class="hover:text-black" onclick={() => showModal = false}>Cancel</Button>
      <Button color="primary" class="hover:text-black bg-[#0f2a92] hover:bg-[#0f2a92]/80 hover:text-white" onclick={saveArticle}>
        {isEditing ? 'Update Article' : 'Save Article'}
      </Button>
    </div>
  </div>
</Modal>

