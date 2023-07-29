import { playList } from './playList'
let retry = 1
export function usePlayer() {
  const playStore = usePlayerStore()
  const ele = playStore.Player

  const currentMusic = ref<baseObj>({})
  const currentProgress = ref(0)
  const currentTime = ref(0)
  const musicReady = ref(false)
  const playlist = ref<baseObj[]>([])
  const volume = ref(0.8)
  const isMute = ref(false)


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


  // 音量控件相关
  function volumeChange(percent) {
    percent === 0 ? (isMute.value = true) : (isMute.value = false)
    volume.value = percent
    ele.volume = percent
    // 缓存
    // setVolume(percent)
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
      musicReady.value = true
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

  return {
    currentMusic,
    currentProgress,
    currentTime,
    musicReady,
    playlist,
    volume,
    isMute,
    ele,
    volumeChange
  }
}

