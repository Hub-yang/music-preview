import { codeMessageMapTypes } from "@/types"

const codeMessageMap: codeMessageMapTypes = {
  400: "[400]:请求参数错误",
  401: "[401]:账户未登录",
  403: "[403]:拒绝访问",
  404: "[404]:请求路径错误",
  405: "[405]:请求方法错误",
  500: "[500]:服务器错误",
}

const showCodeMessage = (code: number | string): string => {
  return codeMessageMap[JSON.stringify(code)] || "网络连接异常,请稍后再试!"
}

export default showCodeMessage
