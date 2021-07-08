<template>
    <div class="containner">

        <div class="header">
            <div class="header-left">
            <h1>Angers</h1>
            </div>
            <div class="header-right">
                <social-share display="inline" />
            </div>
        </div>
        <div class="actu">
            <div class="actu-left">
                <img src="../images/angers.jpg" alt="">
            </div>
            <div class="actu-right">
                <div class="infos">

                    <h3>Actualités</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ullam explicabo provident accusamus ab dolore pariatur incidunt magnam quam sapiente vitae iure veniam nesciunt deleniti odio atque dolor id voluptatum numquam ut unde sunt consectetur totam mollitia! Porro veritatis provident nostrum aliquam impedit minima blanditiis doloribus laborum voluptate. Doloribus nesciunt magni suscipit laborum obcaecati amet cum sed sint officiis? Architecto nulla porro aliquam recusandae sed ipsum et doloremque dolorem unde asperiores facere eum, quas animi dicta illo molestiae praesentium eligendi fugiat, quidem necessitatibus sit! Eius odio itaque eos voluptatum totam!</p>
                </div>
            <div class="button">
            <a id="lire" href="https://www.mydigitalschool.com/ecole-multimedia-angers/" target="blank">Lire la suite</a>
            </div>
        </div>

        </div>
        <div class="villes">

         <nuxt-link to="/sqy" class="ville sq">
            <img src="../images/sqy.svg" alt="">
            <p>Saint-Quentin en Yvelines</p>
         </nuxt-link>

        <nuxt-link to="/paris" class="ville paris">
            <img src="../images/paris.svg" alt="">
            <p>Paris</p>
         </nuxt-link>

         <nuxt-link to="/annecy" class="ville annecy">
            <img src="../images/annecy.svg" alt="">
            <p>Annecy</p>
         </nuxt-link>

         <nuxt-link to="/nantes" class="ville nantes">
            <img src="../images/nantes.svg" alt="">
            <p>Nantes</p>
         </nuxt-link>

        <div class="meilleurs-projets">
        <h3 id="meilleurs-projets">Meilleurs projets</h3>
        </div>
        
    </div>
        
        <cards/>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>


.containner {
    
    height: 100%;
    width: 100%;
    background-color: $gris;
    flex-direction: column;
    font-family: "Rubik";
    background-color: $gris;
}

.header {
    height: 20vh;
    width: 100%;
    padding: 0 80px;
    background-color: white;
    box-shadow: 0px 0px 10px #0000001C;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 40px;
}

.header-left {
    height: 100%;
    width: 60%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}

.header-right {
    height: 100%;
    width: 30%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

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
    padding: 30px 80px 0px 80px;
    font-family: "Rubik";
    font-weight: bold;
    gap: 20px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 152px;

    p {
    font-size: 18px;
    }

    img {
    height: 100%;
    width: 60%;
    }  
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

#meilleurs-projets {
    margin-top: 50px;
}

.actu {
    height: 450px;
    width: 100%;
    padding: 0px 80px 30px 80px;
    display: flex;
    font-family: "Rubik";
   
}

.actu-left {
    height: 100%;
    width: 50%;
    
}

.actu-right {
    padding-left: 45px;
    width: 50%;
    height: 100%;

    h3 {
        margin-bottom: 18px;
    }
}

img {
    height: 100%;
    width: 100%;
    border-radius: 10px;
}

#lire {
   height: 40px;
   width: 25%;
   color: $gris;
   background-color: $bleu;
   border-radius: 15px;
   display: flex;
   align-items: center;
   justify-content: center;

   &#lire:hover {
       
       background-color: #28a4aF;
   }
   
    
}
.infos {
    width: 100%;
    height: 60%;
}
.button {
    width: 100%;
    height: 40%;
    display: flex;
    align-items: flex-end;
    
}
</style>