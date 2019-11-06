<template>
  <div>
    <side-bar></side-bar>
    <router-view></router-view>
  </div>
</template>

<script>
import sideBar from '../components/sideBar'
export default {
  name: 'firstPage',
  data () {
    return {
    }
  },
  components: {
    sideBar: sideBar
  }
}
</script>

<style scoped>

</style>
