<!-- icon 组件 -->

<script lang="ts">
export default {
  name: 'BaseIcon',
}
</script>

<script lang="ts" setup>
interface Props {
  type: string
  size?: number
}

const props = withDefaults(defineProps<Props>(), {
  size: 16,
})

const emit = defineEmits(['click'])

function getIconCls() {
  return `icon-${props.type}`
}

function getIconStyle() {
  return { fontSize: props.size + 'px' }
}

function onClick(e) {
  emit('click', e)
}
</script>

<template>
  <i @click="onClick" :class="['iconfont', getIconCls()]" :style="getIconStyle()" />
</template>

<style lang="scss">
.iconfont {
  display: inline-block;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  line-height: 1;
  vertical-align: baseline;
  text-transform: none;
  speak: none;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
