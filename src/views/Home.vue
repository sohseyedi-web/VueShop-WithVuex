<template>
  <div>
    <intro/>
    <product/>
  </div>
</template>

<script>
import Intro from '../components/Intro.vue'
import Product from '../components/Product.vue'


export default {
  components: { Intro, Product },
  name: 'Home',
  
}
</script>
