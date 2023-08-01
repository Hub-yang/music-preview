import { nanoid } from "nanoid"
export const playList = ref([
  {
    id: nanoid(),
    name: '愿与愁',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E6%84%BF%E4%B8%8E%E6%84%81.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E6%84%BF%E4%B8%8E%E6%84%81.flac'
  },
  {
    id: nanoid(),
    name: '逆白光',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%80%86%E5%85%89%E7%99%BD.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%80%86%E5%85%89%E7%99%BD.flac'
  },
  {
    id: nanoid(),
    name: '孤独娱乐',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E5%AD%A4%E7%8B%AC%E5%A8%B1%E4%B9%90.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E5%AD%A4%E7%8B%AC%E5%A8%B1%E4%B9%90.flac'
  },
  {
    id: nanoid(),
    name: '梦不凌乱',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E6%A2%A6%E4%B8%8D%E5%87%8C%E4%B9%B1.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E6%A2%A6%E4%B8%8D%E5%87%8C%E4%B9%B1.flac'
  },
  {
    id: nanoid(),
    name: '自画像',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E8%87%AA%E7%94%BB%E5%83%8F.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E8%87%AA%E7%94%BB%E5%83%8F.flac'
  },
  {
    id: nanoid(),
    name: '谢幕',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E8%B0%A2%E5%B9%95.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E8%B0%A2%E5%B9%95.flac'
  },
  {
    id: nanoid(),
    name: '如果我还剩一件事情可以做',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E5%A6%82%E6%9E%9C%E6%88%91%E8%BF%98%E5%89%A9%E4%B8%80%E4%BB%B6%E4%BA%8B%E6%83%85%E5%8F%AF%E4%BB%A5%E5%81%9A.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E5%A6%82%E6%9E%9C%E6%88%91%E8%BF%98%E5%89%A9%E4%B8%80%E4%BB%B6%E4%BA%8B%E6%83%85%E5%8F%AF%E4%BB%A5%E5%81%9A.flac'
  },
  {
    id: nanoid(),
    name: '黑色泡沫',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E9%BB%91%E8%89%B2%E6%B3%A1%E6%B2%AB.flac'
  },
  {
    id: nanoid(),
    name: '你都在',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E4%BD%A0%E9%83%BD%E5%9C%A8.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E4%BD%A0%E9%83%BD%E5%9C%A8.flac'
  },
  {
    id: nanoid(),
    name: '一时的选择',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E4%B8%80%E6%97%B6%E7%9A%84%E9%80%89%E6%8B%A9.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-%E4%B8%80%E6%97%B6%E7%9A%84%E9%80%89%E6%8B%A9.flac'
  },
  {
    id: nanoid(),
    name: 'Castle In The Air',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-Castle%20in%20the%20air.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-Castle%20in%20the%20air.flac'
  },
  {
    id: nanoid(),
    name: '7千3百多天',
    singer: '林俊杰',
    album: '重拾_快乐',
    lyric: "https://mochenghualei.com.cn/lrcs/%E6%9E%97%E4%BF%8A%E6%9D%B0-7%E5%8D%833%E7%99%BE%E5%A4%9A%E5%A4%A9.lrc",
    image:
      'https://mochenghualei.com.cn/covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
    url: 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/%E9%9F%B3%E9%A2%91%E6%96%87%E4%BB%B6/%E6%9E%97%E4%BF%8A%E6%9D%B0-7%E5%8D%833%E7%99%BE%E5%A4%9A%E5%A4%A9.flac'
  },
])