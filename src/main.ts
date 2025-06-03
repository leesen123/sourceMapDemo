import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.config.errorHandler = (err, vm) => {
  console.log(err)
  console.log(vm)
}
app.use(createPinia())
app.use(router)

app.mount('#app')
