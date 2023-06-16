<template>
  <div class="bg-blur fixed left-0 right-0 top-0 z-50 border-b border-white/20">
    <nav class="container flex items-center justify-between py-4">
      <NuxtLink :to="{ name: 'index' }" class="text-2xl font-bold text-white"
        >LinkSnip</NuxtLink
      >
      <ul class="flex items-center gap-6">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="cursor-pointer tracking-wide text-neutral-300 hover:text-neutral-50"
            >{{ link.label }}</NuxtLink
          >
        </li>
      </ul>
      <div v-if="user" class="flex gap-4">
        <button class="btn-secondary" @click="handleSignOut">
          {{ $t('signOut') }}
        </button>
        <NuxtLink class="btn" to="/dashboard">Dashboard</NuxtLink>
      </div>
      <NuxtLink class="btn" v-if="!user" to="/login">{{
        $t('signIn')
      }}</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
// small change
const user = useSupabaseUser()
const navLinks = ref([
  {
    to: '/',
    label: 'Strona głowna',
  },
  {
    to: '/',
    label: 'O nas',
  },
  {
    to: '/',
    label: 'Kontakt',
  },
])
const handleSignOut = async () => {
  const { auth } = useSupabaseAuthClient()
  try {
    await auth.signOut()
    navigateTo('/')
  } catch (error) {
    console.log(error)
  }
}
</script>
