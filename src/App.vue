<script>
import axios from 'axios';
import Card from './components/partials/Card.vue';
import { store } from './data/store'
import Header from './components/Header.vue';

  export default {
    data(){
      return{
        store
      }
    },
    methods:{
      getApi(apiUrl, type){
        axios.get(apiUrl + type  )
          .then(result=>{
            if(type === 'projects'){
              this.store.projects = result.data;

            }else if(type === 'technologies'){
              this.store.technologies = result.data;

            }else{

              this.store.types = result.data;
              console.log(this.store.types );
            }
          }).catch(error=>{
            console.log('errore');
          });
      }
    },
    mounted(){
      this.getApi(this.store.apiUrl, 'projects')
      this.getApi(this.store.apiUrl, 'technologies')
      this.getApi(this.store.apiUrl, 'types')
    },
    components:{
      Header
    }
    
    
  }
</script>

<template>
  <Header/>
  <router-view></router-view>
</template>

<style lang="scss" scoped>

</style>