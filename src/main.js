import { createApp } from 'vue'

import axios from 'axios';
window.axios = axios
window.axios.defaults.baseURL = 'http://127.0.0.1:8000/api/v1';


import App from './App.vue'
import router from './router'
import store from './store'

createApp(App).use(store).use(router).mount('#app')
