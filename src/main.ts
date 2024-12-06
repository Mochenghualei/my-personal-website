import * as ELIcon from '@element-plus/icons-vue'
import APlayer from 'aplayer/dist/APlayer.min.js'
import { createApp } from 'vue'
import router from '~/router'
import store from '~/store'
import App from './App.vue'
import '~/styles/index.scss'
import 'aplayer/dist/APlayer.min.css'

function isValidKey(key: string | number | symbol, object: object): key is keyof typeof object {
  return key in object
}

// init()

const app = createApp(App)
app.config.globalProperties.$aplayer = APlayer
// 全局注册elementplus图标组件
for (const iconName in ELIcon) {
  if (isValidKey(iconName, ELIcon)) {
    app.component(iconName, ELIcon[iconName])
  }
}

app.use(router).use(store).mount('#app')
