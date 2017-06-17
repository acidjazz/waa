import Vuex from 'vuex'

const store = () => new Vuex.Store({
  state: {
    sticky: false,
    counter: 0,
    homesNeeded: 0,
  },
  mutations: {
    increment (state) {
      state.counter++
    },
    alterSticky (sticky) {
    }
  },
})

export default store
