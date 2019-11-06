import request from '../utils/request'

export default {
  login (username, password) {
    return request({
      url: '../../static/role.json',
      method: 'get'
      // params: {
      //   username: username,
      //   password: password
      // }
    })
  }
}
