import { instanceObject } from "@/types"
import moment from "moment";

/**
 * JSON转url参数
 * @param data Json格式数据
 * */
export const formatJsonToUrlParams = (data: instanceObject) => {
  return typeof data === 'object'
    ? Object.keys(data)
      .map((key) => {
        return `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`;
      })
      .join('&')
    : '';
};

// 格式化时长
export function format(time) {
  return time ? moment(time * 1000).format('m:ss') : ''
}