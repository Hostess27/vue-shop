import VuexPersist from 'vuex-persist'

const vuexPersist = new VuexPersist({
  key: 'my-app',
  storage: window.localStorage,
})

const plugins = [vuexPersist.plugin]

export default plugins
