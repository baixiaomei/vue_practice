<template>
  <div>
    <mescroll-vue  ref='mescroll' :down='mescrollDown' :up='mescrollUp' @init='mescrollInit'>
      <div v-for='(item, index) in dataList' :key='index'>{{item}}</div>
    </mescroll-vue>
  </div>
</template>
<script>
// import MescrollVue from 'mescroll.js/mescroll.vue'
export default {
  data () {
    return {
      // dataList: [1, 2, 3, 4],
      // mescroll: null,
      // MescrollDown: {}, // 下拉刷新的配置
      // mescrollUp: {
      //   callback: this.upCallback, // 上拉回调
      // },
      // dataList: [] // 列表数据
    }
  },
  methods: {
    // mescrollInit (mescroll) {
    //   this.mescroll = mescroll // 如果this.mescroll对象没有使用到,则mescrollInit可以不用配置
    // },
    // upCallback (page, mescroll) {
    //   this.dataList = this.dataList.concat(this.dataList)
    //   this.$nextTick(() => {
    //     mescroll.endSuccess(this.dataList)
    //   })
    // }
  },
  // components: {
  //   MescrollVue
  // },
  mounted () {
    console.log('index')
  }
}
</script>
<style>
  .mescroll {
    position:fixed;
    top:44px;
    bottom:0;
    height:auto;
  }
</style>


