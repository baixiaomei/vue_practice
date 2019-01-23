<template>
  <div class="login_tel">
    <div class='login_title'>
      <h2>欢迎登录车主邦</h2>
      <p class='login_tip'>请输入您的手机号码</p>
    </div>
    <div class='login_content'>
      <input type="tel" id='tel' maxlength="11" @input='phoneNumInit' placeholder="请输入你的手机号码"  v-model='phoneNum'>
      <!-- <span class='telStatus'>
        <img v-show='!phoneFull' src='../../assets/signin/unselect.png'>
        <img v-show='phoneFull' src='../../assets/signin/select.png'>
      </span> -->
    </div>
    <div class='login_content'>
      <input type="tel" id='tel' maxlength="4"  placeholder="请输入你的验证码"  v-model='msgCode' />
      <button class='codeBtn'  @click='sendMsg' :disabled="dis">{{validCode}}</button>
    </div>
    <div  class='button_log' @click='userLogin' style='margin-top:300px;' >登录</div>
    <div class='agreement' @click='toHelp'><img src="../../assets/signin/select.png" alt=""> 同意<span>《用户服务协议》</span>和<span>《用户授权服务协议》</span></div>
    <ErrormesFun ref="Errormes"></ErrormesFun>
  </div>
</template>

<script>
import ErrormesFun from '../../components/common/Errormes.vue'
export default {
  name: 'signin',
  data () {
    return {
      validCode: '获取验证码',
      validTime: 60,
      interval: null,
      dis: false,
      phoneFull: false, // 手机号的完整性
      phoneNum: '', // 电话号码
      msgCode: '' // 短信验证码
    }
  },
  components: {
    ErrormesFun
  },
  methods: {
    toHelp () {
      this.$router.push({ name: 'helpdetail', params: { title: '登录-用户协议', code: 4010 } })
    },
    // 输入验证码
    sendMsg () {
      this.dis = true
      if (!this.phoneNum || !(/^1[3456789]\d{9}$/.test(this.phoneNum))) {
        this.$refs.Errormes.ErrormesFun('请输入正确的手机号')
        return false
      }
      this.$axios.post('/begin/sendMsg', {
        phone: this.phoneNum
      }).then((res) => {
        if (res.code === 200) {
          this.countdown()
        } else {
          this.dis = false
          this.$refs.Errormes.ErrormesFun(res.message)
        }
      })
    },
    phoneNumInit () {
      if (!this.phoneNum || !(/^1[3456789]\d{9}$/.test(this.phoneNum))) {
        this.phoneFull = false
      } else {
        this.phoneFull = true
      }
    },
    /**
     * 登录
     */
    userLogin () {
      if (!this.msgCode) {
        this.$refs.Errormes.ErrormesFun('验证码错误，请重新输入')
        return false
      }
      this.$axios.post('/begin/wechatRegisterLogin4MPAppV4', {
        platformType: this.$cookie.get('wx__platform_type') ? this.$cookie.get('wx__platform_type') : '',
        wechatToken: this.$cookie.get('wx__wechat_token') ? this.$cookie.get('wx__wechat_token') : '',
        phone: this.phoneNum,
        code: this.msgCode
      }).then((res) => {
        if (res.code === 200) {
          this.$cookie.set('wx__signin_token', res.result.token)
          let obj = res.result
          // 存储用户信息
          this.$cookie.set('wx__UserInfo', res.result)
          if (!obj.authenStatus) {
            // 如果没有车主认证则跳到选择车辆性质页面
            this.$router.push({ name: 'selectNature' })
          } else if (!obj.oilNoStatus) {
            this.$router.push({ name: 'preferAccount' })
          } else {
            this.$router.push({ name: 'gas' })
          }
        }
      })
    },
    /**
     * 获取验证码的倒计时
     */
    countdown () {
      this.validTime = 60
      this.interval = setInterval(() => {
        if (this.validTime === 0) {
          clearInterval(this.interval)
          this.dis = false
          this.validCode = '获取验证码'
          this.validTime = 60
        } else {
          this.validTime--
          this.validCode = this.validTime + 's重新发送'
        }
      }, 1000)
    }
  },
  beforeRouteEnter (to, from, next) {
    next(vm => {
      vm.toUrl = from.name
    })
  }
}
</script>

<style lang="stylus" scoped>
@import "~@/stylus/signin/index"
.login_content{
  border-bottom: solid 3px $color-base;
  display: flex;
  padding: 5px
  display flex
  justify-content space-between
  align-items center
  margin-bottom 80px
  .codeBtn{
    width 340px
    background $color-base
    color #ffffff
    padding 20px 0
    border-radius 50px
    text-align center
  }
}
.active{
  border-bottom:solid 2px #447DFA;
}
.telStatus{
  display:inline-block;
  width:30px;
  img{
    width 60px
  }
}

.agreement{
  font-size 24px
  text-align center
  margin-top 48px
  color #9b9b9b
  span{
    color #000
  }
  img{
    width 50px
    vertical-align middle
  }
}
</style>
