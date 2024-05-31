<script>
import axios from 'axios';
import Card from './components/partials/Card.vue';
  export default {
    data(){
      return{
        projects: [],
      }
    },
    methods:{
      getApi(){
        axios.get('http://127.0.0.1:8000/api/projects')
          .then(result=>{
            this.projects = result.data;
            console.log(this.projects);
          }).catch(error=>{
            console.log('errore');
          });
      }
    },
    mounted(){
      this.getApi()
    },
    components: {
      Card
    }
    
  }
</script>

<template>
  <h1 class="text-center">I miei progetti</h1>
  <div class="container d-flex flex-wrap align-content-center justify-content-center">
    <Card v-for="project in projects" :key="project.id"
        :title="project.title"
        :type="project.type.name "
        :description="project.description"
      />
    <!-- <div  class="card m-4" style="width: 18rem;" v-for="project in projects" :key="project.id">
      <ul  class="list-group list-group-flush " >
        <li class="list-group-item"><strong>Titolo:</strong> {{ project.title }}</li>
        <li class="list-group-item"><strong>Type:</strong> {{ project.type.name }}</li>
        <li class="list-group-item"><strong>Description:</strong> {{ project.description }}</li>
      </ul>
    </div> -->
  </div>
</template>

<style lang="scss" scoped>

</style>