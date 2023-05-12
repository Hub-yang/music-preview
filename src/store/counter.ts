export const useCounterStore = defineStore("counter", () => {
  // 使用setup store
  // state
  const count = ref(0)

  // getters
  const doubleCount = computed(() => count.value * 2)

  // actions
  function inc() {
    count.value++
  }

  function dec() {
    count.value--
  }

  return {
    count,
    doubleCount,
    inc,
    dec
  }

})