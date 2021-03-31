import Vue from 'vue'
import VueRouter from 'vue-router'
import List from '../views/List.vue'
import Create from '../views/Create.vue'
import Edit from '../views/Edit.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'List',
    component: List
  },
  {
    path: '/cadastro',
    name: 'Create',
    component: Create
  },
  {
    path: '/editar/:id',
    name: 'Edit',
    component: Edit
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
