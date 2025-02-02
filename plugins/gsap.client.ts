import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return; // SSR 방지

  gsap.registerPlugin(ScrollTrigger);

  return {
    provide: {
      gsap,
      ScrollTrigger, // ScrollTrigger도 함께 제공
    },
  };
});
