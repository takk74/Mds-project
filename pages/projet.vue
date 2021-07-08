<template>
    <div class="projet">

        <div class="left">
            <div class="profil">
                <div class="profil-top">
                    <img src="../images/pp.jpg" alt="" id="pp">
                    <h3>Bastien Manent</h3>
                    <p>B2 Annecy</p>
                    <div class="actions">
                        <div class="social-clicks">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
                            <p><strong>258 </strong>j'aimes</p>
                        </div>
                        <div class="social-clicks">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                            <p><strong>10 </strong>commentaires</p>
                        </div>
                        <div class="social-clicks">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
                            <p><strong>14 </strong>partages</p>
                        </div>
                    </div>
                    <nuxt-link to="/" id="btn-sub">S'abonner</nuxt-link>
                </div>
                <div class="profil-bot">
                    <h3>Titre</h3>
                    <p>Projet My Creative Week 2020</p>
                    <h3>Outils utilisé(s)</h3>
                    <img src="../images/xd.png" id="xd" alt="">
                    <h3>Tags</h3>
                    <p>Illustrator | Loup | Poney | Animaux</p>
                </div>
            </div>
            <div class="other-projects">
                <h3 id="other-projects">Autres projets</h3>
                <div class="all-projects">

                    <div class="projects-left">

                            <img src="../images/chevalier.jpg" alt="">
                            <img src="../images/chevalier.jpg" alt="">
                        
                    </div>

                    <div class="projects-right">

                            <img src="../images/chevalier.jpg" alt="">                     
                            <img src="../images/chevalier.jpg" alt="">
                        
                    </div>
                </div>
            </div>
        </div>

        <div class="right">
            <div class="photo">
                <img src="../images/chevalier.jpg" alt="">
            </div>
            <div class="icons">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" /></svg>
            </div>
            <div class="over-comments">
                <h3>Commentaires 14</h3>
                <div class="add-comment">
                <p>Publier un commentaire</p>
                <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clip-rule="evenodd"></path></svg>
                </div>
            </div>
            <div class="comments">
                
                <commentaire/>
                <commentaire/>
                <commentaire/>
                <commentaire/>

            </div>
        </div>

    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


    .projet {
        height: 1200px;
        width: 100%;
        font-family: "Rubik";
        padding: 60px 80px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background-color: $gris;
    }

    .left {
        
        height: 100%;
        width: 35%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
    }

    .profil {
        border-radius: 16px;
        width: 100%;
        height: 55%;
        background-color:white;
        box-shadow: 0px 0px 10px #00000029;
         h3 {
            font-size: 20px;
        }
        p {
            font-size: 14px;
        }

    }
    .profil-top {
        padding: 20px;
        height: 45%;
        width: 100%;
        border-bottom: 2px solid rgb(228, 228, 228);
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
   
        svg {
        height: 30px;
        width: 30px;
        color: $noir;
        }
    }

    svg {
    height: 30px;
    width: 30px;
    color: $noir;
    } 

    #pp {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-bottom: 5px;
        object-fit: cover;
    }
    .actions {
        width: 100%;
        height: 70px;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
    .social-clicks {
        height: 100%;
        width: 33%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        
    }
    #btn-sub {
        height: 30px;
        width: 130px;
        color: $gris;
        background-color: $bleu;
        border-radius: 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        position: absolute;
        bottom: 25px;

        &#btn-sub:hover {
            background-color: #28a4aF;
        }
    }
    .profil-bot {
        padding-left: 20px;
        height: 55%;
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: flex-start;
            
        #xd {
            height: 60px;
            width: 60px;
        }

      
    
    }

#other-projects {
    margin: 15px 0 15px 15px;
}
    .other-projects {
        border-radius: 16px;
        width: 100%;
        height: 35%;
        background-color:white;
        box-shadow: 0px 0px 10px #00000029;
        padding:  10px 20px;
    }
        .all-projects {
            width: 100%;
            height: 80%;
            display: flex;
            justify-content: space-around;
            align-items: center;
        }
            img {
                width: 90%;
                height: 45%;
                border-radius: 16px;
                }
            
            .projects-left {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                 border-radius: 16px;
            }    
            
            .projects-right {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: space-around;
                 border-radius: 16px;
            }
        

    .right {
        height: 100%;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-between;
    }

    .photo {
        border-radius: 16px;
        height: 35%;
        width: 100%;
        box-shadow: 0px 0px 10px #00000029;

        img {
            height: 100%;
            width: 100%;
            border-radius: 16px;
        }
    }

.icons {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    width: 20%;
    height: 30px;
    

    svg {
        margin-right: 25px;
    }
}

.over-comments {

width: 100%;
height: 50px;
display: flex;
align-items: flex-end;
justify-content: space-between;

    p {
        font-size: 14px;
    }
}

    .comments {
        border-radius: 16px;
        height: 52%;
        width: 100%;
        padding: 40px 40px 10px 40px;
        background-color:white;
        box-shadow: 0px 0px 10px #00000029;
        overflow-y: scroll;
        &::-webkit-scrollbar {
        width: 0px;
        background: transparent;
        }
       
    }

.add-comment {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    p:hover , svg:hover {
        color: $bleu;
    }

    svg {
        margin-left: 10px;
    }
}

</style>