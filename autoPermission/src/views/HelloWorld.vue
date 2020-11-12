<template>
  <div>
    <h1>首页</h1>
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
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
