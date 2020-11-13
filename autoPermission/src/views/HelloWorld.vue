<template>
  <div>
    <h1>首页</h1>
    <button @click="clickBtn">点击</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {

    }
  },
  mounted () {
    this.$store.dispatch('setUserRouters')
    this.$store.dispatch('setAuth')
  },
  methods: {
    clickBtn () {
      this.$toast('弹窗出现')
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
