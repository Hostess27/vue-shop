<template>
  <div class="cart">
    <div class="cart__flex--icon">
      <span class="material-icons cart__icon" @click="showCart">
        shopping_cart
      </span>
      <span>{{ cartShop.length }}</span>
    </div>

    <div class="cart__open">
      <cart-item
        class="cart__item"
        v-for="(item, id) in cartShop"
        :key="item.id"
        :product="item"
        v-show="isVisible"
        @delete-cart="deleteCart(id)"
      />
      <div v-show="isVisible">
        <div class="cart__total">
          <p class="cart__title">Общая цена: {{ cartTotalPrice }}</p>
          <p class="cart__title">Общий вес: {{ cartTotalWeight }}</p>
        </div>
        <button @click="hideCart" type="button">Закрыть</button>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '../cart/CartItem.vue'
import { mapActions, mapGetters } from 'vuex'
import vuexTypes from '@/store/vuex.types'
export default {
  name: 'cart',
  components: {
    CartItem,
  },

  data() {
    return { isVisible: false }
  },
  computed: {
    ...mapGetters([vuexTypes.cartShop]),

    cartTotalPrice() {
      if (this.cartShop === undefined || this.cartShop.length === 0) {
        return 0
      } else {
        return this.cartShop.reduce((acc, curr) => {
          return acc + curr.price * curr.quantity
        }, 0)
      }
    },

    cartTotalWeight() {
      if (this.cartShop === undefined || this.cartShop.length === 0) {
        return 0
      } else {
        return this.cartShop.reduce((acc, curr) => {
          return acc + curr.weight * curr.quantity
        }, 0)
      }
    },
  },
  methods: {
    ...mapActions({ removeCart: vuexTypes.DELETE_CART }),

    deleteCart(id) {
      this.removeCart(id)
    },

    showCart() {
      this.isVisible = true
    },
    hideCart() {
      this.isVisible = false
    },
  },
}
</script>

<style lang="scss">
.cart {
  position: absolute;
  top: toRem(10);
  right: toRem(10);
  padding: toRem(16);
  background: var(--white);
  border-radius: toRem(4);
  border: solid toRem(1) var(--primari-border-color);
}
.cart__icon {
  padding: toRem(10);
  cursor: pointer;
}
.cart__title {
  margin-bottom: toRem(5);
}
.cart__item {
  border-radius: toRem(4);
  &:not(:last-child) {
    margin-bottom: toRem(10);
  }
}
.cart__flex--icon {
  display: flex;
  align-items: center;
}
</style>
