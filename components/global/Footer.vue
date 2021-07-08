<template>
 
  <div class="footer">

      <div class="footer-left">
      <nuxt-link to="/"><img src="../../images/svgblanc.svg" alt="nom du site" id="logo"></nuxt-link>
      </div>

      <div class="footer-middle">
      <nuxt-link
          v-for="item in items" 
          :key="item.name"
          :to="item.page"
          class="button"
      >{{item.name}}</nuxt-link>
      </div>

      <div class="footer-right">
         <social-share display="inline" />
      </div>

    
    
  </div>
</template>

<script>
import socialShare from './social/socialShare.vue'
export default {
  components: { socialShare },
  name: 'Footer',
    data() {
      return {
        items: [
          {name: 'Accueil', page: '/'},
          {name: 'Nos écoles', page: '/annecy'},
          {name: 'Contact', page: '/contact'}
        ]
      }
    }
}
</script>

<style lang="scss" scoped>

.footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 110px;
  width: 100%;
  align-self: flex-end;
  padding: 0 80px;
  background-color: $noir;
  font-family: "Rubik";
  color: $gris;
  .button:hover,
  .nuxt-link-exact-active {
    color: $bleu;
  }
}

.footer-left {
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.footer-middle {
  height: 100%;
  width: 25%;
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.footer-right {
  height: 100%;
  width: 40%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

#logo {
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}


.button {
  font-size: 16px;
  font-weight: medium;
}
</style>
