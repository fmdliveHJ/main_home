<script setup>
import '~/assets/styles/main.scss';
import Header from '~/components/global/header.vue';
import Loading from '~/components/global/loading.vue';

const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
  <div id="layout">
    <Loading v-if="isLoading" />
    <template v-else>
      <Header />
      <main>
        <slot />
      </main>
    </template>
  </div>
</template>

<style scoped></style>
