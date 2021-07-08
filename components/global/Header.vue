<template>
  
  <div class="header">
      <h1 id="titre">My Digital School Projects</h1>
      <h3>Nos étudiants ont du talent</h3>
      <search-bar/>
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

.header {
  height: 270px;
  width: 100%;
  padding: 0 80px ;
  font-family: "Rubik";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  box-shadow: 0px 0px 10px #0000001C;
  position: relative;
  background-color: white;

  h3 {
    font-weight: 300;
  }
  
  
}

#titre {
margin-bottom: 13px;
}
</style>