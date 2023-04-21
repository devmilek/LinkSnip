<template>
  <main class="container pt-28">
    <h1 class="text-5xl font-bold text-white">Twoje linki</h1>
    <div class="flex gap-4 items-center px-5 py-4 rounded-lg bg-neutral-900/40 border-neutral-700 border mt-10 backdrop-blur-lg">
      <input type="text" class="input" placeholder="Wpisz długi link" v-model="longLink">
      <input type="text" class="input" placeholder="Wpisz klucz" v-model="linkKey">
      <button @click="handleCreateLink" class="font-semibold text-sm rounded-md bg-purple-600 px-3.5 py-2.5 text-white whitespace-nowrap hover:bg-purple-700 transition-all">Skróć link</button>
    </div>
    <div>
      <LinkTile :link="link" v-for="link in links" :key="link.id"/>
    </div>
  </main>
  <div class="absolute w-[700px] h-96 rounded-full bg-purple-500/40 blur-[250px] -z-10 top-4"></div>
</template>

<script setup>
import LinkTile from "~/components/LinkTile.vue";

definePageMeta({
  middleware: "auth"
})

const client = useSupabaseClient()
const user = useSupabaseUser();

const longLink = ref('')
const linkKey = ref('')

const links = ref(null)

const handleCreateLink = async () => {
  const { data, error } = await client
    .from('links')
    .insert([
      {
        redirect_to: longLink.value,
        link_key: linkKey.value,
        author_id: user.value.id
      }
    ])
  if (error) {
    console.log(error)
  }
  if (!error) {
    longLink.value = ''
    linkKey.value = ''
    await getLinks()
  }
}

const getLinks = async () => {
  const { data, error } = await client
    .from('links')
    .select('*')
    .eq('author_id', user.value.id)
  if (error) {
    console.log(error)
  }
  if (data) {
    links.value = data
  }
}

onMounted(() => {
  getLinks()
})
</script>

<style scoped>
</style>