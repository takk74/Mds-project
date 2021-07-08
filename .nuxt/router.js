import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _39434a40 = () => interopDefault(import('..\\pages\\angers.vue' /* webpackChunkName: "pages/angers" */))
const _11b13fe4 = () => interopDefault(import('..\\pages\\annecy.vue' /* webpackChunkName: "pages/annecy" */))
const _d3288448 = () => interopDefault(import('..\\pages\\contact.vue' /* webpackChunkName: "pages/contact" */))
const _6fe55af9 = () => interopDefault(import('..\\pages\\create-projet.vue' /* webpackChunkName: "pages/create-projet" */))
const _1809ceca = () => interopDefault(import('..\\pages\\nantes.vue' /* webpackChunkName: "pages/nantes" */))
const _e26d0272 = () => interopDefault(import('..\\pages\\paris.vue' /* webpackChunkName: "pages/paris" */))
const _3ed40730 = () => interopDefault(import('..\\pages\\profil.vue' /* webpackChunkName: "pages/profil" */))
const _0c0a4dc0 = () => interopDefault(import('..\\pages\\projet.vue' /* webpackChunkName: "pages/projet" */))
const _0d5a9297 = () => interopDefault(import('..\\pages\\settings.vue' /* webpackChunkName: "pages/settings" */))
const _324e3417 = () => interopDefault(import('..\\pages\\sqy.vue' /* webpackChunkName: "pages/sqy" */))
const _4794dae4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/angers",
    component: _39434a40,
    name: "angers"
  }, {
    path: "/annecy",
    component: _11b13fe4,
    name: "annecy"
  }, {
    path: "/contact",
    component: _d3288448,
    name: "contact"
  }, {
    path: "/create-projet",
    component: _6fe55af9,
    name: "create-projet"
  }, {
    path: "/nantes",
    component: _1809ceca,
    name: "nantes"
  }, {
    path: "/paris",
    component: _e26d0272,
    name: "paris"
  }, {
    path: "/profil",
    component: _3ed40730,
    name: "profil"
  }, {
    path: "/projet",
    component: _0c0a4dc0,
    name: "projet"
  }, {
    path: "/settings",
    component: _0d5a9297,
    name: "settings"
  }, {
    path: "/sqy",
    component: _324e3417,
    name: "sqy"
  }, {
    path: "/",
    component: _4794dae4,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
