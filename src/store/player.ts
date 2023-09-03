export const usePlayerStore = defineStore('player', () => {
  // state
  const Player = ref<any>(null)
  // 全部
  const allPlayList = ref<baseObj[]>([])
  // 基础播放列表
  const playlist = ref<baseObj[]>([])
  // 我喜欢列表
  const lovedList = ref<any>(
    JSON.parse(localStorage.getItem('LOVE_LIST') as string) || []
  )
  const randomList = ref<baseObj[]>([])
  const curListMode = ref('random')
  const currentMusic = ref<baseObj>({})
  const playMode = ref('loopall')
  const playing = ref(false)
  const currentProgress = ref(0)
  const currentTime = ref(0)
  const volume = ref(
    JSON.parse(localStorage.getItem('VOLUME') as string) || 0.7
  )
  const isMute = ref(false)
  const disabled = ref(true)

  // actions
  function prev() {
    let idx = playlist.value.findIndex(
      (item) => item.id === currentMusic.value.id
    )
    if (playMode.value === 'loopall') {
      currentMusic.value =
        idx - 1 >= 0
          ? playlist.value[idx - 1]
          : playlist.value[playlist.value.length - 1]
    } else {
      if (idx - 1 >= 0) {
        currentMusic.value = playlist.value[idx - 1]
      }
    }
    Player.value.src = currentMusic.value.url
    playing.value = true
    play()
  }

  function play() {
    if (playing.value) Player.value.play()
    else Player.value.pause()
  }

  function next() {
    let idx = playlist.value.findIndex(
      (item) => item.id === currentMusic.value.id
    )

    if (playMode.value === 'loopall') {
      currentMusic.value =
        idx < playlist.value.length - 1
          ? playlist.value[idx + 1]
          : playlist.value[0]
    } else {
      if (idx < playlist.value.length - 1) {
        currentMusic.value = playlist.value[idx + 1]
      }
    }
    Player.value.src = currentMusic.value.url
    playing.value = true
    play()
  }

  return {
    Player,
    allPlayList,
    playlist,
    lovedList,
    randomList,
    curListMode,
    currentMusic,
    currentProgress,
    currentTime,
    volume,
    isMute,
    playing,
    playMode,
    disabled,
    prev,
    play,
    next
  }
})
