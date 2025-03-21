<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app';

onMounted(async () => {
  const { $gsap } = useNuxtApp();

  const maskTexts = document.querySelectorAll('.about__title > div');

  const titleLine = document.querySelector('.title-line');

  $gsap.fromTo(
    maskTexts,
    { scaleY: 0, opacity: 0, transformOrigin: 'bottom' },
    {
      scaleY: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.about__title',
        start: 'top 80%',
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

  let tl = $gsap.timeline({
    scrollTrigger: {
      trigger: '.about__mask',
      start: 'top 75%',
      end: 'top 30%',
      scrub: 1,
    },
  });

  $gsap.utils.toArray('.mask-text').forEach((text: any) => {
    tl.to(text, {
      backgroundSize: '100% 100%',
      duration: 0.5,
      ease: 'power1.out',
      onStart: () => {
        text.querySelectorAll('.text-line').forEach((el: any) => {
          el.classList.add('active');
        });
      },
      onReverseComplete: () => {
        text.querySelectorAll('.text-line').forEach((el: any) => {
          el.classList.remove('active');
        });
      },
    });
  });
});
</script>

<template>
  <div class="section about">
    <div class="inner">
      <div class="about__box">
        <h2 class="about__title">
          <div>ABOUT</div>
          <div class="title-line">ME</div>
        </h2>
        <div class="about__mask">
          <span class="mask-text">
            항상 긍정적인 사고를 바탕으로 끊임없이 노력하며 성장해왔습니다.
          </span>
          <span class="mask-text">
            다양한 웹 퍼블리싱 경험을 통해 웹 퍼블리싱에 대한 깊은 이해를 갖추고
            있으며,
          </span>
          <span class="mask-text">
            <em class="text-line">Vue</em>와
            <em class="text-line">React</em> 환경에서 마크업 개발을 성공적으로
            수행한 경험이 있습니다.
          </span>
          <span class="mask-text">
            또한, <em class="text-line">TypeScript</em>를 활용한
            <em class="text-line">Nuxt</em> 프레임워크에서도
          </span>
          <span class="mask-text">
            마크업 개발을 진행하며 기술적 역량을 한층 더 발전시켰습니다.
          </span>
          <span class="mask-text">
            Tailwind, Quasar, Bootstrap등의
            <em class="text-line">CSS프레임워크</em>와
            <em class="text-line">SCSS</em>를 활용해
          </span>
          <span class="mask-text">
            개발을 진행하며 기술적 역량을 한층 더 발전시켰습니다.
          </span>
          <br /><br />
          <span class="mask-text">
            명확한 클래스 네이밍과 구조적인 설계를 통해 유지보수가 용이한
            코드를</span
          >
          <span class="mask-text">
            작성합니다. 또한, 크로스 브라우징, SEO, 웹 접근성과 같은 웹
            환경의</span
          >
          <span class="mask-text"
            >주요 요소를 고려하여 사용자 경험을 최적화하는 데 집중합니다.</span
          >
          <span class="mask-text"
            >다양한 프로젝트 경험을 바탕으로 반응형 웹페이지에 적합한
            유연한</span
          >
          <span class="mask-text"
            >사이즈 조정과 디자인 구현에도 자신이 있습니다.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
