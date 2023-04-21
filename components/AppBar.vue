<template>
  <div class="fixed top-0 left-0 right-0 border-b border-white/20 bg-blur z-50">
    <nav class="container py-4 flex justify-between items-center">
      <NuxtLink :to="{name: 'index'}" class="text-white text-2xl font-bold">LinkSnip</NuxtLink>
      <ul class="flex items-center gap-6">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink :to="link.to" class="text-neutral-300 tracking-wide hover:text-neutral-50 cursor-pointer">{{ link.label }}</NuxtLink>
        </li>
      </ul>
      <div v-if="user" class="gap-4 flex">
        <button class="btn-secondary" @click="handleSignOut">Wyloguj się</button>
        <NuxtLink class="btn" to="/dashboard">Dashboard</NuxtLink>
      </div>
      <NuxtLink class="btn" v-if="!user" to="/login">Zaloguj się</NuxtLink>
    </nav>
  </div>
</template>

<script setup>
const user = useSupabaseUser();
const navLinks = ref([
  {
    to: '/',
    label: 'Strona głowna'
  },
  {
    to: '/',
    label: 'O nas'
  },
  {
    to: '/',
    label: 'Kontakt'
  }
])
const handleSignOut = async () => {
  const { auth } = useSupabaseAuthClient();
  try {
    await auth.signOut();
    navigateTo("/");
  } catch (error) {
    console.log(error);
  }
};
</script>