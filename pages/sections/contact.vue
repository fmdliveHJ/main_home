<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { useNuxtApp } from '#app';

onMounted(async () => {
  await nextTick();
  const { $gsap, $ScrollTrigger } = useNuxtApp();

  const contactUsTitleTexts = document.querySelectorAll(
    '.contact__title > div'
  );
  const titleLine = document.querySelector('.contact__title .title-line');
  const contactUsContent = document.querySelector('.contact__content');

  $gsap.fromTo(
    contactUsTitleTexts,
    { scaleY: 0, opacity: 0, transformOrigin: 'bottom' },
    {
      scaleY: 1,
      opacity: 1,
      duration: 0.8,
      stagger: 0.1,
      ease: 'elastic.out(1, 0.5)',
      scrollTrigger: {
        trigger: '.contact__title',
        start: 'top 80%',
        end: 'bottom 30%',
        //markers: true,
        toggleActions: 'restart none none reverse',
        onEnter: () => {
          console.log('onEnter');
          if (titleLine) titleLine.classList.add('active');
        },
        onLeaveBack: () => {
          if (titleLine) titleLine.classList.remove('active');
        },
      },
    }
  );

  const getWidthSize = (screenWidth: number) => {
    if (screenWidth >= 1200) return 1100;
    if (screenWidth >= 1024) return 900;
    if (screenWidth >= 768) return screenWidth - 80;
    return screenWidth - 40;
  };

  const getHeightSize = (screenWidth: number) => {
    if (screenWidth >= 1200) return 600;
    if (screenWidth >= 1024) return 500;
    if (screenWidth >= 768) return 400;
    return 300;
  };

  const updateAnimation = () => {
    // 기존 애니메이션 제거
    $gsap.killTweensOf(contactUsContent);

    if (window.innerWidth < 768) {
      $gsap.set(contactUsContent, {
        width: getWidthSize(window.innerWidth),
        height: '300px',
        y: 50,
        borderRadius: '1rem',
      });
    } else {
      $gsap.fromTo(
        contactUsContent,
        { width: '100vw', y: 50, borderRadius: '1rem' },
        {
          width: getWidthSize(window.innerWidth),
          height: getHeightSize(window.innerWidth),
          y: 100,
          duration: 0.8,
          ease: 'power1.out',
          scrollTrigger: {
            trigger: '.contact__content',
            start: 'top 80%',
            end: 'top 20%',
            scrub: 3,
            toggleActions: 'restart none none reverse',
          },
        }
      );
    }

    // 리사이즈 후 ScrollTrigger 업데이트
    $ScrollTrigger.refresh();
  };

  // 최초 실행
  updateAnimation();

  let resizeTimeout: NodeJS.Timeout;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimeout);
    resizeTimeout = setTimeout(() => {
      updateAnimation();
    }, 300);
  });
});
</script>

<template>
  <div class="section contact">
    <div class="inner">
      <div class="contact__box">
        <h2 class="contact__title">
          <div>Contact</div>
          <div class="title-line">Me</div>
        </h2>
        <div class="contact__content">
          <div class="contact__wrapper">
            <div class="contact__description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              cupiditate vitae deserunt tempora. Saepe impedit, iste ex harum,
              earum amet, veniam inventore corrupti ea deleniti reiciendis nemo
              accusamus! Totam, tempore?
            </div>
            <div class="contact__info">
              <div class="contact__info-item">
                <h3 class="contact__info-title">Address</h3>
                <p class="contact__info-text">서울시 은평구 응암동</p>
              </div>
              <div class="contact__info-item">
                <h3 class="contact__info-title">Phone</h3>
                <p class="contact__info-text">
                  <a href="tel:01047250335">010-4725-0335</a>
                </p>
              </div>
              <div class="contact__info-item">
                <h3 class="contact__info-title">Email</h3>
                <p class="contact__info-text">
                  <a href="mailto:gdalove@naver.com">gdalove@naver.com</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
