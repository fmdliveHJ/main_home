<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { useNuxtApp } from '#app';

const skillList = [
  {
    title: '소리바로',
    company: '팀벨',
    period: '2024.04 ~ 2025.02 (11개월) / 15%',
    role: '화면 UI 변경 및 동적 화면 구성',
    skill: 'Vue, TypeScript, Tailwind CSS',
    task: [
      {
        title: '영상 음성 번역 툴 및 작업 툴 개선',
        desc: '작업 툴 내 스크롤 모션 오류 수정을 통해 사용자 경험 개선',
      },
      {
        title: 'Split 화면 구성',
        desc: '퀘이사(Quasar) 프레임워크를 활용해 작업 툴의 Split 화면 기능 설계 및 구현',
      },
      {
        title: '홈페이지 인터랙션',
        desc: 'GSAP 플러그인을 활용해 Fade-in 및 Fade-up 인터랙션 구현으로 동적 사용자 경험 제공',
      },
    ],
    img: 'dummy.jpg',
    alt: '소리바로',
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
          ></li>
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
