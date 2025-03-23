<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
import { useHead } from '#imports';

useHead({
  title: '정현진 포트폴리오',
});
</script>
