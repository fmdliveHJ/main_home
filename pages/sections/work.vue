<script setup lang="ts">
import { onMounted } from 'vue';
import { useNuxtApp } from '#app';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import img_soribaro from '~/assets/images/work/img_soribaro.svg';
import img_workfy from '~/assets/images/work/img_workfy.svg';
import img_timblo from '~/assets/images/work/img_timblo.svg';
import img_ccourt from '~/assets/images/work/img_ccourt.png';
import img_baronote from '~/assets/images/work/img_baronote.svg';
import img_nowon from '~/assets/images/work/img_nowon.png';
import img_hswf from '~/assets/images/work/img_hswf.png';

gsap.registerPlugin(ScrollTrigger); // ✅ 이거 꼭 해줘야 함
const workList = [
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
    img: img_soribaro,
    alt: '소리바로',
  },
  {
    title: '웍스파이',
    company: '팀벨',
    period: '2024.04 - 2025.02 (11개월) / 20%',
    role: '화면 UI 변경 및 홈페이지 반응형 웹 퍼블리싱',
    skill: 'Nuxt, SCSS,',
    task: [
      {
        title: 'PC 페이지 반응형 웹 리뉴얼',
        desc: '기존 PC 전용 페이지를 다양한 디바이스에 최적화된 반응형 웹으로 리뉴얼',
      },
      {
        title: 'BO 컴포넌트 구조 개선',
        desc: 'Quasar를 사용해 백오피스(BO) 컴포넌트를 모듈화 및 구조적 효율성 강화',
      },
      {
        title: 'JavaScript 라이브러리 활용 및 인터랙션 개발',
        desc: 'GSAP: 타임라인 애니메이션 및 스크롤 기반 인터랙션 구현',
      },
      {
        title: 'RESTful API 활용 및 동적 리스트 렌더링',
        desc: '비동기 데이터 요청을 통한 리스트 동적 생성 및 UI 반영',
      },
    ],
    img: img_workfy,
    alt: '웍스파이',
  },
  {
    title: '팀블로',
    company: '팀벨',
    period: '2024.08 -2024.08 (약 1개월) / 90%',
    role: '랜딩페이지 구현',
    skill: 'Nuxt, SCSS',
    task: [
      {
        title: 'Nuxt 프레임워크 기반 웹페이지 구현',
        desc: '반응형 웹페이지 개발 및 SSR을 통한 성능 최적화',
      },
      {
        title: 'SEO 최적화',
        desc: '구글 서치 콘솔 및 네이버 서치 어드바이저 소유권 등록 및 SEO 규칙 준수로 검색 엔진 노출 강화',
      },
      {
        title: '반응형 웹 구현',
        desc: '다양한 디바이스에 최적화된 인터페이스 설계 및 사용자 경험 개선',
      },
      {
        title: 'SCSS 기반 모듈화된 스타일링',
        desc: '변수($variables), 믹스인(@mixin), 중첩(& 연산자) 등을 활용한 효율적인 스타일 관리',
      },
    ],
    img: img_timblo,
    alt: '',
    link: '',
  },
  {
    title: '헌법 재판소',
    company: '팀벨',
    period: '2024.09 -2024.10(약 2개월) / 20%',
    role: '리뉴얼 페이지 구축',
    skill: 'HTML, CSS, JavaScript, jQuery',
    task: [
      {
        title: 'JSP 환경 웹 리뉴얼 퍼블리싱',
        desc: 'JSP 기반의 기존 시스템을 웹 표준 준수 및 리뉴얼 퍼블리싱',
      },
      {
        title: 'FullCalendar.js 활용',
        desc: 'FullCalendar.js로 월/주/일 단위의 팝업 및 인터랙티브 UI 구현',
      },
    ],
    img: img_ccourt,
    alt: '헌법 재판소',
  },
  {
    title: '바로노트',
    company: '팀벨',
    period: '2022.11.01 ~ 2024.02 (14개월) / 10%',
    role: 'react 활용한 컴포넌트 퍼블리싱',
    skill: 'HTML, React, styled-components',
    task: [
      {
        title: '화면 퍼블리싱 및 모바일 UI 구현',
        desc: 'MSA 구조 내 다른 서비스와 연동하여 모바일 화면 퍼블리싱',
      },
      {
        title: 'styled-components를 활용한 컴포넌트 스타일링',
        desc: '모듈화된 스타일 관리 체계 구축 및 컴포넌트 단위 스타일 적용',
      },
      {
        title: '동적 스타일링 및 테마 적용',
        desc: 'UI 일관성을 유지하고, 재사용성을 극대화함',
      },
      {
        title: 'RESTful API 설계를 기반으로 검색 기능 구현',
        desc: 'RESTful API 설계를 기반으로 검색 기능을 구현, 데이터 조회 및 필터링을 지원',
      },
    ],
    img: img_baronote,
    alt: '바로노트',
  },
  {
    title: '노원평생교육포털',
    company: '오픈필드',
    period: '2021.09 ~ 2022.01 (5개월) / 40%',
    role: '공공기관 웹사이트 리뉴얼 프로젝트',
    skill: 'HTML, CSS, JavaScript, jQuery',
    task: [
      {
        title: '크로스 브라우징 대응',
        desc: '크롬, 웨일, 사파리, 엣지, 삼성인터넷 등 다양한 브라우저 및 기기별 호환성 확보',
      },
      {
        title: '중복 요소 템플릿화',
        desc: '100페이지 이상의 중복 요소를 템플릿화하여 유지보수 효율성 강화',
      },
      {
        title: '사용자 환경 개선',
        desc: '다양한 브라우저 환경(Chrome, Edge, Safari 등) 및 ',
        desc02: '디바이스(PC, 태블릿, 모바일)에서 일관된 UI/UX 제공',
      },
    ],
    img: img_nowon,
    alt: '노원평생교육포털',
  },
  {
    title: '화성여성청소년가족재단',
    company: '오픈필드',
    period: '2021.04 ~ 2021.07 (4개월) / 40%',
    role: '공공기관 웹사이트 리뉴얼',
    skill: 'HTML, CSS, JavaScript, jQuery',
    task: [
      {
        title: '반응형 웹 접근성 준수 퍼블리싱',
        desc: '공공기관 표준을 준수하며 모바일·PC 대응 UI 개발',
      },
      {
        title: '라이브러리 활용 및 인터랙션 개발',
        desc: 'Swiper.js, Slick.js를 사용하여 반응형 및 커스텀 슬라이더 개발',
      },
    ],
    img: img_hswf,
    alt: '화성여성청소년가족재단',
  },
];

onMounted(async () => {
  const { $gsap } = useNuxtApp();
  const workTitleTexts = document.querySelectorAll('.work__title > div');
  const titleLine = document.querySelector('.work__box .title-line');

  $gsap.fromTo(
    workTitleTexts,
    { scaleY: 0, opacity: 0, transformOrigin: 'bottom' },
    {
      scaleY: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.work__title',
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

  const workList = document.querySelectorAll('.work__list');

  workList.forEach((list) => {
    const workItems = Array.from(list.querySelectorAll('.work__list-item'));

    workItems.forEach((item, index) => {
      const element = item as HTMLElement;
      element.style.zIndex = (index + 1).toString();

      const translateY = index * 60;
      $gsap.set(element, {
        y: translateY,
        scale: 1,
        filter: 'blur(0px)',
        willChange: 'transform, filter',
      });

      $gsap.to(element, {
        scale: 1 - 0.05 * (workItems.length - 1 - index),
        scrollTrigger: {
          trigger: element,
          start: () => `${300 + translateY}px top`,
          end: '+=100%',
          scrub: true,
        },
      });

      if (index < workItems.length - 1) {
        const nextElement = workItems[index + 1] as HTMLElement;

        ScrollTrigger.create({
          trigger: nextElement,
          start: 'top bottom',
          end: 'top center',
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;
            const blurValue = 1.5 * progress;
            element.style.filter = `blur(${blurValue}px)`;
          },
        });
      }
    });
  });
});
</script>

<template>
  <div class="section work">
    <div class="inner">
      <div class="work__box">
        <h2 class="work__title">
          <div class="title-line">Work</div>
          <div>Experience</div>
        </h2>
        <ul class="work__list">
          <li
            class="work__list-item"
            v-for="item in workList"
            :key="item.title"
            ref="workListItems"
            :data-top-bar="item.title"
          >
            <div class="work__list-text gap-[0.25rem]">
              <div class="flex">
                <dl class="w-50">
                  <dt>Company/Project</dt>
                  <dd>{{ item.company }}/{{ item.title }}</dd>
                </dl>
                <dl class="w-50">
                  <dt>Skill</dt>
                  <dd>{{ item.skill }}</dd>
                </dl>
              </div>
              <div class="flex g-[0.25rem]">
                <dl class="w-50">
                  <dt>Period / Contribution</dt>
                  <dd>{{ item.period }}</dd>
                </dl>
                <dl class="w-50">
                  <dt>Major Role</dt>
                  <dd>{{ item.role }}</dd>
                </dl>
              </div>
              <dl class="flex-column">
                <dt>Task</dt>
                <dd v-for="(task, index) in item.task" :key="index">
                  <p v-if="task.title" class="task-title">{{ task.title }}</p>
                  <p v-if="task.desc" class="task-desc">
                    <span>{{ task.desc }}</span>
                    <br />
                    <span v-if="task.desc02">{{ task.desc02 }}</span>
                  </p>
                </dd>
              </dl>
            </div>
            <div class="work__list-pic">
              <img :src="item.img" :alt="item.alt" />
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
