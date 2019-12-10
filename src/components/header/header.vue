<template>
    <div class="header">
      <div class="left-navgtor">
        <el-breadcrumb separator="/" style="display: inline-block">
          <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
          <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          <el-breadcrumb-item>活动列表</el-breadcrumb-item>
          <el-breadcrumb-item>活动详情</el-breadcrumb-item>
        </el-breadcrumb>
      </div>
      <div class="right-navgtor">
          <img class="right-avator" src="../../../static/images/my.png"/>
      </div>
    </div>
</template>

<script>
export default {
  name: 'header'
}
</script>

<style scoped>
  .header{
    height: 75px;
    padding: 0 25px;
  }
  .left-navgtor, .right-navgtor{
    line-height: 75px;
    height: 100%;
  }
  .left-navgtor{
    float: left;
  }
  .right-navgtor{
    float: right;
  }
  .right-avator{
    width: 50px;
    height: 50px;
  }
</style>
