
<script>
import axios from 'axios';
import { store } from '../data/store';
  export default {
    name:'Contacts',
    data(){
      return{
        
        name:'ciao',
        email:'ciao@ciao.it',
        message:'ciao ciao ciao'
      }
    },
    methods:{
      sendEmail(){
        const data = {
          name: this.name,
          email: this.email,
          message: this.message
        }
        axios.post(store.apiUrl + 'send-email', data)
        .then(result=>{
          console.log(result.data);
        })
        .catch(error=>{
          console.log(error.message)
        })
      }
    }
  }
</script>
 
<template>
  <div class="container">
    <h1 class="text-center">Contacts</h1>
    <form @submit.prevent="sendEmail">
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Name</label>
        <input v-model="name" name="name" type="text" class="form-control" id="exampleFormControlInput1" >
      </div>
      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">Email address</label>
        <input v-model="email" name="email" type="email" class="form-control" id="exampleFormControlInput1">
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
        <textarea v-model="message" name="message" class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Send</button>
    </form>
    
  </div>
</template>

<style lang="scss" scoped>

</style>