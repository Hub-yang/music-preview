export const usePlayerStore = defineStore("player", () => {
  // state
  const Player = ref<any>(null)
  const playlist = ref<baseObj[]>([])
  const currentMusic = ref<baseObj>({})
  const playMode = ref('loopall')
  const playing = ref(false)
  const currentProgress = ref(0)
  const currentTime = ref(0)
  const volume = ref(0.8)
  const isMute = ref(false)

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
    playlist,
    currentMusic,
    currentProgress,
    currentTime,
    volume,
    isMute,
    playing,
    playMode,
    prev,
    play,
    next
  }
})