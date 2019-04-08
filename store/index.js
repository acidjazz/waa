export const state = () => ({
  sticky: false,
  counter: 0,
  homesNeeded: 0,
})

export const mutations = {
  increment (state) {
    state.counter++
  },
  alterSticky (sticky) {
  }
}
