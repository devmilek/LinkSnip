<template>
  <NuxtLink :to="'dashboard/' + props.link.id" class="px-5 py-4 rounded-lg bg-neutral-900/40 border-neutral-700 border mt-6 backdrop-blur-lg flex items-center">
    <div class="w-full">
      <h2 class="font-semibold text-2xl text-white hover:underline">{{ config.public.appUrl }}/<span class="text-purple-500">{{ props.link.link_key }}</span></h2>
      <p class="truncate mt-2 text-neutral-500">{{props.link.redirect_to}}</p>
    </div>
    <button class="ml-4 font-semibold text-sm rounded-md bg-purple-600 px-3.5 py-2.5 text-white whitespace-nowrap hover:bg-purple-700 transition-all" @click.prevent="handleCopy">Kopiuj link</button>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link: {
    type: Object,
    required: true
  }
})

const config = useRuntimeConfig()
const isCopied = ref(false);

const handleCopy = (e) => {
  if (!navigator.clipboard) {
    return;
  }

  navigator.clipboard?.writeText(`${config.public.appUrl}/${props.link.link_key}`);
  isCopied.value = true;
  setTimeout(() => {
    isCopied.value = false;
  }, 2000);
};
</script>

<style scoped>

</style>