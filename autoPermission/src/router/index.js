import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/views/HelloWorld.vue'
import NotFound from '@/views/NotFound.vue'
import store from '../store'
import { generateRouter } from '@/lib/utils'
Vue.use(Router)
const router = new Router({
  routes: [
    {
      path: '/',
      redirect: {
        name: 'HelloWorld'
      }
    },
    {
      path: '/HelloWorld',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '*',
      name: 'NotFound',
      component: NotFound
    }
  ]
})
router.beforeEach(async (to, from, next) => {
  if (!store.state.hasAuth) {
    await store.dispatch('setUserRouters')
    const newRoutes = generateRouter(store.state.userRouters)
    router.addRoutes(newRoutes)
    router.options.routes = router.options.routes.concat(newRoutes)
    console.log(router.options.routes)
    next()
  } else {
    next()
  }
})
export default router
