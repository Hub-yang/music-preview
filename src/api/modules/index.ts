import service from '../request'



/**
 * 获取对象列表
 * @author mocheng
 * @date 2023-05-10
 * @param {string} prefix:想要获取的对象列表的key
 */
export const getFileList = (query: string) => {
  return service.get(`/getFileList?prefix=${query}`)
}


/**
 * 获取对象url
 * @author mocheng
 * @date 2023-05-10
 * @param {string} key:目标对象的key
 */
export const getPreUrl = (query: string) => {
  return service.get(`/getPreUrl?key=${query}`)
}


/**
 * 下载对象
 * @author mocheng
 * @date 2023-05-11
 * @param {srting} key:目标对象的key
 */
export const download = (query: string) => {
  return service.get(`/download?key=${query}`)
}
