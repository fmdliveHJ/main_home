<script setup>
import '~/assets/styles/main.scss';
import Header from '~/components/global/header.vue';
</script>

<template>
  <div id="layout">
    <Header />
    <main>
      <slot />
    </main>
  </div>
</template>

<style scoped></style>
