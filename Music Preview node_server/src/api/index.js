require('dotenv').config();
const isDev = true

const devVariable = {
  SecretId: "AKIDLXVbU9bpob9TZR4TyFH5f192h7IE2uYz",
  SecretKey: "FF3e2DD0ax74qQq45uY0JPIzTkoeIjy3",
  Bucket: "personal-web-1308697453",
  Region: "ap-beijing"
}

var COS = require('cos-nodejs-sdk-v5');
// 使用永久秘钥访问
var cos = new COS({
  SecretId: isDev ? devVariable.SecretId : process.env.SecretId, // 推荐使用环境变量获取；用户的 SecretId，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考https://cloud.tencent.com/document/product/598/37140
  SecretKey: isDev ? devVariable.SecretKey : process.env.SecretKey, // 推荐使用环境变量获取；用户的 SecretKey，建议使用子账号密钥，授权遵循最小权限指引，降低使用风险。子账号密钥获取可参考https://cloud.tencent.com/document/product/598/37140
})


// 获取对象列表
exports.getFileList = function (req, res) {
  const { prefix } = req.query
  cos.getBucket({
    Bucket: isDev ? devVariable.Bucket : process.env.Bucket,
    Region: isDev ? devVariable.Region : process.env.Region,
    Prefix: decodeURIComponent(prefix) || '',
  }, function (err, data) {

    if (err)
      return res.send({
        code: 500,
        msg: err
      })

    res.send({
      code: 200,
      data: data.Contents
    })
  });
}

// 获取对像url
exports.getPreUrl = function (req, res) {
  const { key } = req.query
  cos.getObjectUrl(
    {
      Bucket: isDev ? devVariable.Bucket : process.env.Bucket,
      Region: isDev ? devVariable.Region : process.env.Region,
      Key: decodeURIComponent(key) || "",
      Sign: true, /* 获取带签名的对象 URL */
    },
    function (err, data) {
      if (err)
        return res.send({
          code: 500,
          msg: err
        })
      /* url为对象访问 url */
      const url = data.Url;
      /* 复制 downloadUrl 的值到浏览器打开会自动触发下载 */
      const previewUrl =
        data.Url +
        (data.Url.indexOf('?') > -1 ? '&' : '?') +
        'response-content-disposition=inline'; // url为预览而不是下载
      res.send({
        code: 200,
        url: previewUrl
      })
    }
  );
}

// 下载对象
exports.download = function (req, res) {
  const { key } = req.query
  cos.getObject({
    Bucket: isDev ? devVariable.Bucket : process.env.Bucket,
    Region: isDev ? devVariable.Region : process.env.Region,
    Key: decodeURIComponent(key),
  },
    function (err, data) {
      if (err)
        return res.send({
          code: 500,
          msg: err
        })

      res.send({
        code: 200,
        data
      })
    })
}