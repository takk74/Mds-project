<template>
    <div class="actu">
        <div class="actu-left">
            <img src="../../images/lake.jpg" alt="photo de l'actualité">
        </div>
        <div class="actu-right">
            <div class="infos">

            <h3>Actualités</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, ullam explicabo provident accusamus ab dolore pariatur incidunt magnam quam sapiente vitae iure veniam nesciunt deleniti odio atque dolor id voluptatum numquam ut unde sunt consectetur totam mollitia! Porro veritatis provident nostrum aliquam impedit minima blanditiis doloribus laborum voluptate. Doloribus nesciunt magni suscipit laborum obcaecati amet cum sed sint officiis? Architecto nulla porro aliquam recusandae sed ipsum et doloremque dolorem unde asperiores facere eum, quas animi dicta illo molestiae praesentium eligendi fugiat, quidem necessitatibus sit! Eius odio itaque eos voluptatum totam!</p>
            </div>
            <div class="button">

            <nuxt-link id="lire" to="/ecoles">Lire la suite</nuxt-link>
            </div>
        </div>

    </div>





</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

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

    img {
        object-fit: cover;
    }
    
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