import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {

  },
  mutations: {

  },
  actions: {
    sendMessage () {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })

    }

  }
})
