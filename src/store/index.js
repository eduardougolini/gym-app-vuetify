import Vue from 'vue'
import Vuex from 'vuex'
import Authentication from './modules/authentication/index'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    Authentication
  }
})
