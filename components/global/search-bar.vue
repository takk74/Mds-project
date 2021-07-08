<template>
  <div class="">
    <div class="searchbar">

        <svg id="search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
        <input type="text" placeholder="Rechercher">
    </div>
    
  </div>

</template>



<script>
export default {
  name: "",
  data() {
      return {
        
      }
  }
}
</script>


<style lang="scss" scoped>
input {
  height: 80%;
  width: 80%;
  border: none;
  outline: none;
  font-size: 16px;
 
}
.searchbar {
height: 50px;
width: 500px;
border-radius: 30px;
border: 3px solid $bleu;
font-family: "Rubik";
display: flex;
justify-content: flex-start;
align-items: center;
padding-left: 21px;
position: absolute;
bottom: -25px;
background-color: white;
color: $noir;
}

#search-icon {
    width: 20px;
    height: 20px;
    color: $noir;
    margin-right: 15px ;
}
</style>