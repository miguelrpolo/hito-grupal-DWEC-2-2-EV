import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import cookieconsent from 'vue-cookieconsent-component'

createApp(App).use(router).component('cookie-consent', cookieconsent).mount('#app')
