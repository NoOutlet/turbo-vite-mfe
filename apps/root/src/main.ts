import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
// import { registerApplication, start } from 'single-spa'
// import { config } from './constants'

// registerApplication({
//   name: '',
//   app: () => import(''),
//   activeWhen: () => true,
//   customProps: {
//     globalConfig: config
//   }
// })
// start()
const app = createApp(App)

app.use(createPinia())

app.mount('#app')
