<template>
  <div class="table-box">
    <div>
      <input type="text" class="form-control search-input" placeholder="搜索">
    </div>
    <div class="searchCondition">
      <el-radio-group v-model="radio">
        <el-radio-button v-for="(item, index) in radioStatus" :key="index" :label="item.name"></el-radio-button>
      </el-radio-group>
    </div>
    <div style="margin-top: 50px">
      <div>
        <h2>初诊</h2>
      </div>
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr  @click="handleClick">
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div style="margin-top: 50px">
      <div>
        <h2>复核</h2>
      </div>
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </table>
    </div>
    <div style="margin-top: 50px">
      <div>
        <h2>转诊</h2>
      </div>
      <table class="table table-bordered table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'caseStatus',
  data () {
    return {
      radio: '全部',
      radioStatus: [{name: '全部', type: 'all'}, {name: '常规', type: 'normal'}, {name: '会诊', type: 'meet'}]
    }
  },
  mounted () {
    console.log(this.$route.params.type)
  },
  methods: {
    handleClick () {
      this.$store.dispatch('collapseSideBar', true)
      this.$router.push({
        path: '/caseView',
        query: {id: '123'}
      })
    }
  }
}
</script>

<style scoped>
  .table-box{
    width: 100%;
    box-sizing: border-box;
    padding: 0 50px;
  }
  .search-input{
    width: 200px;
  }
  .searchCondition{
    margin-top: 50px;
  }

</style>
