import axios from 'axios'
import VueAxios from 'vue-axios'

const store = JSON.parse(localStorage.getItem('user'))
if (store.user.token)
  axios.defaults.headers.common.Authorization = 'Bearer ' + store.user.token

export { axios, VueAxios }
