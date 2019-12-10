const actions = {
  clickAllNum (context, data) {
    context.commit('incrementAllNum', data)
  },
  addRoutes (context, data) {
    // todo later 过滤出用户可用路由并跳转到首页
    let routes = getPermissionList(data.routes.authorities)
    context.commit('setToken', {token: data.routes.token, routes: routes, username: data.username, password: data.password})
    data.self.$router.addRoutes(routes)
    data.self.$router.push({path: '/'})
  },
  collapseSideBar (context, data) {
    context.commit('setSideBarCollapse', data)
  }
}

function getPermissionList (routes, addrouters = []) {
  for (let val in routes) {
    const obj = routes[val]
    let routesObj = {
      path: obj.path,
      name: obj.page,
      meta: {title: obj.title}
    }
    if (obj.children && obj.children.length > 0) {
      routesObj.component = resolve => require([`../views/${routesObj.name}`], resolve)
      addrouters.push(routesObj)
      addrouters[val].children = getPermissionList(obj.children)
    } else {
      routesObj.component = resolve => require([`../views/${routesObj.name}`], resolve)
      addrouters.push(routesObj)
    }
  }
  return addrouters
}

export default actions
