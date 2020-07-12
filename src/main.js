import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';
import VueApexCharts from 'vue-apexcharts'
Vue.use(VueApexCharts)

Vue.component('apexchart', VueApexCharts)
Vue.config.productionTip = false

import Activity from './components/activity.vue'
Vue.component('activity', Activity)
import BrowserSize from './components/browserSize.vue'
Vue.component('browser-size', BrowserSize)
import CopyPaste from './components/copyPaste.vue'
Vue.component('copy-paste',CopyPaste)
import Inactivity from './components/inactivity.vue'
Vue.component('inactivity', Inactivity)
import KeyboardClick from './components/keyboardClick.vue'
Vue.component('keyboard-click', KeyboardClick)
import MouseClick from './components/mouseClick.vue'
Vue.component('mouse-click', MouseClick)
import MouseMove from './components/mouseMove.vue'
Vue.component('mouse-move', MouseMove)
import MouseScroll from './components/mouseScroll.vue'
Vue.component('mouse-scroll', MouseScroll)
import MultipleTabs from './components/multipleTabs.vue'
Vue.component('multiple-tabs', MultipleTabs)
import OznTxt from './components/oznTxt.vue'
Vue.component('ozn-txt', OznTxt)


new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
