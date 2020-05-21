import Vue from 'vue';
import VueRouter from 'vue-router';
import Password from '../views/Password.vue';
import Home from '../views/Home.vue';
import NewNote from '../views/NewNote.vue';
import AllNotes from '../views/AllNotes.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '*',
    name: 'not-found',
    redirect: {
      name: 'Password',
    },
  },
  {
    path: '/',
    name: 'Password',
    component: Password,
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/all-notes',
    name: 'AllNotes',
    component: AllNotes,
  },
  {
    path: '/new-note',
    name: 'NewNote',
    component: NewNote,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
