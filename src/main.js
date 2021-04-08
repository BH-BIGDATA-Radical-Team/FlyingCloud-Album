import { createApp } from 'vue'
import App from './App.vue'
import './assets/index.css'
import VueRouter from 'vue-router'
import router from './router'


createApp(App).use(VueRouter)
createApp(App).use(router).mount('#app')
