<script setup lang="ts">
import { ref } from 'vue'
import Product from '../components/Product.vue';

defineProps<{ msg: string }>()

const count = ref(0)
const products = [{
  name: 'Product A',
  price: 0
}, {
  name: 'Product B',
  price: 1
}]
</script>

<template>
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>

    <div v-for="product in products">
      <Product :product="product"/>
    </div>
   
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
