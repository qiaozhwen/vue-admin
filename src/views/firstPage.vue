<template>
  <div>
    <side-bar></side-bar>
    <div class="body-content">
      <header-component></header-component>
      <transition name="slide-fade">
        <section>
         <router-view></router-view>
        </section>
      </transition>
    </div>
  </div>
</template>

<script>
import sideBar from '../components/sidebar/sideBar'
import header from '../components/header/header'
export default {
  name: 'firstPage',
  data () {
    return {
    }
  },
  mounted () {
    // this.$notify({
    //   title: '成功',
    //   message: '欢迎使用远程会诊系统',
    //   type: 'success'
    // })
  },
  components: {
    sideBar: sideBar,
    headerComponent: header
  }
}
</script>

<style scoped>
  .body-content{
    margin-left: 210px;
    min-height: 100%;
    position: relative;
  }
  .slide-fade-enter-active {
    transition: all .2s ease;
  }
  .slide-fade-leave-active {
    transition: all .5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  }
  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
