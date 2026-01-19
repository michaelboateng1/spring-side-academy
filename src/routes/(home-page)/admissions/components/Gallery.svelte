<section id="gallery" class="bg-white">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div class="mb-8">
            <h3 class="text-2xl md:text-3xl font-bold tracking-tight text-slate-900">A glimpse into campus life</h3>
            <p class="mt-3 max-w-3xl text-slate-600">Explore our classrooms, collaborative spaces, and vibrant student life.</p>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            <div class="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 cursor-pointer" onclick={() => openLightbox(0)}>
                <img src={img1} alt="Students collaborating" loading="lazy" class="h-64 w-full object-cover transition duration-300 ease-out group-hover:scale-105" />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div class="pointer-events-none absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow">Collaborative learning</div>
            </div>
            <div class="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 cursor-pointer" onclick={() => openLightbox(3)}>
                <img src={img4} alt="Library and reading time" loading="lazy" class="h-64 w-full object-cover transition duration-300 ease-out group-hover:scale-105" />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div class="pointer-events-none absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow">Student life</div>
            </div>
            <div class="group relative overflow-hidden rounded-2xl ring-1 ring-slate-200 cursor-pointer" onclick={() => openLightbox(gallery.length - 1)}>
                <img src={classrm} alt="Modern classroom environment" loading="lazy" class="h-64 w-full object-cover transition duration-300 ease-out group-hover:scale-105" />
                <div class="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div class="pointer-events-none absolute bottom-3 left-3 text-white text-sm font-semibold drop-shadow">Classroom</div>
            </div>
        </div>
        <div class="columns-1 sm:columns-2 lg:columns-3 gap-4 [column-fill:_balance]">
            {#each gallery as img, i}
                <figure class="group mb-4 break-inside-avoid overflow-hidden rounded-2xl ring-1 ring-slate-200 shadow-sm cursor-zoom-in" onclick={() => openLightbox(i)}>
                    <img src={img} alt={`Campus life photo ${i + 1}`} loading="lazy" class="h-auto w-full object-cover transition duration-300 ease-out group-hover:scale-[1.03]" />
                </figure>
            {/each}
        </div>
        {#if lightboxOpen}
            <div class="fixed inset-0 z-40 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm" role="dialog" aria-modal="true" onclick={(e) => e.target === e.currentTarget && closeLightbox()}>
                <button class="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20" onclick={closeLightbox} aria-label="Close">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
                </button>
                <button class="absolute left-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20" onclick={prevImage} aria-label="Previous">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
                </button>
                <img src={gallery[activeIndex]} alt={`Campus life photo ${activeIndex + 1}`} class="max-h-[80vh] w-auto max-w-full rounded-2xl shadow-2xl ring-1 ring-white/20" />
                <button class="absolute right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white ring-1 ring-white/30 hover:bg-white/20" onclick={nextImage} aria-label="Next">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 18l6-6-6-6"/></svg>
                </button>
            </div>
        {/if}
    </div>
</section>