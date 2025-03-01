<script setup lang="ts">
import { onMounted } from 'vue';
import { useNuxtApp } from '#app';

onMounted(async () => {
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
        trigger: '.skill__title',
        start: 'top 80%',
        end: 'bottom 30%',
        //markers: true,
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

  const skillList = document.querySelectorAll('.skill__list');

  skillList.forEach((list) => {
    const skillItems = Array.from(list.querySelectorAll('.skill__list-item'));

    skillItems.forEach((item, index) => {
      const element = item as HTMLElement;
      element.style.zIndex = (index + 1).toString();

      const translateY = index * 60;
      $gsap.set(element, {
        y: translateY,
        scale: 1,
      });

      $gsap.to(element, {
        scale: 1 - 0.05 * (skillItems.length - 1 - index),
        scrollTrigger: {
          trigger: element,
          start: () => {
            const stickyPoint = 300 + translateY;
            return `${stickyPoint}px top`;
          },
          end: '+=100%',
          scrub: true,
        },
      });
    });
  });
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
        <div class="skill__list">
          <div class="skill__list-item"></div>
          <div class="skill__list-item"></div>
          <div class="skill__list-item"></div>
          <div class="skill__list-item"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
