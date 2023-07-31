import { playList } from './playList'
// let retry = 1
export function initPlayer() {
  const { Player, playlist, currentMusic, currentProgress, currentTime, playing } = toRefs(usePlayerStore())
  const ele = Player.value


  // 初始化
  function initAudioDuration() {
    playlist.value = playList.value.map((item: baseObj, idx) => {
      const audioElement = new Audio(item.url)
      audioElement.onloadeddata = () => {
        item.duration = audioElement.duration
      }
      audioElement.remove()
      return item
    })
  }

  initAudioDuration()
  // 监测时长获取，如果有空，则执行获取
  // setInterval(() => {
  //   checkDurationTime()
  // }, 2000)

  function checkDurationTime() {

    let hasEmptyDuration = playlist.value.some((item: baseObj) => !item.duration)
    if (hasEmptyDuration) {
      // initAudioDuration()
      // 单独修改没有初始化的元素，否则直接改数组会影响拖拽
    }
  }



  // 音频缓冲事件
  ele.onprogress = () => {
    try {
      if (ele.buffered.length > 0) {
        const duration = currentMusic.value.duration
        let buffered = 0
        ele.buffered.end(0)
        buffered = ele.buffered.end(0) > duration ? duration : ele.buffered.end(0)
        currentProgress.value = buffered / duration
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
    currentTime.value = ele.currentTime
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
  //     // eslint-disable-next-line no-console
  //     console.log('重试一次')
  //     retry -= 1
  //     ele.url = that.currentMusic.url
  //     ele.load()
  //   }
  //   // console.log('播放出错啦！')
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
  //   console.log("onabort")
  // }

  // ele.oncanplay = () => {
  //   console.log("oncanplay")
  // }

  // ele.oncanplaythrough = () => {
  //   console.log("oncanplaythrough")
  // }

  // ele.ondurationchange = () => {
  //   console.log("ondurationchange")
  // }

  // ele.onemptied = () => {
  //   console.log("onemptied")
  // }

  // ele.onended = () => {
  //   console.log("onended")
  // }

  // ele.onerror = () => {
  //   console.log("onerror")
  // }

  // ele.onloadeddata = () => {
  //   console.log("onloadeddata")
  // }

  // ele.onloadedmetadata = () => {
  //   console.log("onloadedmetadata")
  // }

  // ele.onloadstart = () => {
  //   console.log("onloadstart")
  // }

  // ele.onpause = () => {
  //   console.log("onpause")
  // }

  // ele.onplaying = () => {
  //   console.log("onplaying")
  // }

  // ele.onprogress = () => {
  //   console.log("onprogress")
  // }

  // ele.onratechange = () => {
  //   console.log("onratechange")
  // }

  // ele.onseeked = () => {
  //   console.log("onseeked")
  // }

  // ele.onseeking = () => {
  //   console.log("onseeking")
  // }

  // ele.onstalled = () => {
  //   console.log("onstalled")
  // }

  // ele.onsuspend = () => {
  //   console.log("onsuspend")
  // }

  // ele.ontimeupdate = () => {
  //   console.log("ontimeupdate")
  // }

  // ele.onvolumechange = () => {
  //   console.log("onvolumechange")
  // }

  // ele.onwaiting = () => {
  //   console.log("onwaiting")
  // }
}

