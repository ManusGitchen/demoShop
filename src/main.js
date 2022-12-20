import 'vuetify/styles' // Global CSS has to be imported
import { createApp } from 'vue'
import { createVuetify } from 'vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
import VueAxios from 'vue-axios'
/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'
/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
/* import specific icons */
import { faCalendarDays, faClock, faLocationDot } from '@fortawesome/free-solid-svg-icons'
/* add icons to the library */
library.add(faCalendarDays,faClock,faLocationDot)

import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

import '@/assets/main.scss'
const app = createApp(App).use(store)
const vuetify = createVuetify({
    components,
    directives,
})
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(VueAxios, axios).use(vuetify).use(router)
app.provide('axios', app.config.globalProperties.axios)  // provide 'axios'
app.mount('#app')
