/**
 * 歌词解析
 * @author mocheng
 * @date 2023-08-04
 */
export function parseLyric(lrc) {
  const timeExp = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g
  const lines = lrc.split('\n')
  const lyric: any[] = []
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    const result = timeExp.exec(line)
    if (!result) {
      continue
    }
    const text = line.replace(timeExp, '').trim()
    if (text) {
      lyric.push({
        time:
          (Number(result[1]) * 6e4 +
            Number(result[2]) * 1e3 +
            Number(result[3] || 0) * 1) /
          1e3,
        text
      })
    }
  }
  return lyric
}

/**
 * 控制动画执行时机
 * @author mocheng
 * @date 2023-08-04
 */
export function useAnimate(beforeCall, afterCall) {
  const playerStore = usePlayerStore()
  playerStore.disabled = false
  beforeCall()
  setTimeout(() => {
    playerStore.disabled = true
    afterCall()
  }, 0)
}

// Fisher-Yates 洗牌
export function FYShuffle(randomNums: any[]) {
  let len = randomNums.length

  while (len > 1) {
    let rand = Math.floor(Math.random() * len)
    len--
    let temp = randomNums[len]
    randomNums[len] = randomNums[rand]
    randomNums[rand] = temp
  }

  return randomNums
}
