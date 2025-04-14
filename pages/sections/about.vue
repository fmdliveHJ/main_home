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
            <em class="text-line">Vue</em>와
            <em class="text-line">React</em> 환경에서 마크업 개발은 물론,
          </span>
          <span class="mask-text">
            컴포넌트 기반 UI 구조 설계와 재사용성 높은 코드 구현 경험이
            있습니다.
          </span>
          <span class="mask-text">
            TypeScript 기반 <em class="text-line">Nuxt</em> 프레임워크에서도
            마크업 및 UI 개발을 수행하며
          </span>
          <span class="mask-text">
            정적 타입 검사의 장점을 적극 활용해 코드의 안정성과 예측 가능성을
            높였습니다.
          </span>
          <br />
          <br />
          <span class="mask-text"
            >Tailwind, Quasar, Bootstrap 등의
            <em class="text-line">CSS 프레임워크</em>와 SCSS를 활용해
          </span>
          <span class="mask-text"
            >명확한 클래스 네이밍과 구조적인 설계를 통해 유지보수가 용이한 코드
            작성을 지향합니다.</span
          >
          <span class="mask-text"
            >컴포넌트의 역할과 상태를 명확히 구분하고, 확장성 있는 UI 구조를
            구성해 왔습니다.</span
          >
          <br />
          <br />
          <span class="mask-text"
            >또한, 크로스 브라우징, SEO와 같은
            <em class="text-line">웹 표준</em> 요소들을 충분히 고려하여
          </span>
          <span class="mask-text">
            사용자 중심의 웹 환경을 구축하는 데 집중합니다.</span
          >
          <span class="mask-text"
            >다양한 프로젝트 경험을 바탕으로 반응형 웹 구현 및 다양한 디바이스
            환경에</span
          >
          <span class="mask-text"
            >맞춘 유연한 레이아웃 구성에 자신이 있습니다.</span
          >
          <br /><br />
          <span class="mask-text"
            ><em class="text-line">프론트엔드 개발자</em>로서 단순한 화면 구현을
            넘어, 사용자 경험(UX)을
          </span>
          <span class="mask-text"
            >고려한 인터랙션 설계와 성능 최적화까지 고민하며 개발에 임하고
            있습니다.</span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
