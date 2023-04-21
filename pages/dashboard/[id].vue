<template>
  <main class="container pt-28">
    <div class="flex items-center justify-between">
      <h1 class="text-5xl font-bold text-white truncate">linksnip.io/<span class="text-purple-600">{{data.link_key}}</span></h1>
      <button @click="handleRemoveLink" class="border border-red-600 bg-red-600/20 rounded-md py-2 px-4 text-white font-semibold text-sm hover:bg-red-600/40">Usuń</button>
    </div>
    <div class="flex mt-10 gap-4">
      <div class="card-bg p-4 text-center whitespace-nowrap">
        <h3 class="font-semibold text-white text-3xl">{{ parseDate.day }}</h3>
        <p class="text-neutral-300 mt-2">{{ parseDate.month }} {{ parseDate.year }}</p>
      </div>
      <div class="card-bg p-4 w-4/5">
        <h3 class="font-semibold text-white text-3xl truncate w-full">{{data.redirect_to}}</h3>
        <p class="text-neutral-300 mt-2">Przekierowywanie</p>
      </div>
    </div>
  </main>
  <div class="absolute w-[700px] h-96 rounded-full bg-purple-500/40 blur-[250px] -z-10 top-4"></div>
</template>

<script setup>
const client = useSupabaseClient()
const route = useRoute()
const router = useRouter()

const { data, error } = await client
  .from('links')
  .select('*')
  .eq('id', route.params.id)
  .single()

const parseDate = computed(() => {
  const months = [
    "Styczeń",
    "Luty",
    "Marzec",
    "Kwiecień",
    "Maj",
    "Czerwiec",
    "Lipiec",
    "Sierpień",
    "Wrzesień",
    "Październik",
    "Listopad",
    "Grudzień"
  ];

  const dateObj = new Date(data.created_at);
  const year = dateObj.getFullYear();
  const month = months[dateObj.getMonth()];
  const day = dateObj.getDate();
  return { year, month, day };
})

const handleRemoveLink = async () => {
  const { data, error } = await client
    .from('links')
    .delete()
    .eq('id', route.params.id)
  if (error) {
    console.log(error)
  }
  if (!error) {
    router.push('/dashboard')
  }
}
</script>

<style scoped>

</style>