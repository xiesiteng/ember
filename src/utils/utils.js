
import Vue from 'vue'


// 路由跳转，path为需要跳转的路由，eg： this.toTurn('/index')
Vue.prototype.$toTurn = function (path) {
  this.$router.push(path)
}

// 判断当前设备，手机端 或 ipad
Vue.prototype.$judgeUserAgent = function () {
  if (/AppleWebKit.*Mobile/i.test(navigator.userAgent) || 
      (/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE/.test(navigator.userAgent))){
        if(window.location.href.indexOf("?mobile")<0){
          try{
            if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)){
                // 手机端用户
                this.$store.commit('updateIsPad', false)
            }else if(/iPad/i.test(navigator.userAgent)){
                // ipad用户
                this.$store.commit('updateIsPad', true)
            }else{
                this.$store.commit('updateIsPad', true)
            }
          } catch(e){}
        }
  }
}

// 判断数据是否为空
Vue.prototype.$isblank = function(chr) {
	if (chr == null || chr == '' || chr == undefined || chr == 'undefined' || chr == 'null' || chr.length == 0) {
		return true;
	};
	var chr = chr.toString();
	var chr = chr.replace(/(^\s*)|\s*$/g, '');
	if (chr == null || chr == '' || chr == undefined || chr == 'undefined' || chr == 'null' || chr.length == 0) {
		return true;
	};
	return false;
}