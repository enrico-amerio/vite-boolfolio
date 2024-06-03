
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
    <h1 class="text-center">Technologies</h1>
    <ul>
      <li v-for="technology in store.technologies" :key="technology.id">{{ technology.name }}</li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>

</style>