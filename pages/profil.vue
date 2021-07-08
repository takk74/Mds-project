<template>
    <div class="containeer">
        <img src="../images/chevalier.jpg" alt="image du bandeau" id="chevalier">

         <div class="profil">
             <div class="profil-top">
                 <img src="../images/pp.jpg" id="pp" alt="photo du profil">
                 <h3>Bastien Manent</h3>
                 <p>B2 Annecy</p>
             </div>
            <div class="profil-mid">
                 <div class="profil-mid-left">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                    <p><strong>258</strong> J'aimes</p>
                 </div>

                 <div class="profil-mid-mid">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" /></svg>
                    <p><strong>120</strong> Abonnés</p>
                 </div>

                 <div class="profil-mid-right">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12"></path></svg>
                    <p><strong>14</strong> Projets</p>

                 </div>
             </div>
             <a href="#" id="subscribe">S'abonner</a>
             <div class="profil-bot">
                 <p>Graphiste Junior</p>
                 <p>My Digital School Annecy</p>
             </div>
        </div>   

            <div class="content">
                <div class="description">
                    <div class="top">
                        <h3>Description</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, molestiae. Facere, debitis doloremque non commodi reprehenderit et incidunt ex officia dolorum, cupiditate consequatur iste harum, consequuntur vero quo numquam adipisci?</p>
                    </div>
                    <div class="bot">
                        <social-share display="inline"/>
                    </div>
                </div>
            </div>
                <cards/> 
    </div>
</template>

<script>
import socialShare from '~/components/global/social/socialShare.vue'
export default {
  components: { socialShare },
    
}
</script>

<style lang="scss" scoped>


.containeer {
    height: 100%;
    width: 100%;
    background-color: $gris;
    font-family: "Rubik";
}

#chevalier {
    height: 30vh;
    width: 100%;
    object-fit: cover;
    position: relative;
}


.content {
    height: 80% ;
    width: 100%;
    padding: 0 80px;
    display: flex;
    justify-content: center;
    
}

.description {
    height: 230px;
    width: 50%;
    padding: 20px;
    position: relative;
}

.profil {
    height: 300px;
    width: 300px;
    position: absolute;
    left: 80px;
    top: 26%;
    background-color: white;
    box-shadow: 0px 0px 10px #00000029;
    border-radius: 20px;
    padding: 10px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    #pp {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        object-fit: cover;
    }
}

.profil-top {
    height: 35%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    h3 {
        font-size: 16px;
    }
    p {
        font-size: 14px;
    }
}

.profil-mid {
    height: 25%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    svg {
        height: 20px;
        width: 20px;
        color: $noir;
    }

    p {
        font-size: 12px;
    }
}

.profil-mid-left {
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    }

.profil-mid-mid {
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    }

#subscribe {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 25px;
    width: 40%;
    background-color: $bleu;
    color: $gris;
    border-radius: 16px;
    font-size: 13px;

    &:hover {
        background-color: #28a4aF;
    }
    
}

.profil-mid-right {
    height: 100%;
    width: 33%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    }

.profil-bot {
    width: 100%;
    height: 20%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;

    p{
        font-size: 12px;
    }
}

.top {
    height: 50%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-evenly;
    padding-left: 58px;

    h3 {
        font-size: 25px;
    }
    p {
        font-size: 14px;
    }
}

.bot {
    height: 50%;
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: flex-end;
}
</style>