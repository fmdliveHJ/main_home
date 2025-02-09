<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { useNuxtApp } from '#app';

onMounted(async () => {
  const { $gsap } = useNuxtApp();
  const gsap = (await import('gsap')).default;
  const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;
  gsap.registerPlugin(ScrollTrigger);

  const spans = document.querySelectorAll('.about-box--title span');

  const lineTexts = document.querySelectorAll('.line-text');

  const titleLine = document.querySelector('.title-line');

  $gsap.fromTo(
    spans,
    { scaleY: 0, opacity: 0, transformOrigin: 'bottom' },
    {
      scaleY: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.about-box--title', // ✅ 스크롤 트리거 대상
        start: 'top 80%', // ✅ 애니메이션 시작 위치
        end: 'bottom 30%', // ✅ 애니메이션 종료 위치
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

  gsap.fromTo(
    '.mask-text',
    {
      backgroundSize: '0% 100%',
      scaleY: 0,
      opacity: 0,
      transformOrigin: 'bottom',
    },
    {
      backgroundSize: '100% 100%',
      scaleY: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.about-box',
        start: 'top 50%',
        end: 'bottom 30%',
        scrub: 1,
        markers: true, // ✅ 디버깅용 마커
      },
    }
  );

  lineTexts.forEach((lineText) => {
    gsap.to(lineText, {
      width: '100%',
      duration: 0.3,
      ease: 'power1.out',
      scrollTrigger: {
        trigger: lineText,
        start: 'top 50%',
        end: 'bottom 30%',
        scrub: 1,
        onEnter: () => lineText.classList.add('active'), // ✅ 스크롤 도착 시 active 추가
        onLeaveBack: () => lineText.classList.remove('active'), // ✅ 스크롤을 위로 올리면 active 제거
      },
    });
  });
});
</script>

<template>
  <div class="section about">
    <div class="inner">
      <div class="about-box">
        <h2 class="about-box--title">
          <span>ABOUT</span>
          <span class="title-line">ME</span>
        </h2>
        <span class="mask">
          <span class="mask-text">
            항상 긍정적인 사고를 바탕으로 끊임없이 노력하며 성장해왔습니다.<br />
            다양한 웹 퍼블리싱 경험을 통해 웹 퍼블리싱에 대한 깊은 이해를
            갖추고<br />
            있으며, <span class="line-text">Vue</span>와
            <span class="line-text">React</span> 환경에서 마크업 개발을
            성공적으로 수행한<br />
            있습니다. 또한, <span class="line-text">TypeScript</span>를 활용한
            <span class="line-text">Nuxt</span> 프레임워크에서도 마크업<br />
            개발을 진행하며 기술적 역량을 한층 더 발전시켰습니다.
            <br /><br />
            <span class="line-text">Tailwind</span>,
            <span class="line-text">Quasar</span>,
            <span class="line-text">Bootstrap</span> 등의
            <span class="line-text">CSS</span> 프레임워크와
            <span class="line-text">SCSS</span>를 활용해<br />
            명확한 클래스 네이밍과 구조적인 설계를 통해 유지보수가 용이한
            코드를<br />
            작성합니다. 또한, 크로스 브라우징, SEO, 웹 접근성과 같은 웹 환경의
            <br />
            주요 요소를 고려하여 사용자 경험을 최적화하는 데 집중합니다.
            <br />
            다양한 프로젝트 경험을 바탕으로 반응형 웹페이지에 적합한 유연한
            사이즈 조정과<br />
            디자인 구현에도 자신이 있습니다.
          </span>
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
