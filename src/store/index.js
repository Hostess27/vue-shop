import Vue from 'vue'
import Vuex from 'vuex'

import shopModule from './modules/shop.module'
import plugins from './plugins/plugins'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    shopModule,
  },
  plugins,
})
