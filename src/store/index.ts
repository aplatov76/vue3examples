import { createStore } from 'vuex'
import authModule from './modules/auth.module'
import requestModule from './modules/request.module';
import GlobalStateInterface from '@/interfaces/globalState.interface';

export default createStore({
  state() {
    return {
      message: null
    }
  },
  mutations: {
    setMessage(state: GlobalStateInterface, message){
      state.message = message;
    },
    clearMessage(state){
      state.message = null
    }
  },
  actions: {
    setMessage({commit}, message){
      commit('setMessage', message)
      setTimeout(() => {
        commit('clearMessage')
      }, 5000)
    }
  },
  modules: {
    authModule,
    requestModule
  }
})
