<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app';
const { $gsap } = useNuxtApp();

const visualBoxRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (!$gsap) return;

  const items = document.querySelectorAll('.skill-item > div');

  setTimeout(() => {
    items.forEach((item, index) => {
      const tl = $gsap.timeline({
        delay: index * 0.05,
      });

      tl.fromTo(
        item,
        { scale: 0, opacity: 0 },
        { scale: 1.1, opacity: 1, duration: 0.5, ease: 'power1.out' }
      ).to(item, { scale: 1, duration: 0.5, ease: 'power1.out' });
    });
  }, 300);

  const spans = document.querySelectorAll('.visual-box--title span');

  spans.forEach((span, index) => {
    (span as HTMLElement).style.setProperty('--delay', index.toString());
  });

  $gsap.fromTo(
    spans,
    { scaleY: 0, opacity: 0, transformOrigin: 'bottom' },
    {
      scaleY: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
    }
  );
});
</script>

<template>
  <div class="section visual">
    <div class="inner">
      <div class="visual-box" ref="visualBoxRef">
        <h1 class="visual-box--title title-top">
          <span>WEB</span>
          <span>DEVELOPER</span>
        </h1>
        <div class="visual-box--skill">
          <div class="skill-item">
            <div class="skill-item--js"><span>Js</span></div>
            <div class="skill-item--ts"><span>Ts</span></div>
            <div class="skill-item--vue"><span>Vue</span></div>
            <div class="skill-item--nuxt"><span>Nuxt</span></div>
          </div>
        </div>
        <div class="visual-box--flag">
          <div class="flag-item">
            <div class="flag-item--html"><span>HTML</span></div>
            <div class="flag-item--css"><span>CSS</span></div>
            <div class="flag-item--scss"><span>SCSS</span></div>
            <div class="flag-item--tailwind"><span>Tailwind</span></div>
            <div class="flag-item--bootstrap"><span>Bootstrap</span></div>
            <div class="flag-item--quasar"><span>Quasar</span></div>
            <div class="flag-item--react"><span>React</span></div>
            <div class="flag-item--styledComponent">
              <span>Styled-Component</span>
            </div>
          </div>
        </div>
        <h2 class="visual-box--title title-bottom">
          <span>PUBLISHER, </span>
          <span>WEB FRONT END</span>
        </h2>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
