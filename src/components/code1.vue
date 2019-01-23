<template>
  <div class='login'>
    <div class='telphone'>
      <p>请输入您的手机号码</p>
      <div class='tel'>
        <input type="tel" id='tel' maxlength="11" @focus="inputTel" v-model='tel'>
        <span style='display:inline-block;width:30px;'>
          <svg class="icon" aria-hidden="true">
            <use xlink:href="#icon-duigoutianchong-"></use>
          </svg>
        </span>
      </div>
    </div>
    <div class="getCodeMsg">
      <input  class='code' @change="changeCode(1)" type="tel" maxlength="1" name="code" pattern="[0-9]*" />
      <input class='code' @change="changeCode(2)" type="tel" maxlength="1" name="code" pattern="[0-9]*"/>
      <input class='code' @change="changeCode(3)" type="tel" maxlength="1" name="code" pattern="[0-9]*"/>
      <input class='code' @change="changeCode(4)" type="tel" maxlength="1" name="code" pattern="[0-9]*"/>
    </div>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      tel: '', // 电话号码
      code: '', // 二维码
      arr: [0, 0, 0, 0]
    }
  },
  mounted () {
  },
  methods: {
    inputTel (e) {
      console.log(e)
      $('.tel').addClass('active')
    },
    changeCode (n) {
      this.arr[n - 1] = $('input').eq(n - 1).val()
      this.code = this.arr.join('')
      console.log(this.code)
    }
  }
}
</script>
<style>
.login{
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px 20px;
}
.telphone p{
  text-align: left;
  color:#666;
  font-size:12px;
}
.tel{
  border-bottom: solid 1px #ddd;
  width: 80%;
  display: flex;
  padding: 5px
}
.active{
  border-bottom:solid 2px #447DFA;
}
#tel{
  padding: 0px 10px;
  width: 100%;
  text-align: left;
  display: block;
  height: 20px;
  outline: none;
  font-size: 36px;
  color:#000;
  text-align: left;
  caret-color: #447DFA;
  border: none;
  outline: none;
}
.getCodeMsg{
  width: 70%;
  margin-left:15%;
  display: flex;
  justify-content: space-around;
  margin-top:20px;
}
.getCodeMsg input{
  margin:10px 0;
  width:18%;
  text-align: center;
  display: block;
  float: left;
  height: 20px;
  border-bottom: solid 2px #ddd;
  outline: none;
  text-shadow: 0 0 0 transparent;
  font-size: 36px;
  color:#000;
  caret-color: #447DFA;
}
input:focus{
  border-bottom:solid 3px #447DFA;
}
</style>
