import { nanoid } from "nanoid"
export const playList = ref([
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac'
  },
  {
    id: nanoid(),
    name: '天空没有极限',
    singer: '邓紫棋',
    album: '天空没有极限',
    image:
      'https://mochenghualei.com.cn/covers/%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.jpg',
    url: 'https://mochenghualei.com.cn/audios/G.E.M.%E9%82%93%E7%B4%AB%E6%A3%8B-%E5%A4%A9%E7%A9%BA%E6%B2%A1%E6%9C%89%E6%9E%81%E9%99%90.flac'
  },
  {
    id: nanoid(),
    name: '等你下课',
    singer: '周杰伦',
    album: '最伟大的作品',
    image:
      'https://mochenghualei.com.cn/covers/%E3%80%8A%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%E3%80%8B.webp',
    url: "https://mochenghualei.com.cn/audios/%E5%91%A8%E6%9D%B0%E4%BC%A6-%E7%AD%89%E4%BD%A0%E4%B8%8B%E8%AF%BE%28with%20%E6%9D%A8%E7%91%9E%E4%BB%A3%29.mp3"
  },
])