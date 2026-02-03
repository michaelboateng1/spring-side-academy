<script lang="ts">
  import { onMount } from 'svelte';
  import { Card, Button } from "flowbite-svelte";
  import { ChartPieOutline, GridSolid, MailBoxSolid, UserSolid, ArrowRightOutline } from "flowbite-svelte-icons";
  import { supabase } from '$lib/supabaseClient';
  import { getStat } from '$lib/galleryQuery';

  let newsCount: number | null = null;
  let eventsCount: number | null = null;
  let galleryCount: number | null = null;

  async function fetchCounts() {
    try {
      const { count: nCount } = await supabase
        .from('news-table')
        .select('*', { count: 'exact', head: true });

      newsCount = nCount ?? 0;

      const { count: eCount } = await supabase
        .from('events_table')
        .select('*', { count: 'exact', head: true });

      eventsCount = eCount ?? 0;

      const { count: gCount, error } = await getStat();
      if (error) {
        console.error('Failed to fetch gallery count:', error);
        galleryCount = 0;
      } else {
        galleryCount = gCount ?? 0;
      }
    } catch (err) {
      console.error('Failed to load dashboard counts', err);
      newsCount = newsCount ?? 0;
      eventsCount = eventsCount ?? 0;
      galleryCount = galleryCount ?? 0;
    }
  }

  onMount(() => {
    fetchCounts();
  });
</script>

<div class="p-6  h-full space-y-8">
  <div class="flex flex-col gap-2">
    <h1 class="text-3xl font-extrabold text-slate-900 tracking-tight poppins-regular">Dashboard User</h1>
  </div>


  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    <Card class="flex flex-col rounded-none justify-between drop-shadow-md transition-shadow border-b-4 border-b-blue-600">
      <div class="flex items-center gap-4">
        <div class="p-3 text-blue-600">
          <MailBoxSolid class="w-8 h-8" />
        </div>
        <p class="text-sm font-medium text-slate-500 uppercase tracking-wider">News Articles</p>
      </div>
      <div class="flex justify-center items-center w-full h-full">
        <h3 class="text-4xl lg:text-6xl font-bold text-slate-900">{newsCount ?? '—'}</h3>
      </div>
      <div class="mt-6 pt-6">
        <Button size="sm" color="alternative" href="/dashboard/news" class="w-full rounded-none hover:text-blue-600 flex justify-between items-center group">
          Manage News <ArrowRightOutline class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>

    <Card class="flex flex-col rounded-none justify-between drop-shadow-md transition-shadow border-b-4 border-b-green-600">
      <div class="flex items-center gap-4">
        <div class="p-3 text-green-600">
          <GridSolid class="w-8 h-8" />
        </div>
        <p class="text-sm font-medium text-slate-500 uppercase tracking-wider">Upcoming Events</p>
      </div>
      <div class="flex justify-center items-center w-full h-full">
        <h3 class="text-4xl lg:text-6xl font-bold text-slate-900">{eventsCount ?? '—'}</h3>
      </div>
      <div class="mt-6 pt-6">
        <Button size="sm" color="alternative" href="/dashboard/events" class="w-full rounded-none hover:text-green-600 flex justify-between items-center group">
          Manage Events <ArrowRightOutline class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>

    <Card class="flex flex-col rounded-none justify-between drop-shadow-md transition-shadow border-b-4 border-b-slate-600">
      <div class="flex items-center gap-4">
        <div class="p-3 text-slate-600">
          <UserSolid class="w-8 h-8" />
        </div>
        <p class="text-sm font-medium text-slate-500 uppercase tracking-wider">Gallery Posts</p>
      </div>
      <div class="flex justify-center items-center w-full h-full">
        <h3 class="text-4xl lg:text-6xl font-bold text-slate-900">{galleryCount ?? '—'}</h3>
      </div>
      <div class="mt-6 pt-6">
        <Button size="sm" color="alternative" href="/dashboard/gallery" class="w-full rounded-none hover:text-slate-600 flex justify-between items-center group">
          Manage Gallery <ArrowRightOutline class="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Button>
      </div>
    </Card>
  </div>

  <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
    <Card size="xl" class="min-h-[300px] flex flex-col items-center justify-center text-center space-y-4 bg-slate-50 border-dashed">
      <ChartPieOutline class="w-16 h-16 text-slate-300" />
      <div>
        <h4 class="text-lg font-bold text-slate-900">Analytics Coming Soon</h4>
        <p class="text-slate-500 max-w-sm">Detailed insights on post engagement and visitor statistics will be available in the next update.</p>
      </div>
    </Card>

    <div class="space-y-4">
      <h3 class="text-xl font-bold text-slate-900">Recent Activity</h3>
      <div class="bg-white rounded-xl border border-slate-100 shadow-sm p-4 space-y-6">
        <div class="flex gap-4">
          <div class="w-2 h-2 mt-2 rounded-full bg-blue-600 shrink-0"></div>
          <div>
            <p class="text-sm font-medium text-slate-900">New article published</p>
            <p class="text-xs text-slate-500">2 hours ago • Academic</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-2 h-2 mt-2 rounded-full bg-purple-600 shrink-0"></div>
          <div>
            <p class="text-sm font-medium text-slate-900">Event "Science Fair" updated</p>
            <p class="text-xs text-slate-500">5 hours ago • Events</p>
          </div>
        </div>
        <div class="flex gap-4">
          <div class="w-2 h-2 mt-2 rounded-full bg-pink-600 shrink-0"></div>
          <div>
            <p class="text-sm font-medium text-slate-900">5 new photos uploaded to Gallery</p>
            <p class="text-xs text-slate-500">Yesterday • Gallery</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


<style>
  :global(*, body){
    font-family: 'Poppins', sans-serif;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    font-variation-settings: 'wdth' 100;
  }
</style>