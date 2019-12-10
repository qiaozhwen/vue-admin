<template>
  <div>
    <side-bar></side-bar>
    <div class="body-content">
      <header-component></header-component>
      <div class="main-content">
        <div class="content-left">
          <table class="table table-hover table-bordered">
            <thead>
            <tr>
              <th>#</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="item in arr">
              <th scope="row">{{item}}</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            </tbody>
          </table>
        </div>
        <div class="content-right">
          <ul class="nav nav-tabs">
            <li class="active">
              <a>首页</a>
            </li>
            <li><a>切片</a></li>
            <li><a>报告</a></li>
          </ul>
          <div style="overflow-y: auto">
            <h1>基础信息</h1>
            <div class="right-show-one">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">立即创建</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </div>
            <h1>切片</h1>
            <div class="right-show-second">
              <img src="../../images/qiepian.png">
            </div>
            <h1>会诊</h1>
            <div class="right-show-three">
              <el-form ref="form" :model="form" label-width="80px">
                <el-form-item label="活动名称">
                  <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="活动区域">
                  <el-select v-model="form.region" placeholder="请选择活动区域">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="活动时间">
                  <el-col :span="11">
                    <el-date-picker type="date" placeholder="选择日期" v-model="form.date1" style="width: 100%;"></el-date-picker>
                  </el-col>
                  <el-col class="line" :span="2">-</el-col>
                  <el-col :span="11">
                    <el-time-picker placeholder="选择时间" v-model="form.date2" style="width: 100%;"></el-time-picker>
                  </el-col>
                </el-form-item>
                <el-form-item label="即时配送">
                  <el-switch v-model="form.delivery"></el-switch>
                </el-form-item>
                <el-form-item label="活动性质">
                  <el-checkbox-group v-model="form.type">
                    <el-checkbox label="美食/餐厅线上活动" name="type"></el-checkbox>
                    <el-checkbox label="地推活动" name="type"></el-checkbox>
                    <el-checkbox label="线下主题活动" name="type"></el-checkbox>
                    <el-checkbox label="单纯品牌曝光" name="type"></el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="特殊资源">
                  <el-radio-group v-model="form.resource">
                    <el-radio label="线上品牌商赞助"></el-radio>
                    <el-radio label="线下场地免费"></el-radio>
                  </el-radio-group>
                </el-form-item>
                <el-form-item label="活动形式">
                  <el-input type="textarea" v-model="form.desc"></el-input>
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">立即创建</el-button>
                  <el-button>取消</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sideBar from '../components/sidebar/sideBar'
import header from '../components/header/header'
export default {
  name: 'caseView',
  data () {
    return {
      arr: [1,2,3,4,5,6,7,8,9,10],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  },
  components: {
    sideBar: sideBar,
    headerComponent: header
  },
  mounted () {
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>

<style scoped>

  .body-content{
    margin-left: 68px;
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
  .main-content{
    display: flex;
  }
  .content-left{
    width: 400px;
  }
  .content-right{
    flex: 1;
  }
  .right-show-second{
    width: 100%;
    min-height: 700px;
    text-align: center;
    line-height: 700px;
  }
  @media screen  and (max-width: 750px) {
    .body-content{
      margin-left: 56px;
    }
  }
</style>
