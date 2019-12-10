import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'firstPage',
      component: resolve => require(['../views/firstPage'], resolve),
      meta: {title: '首页'}
    },
    {
      path: '/case',
      name: 'case',
      component: resolve => require(['../views/case'], resolve),
      meta: {title: '病理管理'},
      children: [
        {
          path: '/case/todo',
          name: 'caseTodo',
          component: resolve => require(['../components/case/caseStatus'], resolve),
          meta: {title: '待诊断'}
        },
        {
          path: '/case/experts',
          name: 'experts',
          component: resolve => require(['../components/case/caseStatus'], resolve),
          meta: {title: '专家会诊'}
        },
        {
          path: '/case/done',
          name: 'caseDone',
          component: resolve => require(['../components/case/caseStatus'], resolve),
          meta: {title: '已诊断'}
        },
        {
          path: '/case/back',
          name: 'caseBack',
          component: resolve => require(['../components/case/caseStatus'], resolve),
          meta: {title: '已退回'}
        },
        {
          path: '/case/freeze',
          name: 'caseFreeze',
          component: resolve => require(['../components/case/caseStatus'], resolve),
          meta: {title: '冰冻'}
        }
      ]
    },
    {
      path: '/personal',
      naem: 'personal',
      component: resolve => require(['../views/personal'], resolve),
      meta: {title: '我的病例'},
      children: [
        {
          path: '/personal/todo',
          name: 'caseTodo',
          component: resolve => require(['../views/personal'], resolve),
          meta: {title: '待诊断'}
        },
        {
          path: '/personal/done',
          name: 'caseDone',
          component: resolve => require(['../views/personal'], resolve),
          meta: {title: '已诊断'}
        },
        {
          path: '/personal/back',
          name: 'caseBack',
          component: resolve => require(['../views/personal'], resolve),
          meta: {title: '已退回'}
        },
        {
          path: '/personal/freeze',
          name: 'caseFreeze',
          component: resolve => require(['../views/personal'], resolve),
          meta: {title: '冰冻'}
        }
      ]
    },
    {
      name: 'caseView',
      path: '/caseView',
      component: resolve => require(['../views/caseView'], resolve),
      meta: {title: '详情'}
    }
    // {
    //   path: '/doctor',
    //   name: 'doctor',
    //   component: resolve => require(['../views/doctor'], resolve),
    //   meta: {title: '医生'}
    // },
    // {
    //   path: '/doctor2',
    //   name: 'doctor2',
    //   component: resolve => require(['../views/doctor2'], resolve),
    //   children: [{
    //     path: '/doctor4/:type',
    //     name: 'doctor4',
    //     component: resolve => require(['../views/doctor4'], resolve),
    //     meta: {title: '医生4'}
    //   }],
    //   meta: {title: '医生2'}
    // },
    // {
    //   path: '/doctor3',
    //   name: 'doctor3',
    //   component: resolve => require(['../views/doctor3'], resolve),
    //   meta: {title: '医生3'}
    // }
    // {
    //   path: '/login',
    //   name: 'login',
    //   component: resolve => require(['../views/login'], resolve)
    // }
  ]
})
