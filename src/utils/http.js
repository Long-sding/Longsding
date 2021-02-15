import axios from 'axios'
import router from '@/router'
import { Message } from 'element-ui'

// 请求拦截器
axios.interceptors.requset.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应请求头
instance.interceptors.response.use(
  (res) => {
    return res.data
  },
  (error) => {
    let errorInfo = error.response
    switch (errorInfo.status) {
      case 400:
        Message.warning({
          message: errorInfo.data ? errorInfo.data : '请求失败',
          duration: 2,
        })
        break
      case 401:
        Message.warning({
          message: '凭证过期，请重新登录',
          duration: 2,
        })
        router.push({ path: '/login' })
        break
      case 403:
        Message.warning({
          message: '无权访问，请重新登录',
          duration: 2,
        })
        router.push({ path: '/login' })
        break
      case 500:
        Message.warning({
          message: '服务器异常，请联系客服',
          duration: 2,
        })
        break
      case 502:
      case 503:
      case 504:
        Message.warning({
          message: '服务器宕机或正在重启',
          duration: 2,
        })
        break
      default:
        Message.warning({
          message: errorInfo.data ? errorInfo.data : '服务器异常，请联系客服',
          duration: 2,
        })
        break
    }
    return Promise.reject(error)
  }
)

export default {
  get(url, params = {}) {
    return new Promise((reslove, reject) => {
      axios
        .get(url, { params })
        .then((res) => {
          reslove(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
  post(url, params = {}) {
    return new Promise((reslove, reject) => {
      axios
        .post(url, params)
        .then((res) => {
          reslove(res)
        })
        .catch((error) => {
          reject(error)
        })
    })
  },
}
