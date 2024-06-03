<script>
import axios from 'axios';
import Card from './components/partials/Card.vue';
import { store } from './data/store'

  export default {
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(){
        axios.get(this.store.apiUrl)
          .then(result=>{
            this.store.projects = result.data;
          }).catch(error=>{
            console.log('errore');
          });
      }
    },
    mounted(){
      this.getApi()
    },
    
    
  }
</script>

<template>
  <router-view></router-view>
</template>

<style lang="scss" scoped>

</style>