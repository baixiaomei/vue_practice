<template>
  <div>
    <ul class='oilList'>
      <li v-for="(item, index) in scops.items" @click="selectScope(item, index)" :key="index">
        <p :class="{'active': item.id === selected.scope}">{{item.value}}</p>
      </li>
    </ul>
  </div>
</template>
<style lang='stylus'>
ul.oilList{
  overflow: hidden;
  list-style-type: none;
  background: #fff;
  margin-top: 10px;
  display: block
  li{
    float: left;
    width: 33.333%;
    margin: 10px 0;
    box-sizing: border-box;
    text-align: center;
    padding 0
    p{
      border:1px solid #aaa;
      width:80%;
      margin: 0 10%;
      border-radius: 50px;
      padding: 10px 0;
      box-sizing: border-box;
      font-size 24px
    }
  }
  .active{
    background: #447DF5;
    color: #fff;
    border: 1px solid #447DF5;
  }
  li:nth-child(3n+1){
    p{
      margin-left: 0;
    }
  }
  li:nth-child(3n){
    p{
      margin-left: 20%;
      margin-right: 0;
    }
  }
}
</style>

