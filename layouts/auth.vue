<template>
  <main class="flex h-screen w-full items-center justify-center">
    <div
      class="card w-full max-w-lg rounded-2xl border border-neutral-600 bg-neutral-900/40 px-9 py-14"
    >
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  name: 'auth',
}
</script>

<style scoped>
.card::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 40%;
  background: #9333ea;
  backdrop-filter: blur(60px);
  filter: blur(222px);
  z-index: -2;
}
</style>
