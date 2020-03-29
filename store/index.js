import Vuex from "vuex"

const store = () => {
  return new Vuex.Store({
    state: function () {
      return {msg: 'Hello Vuex'}
    },
    mutations: {
      updateMsg: function (state) {
        state.msg = 'UpDate Mutation'
      }
    }
  })
}
export default store