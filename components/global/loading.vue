<script setup>
import { onMounted, ref } from 'vue';
import lottie from 'lottie-web';

const container = ref(null);

onMounted(() => {
  lottie.loadAnimation({
    container: container.value,
    renderer: 'svg',
    loop: false,
    autoplay: true,
    path: '/animation/data.json', // public 폴더 기준
  });
});
</script>

<template>
  <div ref="container" id="loading"></div>
</template>

<style lang="scss" scoped>
#loading {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
}
</style>
