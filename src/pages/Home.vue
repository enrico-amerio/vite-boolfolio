<script>
import { store } from '../data/store';
import Card from '@/components/partials/Card.vue';

  export default {
    data(){
      return{
        store
      }
    },
    components: {
      Card
    },
    methods: {
    getRandomColor() {
      const colors = ['blue', 'green', 'yellow', 'brown', 'purple', 'orange'];
      return colors[Math.floor(Math.random() * colors.length)];
    }
  }
  }
</script>
 
<template>
  <div>
    <h1 class="text-center">I miei progetti</h1>
  <div class="container d-flex flex-wrap align-content-center justify-content-center">
    <Card v-for="project in store.projects" :key="project.id"
        :title="project.title"
        :type="project.type.name "
        :description="project.description"
        :color="this.getRandomColor()"
      />
  </div>
  </div>
</template>

<style lang="scss" scoped>

</style>