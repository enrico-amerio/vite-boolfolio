<script>
  export default {
    data(){
      return{
      }
    },
    props:{
      title: String,
      type: String,
      description : String,
    }
  };
</script>

<template>
  <div class="card m-3 text-center " style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">{{ title }}</h5>
      <p><strong>Type: </strong>{{ type }}</p>
      <p><strong>Description: </strong>{{ description }}</p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.card{
  border: 0px;
  background-color: rgba(0,124,185, .05);
  padding: 30px;
  box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  .card-body{
    margin-top:20px;
    border-radius: 10px;
    h5{
      padding-bottom: 10px;
      border-bottom: 1px solid black;
    }
  }
 
}
</style>