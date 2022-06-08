import axios from 'axios'
import ProductRecord from '@/js/record/product.record'
export default {
  state: { cart: [], products: [] },
  mutations: {
    SET_CART: (state, productId) => {
      const currentProduct = state.products.find((el) => el.id === productId)

      if (currentProduct) {
        const newProduct = new ProductRecord({ ...currentProduct, quantity: 1 })
        state.cart.push(newProduct)
      }
    },
    SET_PRODUCTS: (state, products) => {
      state.products = products
    },
    REMOVE_CART: (state, id) => {
      state.cart.splice(id, 1)
    },

    UPDATE_QUANTITY(state, { id, quantity }) {
      const currentProduct = state.cart.find((el) => el.id === id)
      if (currentProduct) {
        currentProduct.quantity = quantity
      }

      if (+quantity === 0) {
        state.cart = state.cart.filter((el) => el.id !== id)
      }
    },
  },
  actions: {
    ADD_TO_CART({ commit }, productId) {
      commit('SET_CART', productId)
    },
    DELETE_CART({ commit }, id) {
      commit('REMOVE_CART', id)
    },
    UPD_QUANTITY({ commit }, {id, quantity}) {
      commit('UPDATE_QUANTITY', {id, quantity})
    },

    async GET_PRODUCTS({ commit }) {
      try {
        const { data } = await axios('http://localhost:3000/products', {
          method: 'GET',
        })
        const products = data.map(
          (item) => new ProductRecord({ ...item, quantity: 0 })
        )
        commit('SET_PRODUCTS', products)
      } catch (error) {
        console.log(error)
      }
    },
  },
  getters: {
    cartShop(state) {
      return state.cart
    },
    productsShop(state) {
      return state.products
    },
  },
}
