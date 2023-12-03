import { createApp } from 'vue'

import router from '@/router/index'
import 'vuetify/styles'
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import App from './App.vue'

import { THEME_KEY } from '@/utils/constants'

const vuetify = createVuetify ({
    components,
    directives,
    theme: {
        defaultTheme: localStorage.getItem(THEME_KEY) ?? 'light'
    }
})

createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
