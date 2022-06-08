<template>
  <div class="catalog">
    <h1 class="catalog__title">Каталог</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in productsShop"
        :key="product.id"
        :productData="product"
      />
    </div>
  </div>
</template>

<script>
import CatalogItem from './CatalogItem.vue'
import vuexTypes from '@/store/vuex.types'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'catalog',
  components: {
    CatalogItem,
  },
  computed: {
    ...mapGetters([vuexTypes.productsShop]),
  },
  methods: {
    ...mapActions({ getProducts: vuexTypes.GET_PRODUCTS }),
  },
  created() {
    this.getProducts()
  },
}
</script>

<style lang="scss" scoped>
.catalog__title {
  padding: toRem(20);
  text-align: center;
}
.catalog__list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
</style>
