
import Vue from 'vue'

// ipad端微信扫码登录
Vue.prototype.$ipadLogin = function() {
  var _this = this;
//#ifdef H5
  var code = _this.$getQueryVariable("code");
  var url = 'http://customer.scember.com/sweepCodeLogin';
  // var url = window.location.href;
  if(this.$isblank(code)){			
    location.href = "https://open.weixin.qq.com/connect/qrconnect?appid=wx589d4ad5efa584dd&redirect_uri="
                    + encodeURIComponent(url) + "&response_type=code&scope=snsapi_login&state=$state#wechat_redirect";
  }else{
    _this.$api.getIpadLogin({
      auth_code: code
    }).then(res => {
      // console.log(res)
      if(!_this.$isblank(res.data.token)){ 
        localStorage.setItem('user',JSON.stringify(res.data.user));
        localStorage.setItem('token', res.data.token);
        // history.pushState({},'恩贝尔',_this.$delQueryVariable(url,"code"))
        this.$router.push('/chooseSubscribe')
      }else{
        _this.$toast("登录失败");
      }
    });
  }
//#endif	
}

// 公众号点击执行微信登录
Vue.prototype.$doLogin = function() {
	  var _this = this;
    var code = _this.$getQueryVariable("code");
    // var url = 'http://customer.scember.com/mine';
    var url = window.location.href;
		if(this.$isblank(code)){			
      location.href = "https://open.weixin.qq.com/connect/oauth2/authorize?appid=wx520ed7fc5d46297f&redirect_uri="
                       + encodeURIComponent(url) + "&response_type=code&scope=snsapi_userinfo&state=1#wechat_redirect";
		}else{
			_this.$api.wxLogin({
				code: code
			}).then(res => {
        // console.log(res)
				if(!_this.$isblank(res.data.token)){ 
          localStorage.setItem('user',JSON.stringify(res.data.user));
          localStorage.setItem('token', res.data.token);
          this.$store.commit('setFace', res.data.user.face)
          this.$store.commit('setNickname', res.data.user.nickname)
          // history.pushState({},'恩贝尔', 'http://localhost:8088/mine')
          history.pushState({},'恩贝尔',_this.$delQueryVariable(url,"code"))
        }else{
          _this.$toast("登录失败");
        }
			});
		}
}

// 公众号页面加载完毕就执行微信登录
Vue.prototype.$initLogin = function() {
  return new Promise((resolve, reject) => {
    var _this = this;
    var code = _this.$getQueryVariable("code");
    var url = window.location.href;
    if (!this.$isblank(code)) {
      _this.$api.wxLogin({
        code: code
      }).then(res => {
        // console.log(res)
        if(!_this.$isblank(res.data.token)){ 
          localStorage.setItem('user',JSON.stringify(res.data.user));
          localStorage.setItem('token', res.data.token);
          this.$store.commit('setFace', res.data.user.face)
          this.$store.commit('setNickname', res.data.user.nickname)
          // history.pushState({},'恩贝尔', 'http://localhost:8088/mine')
          history.pushState({},'恩贝尔',_this.$delQueryVariable(url,"code"))
          resolve(true)
        }else{
          _this.$toast("登录失败");
          resolve(false)
        }
      });
    } else{
      resolve(false)
    }
  })
}

//获取url参数=====H5
Vue.prototype.$getQueryVariable = function(name) {
	if (name == null || name == 'undefined') {return null; }	
	var searchStr = decodeURI(location.search);	
	var infoIndex = searchStr.indexOf(name + "=");	
	if (infoIndex == -1) { return null; }	
	var searchInfo = searchStr.substring(infoIndex + name.length + 1);	
	var tagIndex = searchInfo.indexOf("&");	
	if (tagIndex!= -1) { searchInfo = searchInfo.substring(0, tagIndex); }	
	return searchInfo;
}

//删除url参数=====H5
Vue.prototype.$delQueryVariable = function(url, parameter) {
	var urlparts = url.split('?');
	if(urlparts.length >= 2) {
		//参数名前缀
		var prefix = encodeURIComponent(parameter) + '=';
		var pars = urlparts[1].split(/[&;]/g);
		//循环查找匹配参数
		for(var i = pars.length; i-- > 0;) {
			if(pars[i].lastIndexOf(prefix, 0) !== -1) {
				//存在则删除
				pars.splice(i, 1);
			}
		}
		return urlparts[0] + (pars.length > 0 ? '?' + pars.join('&') : '');
	}
	return url;
}

// 解决微信支付内置对象不存在,唤起微信支付
Vue.prototype.$callPay = function (data) {
  if (typeof WeixinJSBridge == "undefined"){
    if( document.addEventListener ){
        document.addEventListener('WeixinJSBridgeReady', $jsApiCall, false);
    }else if (document.attachEvent){
        document.attachEvent('WeixinJSBridgeReady', $jsApiCall); 
        document.attachEvent('onWeixinJSBridgeReady', $jsApiCall);
    }
  }else{
      this.$jsApiCall(data);
  }
}

// 微信支付
Vue.prototype.$jsApiCall = function (data) {
  var _this = this;
  var jsApiParameters = JSON.parse(data);
  // var url = window.location.href;
  WeixinJSBridge.invoke(
    'getBrandWCPayRequest',jsApiParameters,
    function(res){
      //如果支付成功
      if (res.err_msg == 'get_brand_wcpay_request:ok') {
        //支付成功后跳转的地址
        _this.$router.push('/paySuccess')
      }else if (res.err_msg == 'get_brand_wcpay_request:cancel') {
        _this.$toast("用户取消支付");
      }else if (res.err_msg == 'get_brand_wcpay_request:fail') {
        _this.$toast("支付失败");
      }else {
        _this.$toast("未知错误");
      }
      //打印详细错误
      // alert(res.err_code+res.err_desc+res.err_msg);
      // console.log(res.err_code+res.err_desc+res.err_msg);
    }
  );
}


// 路由跳转，path为需要跳转的路由，eg： this.$toTurn('/index')
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

// 格式化处理金额, money: 金额数值 eg: 1600.00
Vue.prototype.$fmtMoney = function (money) {
  if (this.$isblank(money)) {
    return '0.00'
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