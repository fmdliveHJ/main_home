<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app';

const { $gsap, $ScrollTrigger } = useNuxtApp();
const headerRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!headerRef.value) return;

  if (!$ScrollTrigger) {
    console.error('ScrollTrigger is not defined');
    return;
  }

  $gsap.registerPlugin($ScrollTrigger);

  $ScrollTrigger.create({
    start: 'top+=0 top',
    onUpdate: (self) => {
      if (headerRef.value) {
        headerRef.value.classList.toggle('fixed-header', self.scroll() > 0);
      }
    },
  });
});
</script>

<template>
  <header ref="headerRef" class="default-header">
    <nav>
      <div class="git">
        <NuxtLink
          class="blog-link"
          to="https://github.com/fmdliveHJ"
          target="_blank"
          >JHJ PORTFOLIO</NuxtLink
        >
      </div>
      <div class="profile">
        <button class="btn-profile">
          <img src="" alt="" />
        </button>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  position: relative;
  height: 60px;
  transition: all 0.3s ease;
  z-index: 100;
  &.default-header {
    width: 100%;
    background-color: white;
    transition: all 0.3s;
    position: relative;
  }

  &.fixed-header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  }
  nav {
    position: relative;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 100%;
    .git {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      a {
        font-family: var(--font-family-FuturaNow);
        font-weight: var(--font-weight-bold);
        font-size: 1.2rem;
      }
    }
  }
  .profile {
    width: 2.5rem;
    height: 2.5rem;
    background: lightblue;
    border-radius: 50%;
    overflow: hidden;
    button {
      width: inherit;
      height: inherit;
    }
  }
}
</style>
