import Vue from 'vue'

import { 
  List,
  Popup,
  Stepper,
  Toast,
  Swipe,
  SwipeItem,
  Dialog,
  Image as VanImage
} from 'vant';

Vue.use(List);
Vue.use(Popup);
Vue.use(Stepper);
Vue.use(Swipe);
Vue.use(SwipeItem);
Vue.use(Toast);
Vue.use(Dialog);
Vue.use(VanImage);

Vue.prototype.$toast = Toast
Vue.prototype.$dailog = Dialog