import axios from 'axios'

/**
 * 针对网络请求封装
 * @param config
 * @returns {Promise<unknown>}
 */
export function request(config){
  return new Promise((resolve, reject)=>{
    const instance = axios.create({
      baseURL: 'http://httpbin.org',
      timeout: 1000
    })

    instance(config).then(res => {
      resolve(res);
    }).catch(res => {
      reject(res);
    })
  })
}
