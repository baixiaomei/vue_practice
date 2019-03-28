<template>
  <div class='address'>
    <li>
      <div class='left'>所在地区</div>
      <div class='right' @click='toAddress'>
        <div class='res' >{{city}}</div>
        <i class='arrow-i'></i>
      </div>
    </li>
    <transition name='slide-fade'>
      <v-distpicker type='mobile' @selected='selected' v-show="addInp"></v-distpicker>
    </transition>
    <div class='mask' v-show='mask' @click='closeMask'></div>
  </div>
</template>
<script>
import VDistpicker from 'v-distpicker'
export default {
  data () {
    return {
      city: '请选择',
      addInp: false,
      mask: false
    }
  },
  components: {
    VDistpicker
  },
  methods: {
    closeMask () {
      this.addInp = false
      this.mask = false
    },
    toAddress () {
      this.mask = true
      this.addInp = true
    },
    // 省市区三级联动
    selected (data) {
      this.mask = false
      this.addInp = false
      this.city = data.province.value + ' ' + data.city.value + ' ' + data.area.value
    }
  }
}
</script>
<style  lang='stylus'>
.address{
  width:100%;
  li{
    width:100%;
    box-sizing:border-box;
    padding:10px 5%;
    display: block;
    display:flex;
    justify-content: space-between;
    .left{
      color:#000;
      font-size:14px;
      min-width:25%;
      text-align left
    }
    .right{
      color:#636060;
      display:flex;
      align-items:center;
      text-align left
      .res{
        font-size:12px;
      }
      .arrow-i{
        width:8px;
        height:8px;
        border-top:2px solid #ddd;
        border-right:2px solid #ddd;
        transform:rotate(45deg);
      }
    }
  }
}
.mask{
  position: fixed;
  top:0;
  left:0;
  right:0;
  bottom:0;
  z-index:2;
  background:rgba(0, 0, 0, 0.6);
}
.distpicker-address-wrapper{
  position: absolute;
  top:50%;
  z-index:3;
  width:100%;
  background:#fff;
  height:50%;
  overflow-y scroll
}
/* 可以设置不同的进入和离开动画 */
/* 设置持续时间和动画函数 */
.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateY(200px);
  opacity:0;
}
</style>


