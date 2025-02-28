<script setup lang="ts">
import { onMounted, ref, nextTick } from 'vue';
import { useNuxtApp } from '#app';

onMounted(async () => {
  await nextTick();
  const { $gsap } = useNuxtApp();

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

  $gsap.fromTo(
    contactUsContent,
    { width: '100Vw', y: 50 },
    {
      width: '1100px',
      height: '600px',
      y: 100,
      duration: 0.8,
      ease: 'power1.out',
      borderRadius: '1rem',
      scrollTrigger: {
        trigger: '.contact__content',
        start: 'top 80%',
        end: 'top 20%',
        scrub: 3,
        toggleActions: 'restart none none reverse',
        onEnter: () => {
          console.log('onEnter');
        },
      },
    }
  );
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
