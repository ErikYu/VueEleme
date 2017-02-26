import Vue from 'vue';
import Router from 'vue-router';
import goods from 'components/goods/goods';
import sellers from 'components/sellers';
import ratings from 'components/ratings';

Vue.use(Router);

export default new Router({
  linkActiveClass: 'active',
  routes: [
    {
      path: '/goods',
      name: 'goods',
      component: goods
    },
    {
      path: '/sellers',
      name: 'sellers',
      component: sellers
    },
    {
      path: '/ratings',
      name: 'ratings',
      component: ratings
    }
  ]
});
