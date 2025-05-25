// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  content: {
    build: {
      csv: {
        // Convert CSV data to JSON objects
        json: true,
        // Specify custom delimiter (default is ',')
        delimiter: ','
      }
    }
  },
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: ['@nuxt/content']
})