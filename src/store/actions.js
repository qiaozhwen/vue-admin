import dynamicRouters from '../router/dynamic-router'

const actions = {
  clickAllNum (context, data) {
    context.commit('incrementAllNum', data)
  },
  addRoutes (context, data) {
    // todo later 过滤出用户可用路由并跳转到首页
    getPermissionList(dynamicRouters, data.authorities)
  }
}
export default actions

function getPermissionList (routes, data) {
  let addrouters = []
  for (let val in routes) {
    routes[val]
  }
}
