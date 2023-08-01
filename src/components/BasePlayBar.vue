<script lang="ts">
export default {
  name: 'BasePlayBar'
}
</script>
<script setup lang="ts">
import { format } from '@/utils/format'
import { StyleValue } from 'vue'

const playerStore = usePlayerStore()
function handlerChangeLoopMode() {
  playerStore.playMode =
    playerStore.playMode === 'loopall' ? 'loopone' : 'loopall'
}

// progress相关

const percentMusic = computed(() => {
  const duration = playerStore.currentMusic.duration
  return playerStore.currentTime && duration
    ? playerStore.currentTime / duration
    : 0
})

function progressMusic(percent) {
  playerStore.currentTime = playerStore.currentMusic.duration * percent
}

function progressMusicEnd(percent) {
  playerStore.Player.currentTime = playerStore.currentMusic.duration * percent
}

function handlerBarPlay() {
  playerStore.playing = !playerStore.playing
  playerStore.play()
}

// 音量控件相关
function volumeChange(percent) {
  percent === 0 ? (playerStore.isMute = true) : (playerStore.isMute = false)
  playerStore.volume = percent
  playerStore.Player.volume = percent
  // 缓存
  // setVolume(percent)
}

const btnStyle = computed<StyleValue>(() => ({
  'pointer-events': playerStore.currentMusic.id ? 'auto' : 'none',
  cursor: playerStore.currentMusic.id ? 'pointer' : '',
  opacity: playerStore.currentMusic.id ? '1' : '.5'
}))
</script>

<template>
  <!--播放器-->
  <div
    flex="~"
    items-center
    color-white
    bg="#5e75f9"
    rounded-2
    py-2.5
  >
    <div
      flex="~"
      justify-between
      items-center
      w50
      pl10
    >
      <div
        :style="btnStyle"
        i-solar-skip-previous-bold
        title="上一曲 Ctrl + Left"
        @click="playerStore.prev"
      />

      <div
        :style="btnStyle"
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
        <Transition mode="out-in">
          <div
            v-if="playerStore.playing"
            i-iconamoon-player-pause-fill
            text-5
          />
          <div
            v-else
            i-iconamoon-player-play-fill
            text-5
          />
        </Transition>
      </div>
      <div
        :style="btnStyle"
        cursor-pointer
        i-solar-skip-next-bold
        title="下一曲 Ctrl + Right"
        @click="playerStore.next"
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
        <template
          v-if="playerStore.currentMusic && playerStore.currentMusic.id"
        >
          {{ playerStore.currentMusic.name }}
          <span>- {{ playerStore.currentMusic.singer }}</span>
        </template>
        <template v-else>欢迎使用mmPlayer在线音乐播放器</template>
      </div>
      <div
        absolute
        top-0
        right-11
      >
        {{
          playerStore.currentMusic.id
            ? (playerStore.currentTime
                ? format(playerStore.currentTime)
                : '0:00') +
              ' / ' +
              (playerStore.currentMusic.duration
                ? format(playerStore.currentMusic.duration)
                : '0:00')
            : '-- / --'
        }}
      </div>
      <!-- 进度条 -->
      <base-progress
        :style="btnStyle"
        :percent="percentMusic"
        :percent-progress="playerStore.currentProgress"
        @percentChange="progressMusic"
        @percentChangeEnd="progressMusicEnd"
      />
    </div>

    <!-- 播放模式 -->
    <div
      cursor-pointer
      @click="handlerChangeLoopMode"
    >
      <Transition mode="out-in">
        <div
          v-if="playerStore.playMode === 'loopall'"
          i-iconamoon-playlist-repeat-list-bold
          w5
          h5
        />
        <div
          v-else-if="playerStore.playMode === 'loopone'"
          i-iconamoon-playlist-repeat-song-bold
          w5
          h5
        />
      </Transition>
    </div>

    <!-- 音量控制 -->
    <div
      ml-10
      title="音量加减 [Ctrl + Up / Down]"
    >
      <base-volume
        :volume="playerStore.volume"
        @volumeChange="volumeChange"
      />
    </div>
  </div>
</template>
