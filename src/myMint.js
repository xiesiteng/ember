import Vue from 'vue'

import { 
  Button,
  InfiniteScroll,
  Toast,
  Loadmore,
  Swipe,
  SwipeItem,
  Popup
 } from 'mint-ui'
Vue.component(Button.name, Button)
Vue.use(InfiniteScroll)
Vue.component(Toast.name, Toast)
Vue.component(Loadmore.name, Loadmore)
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Popup.name, Popup);

Vue.prototype.$toast = Toast


import { List } from 'vant';

Vue.use(List);