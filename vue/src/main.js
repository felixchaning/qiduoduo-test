import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './assets/main.css'

const app = createApp(App).use(Antd)

app.use(router)

app.mount('#app')
