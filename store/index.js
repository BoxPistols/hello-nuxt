import Vuex from "vuex"

const store = () => {
  return new Vuex.Store({

    state: function () {
      return {
        msg: 'Hello Vuex',
        appNum: 0
      }
    },

    mutations: {
      updateMsg: function (state) {
        state.msg = 'UpDate Mutation'
      },
      changeNum(state, val){
        state.msg = 'changeNum Mutation'
        state.appNum = state.appNum + val
      }
    }

  })
}
export default store