<template>
  <main class="w-full h-screen flex items-center justify-center">
    <div class="card bg-neutral-900/40 max-w-lg py-14 px-9 w-full rounded-2xl border border-neutral-600">
      <slot/>
    </div>
  </main>
</template>

<script>
export default {
  name: "auth"
}
</script>

<style scoped>
.card::before {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 20%;
  height: 40%;
  background: #9333EA;
  backdrop-filter: blur(60px);
  filter: blur(222px);
  z-index: -2;
}
</style>