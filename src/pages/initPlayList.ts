import { getFileList } from '@/api/modules'
import { nanoid } from 'nanoid'
import { initKeyDown } from '@/pages/initKeyDown'
import { FYShuffle } from '@/utils'
export function usePlayList() {
  let allPLayeListTemp: baseObj[] = []
  let timerId
  const playerStore = usePlayerStore()

  const albumList = ['周杰伦/最伟大的作品', '林俊杰/重拾_快乐', '邓紫棋/启示录']
  const baseURL = 'https://www.huberyyang.site/'
  Promise.all([
    getFileList('audios/周杰伦/'),
    getFileList('audios/林俊杰/'),
    getFileList('audios/邓紫棋/')
  ]).then((res) => {
    const listMap = {
      ...res.map((item) => {
        item.data.shift()
        return item.data
      })
    }
    albumList.forEach((_, idx) => {
      const curList = initListItem(listMap[idx], albumList[idx])
      allPLayeListTemp.push(...curList)
    })
    handlerDuration()
  })

  function handlerDuration() {
    timerId = setInterval(() => checkDurationTime(), 100)
  }

  // 初始化时长
  function initAudioDuration(item) {
    const audioElement = new Audio(item.url)
    audioElement.onloadeddata = () => {
      item.duration = audioElement.duration
    }
    audioElement.remove()
    return item
  }

  function checkDurationTime() {
    if (allPLayeListTemp.every((item) => item.duration)) {
      clearInterval(timerId)
      timerId = undefined
      // 列表加载完成
      // 根据我喜欢列表缓存更新元素状态
      allPLayeListTemp.forEach((item) => {
        if (!!playerStore.lovedList.find((song) => song.name === item.name)) {
          item.isLoved = true
        }
      })

      // 洗牌
      allPLayeListTemp = FYShuffle(allPLayeListTemp)
      playerStore.playlist = playerStore.allPlayList = allPLayeListTemp
      // 初始化currentMusic
      playerStore.currentMusic = playerStore.playlist[0]
      // 初始化keyDown事件
      initKeyDown()
      return true
    }
    allPLayeListTemp.forEach((item) => {
      if (!item.duration) {
        item = initAudioDuration(item)
      }
    })
  }

  // 格式化歌曲名、歌手
  function formatMusicKey(key: string) {
    let musickey = key.split('/')[2].replace('.flac', '').split('-')
    return {
      singer: musickey[0],
      name: musickey[1]
    }
  }

  function initListItem(curList: baseObj[], album) {
    let temp: baseObj[] = []
    curList.forEach((item) => {
      const Key = item.key
      let keyName = encodeURI(item.key.split('/')[2].replace('.flac', ''))
      let curUrl = baseURL + encodeURI(Key)
      
      let musicItem = {
        ...formatMusicKey(Key),
        id: nanoid(),
        key: Key,
        album: album.split('/')[1],
        isLoved: false,
        lyric: baseURL + `lrcs/${keyName}.lrc`,
        image: baseURL + `covers/${encodeURI(album)}.jpg`,
        url: curUrl
      }
      temp.push(musicItem)
    })
    return temp
  }
}
