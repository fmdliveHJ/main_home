import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

export default defineNuxtPlugin(() => {
  if (typeof window === 'undefined') return; // SSR 방지

  gsap.registerPlugin(ScrollTrigger);
  const timeline = gsap.timeline();
  return {
    provide: {
      gsap,
      timeline,
      ScrollTrigger,
    },
  };
});
