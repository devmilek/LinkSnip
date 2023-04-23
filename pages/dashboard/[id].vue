<template>
  <main class="container pt-28">
    <div class="flex items-center justify-between">
      <h1 class="truncate text-5xl font-bold text-white">
        linksnip.io/<span class="text-purple-600">{{ data.link_key }}</span>
      </h1>
      <button
        @click="handleRemoveLink"
        class="rounded-md border border-red-600 bg-red-600/20 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600/40"
      >
        Usuń
      </button>
    </div>
    <div class="mt-10 flex gap-4">
      <div class="card-bg whitespace-nowrap p-4 text-center">
        <h3 class="text-3xl font-semibold text-white">{{ parseDate.day }}</h3>
        <p class="mt-2 text-neutral-300">
          {{ parseDate.month }} {{ parseDate.year }}
        </p>
      </div>
      <div class="card-bg w-4/5 p-4">
        <h3 class="w-full truncate text-3xl font-semibold text-white">
          {{ data.redirect_to }}
        </h3>
        <p class="mt-2 text-neutral-300">Przekierowywanie</p>
      </div>
    </div>
  </main>
  <div
    class="absolute top-4 -z-10 h-96 w-[700px] rounded-full bg-purple-500/40 blur-[250px]"
  ></div>
</template>

<script setup>
const client = useSupabaseClient()
const route = useRoute()
const router = useRouter()

useHead({
  title: 'Zarządzanie linkiem - LinkSnip',
})

const { data, error } = await client
  .from('links')
  .select('*')
  .eq('id', route.params.id)
  .single()

const parseDate = computed(() => {
  const months = [
    'Styczeń',
    'Luty',
    'Marzec',
    'Kwiecień',
    'Maj',
    'Czerwiec',
    'Lipiec',
    'Sierpień',
    'Wrzesień',
    'Październik',
    'Listopad',
    'Grudzień',
  ]

  const dateObj = new Date(data.created_at)
  const year = dateObj.getFullYear()
  const month = months[dateObj.getMonth()]
  const day = dateObj.getDate()
  return { year, month, day }
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

<style scoped></style>
