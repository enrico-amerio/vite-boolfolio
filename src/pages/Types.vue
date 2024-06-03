
<script>
import { store } from '../data/store'
  export default {
    data(){
      return{
        store
      }
    },
  }
</script>
 
<template>
  <div class="container">
    <h1 class="text-center">Types</h1>
    <ul>
      <li v-for="type in store.types" :key="type.id">{{ type.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>