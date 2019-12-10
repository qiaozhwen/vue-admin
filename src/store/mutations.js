const mutations = {
  incrementAllNum (state, payload) {
    state.allNum += payload
  },
  setToken (state, payload) {
    state.token = payload.token
    state.routes = payload.routes
    state.username = payload.username
    state.uid = (new Date()).getTime() * 1000
    setCookie('userToken', payload.token)
    setCookie('username', payload.username)
  },
  setUid (state, payload) {
    state.uid = (new Date()).getTime() * 1000
  },
  setSideBarCollapse (state, payload) {
    state.collapseStatus = 'collapse'
  }
}

function setCookie (cname, value) {
  document.cookie = cname + '=' + escape(value) + ';expires=3'
}

function getCookie (cname) {
  if (document.cookie.length > 0) {
    let cstart = document.cookie.indexOf(cname + '=')
    if (cstart !== -1) {
      cstart = cstart + cname.length + 1
      let cend = document.cookie.indexOf(';', cstart)
      if (cend === -1) {
        cend = document.cookie.length
      }
      return document.cookie.substr(cstart, cend)
    }
  }
  return ''
}

export default mutations
