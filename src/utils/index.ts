// 歌词解析
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