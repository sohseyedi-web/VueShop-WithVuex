<template>
  <div class="cart" dir="rtl">
    <div class="container">
      <div class="cart-empty" v-if="totalPrice === 0">
        <h2 class="text-center display-4">سبد خرید خالی است</h2>
      </div>
      <div class="cart-body" v-else>
        <ul  class="cart-body__content">
          <li
            v-for="product in details"
            :key="product.id"
            class="cart-body__content-list"
          >
            <div class="cart-body__content-list-img">
              <img :src="product.img" :alt="product.title" />
            </div>
            <div class="cart-body__content-list-title">{{ product.title }}</div>
            <div class="cart-body__content-list-amount">
              <button
                class="cart-body__content-list-amount__btn"
                @click="addItem(product)"
              >
                +
              </button>
              <span class="cart-body__content-list-amount__quantity">{{
                product.quantity
              }}</span>
              <button
                class="cart-body__content-list-amount__btn"
                @click="removeItem(product)"
              >
                -
              </button>
            </div>
            <div class="cart-body__content-list-price">
              {{ product.price * product.quantity }}/000
            </div>
          </li>
        </ul>
        <div class="cart-body__invoice">
          <span class="cart-body__invoice-text">جمع : </span>
          <span class="cart-body__invoice-price">{{ totalPrice }}/000</span>
        </div>
        <div class="cart-body__btn">
          <button class="cart-body__btn-text">تکمیل سفارش</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "cart",
  methods : {
    addItem(product) {
      return this.$store.dispatch("addCart", product);
    },
    removeItem(product) {
      return this.$store.dispatch("removeCart", product);
    },
  },
  computed: {
    details() {
      return this.$store.state.cartItems;
    },
    totalPrice() {
      let price = 0;
      this.$store.state.cartItems.map(
        (el) => (price += el["quantity"] * el["price"])
      );
      return price;
    },
    
  },
};
</script>
<style lang="scss">
.cart {
  padding: 60px 0;

  &-body {
    padding: 2rem;
    position: relative;

    &__content {
      list-style: none;
      font-size: 1.2rem;

      &-list {
        position: relative;
        width: 70%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 2rem auto;

        &-img {
          width: 80px;

          img {
            width: 100%;
            height: 100%;
          }
        }

        &-title {
          font-size: 1.2rem;
          font-weight: bold;
        }

        &-amount {
          width: 200px;
          display: flex;
          align-items: center;
          justify-content: space-around;

          &__btn {
            border: 0;
            border-radius: 0.5rem;
            font-weight: bold;
            padding: 0.2rem 1rem;
            background-color: #1bfe7d;
          }
        }

        &::after {
          position: absolute;
          content: "";
          width: 100%;
          height: 3px;
          background-color: #1bfe7d;
          border-radius: 0.5rem;
          bottom: -50%;
        }
      }
    }

    &__invoice {
      padding: 2rem 0;
      text-align: center;
      font-weight: bold;
      font-size: 1.5rem;

      &__price {
        background-color: #e0e0e0;
        padding: 0.5rem 1rem;
        border: 2px solid #252525;
        border-radius: 0.5rem;
      }
    }
    &__btn {
      width: 19%;
      border-radius: 0.5rem;
      cursor: pointer;
      padding: 0.5rem;
      margin: 0 auto;
      text-align: center;

      background-color: #1bfe7d;

      &-text {
        background-color: transparent;
        border: none;
        font-weight: 500;
        font-size: 1.3rem;
      }
    }
  }

  @media screen and (max-width: 768px) {
    &-body {
      padding: 0.1rem;

      &__content {
        font-size: 1rem;

        &-list {
          width: 100%;

          &-img {
            width: 50px;
            height: 50px;
          }
          &-title {
            font-size: 1rem;
          }
          &-amount {
            width: 140px;
          }
        }
      }
      &__invoice {
        font-size: 1.2rem;
      }
      &__btn {
        width: 40%;
        &-text {
          font-size: 1.1rem;
        }
      }
    }
  }
}
</style>