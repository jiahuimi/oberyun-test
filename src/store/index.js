import { createStore } from 'vuex'

export default createStore({
  state() { //数据存贮
    return {
      count: 0
    }
  },
  getters: { //state的计算属性
  },
  mutations: { //更改state中状态的逻辑 同步操作
    increment (state) {
      state.count++
    }
  },
  actions: { //action 提交mutation 异步操作
  },
  modules: { //model 模块化
  }
})
