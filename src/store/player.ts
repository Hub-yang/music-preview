export const usePlayerStore = defineStore("player", () => {
  // state
  const Player = ref<any>(null)


  // getters
  // const doubleCount = computed(() => count.value * 2)

  // actions

  // function play() {
  //   Player.value!.play()
  // }


  return {
    Player
  }
})