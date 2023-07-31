import { nanoid } from "nanoid"
const lrc = `[00:00.00]黑色泡沫 - 林俊杰
[00:11.01]词：周信廷 / 杨彤
[00:14.83]曲：林俊杰
[00:19.45]加速悸动的心跳
[00:21.74]唤醒瞌睡的细胞
[00:23.98]黑色泡沫的味道 成为一种依靠
[00:28.44]别让 世界 变单调
[00:30.61]调成你爱的味道
[00:32.01]是苦是甜 自己知道 半杯 浓缩刚好
[00:36.50]月光 倒进海里
[00:38.81]晕成 一幅美景
[00:40.97]搅拌 黑白光阴 才懂 年少蹉跎
[00:45.55]未来 还没解锁
[00:47.66]让时间 酿出结 果
[00:49.80]萃取最 好的自我 喔～
[00:54.18]心事 你来说说
[00:56.51]咖啡 替代了酒
[00:58.73]手 捧着一杯感动
[01:02.33]品尝过 独自拼搏
[01:04.54]苦涩过 没人能懂
[01:06.72]盛开后 总会有人为你守候
[01:11.26]且等着 回甘花朵
[01:13.40]在那之前 向着前方大胆去冲
[01:16.37]还在原地发呆什么
[01:20.17]时间 它 从不为谁而停留
[01:24.51]日出 换 日落青春换成就
[01:29.17]黎明 前 阳光透进手心中
[01:33.41]灵魂在香气中摸索
[01:36.17]酸甜 苦涩都是享受
[01:41.17]啜一口 黑色泡沫
[01:52.14]月光 倒进海里
[01:54.31]晕成 一幅美景
[01:56.50]搅拌 黑白光阴 才懂 年少蹉跎
[02:01.17]未来 还没解锁
[02:03.11]让时间 酿出结 果
[02:05.31]萃取最 好的自我 喔～
[02:09.70]心事 你来说说
[02:12.05]咖啡 替代了酒
[02:14.32]手 捧着一杯感动
[02:17.84]品尝过 独自拼搏
[02:20.06]苦涩过 没人能懂
[02:22.27]盛开后 总会有人为你守候
[02:26.84]且等着 回甘花朵
[02:28.93]在那之前 向着前方大胆去冲
[02:31.95]还在原地发呆什么
[02:35.59]时间它从不为谁而停留
[02:40.03]日出 换日落青春换成就
[02:44.76]黎明 前阳光透进手心中
[02:49.01]灵魂在香气中摸索
[02:51.69]酸甜 苦涩都是享受
[02:57.83]品尝过 独自拼搏
[03:00.13]苦涩过 没人能懂
[03:02.30]盛开后 总会有人为你守候
[03:06.65]且等着 回甘花朵
[03:08.93]在那之前 向着前方大胆～
[03:11.76]加一点点冲动
[03:13.94]还在原地发呆什么
[03:20.25]时间 它从不为谁而停留
[03:24.63]日出 换日落青春换成就
[03:29.01]灵魂在香气中摸索
[03:31.69]酸甜 苦涩都是享受
[03:36.80]啜一口 黑色泡沫
[03:46.48]黑色泡沫
[03:47.84]制作人 PRODUCER：林俊杰 JJ LIN
[03:48.12]配唱制作 VOCAL PRODUCTION：林俊杰 JJ LIN
[03:48.45]制作协力 PRODUCTION ASSISTANCE：黄冠龙 ALEX.D / 周信廷 SHiN CHOU / 蔡宥绮 Patti Tsai / 蔡凯升 Kai Tsai
[03:49.24]编曲 MUSIC ARRANGEMENT：黄冠龙 ALEX.D
[03:49.49]吉他 GUITAR：黄冠龙 ALEX.D
[03:49.71]和声编写 BACKGROUND VOCAL ARRANGEMENT：林俊杰 JJ LIN
[03:50.08]和声 BACKGROUND VOCALS：林俊杰 JJ LIN
[03:50.39]录音室 RECORDING STUDIO：JFJ SERENADE(Singapore)
[03:50.62]录音师 RECORDING ENGINEER：林俊杰 JJ LIN
[03:50.94]混音室 MIXING STUDIO：mixHaus(Encino, CA)
[03:51.17]混音师 MIXING ENGINEER：Richard Furch
[03:51.38]后期母带处理制作人 MASTERING PRODUCER：林俊杰 JJ LIN
[03:51.89]后期母带处理录音室 MASTERING STUDIO：Bernie Grundman Mastering, LA
[03:52.36]后期母带处理录音师 MASTERING ENGINEER：Mike Bozzi
[03:52.56]`
export const playList = ref([
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: lrc,
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac'

  },
  {
    id: nanoid(),
    name: '天空没有极限',
    singer: '邓紫棋',
    album: '天空没有极限',
    lyric: '',
    image:
      'https://mochenghualei.com.cn/covers/%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.jpg',
    url: 'https://mochenghualei.com.cn/audios/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.flac'
  },
  {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    lyric: '',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  },
  {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  }, {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  },
])