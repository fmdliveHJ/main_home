<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { useNuxtApp } from '#app';

const skillList = [
  {
    title: 'JS',
    bgColor: '#F0DB4F',
  },
  {
    title: 'TS',
    bgColor: '#3178C6',
  },
  {
    title: 'Vue',
    bgColor: '#4FC08D',
  },

  {
    title: 'Nuxt',
    bgColor: '#00C58E',
  },
  {
    title: 'HTML',
    bgColor: '#E34F26',
  },
  {
    title: 'CSS',
    bgColor: '#2965F1',
  },
  {
    title: 'SCSS',
    bgColor: '#C36291',
  },
  {
    title: 'Tailwind',
    bgColor: '#38BDF8',
  },
  {
    title: 'Bootstrap',
    bgColor: '#7952B3',
  },
  {
    title: 'Figma',
    bgColor: '#F24E1E',
  },
  {
    title: 'Git',
    bgColor: '#F05032',
  },
];

onMounted(async () => {
  await nextTick();
  const { $gsap } = useNuxtApp();
  const skillTitleTexts = document.querySelectorAll('.skill__title > div');
  const titleLine = document.querySelector('.skill__box .title-line');

  $gsap.fromTo(
    skillTitleTexts,
    { scaleY: 0, opacity: 0, transformOrigin: 'bottom' },
    {
      scaleY: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.skill__box',
        start: 'top 90%',
        end: 'bottom 30%',
        toggleActions: 'restart none none reverse',
        onEnter: () => {
          if (titleLine) titleLine.classList.add('active');
        },
        onLeaveBack: () => {
          if (titleLine) titleLine.classList.remove('active');
        },
      },
    }
  );
});
</script>

<template>
  <div class="section skill">
    <div class="inner">
      <div class="skill__box">
        <h2 class="skill__title">
          <div><span>Creative</span></div>
          <div>with<span class="title-line">Skill</span></div>
        </h2>
        <ul class="skill__list">
          <li
            class="skill__list-item"
            v-for="item in skillList"
            :key="item.title"
            ref="skillListItems"
            :style="{
              backgroundColor: item.bgColor,
            }"
          >
            <div class="skill__list-item-text"></div>
            <h3>{{ item.title }}</h3>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.content {
  min-height: 100vh;
}
</style>
