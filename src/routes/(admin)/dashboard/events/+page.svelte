<script>
  import { 
    Table, TableBody, TableBodyCell, TableBodyRow, TableHead, TableHeadCell,
    Button, Modal, Label, Input, Textarea, Tooltip, Fileupload, Helper 
  } from "flowbite-svelte";
  import { PlusOutline, EditOutline, TrashBinOutline, SearchOutline, MapPinSolid } from "flowbite-svelte-icons";

  import RichTextEditor from "../components/RichTextEditor.svelte";
  import ShowToast from "../components/ShowToast.svelte";

  import { onMount } from "svelte";
  import { goto } from "$app/navigation";
  import {supabase} from "$lib/supabaseClient"
  import { getData, insertData, updateData, deleteData, deleteThumbnail } from "$lib/eventsQuery";

  let toastRef = $state();

  // let events = $state([
  //   {
  //     id: 1,
  //     date: '20 Oct 2026',
  //     title: 'Annual Sports Day',
  //     location: 'School Main Ground',
  //     description: 'A day of athletics and sportsmanship for all students.'
  //   },
  //   {
  //     id: 2,
  //     date: '15 Nov 2026',
  //     title: 'Science & Art Exhibition',
  //     location: 'Assembly Hall',
  //     description: 'Showcasing the creative and scientific achievements of our students.'
  //   }
  // ]);

  let events = $state([]);

  async function getAllEvents() {
    const { data, error } = await getData();
    if (data) {
      events = data;
      goto("/dashboard/events");
    }
  }

  onMount(async () => {
    getAllEvents();
    console.log("Events Data: ", events);
  });

  let searchTerm = $state("");
  let showModal = $state(false);
  let isEditing = $state(false);
  let currentEvent = $state({
    date: "",
    title: "",
    location: "",
    description: "",
    thumbnail_url: "",
    previewUrl: ""
  });

  function openAddModal() {
    isEditing = false;
    currentEvent = {
      date: "",
      title: "",
      location: "",
      description: "",
      thumbnail_url: "",
      previewUrl: ""
    };
    showModal = true;
  }

  function openEditModal(event) {
    isEditing = true;
    currentEvent = { ...event };
    showModal = true;
  }

 async function saveEvent() {
    try{
      if (isEditing) {
        // events = events.map(e => e.id === currentEvent.id ? currentEvent : e);
        const {data, error} = updateData(currentEvent);
        events = data;
        getAllEvents();
      } else {
        const {data, error} = await insertData(currentEvent);
        getAllEvents();
        // events = [...events, { ...currentEvent }];
      }
    }catch(error){
      toastRef.add("Failed to save event", "red");
    }
    showModal = false;
    toastRef.add("Event saved successfully", "green");
  }

  async function deleteEvent(event) {
    try {
      if (confirm("Are you sure you want to delete this event?")) {
        // events = events.filter(e => e.id !== id);
        const {data, error} = await deleteThumbnail(event.thumbnail_url);
        console.log("Deleting thumbnail", data);
        console.log("Deleting thumbnail error", error);
        const {data:data2, error:error2} = await deleteData(event.id);
        getAllEvents();
        toastRef.add("Event deleted successfully", "green");
      }
    } catch (error) {
      toastRef.add("Failed to delete event", "red");
    }
  }

async function handleFileChange(e) {
    const file = e.target.files[0];
    if (file) {
      // currentEvent.thumbnail = file;

      console.log(file);
      const generateId = currentEvent?.event_title?.toLocaleLowerCase().replace(/\s/g, "-");
      console.log("SPECIAL LOG: ", currentEvent);
      
      
    if (currentEvent.thumbnail_url) {
        const {data, error} = await deleteThumbnail(currentEvent.thumbnail_url);

          console.log("Deleted previous data",data);
          currentEvent.thumbnail_url = "";
          currentEvent.previewUrl = "";
      }
      

      const filePath = `thumbnails/${generateId}-${file.name}`;

      const {data, error} = await supabase.storage.from('events_thumbnail').upload(filePath, file, { upsert: true });

      console.log("Uploaded data",data);
      console.log("Uploaded error",error);
      currentEvent.thumbnail_url = `https://ucyfuegykrqstmxnzlid.supabase.co/storage/v1/object/public/events_thumbnail/${data.path}`;
      currentEvent.previewUrl = `https://ucyfuegykrqstmxnzlid.supabase.co/storage/v1/object/public/events_thumbnail/${data.path}`;
      // isUploaded = true;

      console.log(currentEvent.previewUrl);

    }
  }

  const filteredEvents = $derived(
    events.filter(event => 
      event.event_title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event.location.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );
</script>

<ShowToast bind:this={toastRef} />

<div class="p-4 space-y-4">
  <div class="flex justify-between items-center">
    <div>
      <h1 class="text-2xl font-bold text-slate-900">Events Management</h1>
    </div>
    <Button onclick={openAddModal} color="alternative" class="flex bg-[#0f2a92] hover:bg-[#0f2a92]/80 text-white hover:text-white cursor-pointer items-center gap-2">
      <PlusOutline class="w-5 h-5" /> Add Event
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
        <TableHeadCell>Event Title</TableHeadCell>
        <TableHeadCell>Location</TableHeadCell>
        <TableHeadCell>Description</TableHeadCell>
        <TableHeadCell>Thumbnail</TableHeadCell>
        <TableHeadCell>Actions</TableHeadCell>
      </TableHead>
      <TableBody>
        {#each filteredEvents as event}
          <TableBodyRow>
            <TableBodyCell>{event.event_date}</TableBodyCell>
            <TableBodyCell class="font-medium text-slate-900">{event.event_title}</TableBodyCell>
            <TableBodyCell>
              <div class="flex items-center gap-1 text-slate-600">
                <MapPinSolid class="w-4 h-4" />
                {event.location}
              </div>
            </TableBodyCell>
            <TableBodyCell class="max-w-xs truncate">{event.description}</TableBodyCell>
            <TableBodyCell class="max-w-xs truncate hover:text-blue-600 hover:underline cursor-pointer">
              <a href={event.thumbnail_url} target="_blank">{event.thumbnail_url}</a>
              <!-- {#if event.previewUrl}
                <img src={event.previewUrl} alt="Thumbnail" class="w-24 h-24 object-cover" />
              {/if} -->
            </TableBodyCell>
            <TableBodyCell>
              <div class="flex items-center gap-2">
                <button onclick={() => openEditModal(event)} class="text-blue-600 hover:text-blue-800">
                  <EditOutline class="w-5 h-5" />
                </button>
                <Tooltip>Edit Event</Tooltip>
                <button onclick={() => deleteEvent(event)} class="text-red-600 hover:text-red-800">
                  <TrashBinOutline class="w-5 h-5" />
                </button>
                <Tooltip>Delete Event</Tooltip>
              </div>
            </TableBodyCell>
          </TableBodyRow>
        {/each}
        {#if filteredEvents.length === 0}
          <TableBodyRow>
            <TableBodyCell colspan="5" class="text-center py-8 text-slate-500">
              No events found matching your search.
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
      {isEditing ? 'Edit Event' : 'Add New Event'}
    </h3>
    <div class="grid grid-cols-1 gap-6">

      <div class="space-y-2">
        <Label for="title">Event Title</Label>
        <Input id="title" class="focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0" placeholder="Event Title" bind:value={currentEvent.title} required />
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div class="space-y-2">
          <Label for="date">Date</Label>
          <Input id="date" type="text" class="focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0" placeholder="e.g., 20 Oct 2026" bind:value={currentEvent.date} required />
        </div>
        <div class="space-y-2">
          <Label for="location">Location</Label>
          <Input id="location" class="focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-0" placeholder="e.g., Assembly Hall" bind:value={currentEvent.location} required />
        </div>
      </div>

      <div class="space-y-2">
        <Label for="file-upload">Choose Thumbnail Image</Label>
        <Fileupload  onchange={handleFileChange} id="file-upload" />
        <Helper>PNG, JPG or GIF (MAX. 800x400px).</Helper>
        
        {#if currentEvent.thumbnail_url}
          <div class="mt-4 relative aspect-video w-full rounded-lg overflow-hidden border border-gray-200">
            <img src={currentEvent.thumbnail_url} alt="Preview" class="w-full h-full object-cover" />
            <button 
              type="button"
              onclick={() => {
                currentEvent.file = null;
                currentEvent.thumbnail_url = null;
              }}
              class="absolute top-2 right-2 p-1.5 bg-red-600 text-white rounded-md hover:bg-red-700 shadow-sm"
            >
              <TrashBinOutline class="w-4 h-4" />
            </button>
              {#if currentEvent && currentEvent.thumbnail_url}
                <img src={currentEvent.thumbnail_url} alt="Thumbnail" class="w-24 h-24 object-cover" />
              {/if}
          </div>
        {/if}
      </div>

      <div class="space-y-2">
        <Label for="description">Event Body</Label>
        <RichTextEditor bind:content={currentEvent.description} placeholder="Event description..." />
      </div>

    </div>

    <div class="flex justify-end gap-3">
      <Button color="alternative" class="hover:text-black" onclick={() => showModal = false}>Cancel</Button>
      <Button color="alternative" class="text-white bg-[#0f2a92] hover:bg-[#0f2a92]/80 hover:text-white" onclick={saveEvent}>
        {isEditing ? 'Update Event' : 'Save Event'}
      </Button>
    </div>

  </div>
</Modal>
