import { createApp } from 'vue'
import { createPinia } from 'pinia'
import PortalVue from 'portal-vue'

import App from './App.vue'
import router from './router'

import './assets/main.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PortalVue)

app.mount('#app')
