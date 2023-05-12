<script setup lang='ts'>
const props = withDefaults(defineProps<{ initial?: number }>(), {
  initial: 0
})

const { count, inc, dec } = useCounter(props.initial)
</script>

<template>
  <div>
    <el-button plain @click="inc()">
      +
    </el-button>
    <span text-center px-2>{{ count }}</span>
    <el-button plain @click="dec()">
      -
    </el-button>
  </div>
</template>