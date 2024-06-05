import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/Home.vue';
import Technologies from './pages/Technologies.vue';
import Types from './pages/Types.vue';
import ProjectInfo from './pages/ProjectInfo.vue';
import Contacts from './pages/Contacts.vue';
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
    name:'technologies',
    component:Technologies
  },
    {
    path:'/types',
    name:'types',
    component:Types
  },
    {
    path:'/project-info/:id',
    name:'projectInfo',
    component:ProjectInfo
  },
    {
    path:'/contacts',
    name:'contacts',
    component: Contacts 
  },
]
})
export {router}