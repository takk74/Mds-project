
<template>

  <nav>
    <div class="nav-left">
      <nuxt-link to="/"><img src="../../images/mds.svg" alt="mds logo" id="logo"></nuxt-link>
        <nuxt-link
          v-for="item in items" 
          :key="item.name"
          :to="item.page"
          class="button"
        >{{item.name}}</nuxt-link>
    </div>
    <div class="nav-right">
      <img src="../../images/pp.jpg" alt="photo du profil" id="pp" v-on:click="showMenu=!showMenu">
      <nuxt-link id="add-project" to="/create-projet">Ajouter un projet</nuxt-link>
    </div>
    <Menu v-if="showMenu"/>
  </nav>

</template>

<script>
export default {
  name: 'Navbar',
    data() {
      return {
        showMenu: false,
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

nav {
  z-index: 3;
  height: 70px;
  width: 100%;
  display: flex;
  font-family: "Rubik";
  align-items: center;
  background-color: white;
  color: $noir;
  padding: 0 80px;
  font-size: 16px;
  box-shadow: 0px 0px 14px 0px #00000034;
  
  .button:hover,
  .nuxt-link-exact-active {
    color: $bleu;
    
  }

}

.nav-left {
  height: 100%;
  width: 40%;
  display: flex;
  align-items: center ;
  justify-content: space-between;
}

.nav-right {
  height: 100%;
  width: 60%;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

}

.button {
  font-size: 16px;
  font-weight: medium;
}

#logo {
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

#pp {
  height: 45px;
  width: 45px;
  border-radius: 50%;
  margin-left: 32px;
  object-fit: cover;
  border : 2px solid white;
  position: relative;

  &:hover {
    border : 2px solid $bleu;
  }
}

#add-project {
  border-radius: 25px;
  border: 1px solid #3c3c3B;
  width: 150px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;

  
}
  
#add-project:hover , #add-project:focus {
  border: 1px solid $bleu;
  color: $bleu;
}


</style>


