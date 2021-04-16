import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import './assets/css/tailwind.css'
import './assets/css/main.css'
import './assets/tailwind.css'

import "firebase/auth";



createApp(App).use(store).use(router).use(firebase).mount('#app')
