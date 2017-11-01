import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  //state为vuex的全局变量，用于组件间通信
  state : {
    title: '模块标题',
    footerFlag: ''
  },

  //在vue中，The only way to actually change state in a Vuex store is by committing a mutation
  //应将所有的逻辑处理包含在mutations方法里面
  mutations : {
    IN_PUSH(state) {
      state.footerFlag = 'push';
      state.title = '推荐';
    },
    IN_LOCAL(state) {
      state.footerFlag = 'local'
      state.title = '本地';
    },
    IN_SEARCH(state) {
      state.footerFlag = 'search'
      state.title = '发现';
    },
    IN_MY(state) {
      state.footerFlag = 'my'
      state.title = '我的';
    }
  },

  //action负责接收从各组件dispatch过来的动作，识别后提交到相应的mutation改变state
  actions : {
    inPush({commit}) {
      commit('IN_PUSH')
    },
    inLocal({commit}) {
      commit('IN_LOCAL')
    },
    inSearch({commit}) {
      commit('IN_SEARCH')
    },
    inMy({commit}) {
      commit('IN_MY')
    }
  }
})
