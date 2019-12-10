<template>
  <div class="sideBar" :class="{'sideBar-width': isCollapse}">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        class="el-menu-vertical-demo"
        background-color="#304156"
        text-color="#fff"
        active-text-color="#ffd04b"
        style="border: none"
        default-openeds="[/case, /personal]"
        :collapse=isCollapse
        mode="vertical"
      >
      <side-bar-item v-for="item in routes" :key="item.path" :item="item" :base-path="item.path" :collapse="isCollapse"></side-bar-item>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script>
import sideBarItem from './sideBarItem'
export default {
  name: 'sideBar',
  components: {
    sideBarItem: sideBarItem
  },
  data () {
    return {
    }
  },
  props: {
  },
  mounted () {
  },
  computed: {
    routes () {
      return this.$router.options.routes
    },
    isCollapse () {
      if (this.$store.state.collapseStatus !== 'noStatus') {
        return this.$store.state.collapseStatus === 'collapse'
      }
      return document.body.clientWidth <= 750
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  .sideBar{
    /*width: 210px !important;*/
    background: #304156;
    height: 100%;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
  }
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 210px;
    min-height: 400px;
  }

</style>
