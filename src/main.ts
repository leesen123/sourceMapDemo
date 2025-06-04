import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ErrorStackParser from 'error-stack-parser'
import { findCodeBySourceMap } from './utils/index'

const app = createApp(App)

app.config.errorHandler = (err, vm) => {
  const errorStack = ErrorStackParser.parse(err as Error)
  console.log('🚀 ~ errorStack:', errorStack)
  if (errorStack.length > 0) {
    findCodeBySourceMap(errorStack[0])
  }
}
app.use(createPinia())
app.use(router)

app.mount('#app')
