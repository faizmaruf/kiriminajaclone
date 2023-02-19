// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxtjs/color-mode'],
    colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'dark', // fallback value if not system preference found
    hid: 'nuxt-color-mode-script',
    globalName: '__NUXT_COLOR_MODE__',
    componentName: 'ColorScheme',
    classPrefix: '',
    classSuffix: '-mode',
    storageKey: 'nuxt-color-mode'
  },
    css: ['~/assets/css/main.css'],
    postcss: {
     plugins: {
        tailwindcss: {},
        autoprefixer: {},
    },
    },
    app:{
        head:{
            title:'kiriminaja clone',
            meta:[
                {charset:'utf-8'},
                {name:'viewport',content:'width=device-width,initial-scale=1'},
                {hid:'description',name:'description',content:'technical test KiriminAja'}
            ],
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://cdn.materialdesignicons.com/5.9.55/css/materialdesignicons.min.css'
                }
            ]
        },
    },   
})


// font sebaiknya menggunakan fontawesome icons 
// namun saya perlu lebih banyak waktu lagi untuk hal ini

