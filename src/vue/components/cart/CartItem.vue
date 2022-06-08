<template>
  <div class="cart-item">
    <img class="cart-item__image" :src="product.img" :alt="product.name" />
    <div class="cart-item__info">
      <p>
        <span class="cart-item__info--acent">Название:</span>
        {{ product.name }}
      </p>
    </div>
    <div class="cart-item__quantity">
      <input-field
        :value="product.quantity"
        :min="min"
        :max="max"
        label="Кол-во:"
        :maxlength="maxlength"
        type="number"
        @input="onInput"
      />
    </div>
    <button @click="deleteCart">Del</button>
  </div>
</template>

<script>
import InputField from '../fields/InputField.vue'
import ProductRecord from '@/js/record/product.record'
import { mapMutations } from 'vuex'
import vuexTypes from '@/store/vuex.types'
const EVENTS = { deleteCart: 'delete-cart' }
const maxlength = 3
const max = 100
const min = 1
export default {
  name: 'cart-item',
  components: {
    InputField,
  },
  props: {
    product: {
      type: ProductRecord,
      require: true,
    },
  },
  data() {
    return {
      maxlength: maxlength,
      max: max,
      min: min,
    }
  },

  methods: {
    ...mapMutations([vuexTypes.UPDATE_QUANTITY]),

    deleteCart() {
      this.$emit(EVENTS.deleteCart)
    },
    onInput(quantity) {
      this.UPDATE_QUANTITY({
        id: this.product.id,
        quantity,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.cart-item {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: toRem(10);
  box-shadow: 0 0 toRem(8) 0 var(--primari-border-color);
}
.cart-item__image {
  max-width: toRem(50);
}
.cart-item__quantity {
  text-align: center;
}

.cart-item__info--acent {
  font-weight: 700;
  color: var(--primary-color);
}
</style>
