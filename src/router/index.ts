import Vue from 'vue';
import VueRouter, {RouteConfig} from 'vue-router';
import Labels from '@/views/Labels.vue';
import Statistics from '@/views/Statistics.vue';
import NotFound from '@/views/NotFound.vue';
import Money from '@/views/Money.vue';
import Tags from '@/views/Tags.vue';
import LabelList from '@/views/LabelsList.vue';


Vue.use(VueRouter)


const routes: Array<RouteConfig> = [
  {
    path:'/',
    redirect:'/labels'
  },
  {
    path:'/labels',
    component:Labels
  },
  {
    path:'/money',
    component:Money
  },
  {
    path:'/labellist',
    component:LabelList
  },
  {
    path:'/tags',
    component:Tags
  },
  {
    path:'/statistics',
    component:Statistics
  },
  {
    path:'*',
    component:NotFound
  }

];

const router = new VueRouter({
  routes
});

export default router;
