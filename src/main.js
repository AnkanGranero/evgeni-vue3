import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'
import router from './router'

import './assets/main.scss'

const store = createStore({
    state: {

    },
    mutations: {

    },
    actions: {
        
    }
  }
)

const app = createApp(App)

app.use(router)
app.use(store)

app.mount('#app')
