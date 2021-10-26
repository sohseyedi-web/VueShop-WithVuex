<template>
  <div class="products" dir="rtl">
    <div class="container">
      <div class="products-title">دوره های آموزشی</div>
      <div class="products-box">
        <div
          class="products-box__content"
          v-for="product in products"
          :key="product.id"
        >
          <div class="products-box__content-img">
            <img :src="product.img" alt="" />
          </div>
          <div class="products-box__content-name">{{ product.title }}</div>
          <div class="products-box__content-footer">
            <span class="products-box__content-footer__price"
              >{{ product.price }}/000</span
            >
            <button
              class="products-box__content-footer__btn"
              @click="handleToCart(product)"
            >
              ثبت خرید
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    products() {
      return this.$store.state.products;
    },
  },
  methods: {
    handleToCart(product) {
      this.$store.dispatch("addCart", product);
    },
  },
};
</script>
<style lang="scss">
.products {
  padding: 120px 0;

  &-title {
    font-size: 2rem;
    font-weight: 600;
    color: #252525;
    text-align: center;
    padding: 3rem 0;
  }

  &-box {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-wrap: wrap;

    &__content {
      width: 25%;
      height: 350px;
      margin: 2rem;
      border-radius: 0.5rem;
      box-shadow: 1px 1px 30px 1px rgba(0, 0, 0, 0.75);

      &-img {
        width: 100%;

        img {
          width: 100%;
          height: 200px;
          border-top-right-radius: 0.5rem;
          border-top-left-radius: 0.5rem;
        }
      }
      &-name {
        padding: 1rem;
        font-size: 1.5rem;
        font-weight: bold;
        margin: 0.5rem 0;
      }
      &-footer {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin: 0 1rem;

        &__price {
          font-size: 1.2rem;
          font-weight: bold;
          text-decoration: underline;
        }
        &__btn {
          border-radius: 0.5rem;
          background-color: #1bfe7d;
          color: #252525;
          font-size: 1.1rem;
          font-weight: bold;
          padding: 0.5rem;
          border: none;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    &-box {
      &__content {
        width: 100%;
      }
    }
  }
}
</style>