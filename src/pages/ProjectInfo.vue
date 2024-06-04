<script>
import { store } from '../data/store';
import axios from 'axios';

  export default {
    name: 'ProjectInfo',
    data(){
      return{
        store,
        project:{},
      }
    },
    components: {
      
    },
    methods: {
  getApi() {
    const id = this.$route.params.id; // Accesso all'ID dai parametri della route
    axios.get(this.store.apiUrl + 'project-info/' + id)
      .then(result => {
        this.project = result.data;
        console.log(this.project);
      })
      .catch(error => {
        console.log('error');
      });
  }
},
  mounted(){
    this.getApi()
  }
  
  }
</script>
 
<template>
  <div class="container">
    <h1>{{ project.title }}</h1>
    <span class="badge text-bg-primary me-2">{{ project.type && project.type.name }}</span>
    <span class="badge text-bg-secondary me-2" v-for="technology in project.technologies" :key="technology.id">{{technology.name}}</span>
    <p>{{ project.description }}</p>
    
  </div>
</template>

<style lang="scss" scoped>

</style>