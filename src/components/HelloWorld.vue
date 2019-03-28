<template>
  <div class='box'>
    <div id="list-demo" class="demo">
      <button v-on:click="add">Add</button>
      <button v-on:click="remove">Remove</button>
      <!--保证key的唯一性-->
      <div class='box'>
        <transition-group name="list" tag="div" mode="out-in" >
          <div v-for="item in items" v-bind:key="item" class="list-item">{{ item }}</div>
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [1, 2, 3],
      nextNum: 10,
      interval: null
    }
  },
  computed: {
    randomIndex () {
      return Math.floor(Math.random() * this.items.length)
    }
  },
  mounted () {
    this.interval = setInterval(() => {
      this.loop()
    }, 3000)
  },
  methods: {
    loop () {
      this.items.splice(0, 0, this.nextNum++)
      this.items.length = 4
    },
    add () {
      this.loop()
    },
    remove () {
      this.items.splice(this.randomIndex, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.list-item {
  transition: all 1s;
  margin-bottom: 20px;
}
.list-enter-active, .list-leave-active {
  transition: all 1s;
}
.list-enter{
  opacity: 0;
  transform: translateY(-30px);
}
.list-leave-to{
  opacity: 0;
  transform: translateY(30px);
}

.list{
  display:block;
  line-height: 40px;
}
.box{
  /* overflow:hidden; */
  height:140px;
  margin-top:30px;
}
</style>
