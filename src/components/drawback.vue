<template>
  <div class='drawback'>
    <div class='key_value'>
      <dl>
        <dt>退款方式</dt>
        <dd class='money_strong'>¥194.19</dd>
      </dl>
      <dl>
        <dt>支付方式</dt>
        <dd>微信支付</dd>
      </dl>
      <dl>
        <dt>加油站名称</dt>
        <dd>北京广开源加油站</dd>
      </dl>
      <dl>
        <dt>交易单号</dt>
        <dd>ZF000000000010101</dd>
      </dl>
      <dl>
        <dt>枪号</dt>
        <dd>3号</dd>
      </dl>
      <dl>
        <dt>油号</dt>
        <dd>92#</dd>
      </dl>
      <dl>
        <dt>加油升数</dt>
        <dd>100L</dd>
      </dl>
    </div>
    <div class='key_value'>
      <dl>
        <dt>直降优惠</dt>
        <dd class='money_blue'>¥194.19</dd>
      </dl>
      <dl>
        <dt>优惠券</dt>
        <dd>未使用</dd>
      </dl>
      <dl>
        <dt>合计优惠</dt>
        <dd class='money_blue'>¥5元</dd>
      </dl>
    </div>
    <div class='key_value'>
      <dl class='key_value_total'>
        <dt>合计已支付</dt>
        <dd><span>¥</span><span>194.19</span></dd>
      </dl>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  beforeCreate () {
    window.document.title = '申请退款'
  }
}
</script>
<style>
.drawback{
  width:100%;
  box-sizing: border-box;
  padding:10px 5%;
}
.key_value{
  width:100%;
}
dl{
  width: 100%;
  display:flex;
  margin:16px 0;
  justify-content: space-between;
}
dt{
  text-align:left;
}
dd{
  text-align:right;
}
dd.money_strong{
  font-weight: 500;
}
dd.money_blue{
  color: blue;
}
dl.key_value_total dt{
  font-size:18px;
  font-weight: 500;
}
dl.key_value_total dd{
  color:blue;
}
dl.key_value_total dd span:nth-child(1){
  font-size:12px;
}
dl.key_value_total dd span:nth-child(2){
  font-size:22px;
}
</style>


