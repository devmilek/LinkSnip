<template>
  <div class="relative isolate px-6 pt-14 lg:px-8">
    <div
      class="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-purple-800 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>

    <!--  CONTENT  -->
    <div class="mx-auto max-w-3xl py-32 sm:py-48 lg:py-56">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
        <div
          class="relative rounded-full px-3 py-1 text-sm leading-6 text-gray-400 ring-1 ring-gray-50/10 hover:ring-gray-50/20"
        >
          Wersja v1.1 nadchodzi
          <a href="#" class="font-semibold text-purple-600"
            ><span class="absolute inset-0" aria-hidden="true"></span>Zobacz
            więcej <span aria-hidden="true">&rarr;</span></a
          >
        </div>
      </div>
      <div class="text-center">
        <h1
          class="text-4xl font-bold tracking-tight tracking-wide text-gray-50 sm:text-6xl"
        >
          {{ $t('heroHeading') }}
        </h1>
        <p class="mt-6 text-lg leading-8 text-gray-400">
          {{ $t('heroSubheading') }}
        </p>
        <div class="mt-10 flex items-center justify-center gap-x-6">
          <NuxtLink
            to="/dashboard"
            class="rounded-md bg-purple-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600"
            >{{ $t('shortNow') }}</NuxtLink
          >
          <a href="#" class="text-sm font-semibold leading-6 text-gray-400"
            >{{ $t('seeMore') }} <span aria-hidden="true">→</span></a
          >
        </div>
      </div>
    </div>

    <div
      class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      aria-hidden="true"
    >
      <div
        class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-purple-600 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        style="
          clip-path: polygon(
            74.1% 44.1%,
            100% 61.6%,
            97.5% 26.9%,
            85.5% 0.1%,
            80.7% 2%,
            72.5% 32.5%,
            60.2% 62.4%,
            52.4% 68.1%,
            47.5% 58.3%,
            45.2% 34.5%,
            27.5% 76.7%,
            0.1% 64.9%,
            17.9% 100%,
            27.6% 76.8%,
            76.1% 97.7%,
            74.1% 44.1%
          );
        "
      ></div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Strona główna - LinkSnip',
})
</script>

<style scoped>
.heading {
  line-height: 110%;
  background: linear-gradient(
    180deg,
    #ffffff 0%,
    rgba(255, 255, 255, 0) 188.28%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
}
</style>
