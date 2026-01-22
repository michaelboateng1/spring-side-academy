<script lang="ts">
  import { Sidebar, SidebarGroup, SidebarItem, SidebarButton, uiHelpers } from "flowbite-svelte";
  import { ChartOutline, GridSolid, UserSolid, ImageOutline, NewspaperOutline } from "flowbite-svelte-icons";
  import { page } from "$app/state";
  let activeUrl = $state(page.url.pathname);
  // import PlusPlaceholder from "$utils/PlusPlaceholder.svelte";
  const spanClass = "flex-1 ms-3 whitespace-nowrap";
  const demoSidebarUi = uiHelpers();
  let isDemoOpen = $state(false);
  const closeDemoSidebar = demoSidebarUi.close;
  $effect(() => {
    isDemoOpen = demoSidebarUi.isOpen;
    activeUrl = page.url.pathname;
  });
  let { children } = $props();

  import {supabase} from "$lib/supabaseClient";
  import {goto} from "$app/navigation";

  const logOut = async () => {
    console.log("User log out")
    await supabase.auth.signOut();
    goto("/dashboard-login")
  }

</script>

<SidebarButton onclick={demoSidebarUi.toggle} class="mb-2" />
<div class="relative h-screen">
  <Sidebar
    {activeUrl}
    backdrop={false}
    isOpen={isDemoOpen}
    closeSidebar={closeDemoSidebar}
    params={{ x: -50, duration: 50 }}
    class="z-50 bg-[#0f2a92] h-full"
    position="absolute"
    divClass="bg-[#0f2a92] text-white p-0"
    activeClass="bg-[#0b1f6b] hover:bg-[#132fa3] text-white"
    nonActiveClass="hover:bg-[#132fa3] text-white"
    
  >
    <SidebarGroup class="bg-[#0f2a92]">
      <a href="/dashboard">
        <div class=" flex mb-5 poppins-semibold items-center px-2 py-3 justify-around text-[#0f2a92] bg-slate-200">
          <ChartOutline class="h-5 w-5 lg:h-7 lg:w-7 shrink-0" />
          <h1 class="text-2xl lg:text-3xl poppins-semibold rounded-0 tracking-tight">Dashboard</h1>
        </div>
      </a>
      <SidebarItem label="Events" {spanClass} href="/dashboard/events">
        {#snippet icon()}
          <GridSolid class="h-5 w-5 lg:h-6 lg:w-6 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="News" {spanClass} href="/dashboard/news">
        {#snippet icon()}
          <NewspaperOutline class="h-5 w-5 lg:h-6 lg:w-6 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem label="Gallery" href="/dashboard/gallery">
        {#snippet icon()}
          <ImageOutline class="h-5 w-5 lg:h-6 lg:w-6 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
      <SidebarItem onclick={() => logOut()} class="cursor-pointer" label="Logout">
        {#snippet icon()}
          <UserSolid class="h-5 w-5 lg:h-6 lg:w-6 text-white transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        {/snippet}
      </SidebarItem>
    </SidebarGroup>

  </Sidebar>
  <div class="h-screen overflow-y-auto px-4 md:ml-64">

    {@render children?.()}
  </div>
</div>
