import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import ErrorStackParser from 'error-stack-parser'
// import { findCodeBySourceMap } from './utils/index'

const app = createApp(App)
app.use(createPinia())
app.use(router)
app.use(ElementPlus)

app.config.errorHandler = (err: any, vm: any) => {
  const errorStack = ErrorStackParser.parse(err as Error)
  const jsError = {
    stack_frames: errorStack,
    message: err.message,
    stack: err.stack,
    error_name: err.name,
  }
  vm!.$message.error(`您触发了一个${err.name}错误`, err)
  localStorage.setItem('jsErrorList', JSON.stringify(jsError))
  // console.log('🚀 ~ errorStack:', errorStack)
  // if (errorStack.length > 0) {
  //   findCodeBySourceMap(errorStack[0])
  // }
}

app.mount('#app')
