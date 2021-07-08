<template>

    <div class="container">
        <div class="new-project">
            <form action="">
                <h2>Nouveau Projet</h2>
                <input type="text" placeholder="Titre">
                <input type="text" placeholder="Description" id="description">
                <select name="" id="" placeholder="Type de création">
                    <option value="0">Type de création</option>
                    <option value="1">Graphisme</option>
                    <option value="2">Illustration</option>
                    <option value="3">UX Design</option>
                    <option value="4">Animation</option>
                    <option value="5">Développement Web</option>
                </select>
                <p>Outils utilisé(s)</p>
                <div class="adobe">
                    <img src="../images/adobe/Xd.svg" alt="">
                    <img src="../images/adobe/InDesign.svg" alt="">
                    <img src="../images/adobe/Photoshop.svg" alt="">
                    <img src="../images/adobe/Illustrator.svg" alt="">
                    <img src="../images/adobe/Premiere.svg" alt="">
                </div>
                <input type="text" placeholder="Tags">
                <input type="submit" id="publier" value="Publier">

            </form>
        </div>

        <div class="drag-drop">
            <div class="contour">
                <h1>Glisser-Déposer</h1>
                <svg class="w-6 h-6" fill="currentColor" id="dragdrop" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM6.293 6.707a1 1 0 010-1.414l3-3a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L11 5.414V13a1 1 0 11-2 0V5.414L7.707 6.707a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>


.container {
    width: 100%;
    padding: 80px;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-family: "Rubik";
    background-color: $gris;

}

.new-project {
    height: 100%;
    width: 30%;
    border-radius: 16px;
    box-shadow: 0px 0px 10px #00000029;
    padding: 15px 30px 20px 30px;

    h2 {
        padding: 0;
        text-align: start;
        font-weight: bold;
        font-size: 30px;
        
        }

    input , select  {
        width: 100%;
        border-radius: 16px;
        height: 30px;
        border: 1px solid $noir;
        padding-left: 10px;
        color: $noir;
        border: 1px solid $noir;

    }
    #description {
        height: 100px;

    }
    #publier {
        border: 1px solid $noir;
        width: 35%;
        height: 35px;
        background-color: $bleu;
        color: $gris;
        border: none;

        &#publier:hover {
            background-color: #28a4aF;
        }
    }
}

form {
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    input:focus::-webkit-input-placeholder {
    opacity: 0;
    }
   
    input , select   {
       outline: none;
       border-color: $noir;
    }
    select::placeholder {
        color: $noir;
    }
    
    .adobe {
        height: 60px;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0;
    }
     img {
        height: 100%;
        width: 15%;
    }
}
.drag-drop {
    height: 100%;
    width: 65%;
    border-radius: 16px;
    box-shadow: 0px 0px 10px #00000029;
    padding: 20px;
}

.contour {
    height: 100%;
    width: 100%;
    border: 1px solid #707070;
    border-radius: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;

    h1 {
        color: #8A8A89;
    }
}

#dragdrop {
        height: 150px;
        width: 150px;
        color: #8A8A89;
        
    }
</style>