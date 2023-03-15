import VueRouter from 'vue-router'
import Vue from 'vue'

Vue.use(VueRouter)
/**
 *  动态路由表,原则上来说是通过后端进行比对动态添加
 * **/
// const routerPush = VueRouter.prototype.push
// VueRouter.prototype.push = function push(location) {
//   return routerPush.call(this, location).catch(error => error)
// }
export const constRoutesMap = [
  {
    name: 'home',
    path: '/',
    component: () =>
      import ('@/views/Home')
  },
  {
    name: 'createWallet',
    path: '/createWallet',
    component: () =>
      import ('@/views/page/CreateWallet')
  },
  {
    name: 'recovery',
    path: '/recovery',
    component: () =>
      import ('@/views/page/recovery')
  },
  {
    name: 'discover',
    path: '/discover',
    component: () =>
      import ('@/views/page/Discover')
  },{
    name: 'my',
    path: '/my',
    component: () =>
      import ('@/views/page/My')
  },
  {
    name: 'myWallet',
    path: '/myWallet',
    meta: {
      tabbarHide: true
    },
    component: () =>
      import ('@/views/page/MyWallet')
  },{
    name: 'myWalletCOPY',
    path: '/myWalletCOPY',
    meta: {
      tabbarHide: true
    },
    component: () =>
      import ('@/views/page/MyWalletCOPY')
  },{
    name: 'walletList',
    path: '/walletList',
    meta: {
      tabbarHide: true
    },
    component: () =>
      import ('@/views/page/WalletList')
  },{
    name: 'walletListCOPY',
    path: '/walletListCOPY',
    meta: {
      tabbarHide: true
    },
    component: () =>
      import ('@/views/page/WalletListCOPY.vue')
  },{
    name: 'importQB',
    path: '/importQB',
    meta: {
      tabbarHide: true
    },
    props: route => ({
      title: route.query.title,
      qBname: route.query.qBname,
      ShowBtn: route.query.ShowBtn
    }),
    component: () =>
      import ('@/views/page/ImportQB')
  },
  {
    name: 'importQBCOPY',
    path: '/importQBCOPY',
    meta: {
      tabbarHide: true
    },
    props: route => ({
      title: route.query.title,
      qBname: route.query.qBname,
      ShowBtn: route.query.ShowBtn
    }),
    component: () =>
      import ('@/views/page/ImportQBCOPY')
  }
]
const router = new VueRouter({
  // mode: 'history',
  routes: constRoutesMap // routes: routes 的简写
})

// TODO:路由守卫拦截登录
//
// router.beforeEach((to, from, next) => {
//   NProgress.start()
//   const info = sessionStorage.getItem('userData')
//   const userData = info !== 'undefined' ? JSON.parse(info) : null
//   if (userData && userData.token) {
//     if (to.path === '/login') {
//       sessionStorage.removeItem('userData')
//       store.state.user.menus = []
//     }
//     if (store.getters.MENUS.length == 0) {
//       store.dispatch('user/GET_USERDATA').then(() => {
//         next(to.path)
//       })
//     } else {
//       next()
//     }
//   } else {
//     if (to.path === '/login') {
//       sessionStorage.removeItem('userData')
//       next()
//     } else {
//       next({path: '/login'})
//       NProgress.done()
//     }
//
//   }
// })
// router.afterEach(() => {
//   NProgress.done()
// })

export default router
