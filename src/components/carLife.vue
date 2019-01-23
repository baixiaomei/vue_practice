<template>
  <div class='carLift'>
    <div class='ad_content_1'>
      <div class='ad_content_title'>
        <div>当前活动</div>
        <div class='grey'>往期活动</div>
      </div>
      <img src="../../assets/activity/guafen.jpeg" alt="">
    </div>
    <div class='ad_content_2'>
      <div class='ad_content_title'>
        <div>热门推荐</div>
        <div class='grey'></div>
      </div>
      <div class='ad_img_list'>
        <img src="../../assets/activity/act2.jpeg" alt="">
        <img src="../../assets/activity/act1.jpeg" alt="">
      </div>
    </div>
    <div class='carLift_server'>
      <ul class="carLift-nav">
        <li class="carlift__item" @click='selectCarLife(1)' :class='{"carlift__item_active": actId === 1}'>车主服务</li>
        <li class="carlift__item" @click='selectCarLife(2)' :class='{"carlift__item_active": actId === 2}'>金融服务</li>
        <li class="carlift__item" @click='selectCarLife(3)' :class='{"carlift__item_active": actId === 3}'>车辆服务</li>
      </ul>
      <v-touch v-on:swipeleft='onSwipeLeft' class='v_touch' v-on:swiperight="onSwipeRight">
        <transition :name="direct" mode='out-in'>
          <div v-show='actId === 1' :key='1' class='carLift_list'>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾1</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
          </div>
        </transition>
        <transition :name="direct" mode='out-in'>
          <div v-show='actId === 2' :key='2' class='carLift_list'>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾2</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
          </div>
        </transition>
        <transition :name="direct" mode='out-in'>
          <div v-show='actId === 3' :key='3' class='carLift_list'>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾3</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
            <dl>
              <dt>
                <img src="../../assets/activity/w.jpeg" alt="">
              </dt>
              <dd>悟空自驾</dd>
            </dl>
          </div>
        </transition>
      </v-touch>
    </div>
  </div>
</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  data () {
    return {
      actId: 1,
      direct: 'right',
      swiperOption: {
        loop: true,
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar'
        }
      }
    }
  },
  components: {
    swiper,
    swiperSlide
  },
  methods: {
    selectCarLife (n) {
      this.actId = n
    },
    onSwipeLeft () {
      this.direct = 'slide-fade_left'
      console.log(1)
      if (this.actId === 1) {
        this.actId = 3
      } else {
        this.actId--
      }
    },
    onSwipeRight () {
      this.direct = 'slide-fade_right'
      if (this.actId === 3) {
        this.actId = 1
      } else {
        this.actId++
      }
    }
  }
}
</script>
<style lang='stylus'>
.carLift{
  width 100%
  box-sizing border-box
  padding 20px 5%
  .ad_content_1{
    width 100%
    img{
      display block
      width 100%
    }
  }
  .ad_content_2{
    margin-top 20px
    width 100%
    .ad_img_list{
      display flex
      justify-content space-between
      img{
        width 318px
      }
    }
  }
}
.ad_content_title{
  display flex
  justify-content space-between
  font-size 30px
  color #151820
  line-height 60px
  .grey{
    color #CACACA
  }
}
// 车生活滑动
.carLift_server{
  width 100%
  padding-top 40px
  .carLift-nav{
    display flex
    justify-content space-between
    font-size 30px
    color #151820
    .carlift__item{
      line-height 50px
    }
    .carlift__item_active{
      border-bottom 5px solid $color-base
    }
  }
}
.carLift_list{
  width 100%
  padding 40px 0
  overlfow hidden
  clear: both
  zoom: 1
  dl{
    float left
    width 22%
    margin-right 4%
    margin-top 10px
    dt{
      img{
        width 78px
        display block
        margin 0 auto
      }
    }
    dd{
      font-size 24px
      color #151820
      text-align center
      line-height 58px
    }
  }
  dl:nth-child(4n){
    margin-right 0
  }
}

</style>
