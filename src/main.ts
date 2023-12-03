import { createApp } from 'vue'

import router from '@/router/index'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

const vuetify = createVuetify ({
    components,
    directives
})

import App from './App.vue'
createApp(App)
    .use(router)
    .use(vuetify)
    .mount('#app')
