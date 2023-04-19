<template>
  <div class="fixed top-0 left-0 right-0 border-b border-white/20 bg-blur">
    <nav class="container py-4 flex justify-between items-center">
      <NuxtLink :to="{name: 'index'}" class="text-white text-2xl font-bold">LinkSnip</NuxtLink>
      <ul class="flex items-center gap-4">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink :to="link.to">{{ link.label }}</NuxtLink>
        </li>
        <li>
          <NuxtLink class="btn btn-primary">Sign In</NuxtLink>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const navLinks = ref([
  {
    to: '/',
    label: 'Home'
  },
  {
    to: '/about',
    label: 'About'
  },
  {
    to: '/contact',
    label: 'Contact'
  }
])
</script>