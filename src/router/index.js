import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../pages/Home.vue';
import Blog from '../pages/Blog.vue';
import GetStarted from '../pages/GetStarted.vue';
import Project from '../pages/Project.vue';
import ProjectDetails from '../pages/ProjectDetails.vue';
import PageNotFound from '../pages/PageNotFound.vue';

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
  },
  {
    path: '/blog',
    name: 'Blog',
    component: Blog,
  },
  {
    path: '/get-started',
    name: 'GetStarted',
    component: GetStarted,
  },
  {
    path: '/project',
    name: 'Project',
    component: Project,
  },
  {
    path: '/project-details',
    name: 'ProjectDetails',
    component: ProjectDetails,
  },
  {
    path: '',
    redirect: './home',
  },
  { path: '/:pathMatch(.*)*', name: 'PageNotFound', component: PageNotFound },
];
const router = createRouter({
  // base: '/dist/',
  // history: createWebHistory('/gbVue/'),
  history: createWebHashHistory(),
  routes,
});
export default router;
