import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import { Buffer } from 'buffer'
import process from 'process'

if (typeof window.global === 'undefined') {
  window.global = window
}
if (typeof window.Buffer === 'undefined') {
  window.Buffer = Buffer
}
if (typeof window.process === 'undefined') {
  window.process = process
}

const app = createApp(App)

app.config.errorHandler = (err, vm) => {
  console.log(err)
  console.log(vm)
}
app.use(createPinia())
app.use(router)

app.mount('#app')
