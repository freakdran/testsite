import Vue from 'vue';
import Router from 'vue-router';
import ForumPage from '@/components/Website/ForumPage';
import ThreadPage from '@/components/Website/ThreadPage';
import WelcomePage from '@/components/Website/WelcomePage';


Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/welcome',
      name: 'WelcomePage',
      component: WelcomePage,
    },
    {
      path: '/forum',
      name: 'ForumPage',
      component: ForumPage,
    },
    {
      path: '/forum/thread',
      name: 'ThreadPage',
      component: ThreadPage,
    },

  ],

});
