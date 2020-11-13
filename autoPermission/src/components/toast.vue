<template>
  <div>
    <div class="container" v-if='show'>
      <div>{{text}}</div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.container {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100px;
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #fff;
  background: rgb(0, 0, 0, 0.8);
  border-radius: 10px;
  box-sizing: border-box;
}
</style>
