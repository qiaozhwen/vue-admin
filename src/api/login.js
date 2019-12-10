import request from '../utils/request'

export default {
  login (username, password) {
    return request({
      url: 'http://localhost:8081/static/role.json',
      method: 'get'
      // params: {
      //   username: username,
      //   password: password
      // }
    })
  }
}
