import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '@/views/HomeView.vue';
import ResourcesView from '@/views/ResourcesView.vue';
import NotFoundView from '@/views/NotFoundView.vue';
import ResourceView from '@/views/ResourceView.vue';
import AssessmentView from '@/views/AssessmentView.vue';
import guidesView from '@/views/guidesView.vue';
import GenRulesView from '@/views/GenRulesView.vue'; 
/*import AddJobView from '@/views/AddJobView.vue';
import EditJobView from '@/views/EditJobView.vue';*/

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/resources',
      name: 'resources',
      component: ResourcesView,
    },
    {
      path: '/resources/:id',
      name: 'resource',
      component: ResourceView,
    },
    {
      path: '/resources/rules-of-thumb',
      name: 'rot',
      component: GenRulesView,
    },
    {
      path: '/test',
      name: 'tests',
      component: AssessmentView,
    },
    /*{
      path: '/resources/edit/:id',
      name: 'edit-threatCat',
      component: EditJobView,
    },*/
    {
      path: '/guidestrial',
      name: 'guide',
      component: guidesView,
    },
    {
      path: '/:catchAll(.*)',
      name: 'not-found',
      component: NotFoundView,
    },
  ],
});

export default router;
