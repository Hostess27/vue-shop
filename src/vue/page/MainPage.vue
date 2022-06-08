<template>
  <div class="main-page">
    <cart class="main-page__cart" >{{cartShop}}</cart>
    <catalog />
  </div>
</template>

<script>
import Catalog from '@vue/components/catalog/Catalog.vue'
import Cart from '@vue/components/cart/Cart.vue'
import { mapGetters } from 'vuex'
import vuexTypes from '@/store/vuex.types'
export default {
  name: 'main-page',
  components: { Cart, Catalog },
  computed: {
    ...mapGetters([vuexTypes.cartShop]),
  },
}
</script>

<style lang="scss">
.main-page {
  margin: 0 auto;
}
</style>
