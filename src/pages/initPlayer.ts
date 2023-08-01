import { nanoid } from 'nanoid';
// import { playList } from './playList'
import { getFileList } from "@/api/modules/index"

// let retry = 1
export function initPlayer() {
  const playerStore = usePlayerStore()
  // { Player, playlist, currentMusic, currentProgress, currentTime } = 
  const ele = playerStore.Player;
  let timerId

  // 格式化歌曲名、歌手
  function formatMusicKey(key: string) {
    let musickey = key.split("/")[1].replace('.flac', '').split('-')
    return {
      singer: musickey[0],
      name: musickey[1]
    }
  }

  // 初始化播放列表
  function initPlayerList() {
    getFileList(encodeURIComponent("音频文件/"))
      .then((res) => {
        if (res && res.code == 200) {
          res.data.shift()
          res.data.forEach((item) => {
            // 预览使用七牛云，注意存储时名称和cos中的保持一致，否则获取不到对应文件
            let baseURL = 'https://mochenghualei.com.cn/'
            let keyName = encodeURIComponent(item.Key.split('/')[1].replace('.flac', '').replace('..lrc', ''))
            let curUrl = 'https://personal-web-1308697453.cos.ap-beijing.myqcloud.com/' +
              encodeURIComponent('音频文件/') +
              keyName +
              '.flac'
            let musicItem = {
              ...formatMusicKey(item.Key),
              id: nanoid(),
              key: item.Key,
              album: '重拾_快乐',
              isLoved: false,
              lyric: baseURL + 'lrcs/' + keyName + '.lrc',
              image: baseURL + 'covers/jj-%E9%87%8D%E6%8B%BE%E5%BF%AB%E4%B9%90.jpeg',
              url: curUrl
            }
            playerStore.playlist.push(initAudioDuration(musicItem))
          })

          // 开启定时器，监测时长获取情况，全部获取则终止
          timerId = setInterval(() => {
            checkDurationTime()
          }, 2000)
        }
      })
      .catch((err) => {
        throw new Error('getFileList():::' + err)
      })
  }


  initPlayerList()

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
    if (playerStore.playlist.every((item) => item.duration)) {
      clearInterval(timerId)
      timerId = undefined
      return false
    }
    playerStore.playlist.forEach((item) => {
      if (!item.duration) {
        initAudioDuration(item)
      }
    })
  }

  // 音频缓冲事件
  ele.onprogress = () => {
    try {
      if (ele.buffered.length > 0) {
        const duration = playerStore.currentMusic.duration
        let buffered = 0
        ele.buffered.end(0)
        buffered = ele.buffered.end(0) > duration ? duration : ele.buffered.end(0)
        playerStore.currentProgress = buffered / duration
      }
    } catch (e) { }
  }
  // 开始播放音乐
  ele.onplay = () => {
    let timer
    clearTimeout(timer)
    timer = setTimeout(() => {
    }, 100)
  }
  // 获取当前播放时间
  ele.ontimeupdate = () => {
    playerStore.currentTime = ele.currentTime
  }
  // 当前音乐播放完毕
  // ele.onended = () => {
  //   if (that.mode === PLAY_MODE.LOOP) {
  //     that.loop()
  //   } else {
  //     that.next()
  //   }
  // }
  // 音乐播放出错
  // ele.onerror = () => {
  //   if (retry === 0) {
  //     let toastText = '当前音乐不可播放，已自动播放下一曲'
  //     if (playlist.value.length === 1) {
  //       toastText = '没有可播放的音乐哦~'
  //     }
  //     // that.$mmToast(toastText)
  //     // that.next(true)
  //   } else {
  //     retry -= 1
  //     ele.url = that.currentMusic.url
  //     ele.load()
  //   }
  // }
  // 音乐进度拖动大于加载时重载音乐
  // ele.onstalled = () => {
  //   ele.load()
  //   that.setPlaying(false)
  //   let timer
  //   clearTimeout(timer)
  //   timer = setTimeout(() => {
  //     that.setPlaying(true)
  //   }, 10)
  // }
  // 音频数据不可用时
  // ele./* onstalled = () => {
  //   ele.load()
  //   that.setPlaying(false)
  //   let timer
  //   clearTimeout(timer)
  //   timer = setTimeout(() => {
  //     that.setPlaying(true)
  //   }, 10)
  // } */
  // 当音频已暂停时
  // ele.onpause = () => {
  //   that.setPlaying(false)
  // }













  //测试audio回调
  // ele.onabort = () => {
  // }

  // ele.oncanplay = () => {
  // }

  // ele.oncanplaythrough = () => {
  // }

  // ele.ondurationchange = () => {
  // }

  // ele.onemptied = () => {
  // }

  // ele.onended = () => {
  // }

  // ele.onerror = () => {
  // }

  // ele.onloadeddata = () => {
  // }

  // ele.onloadedmetadata = () => {
  // }

  // ele.onloadstart = () => {
  // }

  // ele.onpause = () => {
  // }

  // ele.onplaying = () => {
  // }

  // ele.onprogress = () => {
  // }

  // ele.onratechange = () => {
  // }

  // ele.onseeked = () => {
  // }

  // ele.onseeking = () => {
  // }

  // ele.onstalled = () => {
  // }

  // ele.onsuspend = () => {
  // }

  // ele.ontimeupdate = () => {
  // }

  // ele.onvolumechange = () => {
  // }

  // ele.onwaiting = () => {
  // }
}

