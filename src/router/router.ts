import Vue from 'vue';
import VueRouter from 'vue-router';
import TableContainer from "../components/TableContainer/TableContainer.vue";

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: TableContainer,
      props: {
        componentToView: 'employees'
      }
    },
    {
      path: '/employees',
      name: 'employees',
      component: TableContainer,
      props: {
        componentToView: 'employees'
      }
    },
    {
      path: '/statistics',
      name: 'statistics',
      component: TableContainer,
      props: {
        componentToView: 'statistics'
      }
    },
  ]
})

export default router
