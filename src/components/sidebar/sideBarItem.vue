<template>
  <div class="menu-wrapper" :class="{'isCollapse': isCollapse}">
<!--    无子节点逻辑-->
    <template v-if="!item.children">
      <router-link :to="item.path">
        <el-menu-item :index="item.path">
          <i class="el-icon-setting"></i>
          <span slot="title">{{item.meta.title}}</span>
        </el-menu-item>
      </router-link>
    </template>
<!--    有子节点逻辑-->
    <el-submenu v-else :index="item.path" style="overflow: hidden">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span slot="title">{{item.meta.title}}</span>
      </template>
      <sideBarItem
        v-for="child in item.children"
        :item="child"
        :key="child.path"
        :base-path="child.path"
        class="nest-menu"
      ></sideBarItem>
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: 'sideBarItem',
  data () {
    return {
    }
  },
  props: {
    // route object
    item: {
      type: Object,
      required: true
    },
    isNest: {
      type: Boolean,
      default: false
    },
    basePath: {
      type: String,
      default: ''
    },
    isCollapse: {
      type: Boolean
    }
  }
}
</script>

<style scoped>
  .isCollapse{
  }
</style>
