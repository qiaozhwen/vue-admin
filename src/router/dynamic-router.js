const dynamicRouters = [
  {
    path: '/',
    name: 'firstPage',
    // component: resolve => require(['../views/firstPage'], resolve)
    children: [
      {
        path: '/doctor',
        name: 'doctor',
        component: resolve => require(['../views/doctor'], resolve)
      },
      {
        path: '/doctor2',
        name: 'doctor2',
        children: [{
          path: '/detail',
          name: 'doctor2Detail',
          component: resolve => require(['../views/doctor2'], resolve)
        }]
      },
      {
        path: '/doctor3',
        name: 'doctor3',
        component: resolve => require(['../views/doctor3'], resolve)
      }
    ]
  }
]
export default dynamicRouters
