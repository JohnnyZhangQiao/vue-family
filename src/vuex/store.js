import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  //state为vuex的全局变量，用于组件间通信
  state : {
    title: '模块标题',
    footerFlag: '',
    loading: false,
  },

  //在vue中，The only way to actually change state in a Vuex store is by committing a mutation
  //应将所有的逻辑处理包含在mutations方法里面
  mutations : {
    SET_LOADING(state,obj) {
      state.loading = obj.loading;
    },
    IN_PUSH(state) {
      state.footerFlag = 'index/push';
      state.title = '推荐';
    },
    IN_LOCAL(state) {
      state.footerFlag = 'index/local'
      state.title = '本地';
    },
    IN_SEARCH(state) {
      state.footerFlag = 'index/search'
      state.title = '发现';
    },
    IN_MY(state) {
      state.footerFlag = 'index/my'
      state.title = '我的';
    },
    IN_INTERESTING(state) {
      state.title = '发现有趣';
    }
  },

  //action负责接收从各组件dispatch过来的动作，识别后提交到相应的mutation改变state
  actions : {
    setLoading({commit},obj) {
      commit('SET_LOADING',obj)
    },
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
    },
    inInteresting({commit}) {
      commit('IN_INTERESTING')
    }
  }
})
