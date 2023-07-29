<script setup lang="ts">
import draggable from 'vuedraggable'
import listLoop from '@/assets/svg/listLoop.svg'
import singleLoop from '@/assets/svg/singleLoop.svg'
import { usePlayer } from './usePlayer'
import moment from 'moment'

const {
  currentMusic,
  currentProgress,
  currentTime,
  ele,
  musicReady,
  isMute,
  playlist,
  volume,
  volumeChange
} = usePlayer()

const playing = ref(false)
const picUrl = ref('')

const lyricVisible = ref<boolean>(true)

function handlerItemClick(item: baseObj, idx: number) {
  if (currentMusic.value.id !== item.id) {
    ele.src = item.url
    playing.value = true
    currentMusic.value = playlist.value[idx]
  } else {
    playing.value = !playing.value
  }
  play()
}

function handlerBarPlay() {
  playing.value = !playing.value
  play()
}

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
  ele.src = currentMusic.value.url
  playing.value = true
  play()
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
  ele.src = currentMusic.value.url
  playing.value = true
  play()
}

function play() {
  if (playing.value) ele.play()
  else ele.pause()
}

// 下载
function handlerDownLoadItem(item, idx) {
  console.log('防抖')
  console.log('下载 :>>> ', item, idx)
}

// progress相关

const percentMusic = computed(() => {
  const duration = currentMusic.value.duration
  return currentTime.value && duration ? currentTime.value / duration : 0
})

function progressMusic(percent) {
  currentTime.value = currentMusic.value.duration * percent
}

function progressMusicEnd(percent) {
  ele.currentTime = currentMusic.value.duration * percent
}

// 拖拽相关
const drag = ref(false)

const dragOptions = computed(() => {
  return {
    animation: 200,
    group: 'description',
    disabled: false,
    ghostClass: 'ghost'
  }
})

// 格式化时长
function format(time) {
  return time ? moment(time * 1000).format('m:ss') : ''
}

// 播放模式相关
const playMode = ref('loopall')
function handlerChangeLoopMode() {
  playMode.value = playMode.value === 'loopall' ? 'loopone' : 'loopall'
}

watch(playMode, (val) => (ele.loop = playMode.value === 'loopone' || false), {
  immediate: true
})
// 播放模式相关
watch(currentTime, (val) => {
  if (val === currentMusic.value.duration) {
    setTimeout(() => {
      if (playMode.value === 'loopall') {
        next()
      } else if (playMode.value === 'loopone') {
        play()
      }
    }, 1000)
  }

  if (nolyric.value) {
    return
  }
  let lyricindex = 0
  for (let i = 0; i < lyric.length; i++) {
    if (val > lyric[i].time) {
      lyricindex = i
    }
  }
  lyricIndex.value = lyricindex
})

// 歌词相关
let lyric: any[] = []
const nolyric = ref(false)
const lyricIndex = ref(0)

watch(currentMusic, (newMusic, oldMusic) => {
  if (!newMusic.id) {
    lyric = []
    return
  }
  if (newMusic.id === oldMusic!.id) {
    return
  }
  // 重置相关参数
  lyricIndex.value = 0
  currentTime.value = 0
  nextTick(() => {
    _getLyric()
  })
})

onMounted(() => {
  nextTick(() => {
    _getLyric()
  })
})
function _getLyric() {
  const lrc = `[00:00.00]黑色泡沫 - 林俊杰
[00:11.01]词：周信廷 / 杨彤
[00:14.83]曲：林俊杰
[00:19.45]加速悸动的心跳
[00:21.74]唤醒瞌睡的细胞
[00:23.98]黑色泡沫的味道 成为一种依靠
[00:28.44]别让 世界 变单调
[00:30.61]调成你爱的味道
[00:32.01]是苦是甜 自己知道 半杯 浓缩刚好
[00:36.50]月光 倒进海里
[00:38.81]晕成 一幅美景
[00:40.97]搅拌 黑白光阴 才懂 年少蹉跎
[00:45.55]未来 还没解锁
[00:47.66]让时间 酿出结 果
[00:49.80]萃取最 好的自我 喔～
[00:54.18]心事 你来说说
[00:56.51]咖啡 替代了酒
[00:58.73]手 捧着一杯感动
[01:02.33]品尝过 独自拼搏
[01:04.54]苦涩过 没人能懂
[01:06.72]盛开后 总会有人为你守候
[01:11.26]且等着 回甘花朵
[01:13.40]在那之前 向着前方大胆去冲
[01:16.37]还在原地发呆什么
[01:20.17]时间 它 从不为谁而停留
[01:24.51]日出 换 日落青春换成就
[01:29.17]黎明 前 阳光透进手心中
[01:33.41]灵魂在香气中摸索
[01:36.17]酸甜 苦涩都是享受
[01:41.17]啜一口 黑色泡沫
[01:52.14]月光 倒进海里
[01:54.31]晕成 一幅美景
[01:56.50]搅拌 黑白光阴 才懂 年少蹉跎
[02:01.17]未来 还没解锁
[02:03.11]让时间 酿出结 果
[02:05.31]萃取最 好的自我 喔～
[02:09.70]心事 你来说说
[02:12.05]咖啡 替代了酒
[02:14.32]手 捧着一杯感动
[02:17.84]品尝过 独自拼搏
[02:20.06]苦涩过 没人能懂
[02:22.27]盛开后 总会有人为你守候
[02:26.84]且等着 回甘花朵
[02:28.93]在那之前 向着前方大胆去冲
[02:31.95]还在原地发呆什么
[02:35.59]时间它从不为谁而停留
[02:40.03]日出 换日落青春换成就
[02:44.76]黎明 前阳光透进手心中
[02:49.01]灵魂在香气中摸索
[02:51.69]酸甜 苦涩都是享受
[02:57.83]品尝过 独自拼搏
[03:00.13]苦涩过 没人能懂
[03:02.30]盛开后 总会有人为你守候
[03:06.65]且等着 回甘花朵
[03:08.93]在那之前 向着前方大胆～
[03:11.76]加一点点冲动
[03:13.94]还在原地发呆什么
[03:20.25]时间 它从不为谁而停留
[03:24.63]日出 换日落青春换成就
[03:29.01]灵魂在香气中摸索
[03:31.69]酸甜 苦涩都是享受
[03:36.80]啜一口 黑色泡沫
[03:46.48]黑色泡沫
[03:47.84]制作人 PRODUCER：林俊杰 JJ LIN
[03:48.12]配唱制作 VOCAL PRODUCTION：林俊杰 JJ LIN
[03:48.45]制作协力 PRODUCTION ASSISTANCE：黄冠龙 ALEX.D / 周信廷 SHiN CHOU / 蔡宥绮 Patti Tsai / 蔡凯升 Kai Tsai
[03:49.24]编曲 MUSIC ARRANGEMENT：黄冠龙 ALEX.D
[03:49.49]吉他 GUITAR：黄冠龙 ALEX.D
[03:49.71]和声编写 BACKGROUND VOCAL ARRANGEMENT：林俊杰 JJ LIN
[03:50.08]和声 BACKGROUND VOCALS：林俊杰 JJ LIN
[03:50.39]录音室 RECORDING STUDIO：JFJ SERENADE(Singapore)
[03:50.62]录音师 RECORDING ENGINEER：林俊杰 JJ LIN
[03:50.94]混音室 MIXING STUDIO：mixHaus(Encino, CA)
[03:51.17]混音师 MIXING ENGINEER：Richard Furch
[03:51.38]后期母带处理制作人 MASTERING PRODUCER：林俊杰 JJ LIN
[03:51.89]后期母带处理录音室 MASTERING STUDIO：Bernie Grundman Mastering, LA
[03:52.36]后期母带处理录音师 MASTERING ENGINEER：Mike Bozzi
[03:52.56]`
  if (lrc) {
    nolyric.value = false
    lyric = parseLyric(lrc)
  } else {
    nolyric.value = true
  }
}

// 工具函数

// 歌词解析
function parseLyric(lrc) {
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
</script>

<template>
  <div
    hfull
    flex="~"
    flex-col
    pt-15
    px-4
    mx-auto
    box-border
  >
    <div
      flex-1
      flex="~"
    >
      <!-- <div
        w60
        bg-sky:50
      ></div> -->
      <el-scrollbar
        flex-1
        bg-black:80
        rounded-2
      >
        <div
          pl-5
          h10
          line-height-10
          color-white
          font-bold
          text-4
        >
          播放列表
        </div>
        <div class="playList">
          <!--歌曲列表-->
          <div class="music-list flex-col">
            <template v-if="playlist.length > 0">
              <div class="list-content">
                <draggable
                  class="list-group"
                  tag="transition-group"
                  :component-data="{
                    tag: 'ul',
                    type: 'transition-group',
                    name: !drag ? 'flip-list' : null
                  }"
                  v-model="playlist"
                  v-bind="dragOptions"
                  @start="drag = true"
                  @end="drag = false"
                  item-key="order"
                >
                  <template #item="{ element: item, index: idx }">
                    <div
                      hover:bg-green-900:40
                      hover:transition-all
                      transition-all
                      :class="[
                        'list-item',
                        playing && currentMusic.id === item.id ? 'on' : ''
                      ]"
                      @dblclick="handlerItemClick(item, idx)"
                    >
                      <!-- 编号 -->
                      <span class="list-num">{{ idx + 1 }}</span>
                      <!-- 图片 -->
                      <div flex-row>
                        <img
                          rounded-2
                          w12
                          h12
                          mr2
                          :src="item.image"
                          :alt="item.name"
                        />
                      </div>
                      <!-- 歌曲名+标识 -->
                      <div
                        flex-col-center
                        items-start
                        gap-1.5
                        line-height-none
                        min-w60
                      >
                        <span font-bold>{{ item.name }}</span>
                        <!-- <span text-1>{{ item.singer }}</span> -->
                        <span
                          rounded
                          bg="#dec998"
                          color="#050506"
                          text-.1
                          font-bold
                          px1
                          py.3
                          >flac</span
                        >
                      </div>
                      <!-- 歌手 -->
                      <span
                        w50
                        font-bold
                        >{{ item.singer }}</span
                      >
                      <!-- 专辑 -->
                      <span
                        w50
                        font-bold
                        >{{ item.album }}</span
                      >
                      <!-- 时长 -->
                      <span
                        w20
                        font-bold
                      >
                        {{ format(item.duration) || '--' }}
                      </span>
                      <div flex-row>
                        <div
                          class="hover"
                          h7
                          w7
                          border="1.5px solid"
                          border-gray-200:50
                          bg-white:10
                          rounded
                          flex-row
                          @click.stop="handlerItemClick(item, idx)"
                        >
                          <div
                            v-if="playing && currentMusic.id === item.id"
                            i-mdi-pause
                            color="#5d72f6"
                          />
                          <div
                            v-else
                            i-mdi-play
                            color="#5d72f6"
                          />
                        </div>
                        <div
                          ml-6
                          class="hover"
                          h7
                          w7
                          flex-row
                          @click.stop="handlerDownLoadItem(item, idx)"
                        >
                          <div i-mdi-download />
                        </div>
                      </div>
                    </div>
                  </template>
                </draggable>
              </div>
            </template>
            <mm-no-result
              v-else
              title="暂无歌曲哦，请联系管理员添加"
            />
          </div>
        </div>
      </el-scrollbar>
      <div
        :class="lyricVisible ? 'show' : ''"
        w80
        ml2
        bg-black:80
        rounded-2
      >
        <!-- 歌词 -->
        <base-lyric
          :lyric="lyric"
          :nolyric="nolyric"
          :lyric-index="lyricIndex"
          :currentMusic="currentMusic"
        />
      </div>
    </div>

    <!--播放器-->
    <!-- :class="{ disable: !musicReady || !currentMusic.id }" -->
    <div
      flex="~"
      items-center
      color-white
      bg="#5e75f9"
      rounded-2
      py-2.5
      my-2.5
    >
      <div
        flex="~"
        justify-between
        items-center
        w50
        pl10
      >
        <div
          cursor-pointer
          i-solar-skip-previous-bold
          title="上一曲 Ctrl + Left"
          @click="prev"
        />

        <div
          cursor-pointer
          rounded-3
          w11
          h11
          flex-row
          bg-white:90
          color="#5d72f6"
          title="播放暂停 Ctrl + Space"
          @click="handlerBarPlay"
        >
          <div
            v-if="playing"
            i-mdi-pause
            text-5
          />
          <div
            v-else
            i-mdi-play
            text-5
          />
        </div>
        <div
          cursor-pointer
          i-solar-skip-next-bold
          title="下一曲 Ctrl + Right"
          @click="next"
        />
      </div>
      <div
        relative
        flex-1
        box-border
        px-10
        color-white
      >
        <div
          h4
          line-height-4
          pr10
          text-ellipsis
          line-clamp-1
        >
          <template v-if="currentMusic && currentMusic.id">
            {{ currentMusic.name }}
            <span>- {{ currentMusic.singer }}</span>
          </template>
          <template v-else>欢迎使用mmPlayer在线音乐播放器</template>
        </div>
        <div
          absolute
          top-0
          right-11
        >
          {{
            currentMusic.id
              ? (currentTime ? format(currentTime) : '0:00') +
                ' / ' +
                (currentMusic.duration ? format(currentMusic.duration) : '0:00')
              : '-- / --'
          }}
        </div>
        <!-- 进度条 -->
        <base-progress
          :percent="percentMusic"
          :percent-progress="currentProgress"
          @percentChange="progressMusic"
          @percentChangeEnd="progressMusicEnd"
        />
      </div>

      <!-- 播放模式 -->
      <div
        cursor-pointer
        @click="handlerChangeLoopMode"
      >
        <list-loop
          v-if="playMode === 'loopall'"
          w6
          h6
        />
        <single-loop
          v-if="playMode === 'loopone'"
          w6
          h6
        />
      </div>

      <!-- 音量控制 -->
      <div
        ml-10
        title="音量加减 [Ctrl + Up / Down]"
      >
        <base-volume
          :volume="volume"
          @volumeChange="volumeChange"
        />
      </div>
    </div>

    <!--遮罩-->
    <!-- <div
      class="mmPlayer-bg"
      :style="{ backgroundImage: picUrl }"
    ></div>
    <div class="mmPlayer-mask"></div> -->
  </div>
</template>

<style lang="scss">
.router-view {
  flex: 1;
  overflow-x: hidden;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
}

.music {
  padding: 3.75rem 1rem 0 1rem;
  width: 100%;
  margin: 0 auto;
  height: 100%;
  box-sizing: border-box;
  overflow: hidden;
  .music-content {
    display: flex;
    flex: 1;
    overflow: hidden;
    width: 100%;
    .music-left {
      flex: 1;
      width: 100%;
      overflow: hidden;
    }
    .music-right {
      position: relative;
      width: 20rem;
      margin-left: 10px;
      .close-lyric {
        position: absolute;
        top: 0;
        z-index: 1;
        cursor: pointer;
      }
    }
  }

  /*底部mmPlayer-bar*/
  .music-bar {
    display: flex;
    align-items: center;
    width: 100%;
    padding: 15px 0;
    color: #fff;
    &.disable {
      pointer-events: none;
      opacity: 0.6;
    }
    .icon-color {
      color: #fff;
    }

    @include flex-center(row);

    .music-music {
      position: relative;
      width: 100%;
      flex: 1;
      box-sizing: border-box;
      padding-left: 40px;
      font-size: $font_size_small;
      color: $text_color_active;
      .music-bar-info {
        height: 15px;
        padding-right: 80px;
        line-height: 15px;
        text-overflow: ellipsis;
        overflow: hidden;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        -webkit-box-orient: vertical;
      }
      .music-bar-time {
        position: absolute;
        top: 0;
        right: 5px;
      }
    }
    .mode,
    .comment,
    .music-bar-volume {
      margin-left: 20px;
    }

    // 音量控制
    .volume-wrapper {
      margin-left: 20px;
      width: 150px;
    }
  }

  /*遮罩*/
  .mmPlayer-mask,
  .mmPlayer-bg {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }

  .mmPlayer-mask {
    z-index: -1;
    background-color: $mask_color;
  }

  .mmPlayer-bg {
    z-index: -2;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50%;
    filter: blur(12px);
    opacity: 0.7;
    transition: all 0.8s;
    transform: scale(1.1);
  }
}

// music-list
.music-list {
  height: 100%;
}

.list-content {
  flex: 1;
  -webkit-overflow-scrolling: touch;
}

.list-no {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: $text_color;
}

.list-item {
  display: flex;
  width: 100%;
  height: 80px;
  border-bottom: 1px solid $list_item_line_color;
  line-height: 80px;

  &.list-item-no {
    justify-content: center;
    align-items: center;
  }

  &.on {
    color: #fff;

    .list-num {
      font-size: 0;
      background: url('@/assets/img/wave.gif') no-repeat center center;
    }
  }

  &:hover {
  }

  /*hover菜单*/

  .list-num {
    display: block;
    width: 30px;
    margin-right: 10px;
    text-align: center;
  }

  .list-artist,
  .list-album {
    display: block;
    width: 200px;
    @include no-wrap;
  }

  .list-time {
    display: block;
    width: 60px;
    position: relative;

    .list-menu-icon-del {
      display: none;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
}

.list-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  span {
    padding: 5px 20px;
    cursor: pointer;
    user-select: none;
    &:hover {
      color: $text_color_active;
    }
  }
}

.flex-col {
  display: flex;
  flex-direction: column;
}
</style>

<style scoped>
.button {
  margin-top: 35px;
}

.flip-list-move {
  transition: transform 0.5s;
}

.no-move {
  transition: transform 0s;
}

.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
./usePlayer
