// https://nuxt.com/docs/api/configuration/nuxt-config

import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  // @ts-ignore
  css: ['assets/styles/main.scss'],

  plugins: ["~/plugins/gsap.client"],
  compatibilityDate: '2025-02-01',
})