<template>
  <div class="code-input-main">
    <div class="code-input-main-item">{{code[0]}}</div>
    <div class="code-input-main-item">{{code[1]}}</div>
    <div class="code-input-main-item">{{code[2]}}</div>
    <div class="code-input-main-item">{{code[3]}}</div>
    <div class="code-input-main-item">{{code[4]}}</div>
    <div class="code-input-main-item">{{code[5]}}</div>
    <input class="code-input-input" v-model="code" maxlength="6" @input='getCode' type="number"/>
  </div>
</template>
<script>
import $ from 'jquery'
export default {
  data () {
    return {
      code: ''
    }
  },
  mounted () {
    console.log($)
    // document.getElementsByClassName('code-input-main-item')[this.code.length].css('border-bottom', '1px solid blue')
  },
  methods: {
    getCode () {
      console.log('触发')
      console.log(this.code)
      // var arr = document.getElementsByClassName('code-input-main-item')
      var len = this.code.length
      console.log(len)
      console.log(document.getElementsByClassName('code-input-main-item')[len])
      document.getElementsByClassName('code-input-main-item')[len - 1].style.borderBottomColor = 'red'
      $('.code-input-main-item').eq(len).addClass('active').siblings().removeClass('active')
    }
  }
}
</script>
<style>
.code-input-input {
  position: absolute;
  width: 100%;
  outline: none;
  color: #fff;
  text-shadow: 0 0 0 transparent;
  width: 100%;
  top: 0;
  left: 0;
}
.code-input-main {
  position: relative;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}
.code-input-main-item {
  /* font-family: time-font-myself; */
  width: 44px;
  height: 44px;
  opacity: 0.8;
  border-bottom: solid #000 1px;
  margin: 1px;
  text-align: center;
  padding-bottom: 0;
  font-size: 30px;
  color: #000;
}
</style>
