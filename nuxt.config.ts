// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config';

export default defineNuxtConfig({
  // @ts-ignore
  css: ['assets/styles/main.scss'],
  plugins: ['~/plugins/gsap.client'],
  compatibilityDate: '2025-02-01',
  app: {
    head: {
      meta: [
        {
          name: 'title',
          content: 'JHJ PORTFOLIO, 정현진 포트폴리오',
        },
        {
          name: 'description',
          content:
            '프론트엔드, 퍼블리셔, 웹 개발자, 정현진, 포트폴리오 인터랙티브',
        },
        {
          property: 'og:title',
          content: 'JHJ PORTFOLIO',
        },
        {
          property: 'og:description',
          content:
            '프론트엔드, 퍼블리셔, 웹 개발자, 정현진, 포트폴리오 인터랙티브',
        },
        {
          name: 'viewport',
          content:
            'width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no',
        },
      ],
    },
  },
});
