import Vuex from 'vuex'

// v1.0 version const store = () => new Vuex.Store({
const store = () =>  new Vuex.Store({
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
