import axios from 'axios'
// 'https://music.163.com'
const BASE_URL = 'http://132.232.66.140:41200'
// 定义一个空的数组，用于存放请求中的参数
import {
  message
} from 'element-ui'

// 创建axios实例
const axiosInstance = () => {
  const instance = axios.create({
    baseURL: BASE_URL,
    timeout: 10 * 60 * 1000,
  })
  return instance
}
// 请求实例
const publicReq = async params => {
  const {
    url,
    method,
    param
  } = params
  const instance = axiosInstance()
  // eslint-disable-next-line no-return-await
  return await instance({
    url,
    method,
    [method === 'post' ? 'data' : 'params']: param || {},
    transformRequest: [function (data) {
      let ret = ''
      let index = 0
      for (let key in data) {
        if (data[key] === null) {
          ret += `${index === 0 ? '' : '&'}key=&`
        } else {
          ret += `${index === 0 ? '' : '&'}${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`
        }
        index += 1
      }
      return ret
    }]
  }).then(res => {
    if (res && res.data) {
      if (res.status !== 200) {
        throw new Error(res.statusText)
      }
      return res
    } else {
      message.error('请求失败！')
    }
  })
}

// 请求超时函数
const timeoutfn = (delay, url) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve('请求超时')
    }, delay)
  })
}

// 单个请求 存在请求超时
export async function req(params, delay = 10 * 60 * 1000) {
  try {
    const response = await Promise.race([
      timeoutfn(delay, params.url),
      publicReq(params)
    ])
    return response
  } catch (error) {
    throw new Error(error)
  }
}

// GET request
export async function getRequest(url, param) {
  try {
    const response = await req({
      url,
      method: 'get',
      param
    })
    return response
  } catch (err) {
    // 这里走本地模拟数据
    console.log(err)
  }
}

// POST request
export async function postRequest(url, param) {
  try {
    const response = await req({
      url,
      method: 'post',
      param
    })
    return response
  } catch (err) {
    console.log(err)
  }
}
