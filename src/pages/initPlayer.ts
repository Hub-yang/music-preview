import { usePlayList } from "./initPlayList"

let retry = 1
export async function initPlayer() {
  await usePlayList()
  const playerStore = usePlayerStore()
  const ele = playerStore.Player;

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
  ele.onerror = () => {
    if (retry === 0) {
      // let toastText = '当前音乐不可播放，已自动播放下一曲'
      // if (playlist.value.length === 1) {
      //   toastText = '没有可播放的音乐哦~'
      // }
      // that.$mmToast(toastText)
      playerStore.next()
    } else {
      retry -= 1
      ele.url = playerStore.currentMusic.url
      ele.load()
    }
  }
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
  ele.onstalled = () => {
    ele.load()
    playerStore.play()
    let timer
    clearTimeout(timer)
    timer = setTimeout(() => {
      playerStore.play()
    }, 10)
  }
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

