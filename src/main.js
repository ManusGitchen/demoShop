import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCalendarDays, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'


import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@/assets/main.scss'

const app = createApp(App).use(store)
const vuetify = createVuetify({
    components,
    directives,
})

library.add(faCalendarDays, faClock, faLocationDot)

app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueAxios, axios).use(vuetify).use(router)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')
