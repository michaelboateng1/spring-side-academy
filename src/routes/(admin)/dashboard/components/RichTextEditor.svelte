<script>
  import { onMount, onDestroy } from 'svelte';
  import 'quill/dist/quill.snow.css';

  let { content = $bindable(), placeholder = "Write something..." } = $props();

  let editorElement;
  let quill;

  onMount(async () => {
    const Quill = (await import('quill')).default;
    quill = new Quill(editorElement, {
      modules: {
        toolbar: [
          [{ header: [1, 2, 3, false] }],
          ['bold', 'italic', 'underline', 'strike'],
          [{ list: 'ordered' }, { list: 'bullet' }],
          ['image','link', 'clean'],
        ]
      },
      placeholder,
      theme: 'snow'
    });

    if (content) {
      quill.root.innerHTML = content;
    }

    quill.on('text-change', () => {
      content = quill.root.innerHTML === '<p><br></p>' ? '' : quill.root.innerHTML;
    });
  });

  $effect(() => {
    if (quill && content !== quill.root.innerHTML) {
      // Avoid infinite loop if content is updated from parent
      const selection = quill.getSelection();
      quill.root.innerHTML = content || '';
      if (selection) {
        quill.setSelection(selection);
      }
    }
  });

  onDestroy(() => {
    if (quill) {
      // Quill doesn't have a formal destroy method but we can clear refs
      quill = null;
    }
  });
</script>

<div class="rich-text-editor-container bg-white rounded-md overflow-hidden border border-gray-300 focus-within:ring-2 focus-within:ring-slate-500 focus-within:border-transparent transition-all">
  <div bind:this={editorElement}></div>
</div>

<style>
  :global(.ql-toolbar.ql-snow) {
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 1px solid #e5e7eb;
    background-color: #f9fafb;
    border-radius: 6px 6px 0 0;
  }
  :global(.ql-container.ql-snow) {
    border: none;
    font-family: inherit;
    font-size: 0.875rem;
    min-height: 150px;
  }
  .rich-text-editor-container {
    min-height: 200px;
  }
</style>
