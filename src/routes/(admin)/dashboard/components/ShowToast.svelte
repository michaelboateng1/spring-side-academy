<script>
  import { Toast, ToastContainer } from "flowbite-svelte";
  import { fly } from "svelte/transition";
  import { onDestroy } from "svelte";

  let toasts = $state([]);
  let nextId = $state(1);

  const messages = {
    green: "Successfully saved!",
    blue: "Information updated",
    yellow: "Warning: Check details",
    red: "Action failed"
  };

  
  export function add(message, color = "green") {
    const id = nextId++;
    const newToast = {
      id,
      message: message || messages[color] || "Notification",
      color: color,
      visible: true
    };

    const timeoutId = setTimeout(() => {
      dismissToast(newToast.id);
    }, 5000);
    newToast.timeoutId = timeoutId;

    toasts = [...toasts, newToast];
  }

  function dismissToast(id) {
    const toast = toasts.find((t) => t.id === id);
    if (toast?.timeoutId) {
      clearTimeout(toast.timeoutId);
    }

    toasts = toasts.map((t) => (t.id === id ? { ...t, visible: false } : t));

    setTimeout(() => {
      toasts = toasts.filter((t) => t.id !== id);
    }, 300);
  }

  function handleClose(id) {
    return () => {
      dismissToast(id);
    };
  }

  onDestroy(() => {
    toasts.forEach((toast) => {
      if (toast.timeoutId) {
        clearTimeout(toast.timeoutId);
      }
    });
  });
</script>

<ToastContainer position="top-right" class="z-[10000]">
  {#each toasts as toast (toast.id)}
    <Toast 
      color={toast.color} 
      dismissable={true} 
      transition={fly} 
      params={{ x: 200, duration: 300 }} 
      class="w-72 shadow-xl border border-gray-100" 
      onclose={handleClose(toast.id)} 
      bind:toastStatus={toast.visible}
    >
      {toast.message}
    </Toast>
  {/each}
</ToastContainer>