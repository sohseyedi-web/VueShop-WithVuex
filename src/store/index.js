import Vue from 'vue'
import Vuex from 'vuex'

import mern from '../assets/mern.png';
import node from '../assets/node-js.jpg';
import react from '../assets/react-js.png';
import javascript from '../assets/javascript.png';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        "id": 1,
        "title": "دوره جاوااسکریپت",
        "price": 25,
        "img": javascript
      },
      {
        "id": 2,
        "title": "دوره ریکت جی اس",
        "price": 30,
        "img": react
      },
      {
        "id": 3,
        "title": "دوره نود جی اس",
        "price": 35,
        "img": node
      },
      {
        "id": 4,
        "title": "دوره فول استک",
        "price": 40,
        "img": mern
      },
    ],
    cartItems: [],
    cartTotalAmount: 0
  },
  mutations: {
    addToCart(state, payload) {
      let item = payload;

      item = { ...item, quantity: 1 }

      if (state.cartItems.length > 0) {
        let data = state.cartItems.find(i => i.id == item.id);

        if (data) {
          let itemIndex = state.cartItems.findIndex(i => i.id === item.id);
          state.cartItems[itemIndex]['quantity'] += 1;
        } else {
          state.cartItems.push(item)
        }
      }else{
        state.cartItems.push(item)
      }
      state.cartTotalAmount++;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));

    },
    removeCart(state, payload) {
      const itemIndex = state.cartItems.findIndex(item => item.id === payload.id);
      if (state.cartItems[itemIndex].quantity > 1) {
        state.cartItems[itemIndex].quantity -= 1;

      } else if (state.cartItems[itemIndex].quantity === 1) {
        const filterItem = state.cartItems.filter(item => item.id !== payload.id);
        state.cartItems = filterItem;
      }
      state.cartTotalAmount--;
      localStorage.setItem("cart", JSON.stringify(state.cartItems));
    },
  },
  actions: {

    addCart({ commit }, payload) {
      commit("addToCart", payload)
    },
    removeCart({ commit }, payload) {
      commit("removeCart", payload)
    },
  },
  modules: {
  }
})
