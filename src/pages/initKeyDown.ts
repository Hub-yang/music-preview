export function initKeyDown() {
  const playerStore = usePlayerStore()
  // 初始化键盘事件
  window.addEventListener('keydown', (e) => {

    // 播放/暂停
    if (e.code == 'Space') {
      if (!playerStore.Player.src) {
        playerStore.Player.src = playerStore.currentMusic.url
      }
      e.preventDefault()
      playerStore.playing = !playerStore.playing
      playerStore.play()
    }

    // 下一首
    if (e.shiftKey && e.ctrlKey && e.code == 'ArrowRight') {
      playerStore.next()
    }

    // 上一首
    if (e.shiftKey && e.ctrlKey && e.code == 'ArrowLeft') {
      playerStore.prev()
    }

    // 音量加
    if (e.shiftKey && e.ctrlKey && e.code == 'ArrowUp') {
      playerStore.volume <= 0.9 && (playerStore.volume += 0.1)
    }

    // 音量减
    if (e.shiftKey && e.ctrlKey && e.code == 'ArrowDown') {
      if (playerStore.volume >= 0.1) {
        playerStore.volume -= 0.1
      } else if (playerStore.volume > 0 && playerStore.volume < 0.1) {
        playerStore.volume = 0
      }
    }
  })
}