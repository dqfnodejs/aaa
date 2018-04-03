import Vue from 'vue'
import Router from 'vue-router'
import shouYe from './views/shouYe.vue'
import dongTai from './views/dongTai.vue'
import erShou from './views/erShou.vue'
import lianXi from './views/lianXi.vue'
import quanXin from './views/quanXin.vue'
import shangPu from './views/shangPu.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'shouYe',
      component: shouYe
    },
    {
       path: '/lianXi',
       name: 'lianXi',
       component: lianXi
     },
     {
       path: '/dongTai',
       name: 'dongTai',
       component: dongTai
     },
    {
      path: '/lianXi',
      name: 'lianXi',
      component: lianXi
    },
    {
      path: '/quanXin',
      name: 'quanXin',
      component: quanXin
    },
    {
      path: '/shangPu',
      name: 'shangPu',
      component: shangPu
    }
  ]
})
