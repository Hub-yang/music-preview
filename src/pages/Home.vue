<script setup lang="ts">
import draggable from 'vuedraggable'
import comma from '@/assets/svg/comma.svg'
import { initPlayer } from './initPlayer'
import { format } from '@/utils/format'
import { parseLyric } from '@/utils/index'
initPlayer()
const playerStore = usePlayerStore()
const ele = playerStore.Player

const lyricVisible = ref<boolean>(true)

function handlerItemClick(item: baseObj, idx: number) {
  if (playerStore.currentMusic.id !== item.id) {
    ele.src = item.url
    playerStore.playing = true
    playerStore.currentMusic = playerStore.playlist[idx]
  } else {
    playerStore.playing = !playerStore.playing
  }
  playerStore.play()
}

// 下载
function handlerDownLoadItem(item, idx) {
  console.log('防抖')
  console.log('下载 :>>> ', item, idx)
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

function _getLyric() {
  lyric.value = parseLyric(playerStore.currentMusic.lyric)
}
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
    <div
      w80
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
        wfull
        flex-1
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
        >
          <base-weather-card />
        </div>
      </div>
    </div>

    <div
      flex-1
      bg-black:80
      rounded-2
      relative
      overflow-hidden
      box-border
      pb2
    >
      <div
        pl-5
        h10
        rounded-t-2
        line-height-10
        color-white
        font-bold
        text-4
        absolute
        top-0
        left-0
        wfull
        bg-black:80
        z-1
      >
        播放列表
      </div>

      <el-scrollbar>
        <div
          v-if="playerStore.playlist.length > 0"
          pt10
          px-5
          overflow-hidden
        >
          <draggable
            class="list-group"
            tag="transition-group"
            :component-data="{
              tag: 'ul',
              type: 'transition-group',
              name: !drag ? 'flip-list' : null
            }"
            v-model="playerStore.playlist"
            v-bind="dragOptions"
            @start="drag = true"
            @end="drag = false"
            item-key="order"
          >
            <template #item="{ element: item, index: idx }">
              <div
                :class="[
                  playerStore.playing && playerStore.currentMusic.id === item.id
                    ? 'on'
                    : ''
                ]"
                hover:bg-green-900:40
                hover:transition-all
                transition-all
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
                  min-w40
                  font-bold
                  >{{ item.singer }}</span
                >
                <!-- 专辑 -->
                <span
                  min-w40
                  font-bold
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
                  min-w40
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
                    text-4
                    @click.stop="handlerItemClick(item, idx)"
                  >
                    <Transition mode="out-in">
                      <div
                        v-if="
                          playerStore.playing &&
                          playerStore.currentMusic.id === item.id
                        "
                        i-mdi-pause
                        color="#5d72f6"
                      />
                      <div
                        v-else
                        i-mdi-play
                        color="#5d72f6"
                      />
                    </Transition>
                  </div>
                  <div
                    ml-6
                    class="hover"
                    h7
                    w7
                    flex-row
                    text-4
                    @click.stop="handlerDownLoadItem(item, idx)"
                  >
                    <div i-mdi-download />
                  </div>
                </div>
              </div>
            </template>
          </draggable>
        </div>
      </el-scrollbar>
    </div>

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
</style>
