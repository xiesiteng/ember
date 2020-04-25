import Vue from 'vue'

import { 
  List,
  Popup,
  Stepper,
  Toast,
  Swipe,
  SwipeItem
} from 'vant';

Vue.use(List);
Vue.use(Popup);
Vue.use(Stepper);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);

Vue.prototype.$toast = Toast