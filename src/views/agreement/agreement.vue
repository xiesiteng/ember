<template>
  <div class="agreement-main" >
    <custom-header title="阅读协议"></custom-header>
    <div class="ag-wrap">
      <p class="title">检测服务知情同意书</p>
      <div class="content" v-html="book"></div>
      <div class="flex-end already">
        <span :class="['default', active ? 'default-active' : '']" @click="pick()"></span>
        <p>我已阅读</p>
      </div>
    </div>
    <custom-button btnText="立即购买" @tap="toPay()"></custom-button>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false,
      book: '尊敬的贵宾：<br/>' +
            '您好！<br/>' +
            '本项目使用基因甲基化检测技术和蛋白检测技术，对受检者外周血中与癌症相关的基因及蛋白进行检测。通过对各项检测指标及健康问卷的综合分析，提供给受检者相关患癌风险的一份综合评估报告<br/>' + 
            '基因甲基化异常在癌症的发生、发展过程中，特别是在癌症的早期，扮演非常重要的角色，是目前国际医学界公认的可实时、早期发现癌症的病因学检测指标。本评估针对不同的癌症选择特定的基因甲基化位点，同时将甲基化检测和肿瘤蛋白标志物检测进行有机地结合，大幅提高了多种癌症，特别是早期癌症的检出率。<br/>' +
            '评估为阳性结果时，提示受检者患某种癌症的风险高，建议马上咨询专科医师做进一步的确诊；当评估为弱阳性时，提示一定的患某种癌症的风险，也建议咨询专科医师做进一步确诊排除，或者在3-6个月后做一次检；当评估为阴性时，提示风险较低，未来按常规进行年度复检即可<br/><br/>' +
            '<p style="text-align: center">被保险人 声明</p><br/>' +
            '1 、本人同意博尔诚（北京）科技有限公司作为投人，为本人 向 中国太平洋人寿保险股份有限公司 投保。 重大疾病保险。<br/>' +
            '2 、本人对此保险服务的保险责任及免除 保险人责任 内容 和法律后果 已完全知悉 ， 并同意在中国法律允许或要求的范围内，授权承保公司将本人个人信息及保险信息提供给健康险信息平台系统以做合理利用。<br/>' +
            '3 、本人保证以下所填写声明信息的真实性、准确性，如有不实告知，贵公司有权解除保险合同，并对合同解除前发生的保险事故不承担保险金给付责任。'
    }
  },
  mounted () {
    
  },
  methods: {
    // 勾选项check
    pick () {
      this.active = !this.active
    },
    toPay () {
      if (!this.active) {
        this.$toast('请您先勾选 我已阅读 选项框哟~')
        return false
      }
      this.$router.push('/pay')
    }
  }
}
</script>

<style scoped lang="scss">
@media only screen and (min-device-width : 768px) and (max-device-width : 1024px) {
  .ag-wrap{
    margin-bottom: 40px!important;
  }
}
  .agreement-main{
    background: #fafafa url('~@/assets/images/nav-bg.png') no-repeat;
    background-size: 100% 310px;
    min-height: 100vh;
    min-width: 100vw;
    position: fixed;
    .ag-wrap{
      width: 600px;
      height: 700px;
      border-radius: 30px;
      background-color: #fff;
      margin: 0 auto 100px;
      padding: 0 30px;
      box-sizing: border-box;
      .title{
        color: #999;
        font-size: 22px;
        text-align: center;
        padding: 15px 0;
      }
      .content{
        font-size: 22px;
        color: #999;
        height: 570px;
        overflow-y: auto;
        line-height: 2;
      }
      .already{
        margin-top: 20px;
        align-items: baseline;
        .default {
            display: inline-block;
            width: 17px;
            height: 17px;
            border: 3px solid #F2F2F2;
            border-radius: 5px;
            background-color: #F2F2F2;
            margin-right: 10px;
          }
          .default-active{
            background-color: #00b2bc;
          }
          p{
            font-size: 24px;
            color: #999;
          }
      }
    }
  }
</style>