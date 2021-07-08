<template>
    <div class="containner">
        <div class="top">
            <div class="topleft">

            <img src="../../images/pp.jpg" id="pp" alt="photo du profil">
            </div>
            <div class="topright">
                <h3>Bastien Manent</h3>
                <p>bastien.manent@gmail.com</p>
            </div>
        </div>
        <div class="mid">
            <nuxt-link class="liens" to="/profil">Gerer son profil</nuxt-link>
            <nuxt-link class="liens" to="/settings">Paramètres</nuxt-link>
            <nuxt-link class="liens" id="add-project" to="/create-projet">Ajouter un Projet</nuxt-link>
        </div>
        <div class="bot">
            <nuxt-link class="liens" id="disconnect" to="/">Se déconnecter</nuxt-link>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.containner {
    z-index: 1;
    height: 240px;
    width: 300px;
    border-radius: 16px;
    box-shadow: 0px 0px 10px #00000029;
    padding: 0 20px;
    font-family: "Rubik";
    position: absolute;
    top: 60px;
    right: 80px;
    background-color: white;
}

.top {
    display: flex;
    height: 30%;
    width: 100%;
    justify-content: flex-start;
    align-items: flex-start;
    border-bottom: 2px solid $gris;

    h3 {
        font-size: 16px;
    }
    p {
        font-size: 12px;
    }
}

.topleft {
    height: 100%;
    width: 22%;
    display: flex;
    justify-content:flex-start;
    align-items: center;
    #pp {
      height: 37px;
      width: 37px;
      border-radius: 50%;
      object-fit: cover;
    }
}

.topright {
    height: 100%;
    width: 65%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
}

.mid {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    border-bottom: 2px solid $gris;

    .liens {
        font-size: 14px;

        &.liens:hover {
            color: $bleu;
        }
    }

    #add-project {
        height: 25px;
        width: 50%;
        border: 1px solid $noir;
        border-radius: 16px;
        display: flex;
        justify-content: center;
        align-items: center;

        &#add-project:hover {
            border-color: $bleu;
        }
    }
}

.bot {
    height: 20%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;

    #disconnect {
        font-weight: bold;
    }
}
</style>