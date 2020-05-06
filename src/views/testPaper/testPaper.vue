<template>
  <div class="paper-main">
    <custom-header title="问卷测评"></custom-header>
    <!-- 问卷数目 -->
    <div class="paper-number flex-center">
      <span>{{current}}</span> / {{total}}
    </div>
    <!-- 进度条 -->
    <div class="paper-progress flex">
      <i :style="{width: (current) / total * 100 + '%'}"></i>
    </div>
    <!-- 题目 -->
    <div class="paper">
      <!-- 问题 -->
      <div class="paper-title">{{list[current - 1].title}}（{{list[current - 1].type == 0 ? '多选' : '单选'}}）</div>
      <!-- 答案 -->
      <div class="paper-answer-wrap">
        <p 
        :class="['paper-answer', item.is_selected == 1 ? 'paper-answer-active' : '']"
        v-for="(item, index) in list[current - 1].optionlist" :key="index"
        @click="choose(item, list[current - 1].type)"
        >
          {{item.title}}
        </p>
      </div>
    </div>
    <!-- 按钮组 -->
    <div :class="['button-group', current == 1 ? 'flex-end' : 'flex-between']">
      <span v-show="current !== 1" @click="pre()">上一题</span>
      <button v-if="current !== total" @click="next()">下一题</button>
      <button v-else @click="submit()">提交</button>
    </div>
  </div>
</template>

<script>
import list from '@/paper.js'
export default {
  name: 'testPaper',
  data () {
    return {
      current: 1,
      total: 2,
      list: list
    }
  },
  activated () {
    // console.log('activated')
  },
  created () {
    this.$nextTick(()=>{
      this.init()
    })
  },
  mounted () {
    
  },
  methods: {
    // 获取问卷测评的题目
    init () {
      this.$api.getAllTest().then(res => {
        this.list = res.data
        this.total = this.list.length
        // 为每个答案选项添加是否选中的字段
        this.list.forEach((item, index) => {
          item.optionlist.forEach((optionItem, optionIndex) => {
            this.$set(optionItem, 'is_selected', -1)
          })
        })
      })
    },
    // 点击答案选项
    choose (item, type) {
      // 多选：如果选中变为未选中，未选中变为选中
      if (type == 0) {
        if (item.is_selected == 1) {
          item.is_selected = -1
          this.setFlag()
        } else {
          item.is_selected = 1
          this.setFlag()
        }
      } else {
        // 单选： 先遍历所有选项把状态变为未选中
        let answerArray = this.list[this.current - 1].optionlist
        answerArray.forEach((items, index) => {
          items.is_selected = -1
        })
        // 设置当前item的状态为选中
        item.is_selected = 1
        this.setFlag()
      }
    },
    // 下一题
    next () {
      this.current++
    },
    // 上一题
    pre () {
      this.current--
    },
    // 纪录这道题用户是否勾选了
    setFlag () {
      let answer = this.list[this.current - 1].optionlist
      let count = 0
      for (let i = 0; i < answer.length; i++) {
        if (answer[i].is_selected == -1) {
          count++
          if (count == answer.length) {
            this.list[this.current - 1].is_ready = -1
          } else{
            this.list[this.current - 1].is_ready = 1
          }
        }
      }
    },
    // 提交
    async submit () {
      let res = await this.full()
      if (res !== this.list.length) {
        this.$toast('您还有题目尚未完成，请先完善')
      } else {
        // chooseSubscribeId为选择的测评id
        let submit_obj = {order_id: this.$store.state.chooseSubscribeId, answer_list: []}
        let submitList = await this.fetchData()
        submit_obj.answer_list = submitList
        this.$api.submitAllTest(
          submit_obj
        ).then(res => {
          this.$router.push('/submitTest')
        }) 
      }  
    },
    // 检验所有题目，是否有未做的。
    full () {
      return new Promise((resolve,reject) => {
        let count = 0
        this.list.forEach((item, index) => {
          if(item.is_ready == 1){
            count++
          }
        })
        resolve(count)
      })
    },
    /*
     *  提交前对所有答案的数据处理成此格式：( -1： 未选中， 1： 选中)
     *  [
     *    { id: 1, is_selected: -1, risk_liver: 0, risk_lung: 0, risk_intestines: 0, risk_stomach: 0, risk_esophagus: 0 },
     *    ...
     *  ]
     */
    fetchData () {
      return new Promise((resolve, reject) => {
        let dataList = []
        // 先遍历最外层数组获取到测评的每道题目
        this.list.forEach((item, index) => {
          // 再遍历答案列表数组
          item.optionlist.forEach((optionItem, optionIndex) => {
            // option对象的初始化必须置于此处，否则可能存在对象深浅拷贝的问题
            let option = {}
            option.id = optionItem.id
            option.is_selected = optionItem.is_selected
            option.risk_liver = optionItem.risk_liver
            option.risk_lung = optionItem.risk_lung
            option.risk_intestines = optionItem.risk_intestines
            option.risk_stomach = optionItem.risk_stomach
            option.risk_esophagus = optionItem.risk_esophagus
            // 把该对象push到数组中用于提交接口中的参数
            dataList.push(option)
          })
        })
        // 用resolve接收dataList作为函数返回值
        resolve(dataList)
      })
    }
  }
}
</script>

<style scoped lang="scss">
  .paper-main{
    overflow-x: hidden;
    // 问卷数目
    .paper-number{
      font-size: 28px;
      padding: 30px 0 20px;
      box-sizing: border-box;
      span{
        color: #00b2bc;
        margin-right: 8px;
      }
    }
    // 进度条
    .paper-progress{
      width: 600px;
      height: 20px;
      margin: 0 auto;
      border-radius: 30px;
      background-image: linear-gradient(to bottom, #eaeaea, #f5f5f5);
      i{
        display: inline-block;
        background-color: #00b2bc;
        border-radius: 30px;
        height: 20px;
        transition: all .5s ease-in-out;
      }
    }
    // 题目
    .paper{
      width: 600px;
      margin: 0 auto;
      .paper-title{
        width: 100%;
        padding: 30px 0;
        box-sizing: border-box;
        font-size: 32px;
        animation: leftIn .6s cubic-bezier(0.215, 0.610, 0.355, 1);
      }
      .paper-answer-wrap{
        width: 100%; 
        .paper-answer{
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
        background-color: #f1f1f1;
        color: #666;
        border-radius: 10px;
        margin-bottom: 20px;
        position: relative;
        }
        .paper-answer:nth-child(2n){
          animation: leftIn .6s cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        .paper-answer:nth-child(2n+1){
          animation: rightIn .8s cubic-bezier(0.215, 0.610, 0.355, 1);
        }
        .paper-answer:last-child{
          margin-bottom: 80px;
        }
        .paper-answer-active{
          background-color: #00b2bc;
          color: #fff;
        }
      }
    }
    // 按钮组
    .button-group{
      width: 600px;
      margin: 0 auto;
      padding: 30px 0 75px;
      box-sizing: border-box;
      span{
        color: #666;
        font-size: 28px;
      }
      button{
        font-size: 28px;
        width: 260px;
        height: 65px;
        text-align: center;
        line-height: 65px;
        border-radius: 50px;
        color: #fff;
        background-color: #00b2bc;
      }
    }
  }
</style>