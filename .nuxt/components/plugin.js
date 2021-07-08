import Vue from 'vue'

const globalComponents = {
  Actualites: () => import('../..\\components\\global\\actualites.vue' /* webpackChunkName: "components_global/actualites" */).then(c => c.default || c),
  Card: () => import('../..\\components\\global\\card.vue' /* webpackChunkName: "components_global/card" */).then(c => c.default || c),
  Cards: () => import('../..\\components\\global\\cards.vue' /* webpackChunkName: "components_global/cards" */).then(c => c.default || c),
  Commentaire: () => import('../..\\components\\global\\commentaire.vue' /* webpackChunkName: "components_global/commentaire" */).then(c => c.default || c),
  Footer: () => import('../..\\components\\global\\Footer.vue' /* webpackChunkName: "components_global/Footer" */).then(c => c.default || c),
  GradientBtn: () => import('../..\\components\\global\\GradientBtn.vue' /* webpackChunkName: "components_global/GradientBtn" */).then(c => c.default || c),
  Header: () => import('../..\\components\\global\\Header.vue' /* webpackChunkName: "components_global/Header" */).then(c => c.default || c),
  Menu: () => import('../..\\components\\global\\menu.vue' /* webpackChunkName: "components_global/menu" */).then(c => c.default || c),
  Navbar: () => import('../..\\components\\global\\Navbar.vue' /* webpackChunkName: "components_global/Navbar" */).then(c => c.default || c),
  SearchBar: () => import('../..\\components\\global\\search-bar.vue' /* webpackChunkName: "components_global/search-bar" */).then(c => c.default || c),
  Villes: () => import('../..\\components\\global\\villes.vue' /* webpackChunkName: "components_global/villes" */).then(c => c.default || c),
  SocialNetwork: () => import('../..\\components\\global\\social\\SocialNetwork.vue' /* webpackChunkName: "components_global/social/SocialNetwork" */).then(c => c.default || c),
  SocialShare: () => import('../..\\components\\global\\social\\socialShare.vue' /* webpackChunkName: "components_global/social/socialShare" */).then(c => c.default || c)
}

for (const name in globalComponents) {
  Vue.component(name, globalComponents[name])
}
