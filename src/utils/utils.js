
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


// +----------------------------------------------------------------------
// | Desc: 时间戳转化为时间格式
// +----------------------------------------------------------------------
// | Param:time十位数时间戳
// | Param:type，1(2018-01-01 10:12:11),2(2018-01-01 10:12),3(2018-01-01),4(2018-01),5(2018),默认(2018-01-01)
// +----------------------------------------------------------------------
// | return:格式化后的时间
// +----------------------------------------------------------------------
Vue.prototype.$timeFmt = function(time, type) {
  if (this.$isblank(time)) {
    return "";
  } else {
    var ts = arguments[0] || 0;
    var t, y, m, d, h, i, s;
    t = ts ? new Date(ts * 1000) : new Date();
    y = t.getFullYear();
    m = t.getMonth() + 1;
    d = t.getDate();
    h = t.getHours();
    i = t.getMinutes();
    s = t.getSeconds();
    // 可根据需要在这里定义时间格式 
    if (type == 1) {
      return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (
        i < 10 ? '0' + i : i) + ':' + (s < 10 ? '0' + s : s);
    } else if (type == 2) {
      return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d) + ' ' + (h < 10 ? '0' + h : h) + ':' + (
        i < 10 ? '0' + i : i);
    } else if (type == 3) {
      return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
    } else if (type == 4) {
      return y + '-' + (m < 10 ? '0' + m : m);
    } else if (type == 5) {
      return y + '-' + (m < 10 ? '0' + m : m);
    } else {
      return y + '-' + (m < 10 ? '0' + m : m) + '-' + (d < 10 ? '0' + d : d);
    };
  }
}

// 格式化处理金额, money: 金额数值
Vue.prototype.$fmtMoney = function (money) {
  if (this.$isblank(money)) {
    return '-'
  } else{
    money = Number((parseInt(money) / 100)).toFixed(2)
    return money
  }
}

// 预约状态根据状态数值返回对应的文字
// 0已撤销;100 已预约待问卷；200已问卷待确认套餐；300已确认套餐待支付；400已支付待签章；500已签章待采血；600已采血已送检；700已送检待报告解读；800已完成
Vue.prototype.$statusByType = function (type) {
  switch (type) {
    case 0:
      return '已撤销'
      break
    case 100:
      return '已预约待问卷'
      break
    case 200:
      return '已问卷待确认套餐'
      break
    case 300:
      return '已确认套餐待支付'
      break
    case 400:
      return '已支付待签章'
      break
    case 500:
      return '已签章待采血'
      break
    case 600:
      return '已采血已送检'
      break
    case 700:
      return '已送检待报告解读'
      break
    case 800:
      return '已完成'
      break
  }
}