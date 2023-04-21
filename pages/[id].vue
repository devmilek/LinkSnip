<template>
  <div class="grid place-content-center h-screen">Przekierowywanie...</div>
</template>

<script setup>
const params = useRoute().params;
const client = useSupabaseClient();

const { data } = await client
    .from("links")
    .select("*")
    .eq("link_key", params.id)
    .single();

onBeforeMount(() => {
  if (data) {

    window.location.href = data.redirect_to;
    console.log(data);
  } else {
    createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }
})
</script>

<style scoped>

</style>