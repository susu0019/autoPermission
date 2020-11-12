<template>
  <div id="app">
    <MHeader />
    <SideBar />
    <PageBoard />
    <router-view/>
  </div>
</template>

<script>
import MHeader from '@/components/MHeader'
import SideBar from '@/components/SideBar'
import PageBoard from '@/components/PageBoard'
export default {
  name: 'App',
  components: {
    MHeader,
    SideBar,
    PageBoard
  }
}
</script>

<style>

</style>
