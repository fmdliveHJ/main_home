<script setup>
import Visual from '~/pages/sections/visual.vue';
import About from '~/pages/sections/about.vue';
import Skill from '~/pages/sections/skill.vue';
import Work from '~/pages/sections/work.vue';
import Contact from '~/pages/sections/contact.vue';
import Loading from '~/components/global/loading.vue';
import Header from '~/components/global/header.vue';
const isLoading = ref(true);

onMounted(() => {
  setTimeout(() => {
    isLoading.value = false;
  }, 2000);
});
</script>

<template>
  <div id="container">
    <Loading v-if="isLoading" />
    <div v-else>
      <Header />
      <Visual />
      <About />
      <Skill />
      <Work />
      <Contact />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
