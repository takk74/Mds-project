<template>
    
    <div class="villes">

        <nuxt-link to="/sqy" class="ville sq">
            <img src="../../images/sqy.svg" alt="Image de Saint-Quentin en Yvelines">
            <p>Saint-Quentin en Yvelines</p>
        </nuxt-link>

       <nuxt-link to="/paris" class="ville paris">
            <img src="../../images/paris.svg" alt="Image de Paris">
            <p>Paris</p>
        </nuxt-link>

        <nuxt-link to="/angers" class="ville angers">
            <img src="../../images/angers.svg" alt="Image de Angers">
            <p>Angers</p>
        </nuxt-link>

        <nuxt-link to="/nantes" class="ville nantes">
            <img src="../../images/nantes.svg" alt="Images de Nantes">
            <p>Nantes</p>
        </nuxt-link>

        <nuxt-link to="/annecy" class="ville annecy">
            <img src="../../images/annecy.svg" alt="Image d'Annecy">
            <p>Annecy</p>
        </nuxt-link>

    </div>
</template>



<script>
export default {
    
}
</script>



<style lang="scss" scoped>



p {
    font-size: 18px;
}

img {
    height: 100%;
    width: 60%;

}
.villes {
    height: 300px;
    max-width: 100%;
    padding: 100px 80px 0px 80px;
    font-family: "Rubik";
    font-weight: bold;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: 152px;
}

.ville {
    background-color: white;
    border-radius: 10px;
    padding: 5px 10px;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    &:hover {
        border : 2px solid $bleu
    }

}
</style>