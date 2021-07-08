<template>
  
  <div class="content">
    <Header/>
    <villes/>
    <h3>Meilleurs projets</h3>
   <cards/>
   <actualites/>
   <h3>Projets récents</h3>
   <cards/>
  </div>

</template>



<script>
export default {
  name: "accueil",
  data() {
      return {
        
      }
  }
}
</script>


<style lang="scss" scoped>

.content {
  margin: 0;
  max-width: 100%;
  background-color: $gris;
  font-family: "Rubik";
  
}

h3 {
  margin-left: 80px;
}
</style>
