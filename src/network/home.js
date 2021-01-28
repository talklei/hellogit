import {request} from 'network/request'

/**
 * 将和首页相关的请求方法写入到其中
 */

/**
 * 获取首页轮播信息
 * @returns {*}
 */
export function getHomeMultidata() {
  return request({
    url:'/home/multidata'
  })
}
