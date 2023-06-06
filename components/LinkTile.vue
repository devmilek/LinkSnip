<template>
  <NuxtLink
    :to="'dashboard/' + props.link.id"
    class="mt-6 flex items-center rounded-lg border border-neutral-700 bg-neutral-900/40 px-5 py-4 backdrop-blur-lg"
  >
    <div class="w-full">
      <h2 class="text-2xl font-semibold text-white hover:underline">
        {{ config.public.appUrl }}/<span class="text-purple-500">{{
          props.link.link_key
        }}</span>
      </h2>
      <p class="mt-2 truncate text-neutral-500">{{ props.link.redirect_to }}</p>
    </div>
    <div class="flex">
      <button
        class="ml-4 whitespace-nowrap rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-purple-700"
        @click.prevent="handleCopy"
      >
        Kopiuj link
      </button>
      <button
        class="ml-4 whitespace-nowrap rounded-md border border-white/20 bg-transparent px-3.5 py-2.5 text-sm font-semibold text-white transition-all hover:bg-gray-800"
        @click.prevent="handleCopy"
      >
        Ustawienia
      </button>
    </div>
  </NuxtLink>
</template>

<script setup>
const props = defineProps({
  link: {
    type: Object,
    required: true,
  },
})

const config = useRuntimeConfig()
const isCopied = ref(false)

const handleCopy = (e) => {
  if (!navigator.clipboard) {
    return
  }

  navigator.clipboard?.writeText(
    `${config.public.appUrl}/${props.link.link_key}`
  )
  isCopied.value = true
  setTimeout(() => {
    isCopied.value = false
  }, 2000)
}
</script>

<style scoped></style>
