
import { createApp } from 'vue';
import { createPinia } from 'pinia';
import App from './App.vue';
import './assets/main.css'
import "bootstrap/dist/css/bootstrap.css"

// const app = createApp(App)
// app.use(createPinia())
// app.mount('#app')
createApp(App).use(createPinia()).mount('#app')
