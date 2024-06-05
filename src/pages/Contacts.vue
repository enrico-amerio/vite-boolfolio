
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
    <h1 class="text-center">Contacts</h1>
    <form>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input type="text" class="form-control" id="exampleFormControlInput1" >
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input type="email" class="form-control" id="exampleFormControlInput1">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
    
  </div>
</template>

<style lang="scss" scoped>

</style>