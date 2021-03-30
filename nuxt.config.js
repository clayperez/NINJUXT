/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'img',
    meta: [{ charset: 'utf-8' }],
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    jit: false,
  },
  loading: false,
  plugins: [{ ssr: true, src: '@/plugins/icons.js' }],
  buildModules: ['@nuxtjs/tailwindcss'],
  modules: [],
}
