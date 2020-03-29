import Vuex from "vuex"

const store = () => {
  return new Vuex.Store({
    state: function(){
      return {
        msg: 'Hello Vuex'
      }
    }
  })
}
export default store