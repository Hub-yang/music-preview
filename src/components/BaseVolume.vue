<script lang="ts">
export default {
  name: 'BaseVolume'
}
</script>

<script setup lang="ts">
interface Props {
  volume: number
}

const props = defineProps<Props>()
const emit = defineEmits(['volumeChange'])

const lastVolume = ref(0)

const volumeProgress = computed(() => props.volume)
const isMute = computed({
  get() {
    return volumeProgress.value === 0
  },
  set(newMute) {
    const volume = newMute ? 0 : lastVolume.value
    if (newMute) {
      lastVolume.value = volumeProgress.value
    }
    handlerVolumeChange(volume)
  }
})
function handlerToggleVolume() {
  isMute.value = !isMute.value
}

function handlerVolumeChange(percent) {
  emit('volumeChange', percent)
}
</script>

<!-- 音量控制组件 -->
<template>
  <div
    flex="~"
    items-center
    w25
    mr-3
  >
    <div
      cursor-pointer
      @click="handlerToggleVolume"
    >
      <div
        v-if="isMute"
        i-iconamoon-volume-off-duotone
        w6
        h6
      />
      <div
        v-else-if="volumeProgress >= 0.7 && volumeProgress <= 1"
        i-iconamoon-volume-up-duotone
        w6
        h6
      />
      <div
        v-else
        i-iconamoon-volume-down-duotone
        w6
        h6
      />
    </div>
    <div />
    <div flex-1>
      <base-progress
        :percent="volumeProgress"
        @percentChangeEnd="handlerVolumeChange"
        @percentChange="handlerVolumeChange"
      />
    </div>
  </div>
</template>
