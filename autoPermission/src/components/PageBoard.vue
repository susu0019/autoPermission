<template>
  <div class="page-board">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'PageBoard'
}
</script>

<style>
.page-board{
    position: fixed;
    top:0;
    left:0;
    padding:90px 30px 30px 230px;
    width: 100%;
    height: 100%;
}
</style>
