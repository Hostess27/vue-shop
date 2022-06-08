<template>
  <div class="catalog-item">
    <popup
      v-if="isInfoPopupVisible"
      @close-popup="closePopup"
      @right-actionBtn="addToCart"
      :popupTitle="productData.name"
      ><div class="popup-item__item">
        <img
          class="popup-item__image"
          :src="productData.img"
          alt="Картинка товара"
        />
      </div>
      <ul>
        <li class="popup-item__name">
          <p>
            <span class="poput-item__name--acent">Название:</span>
            {{ productData.name }}
          </p>
        </li>
        <li class="popup-item__name">
          <span class="poput-item__name--acent">Описание:</span>
          {{ productData.description }}
        </li>
        <li class="popup-item__price">
          <p>
            <span class="poput-item__name--acent">Цена:</span>
            {{ productData.price }}
          </p>
        </li>
        <li class="popup-item__weight">
          <p>
            <span class="poput-item__name--acent">Вес:</span>
            {{ productData.weight }}
          </p>
        </li>
      </ul>
      <template v-slot:close>Закрыть</template>
      <template v-slot:add>Добавить в корзину</template>
    </popup>
    <div class="catalog-item__item">
      <img
        class="catalog-item__image"
        :src="productData.img"
        :alt="productData.name"
      />
    </div>
    <ul>
      <li class="catalog-item__title">
        <p @click="showPopupInfo">
          <span class="catalog-item__title--acent">Название:</span>
          <span class="catalog-item__title--link">{{ productData.name }}</span>
        </p>
      </li>
      <li class="catalog-item__title">
        <p>
          <span class="catalog-item__title--acent">Цена:</span>
          {{ productData.price }}
        </p>
      </li>
      <li class="catalog-item__title">
        <p>
          <span class="catalog-item__title--acent">Вес: </span
          >{{ productData.weight }}
        </p>
      </li>
    </ul>
    <button
      v-if="!isShowCouter"
      class="catalog-item__add_to_card btn"
      @click="addToCart"
    >
      Добавить в корзину
    </button>
    <div v-else class="counter">
      <span class="material-icons counter__btn" @click="decrementItem">
        remove
      </span>
      <span class="counter__title">{{ findProd.quantity }}</span>
      <span class="material-icons counter__btn" @click="incrementItem">
        add
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vuexTypes from '@/store/vuex.types'
import Popup from '../popup/Popup.vue'
import ProductRecord from '@/js/record/product.record'

export default {
  name: 'catalog-item',
  components: { Popup },
  props: {
    productData: {
      type: ProductRecord,
      require: true,
    },
  },
  data() {
    return {
      isInfoPopupVisible: false,
    }
  },
  computed: {
    ...mapGetters([vuexTypes.productsShop, vuexTypes.cartShop]),

    findProd() {
      return this.cartShop.find((prod) => {
        return prod.id === this.productData.id
      })
    },

    isShowCouter() {
      if (this.findProd?.quantity >= 1) {
        return true
      }
      return false
    },
  },

  methods: {
    ...mapActions({
      addCart: vuexTypes.ADD_TO_CART,
      updQantity: vuexTypes.UPD_QUANTITY,
    }),
    showPopupInfo() {
      this.isInfoPopupVisible = true
    },
    closePopup() {
      this.isInfoPopupVisible = false
    },
    addToCart() {
      if (this.findProd) {
        this.incrementItem()
      } else {
        this.addCart(this.productData.id)
      }
    },
    decrementItem() {
      this.updQantity({
        id: this.productData.id,
        quantity: this.findProd.quantity - 1,
      })
    },
    incrementItem() {
      this.updQantity({
        id: this.productData.id,
        quantity: this.findProd.quantity + 1,
      })
    },
  },
}
</script>

<style lang="scss" scoped>
.catalog-item {
  display: flex;
  flex-direction: column;
  flex-basis: 25%;
  padding: toRem(10);
  box-shadow: 0 0 toRem(8) 0 var(--primari-border-color);
  &:not(:nth-child(3n)) {
    margin-right: toRem(20);
  }

  &:not(:nth-last-child(-n + 3)) {
    margin-bottom: toRem(20);
  }
}
.catalog-item__item {
  display: flex;
  align-items: center;
  justify-content: center;
}
.catalog-item__image {
  width: toRem(100);
  height: toRem(150);
}

.poput-item__name--acent,
.catalog-item__title--acent {
  font-weight: 700;
  color: var(--primary-color);
}
.catalog-item__title--link {
  border-bottom: 1px solid var(--primary-color);
  cursor: pointer;
  &:hover,
  &:focus {
    background-color: var(--primari-border-color);
  }
}

.counter {
  display: flex;
  justify-content: center;
  align-items: center;
}
.counter__title {
  font-size: toRem(40);
}
.counter__btn {
  font-weight: 700;
  cursor: pointer;
}
</style>
