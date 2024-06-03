import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import Technologies from './pages/Technologies.vue';
import Types from './pages/Types.vue';
const router = createRouter({
  history: createWebHistory(),
  routes:[
    {
    path:'/',
    name:'home',
    component:Home
  },
    {
    path:'/technologies',
    name:'Technologies',
    component:Technologies
  },
    {
    path:'/types',
    name:'Types',
    component:Types
  }
]
})
export {router}