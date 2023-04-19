import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from "pinia"
import router from './router/router'
import ViewUIPlus from 'view-ui-plus'
import 'view-ui-plus/dist/styles/viewuiplus.css'

import "@/assets/scss/reset.scss"
import "@/assets/alarm_iconfont/iconfont.css"
import "@/assets/planet_iconfont/iconfont.css"
import "@/assets/weather_iconfont/iconfont.css"
import "@/assets/music_iconfont/iconfont.css"

const app = createApp(App)

app.use(router)
app.use(createPinia())
app.use(ViewUIPlus)

app.mount('#app')
