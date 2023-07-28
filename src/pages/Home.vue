<script setup lang="ts">
import { usePlayerStore } from '@/store/player'
import draggable from 'vuedraggable'
import moment from 'moment'
import { playList } from './playList'
const playStore = usePlayerStore()

const playlist = ref<baseObj[]>([])

initAudioDuration()
onMounted(() => {})

/**
 * 获取歌曲时长
 * @author mocheng
 * @date 2023-07-28
 */
function initAudioDuration() {
  playlist.value = playList.value.map((item: baseObj, idx) => {
    const audioElement = new Audio(item.url)
    audioElement.onloadeddata = () => {
      item.duration = moment(audioElement.duration * 1000).format('mm:ss')
    }
    audioElement.remove()
    return item
  })
}

// 播放状态相关
const playing = ref(false)
// 播放状态相关结束
const picUrl = ref('')
const currentMusic = ref<baseObj>({})

const lyricVisible = ref<boolean>(true)

function handlerItemClick(item: baseObj, idx: number) {
  if (currentMusic.value.id !== item.id) {
    playStore.Player.src = item.url
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
  if (idx - 1 >= 0) {
    currentMusic.value = playlist.value[idx - 1]
    playStore.Player.src = currentMusic.value.url
    playing.value = true
    play()
  }
}

function next() {
  let idx = playlist.value.findIndex(
    (item) => item.id === currentMusic.value.id
  )
  if (idx < playlist.value.length - 1) {
    currentMusic.value = playlist.value[idx + 1]
    playStore.Player.src = currentMusic.value.url
    playing.value = true
    play()
  }
}

function play() {
  if (playing.value) playStore.Player.play()
  else playStore.Player.pause()
}

// 获取播放状态
// function getPlayIconType({ id: itemId }) {
//   const { id } = currentMusic.value
//   return playing.value && id === itemId ? 'pause-mini' : 'play-mini'
// }

// 下载
function handlerDownLoadItem(item, idx) {
  console.log('防抖')
  console.log('下载 :>>> ', item, idx)
}

function format(text: any) {
  return text
}

// progress相关
const currentTime = ref(0)
const currentProgress = ref(0)

const percentMusic = computed(() => {
  const duration = currentMusic.value.duration
  return currentTime.value && duration ? currentTime.value / duration : 0
})

function progressMusic(percent) {
  currentTime.value = currentMusic.value.duration * percent
}

function progressMusicEnd(percent) {
  playStore.Player.currentTime = currentMusic.value.duration * percent
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
</script>

<template>
  <div class="music flex-col">
    <div class="music-content">
      <div
        w100
        hfull
        bg-sky:50
      ></div>
      <el-scrollbar
        class="music-left"
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
        <div class="flex-col">
          <!--正在播放-->
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
                          flex-col
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
                          {{ item.duration || '--' }}
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
        </div>
      </el-scrollbar>
      <div
        :class="['music-right', lyricVisible ? 'show' : '']"
        bg-red:50
      >
        <!-- <lyric ref="lyric" :lyric="lyric" :nolyric="nolyric" :lyric-index="lyricIndex" /> -->
      </div>
    </div>

    <!--播放器-->
    <!-- :class="{ disable: !musicReady || !currentMusic.id }" -->
    <div
      class="music-bar"
      bg="#5e75f9"
      rounded-2
      m="2.5 0"
    >
      <div
        flex="~"
        justify-between
        items-center
        w50
        pl10
      >
        <div
          class="pointer"
          i-solar-skip-previous-bold
          title="上一曲 Ctrl + Left"
          @click="prev"
        />

        <div
          class="pointer"
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
          class="pointer"
          i-solar-skip-next-bold
          title="下一曲 Ctrl + Right"
          @click="next"
        />
      </div>
      <div class="music-music">
        <div class="music-bar-info">
          <template v-if="currentMusic && currentMusic.id">
            {{ currentMusic.name }}
            <span>- {{ currentMusic.singer }}</span>
          </template>
          <template v-else>欢迎使用mmPlayer在线音乐播放器</template>
        </div>
        <div
          v-if="currentMusic.id"
          class="music-bar-time"
        >
          {{ format(currentTime) }}/{{ currentMusic.duration }}
        </div>
        <base-progress
          class="music-progress"
          :percent="percentMusic"
          :percent-progress="currentProgress"
          @percentChange="progressMusic"
          @percentChangeEnd="progressMusicEnd"
        />
      </div>

      <!-- 播放模式 -->
      <!-- <mm-icon
        class="icon-color pointer mode"
        :type="getModeIconType()"
        :title="getModeIconTitle()"
        :size="30"
        @click="modeChange"
      /> -->
      <!-- 音量控制 -->
      <div
        class="music-bar-volume"
        title="音量加减 [Ctrl + Up / Down]"
      >
        <!-- <volume :volume="volume" @volumeChange="volumeChange" /> -->
      </div>
    </div>

    <!--遮罩-->
    <div
      class="mmPlayer-bg"
      :style="{ backgroundImage: picUrl }"
    ></div>
    <div class="mmPlayer-mask"></div>
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
