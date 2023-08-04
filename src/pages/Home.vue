<script setup lang="ts">
import _ from 'lodash'
// import draggable from 'vuedraggable'
import { ElMessage } from 'element-plus'
import comma from '@/assets/svg/comma.svg'
import { initPlayer } from './initPlayer'
import { format } from '@/utils/format'
import { parseLyric, useAnimate } from '@/utils'
import { getLrcFile, download } from '@/api/modules'
const playerStore = usePlayerStore()
const ele = playerStore.Player
initPlayer()

const lyricVisible = ref<boolean>(true)

function handlerItemClick(item: baseObj, idx: number) {
  if (!ele.src) {
    ele.src = playerStore.currentMusic.url
  }
  if (playerStore.currentMusic.id !== item.id) {
    ele.src = item.url
    playerStore.playing = true
    // 更新currentMusic
    playerStore.currentMusic = playerStore.playlist[idx]
  } else {
    playerStore.playing = !playerStore.playing
  }
  playerStore.play()
}

// 下载
function handlerDownLoadItem(item) {
  const key = encodeURI(item.key)
  download(encodeURIComponent(key)).then((res) => {
    if (res && res.code == 200) {
      const url = res.data
      const a = document.createElement('a')
      a.setAttribute('download', item.key)
      a.setAttribute('href', url)
      a.setAttribute('target', '_blank')
      a.click()
    }
  })
}

// 拖拽相关
// const drag = ref(false)

// const dragOptions = computed(() => {
//   return {
//     animation: 200,
//     group: 'description',
//     disabled: false,
//     ghostClass: 'ghost'
//   }
// })

watch(
  () => playerStore.playMode,
  (val) => (ele.loop = playerStore.playMode === 'loopone' || false),
  {
    immediate: true
  }
)
// 播放模式相关
watch(
  () => playerStore.currentTime,
  (val) => {
    if (val === playerStore.currentMusic.duration) {
      setTimeout(() => {
        if (playerStore.playMode === 'loopall') {
          playerStore.next()
        } else if (playerStore.playMode === 'loopone') {
          playerStore.play()
        }
      }, 1000)
    }

    let lyricindex = 0
    for (let i = 0; i < lyric.value.length; i++) {
      if (val > lyric.value[i].time) {
        lyricindex = i
      }
    }
    lyricIndex.value = lyricindex
  }
)

// 歌词相关
const lyric = ref<any[]>([])
const lyricIndex = ref(0)

watch(
  () => playerStore.currentMusic,
  (newMusic, oldMusic) => {
    if (!newMusic.id) {
      lyric.value = []
      return
    }
    if (newMusic.id === oldMusic!.id) {
      return
    }
    // 重置相关参数
    lyricIndex.value = 0
    playerStore.currentTime = 0
    nextTick(() => {
      _getLyric()
    })
  }
)

watch(
  () => playerStore.curListMode,
  (val) => {
    console.log(val)
  }
)

async function _getLyric() {
  const fileContext = await getLrcFile(playerStore.currentMusic.lyric)
  lyric.value = parseLyric(fileContext)
}

//切换喜欢状态，更新我喜欢列表
function handlerSwitchLovedState(item: baseObj) {
  const lovedList = playerStore.lovedList
  if (playerStore.curListMode === 'random') {
    if (!item.isLoved) {
      item.isLoved = true

      lovedList.push(item)
      ElMessage({
        message: '已添加至我喜欢',
        type: 'success',
        duration: 1000,
        customClass: 'loved-color'
      })
    } else {
      item.isLoved = false
      let curIdx = lovedList.findIndex((el) => el.id === item.id)
      lovedList.splice(curIdx, 1)
      ElMessage({
        message: '已从我喜欢移除',
        type: 'success',
        duration: 1000,
        customClass: 'loved-color'
      })
    }
  } else if (playerStore.curListMode === 'loved') {
    // 将isLoved置为false以启动动画
    item.isLoved = false
    let curIdx = playerStore.playlist.findIndex((el) => el.id === item.id)
    setTimeout(() => {
      playerStore.playlist.splice(curIdx, 1)
    }, 500)
  }
}

function handlerScrollAnchorMusic() {
  const el = document.querySelector('.on')
  el?.scrollIntoView({
    behavior: 'smooth'
  })
}

// 切换列表
function toggleList(singer: string) {
  let tempList: baseObj[] = []
  const beforeCall = () => {
    playerStore.curListMode = 'random'
    playerStore.allPlayList.forEach((item) => {
      if (item.singer === singer) {
        tempList.push(item)
      }
    })
  }

  const afterCall = () => {
    playerStore.disabled = true
    playerStore.playlist = tempList
  }

  useAnimate(beforeCall, afterCall)
}

const toggleListDebounce = _.debounce(toggleList, 500, {
  leading: true,
  trailing: false
})

// 蒙层背景
// const picUrl = computed(() => {
//   return playerStore.currentMusic.id && playerStore.currentMusic.image
//     ? `url(${playerStore.currentMusic.image})`
//     : 'transparent'
// })
</script>

<template>
  <div
    flex-1
    overflow-hidden
    flex="~"
    gap-2
    mx5
    mb3
  >
    <!-- 左侧 -->
    <div
      bg-black:80
      rounded-2
      flex="~"
      flex-col
    >
      <div
        pl-6
        h10
        line-height-10
        color-white
        font-bold
        text-4
      >
        专辑
      </div>
      <div
        flex-1
        wfull
        box-border
        px-6
        pt2
        select-none
      >
        <el-row
          :gutter="12"
          mb3
        >
          <el-col :span="14">
            <div
              @click="toggleListDebounce('林俊杰')"
              cursor-pointer
              h30
              bg="#516988"
              rounded-4
              color-white
              flex="~"
              flex-col
              justify-end
              items-end
              pr3
              py4
              box-border
              relative
            >
              <comma
                absolute
                left-2
                top-2
                color="#a39986"
                w8
                h8
              />
              <span
                mb3
                font-bold
                text-4
                >" 重拾_快乐 "</span
              >
              <span
                mb1
                text-3
                font-bold
                >林俊杰</span
              >
              <span
                text-3
                font-bold
                >14首</span
              >
            </div>
          </el-col>
          <el-col :span="10">
            <div
              cursor-pointer
              h30
              bg="#a39986"
              rounded-4
            ></div>
          </el-col>
        </el-row>
        <el-row
          :gutter="12"
          mb3
        >
          <el-col :span="10">
            <div
              cursor-pointer
              h30
              bg="#935138"
              rounded-4
            ></div>
          </el-col>
          <el-col :span="14">
            <div
              @click="toggleListDebounce('周杰伦')"
              cursor-pointer
              h30
              bg="#223f44"
              rounded-4
              color-white
              flex="~"
              flex-col
              justify-end
              items-start
              pl3
              py4
              box-border
              relative
            >
              <comma
                rotate-180
                absolute
                right-2
                top-2
                color="#935138"
                w8
                h8
              />
              <span
                mb3
                font-bold
                text-3.6
                >" 最伟大的作品 "</span
              >
              <span
                mb1
                text-3
                font-bold
                >周杰伦</span
              >
              <span
                text-3
                font-bold
                >14首</span
              >
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="12">
          <el-col :span="14">
            <div
              cursor-pointer
              h30
              bg="#9c7b93"
              rounded-4
              color-white
              flex="~"
              flex-col
              justify-end
              items-end
              pr3
              py4
              box-border
              relative
            >
              <comma
                absolute
                left-2
                top-2
                color="#514aa1"
                w8
                h8
              />
              <span
                mb3
                font-bold
                text-4
                >" 重拾_快乐 "</span
              >
              <span
                mb1
                text-3
                font-bold
                >林俊杰</span
              >
              <span
                text-3
                font-bold
                >14首</span
              >
            </div>
          </el-col>
          <el-col :span="10">
            <div
              cursor-pointer
              h30
              bg="#514aa1"
              rounded-4
            ></div>
          </el-col>
        </el-row>
        <!-- 天气组件 -->
        <div
          h50
          wfull
          overflow-hidden
        >
          <base-weather-card />
        </div>
      </div>
    </div>

    <!-- 中间列表 -->
    <div
      overflow-hidden
      flex-1
      bg-black:80
      rounded-2
      relative
      flex="~"
      flex-col
    >
      <div
        wfull
        pl-5
        box-border
        h10
        rounded-t-2
        line-height-10
        color-white
        font-bold
        text-4
        bg-black:80
      >
        播放列表
      </div>

      <div
        w7
        h7
        rounded-5
        absolute
        bottom-5
        right-58
        z-1
        cursor-pointer
        flex-row
        text-4.6
        bg-purple:20
        @click="handlerScrollAnchorMusic"
      >
        <div
          color="#6477f4"
          i-material-symbols-my-location
        />
      </div>

      <el-scrollbar>
        <div
          :class="[playerStore.disabled ? 'puff-in-center' : '']"
          v-if="playerStore.playlist.length > 0"
          px-5
          pb2
          box-border
          overflow-hidden
        >
          <div
            v-for="(item, idx) in playerStore.playlist"
            :key="idx"
            :class="[
              playerStore.playing && playerStore.currentMusic.id === item.id
                ? 'on'
                : '',
              !item.isLoved && playerStore.curListMode == 'loved'
                ? 'slit-out-horizontal'
                : ''
            ]"
            hover:bg-green-900:40
            hover:transition-all
            hover:ease
            transition-all
            ease
            flex="~"
            wfull
            h18
            rounded-1
            line-height-18
            text-3.5
            @dblclick="handlerItemClick(item, idx)"
          >
            <!-- 编号 -->
            <span
              class="list-img"
              block
              min-w10
              text-center
              >{{ idx + 1 }}</span
            >
            <!-- 图片 -->
            <div
              flex-row
              mr2
            >
              <img
                rounded-2
                w12
                h12
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
              flex-1
            >
              <span font-bold>{{ item.name }}</span>
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
              min-w30
              font-500
              >{{ item.singer }}</span
            >
            <!-- 专辑 -->
            <span
              min-w30
              font-500
              >{{ item.album }}</span
            >
            <!-- 时长 -->
            <span
              w5
              font-bold
            >
              {{ format(item.duration) || '--' }}
            </span>
            <!-- 操作 -->
            <div
              flex-row
              min-w50
            >
              <div
                class="hover"
                h7
                w7
                border="1.5px solid"
                border-gray-200:50
                bg-white:10
                rounded
                flex-row
                text-3
                @click.stop="handlerItemClick(item, idx)"
              >
                <Transition mode="out-in">
                  <div
                    v-if="
                      playerStore.playing &&
                      playerStore.currentMusic.id === item.id
                    "
                    i-iconamoon-player-pause-fill
                    color="#5d72f6"
                  />
                  <div
                    v-else
                    i-iconamoon-player-play-fill
                    color="#5d72f6"
                  />
                </Transition>
              </div>
              <div
                cursor-pointer
                ml-6
                h7
                w7
                flex-row
                text-4
                @click.stop="handlerSwitchLovedState(item)"
              >
                <Transition mode="out-in">
                  <div
                    v-if="item.isLoved"
                    color-red
                    i-material-symbols-favorite-rounded
                  />
                  <div
                    v-else
                    color="#5d72f6"
                    hover:color-red
                    hover:transition-all
                    hover:ease
                    i-material-symbols-favorite-outline-rounded
                  />
                </Transition>
              </div>
              <div
                cursor-pointer
                ml-6
                h7
                w7
                hover:color="#5d72f6"
                hover:transition
                flex-row
                text-4
                @click.stop="handlerDownLoadItem(item)"
              >
                <div i-mdi-download />
              </div>
            </div>
          </div>
        </div>
      </el-scrollbar>
    </div>

    <!-- 右侧 -->
    <div
      :class="lyricVisible ? 'show' : ''"
      w80
      bg-black:80
      rounded-2
    >
      <!-- 歌词 -->
      <base-lyric
        :lyric="lyric"
        :lyric-index="lyricIndex"
        :currentMusic="playerStore.currentMusic"
      />
    </div>
  </div>

  <!--遮罩-->
  <!-- <div
    class="mmPlayer-bg"
    :style="{ backgroundImage: picUrl }"
  ></div>
  <div class="mmPlayer-mask"></div> -->
</template>

<style lang="scss">
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
  background-color: rgba(0, 0, 0, 0.4);
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

.on {
  color: #fff;

  .list-img {
    font-size: 0;
    background: url('@/assets/img/wave.gif') no-repeat center center;
  }
}

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

// 列表进入动画

.puff-in-center {
  -webkit-animation: text-focus-in 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53)
    both;
  animation: text-focus-in 0.6s cubic-bezier(0.55, 0.085, 0.68, 0.53) both;
}

@-webkit-keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}
@keyframes text-focus-in {
  0% {
    -webkit-filter: blur(12px);
    filter: blur(12px);
    opacity: 0;
  }
  100% {
    -webkit-filter: blur(0px);
    filter: blur(0px);
    opacity: 1;
  }
}

.slit-out-horizontal {
  -webkit-animation: slit-out-horizontal 0.5s ease-in both;
  animation: slit-out-horizontal 0.5s ease-in both;
}

@-webkit-keyframes slit-out-horizontal {
  0% {
    -webkit-transform: translateZ(0) rotateX(0);
    transform: translateZ(0) rotateX(0);
    opacity: 1;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotateX(87deg);
    transform: translateZ(-160px) rotateX(87deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-800px) rotateX(90deg);
    transform: translateZ(-800px) rotateX(90deg);
    opacity: 0;
  }
}
@keyframes slit-out-horizontal {
  0% {
    -webkit-transform: translateZ(0) rotateX(0);
    transform: translateZ(0) rotateX(0);
    opacity: 1;
  }
  54% {
    -webkit-transform: translateZ(-160px) rotateX(87deg);
    transform: translateZ(-160px) rotateX(87deg);
    opacity: 1;
  }
  100% {
    -webkit-transform: translateZ(-800px) rotateX(90deg);
    transform: translateZ(-800px) rotateX(90deg);
    opacity: 0;
  }
}
</style>
