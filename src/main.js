import Vue from 'vue'
import App from "@/App";
import router from "@/router";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faHome, faSync , faFrown} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faHome, faSync, faFrown)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
