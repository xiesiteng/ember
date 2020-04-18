import Vue from 'vue'

import { Button, InfiniteScroll,Toast } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.use(InfiniteScroll)
Vue.component(Toast.name, Toast)
Vue.prototype.$toast = Toast