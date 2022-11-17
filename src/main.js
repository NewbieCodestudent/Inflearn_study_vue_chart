import Vue from 'vue'
import App from './App.vue'
// import ChartPlugin from './plugins/ChartPlugin'

Vue.config.productionTip = false
// Vue.use(ChartPlugin)

new Vue({
  render: h => h(App),
}).$mount('#app')

// vue3
// const app = createApp(App).use(ChartPlugin).mount('#app')
