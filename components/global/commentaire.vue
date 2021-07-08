<template>
    <div class="comment">

                <div class="header-comments">
                <img src="../../images/pp.jpg" id="pp" alt="photo de profil">

                    <div class="comments-info">
                    <h3>Bastien Manent</h3>
                    <p>B2 Annecy</p>
                    </div>
                </div>
                <div class="commentaire">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia cupiditate, distinctio molestias saepe suscipit id alias iure iste natus modi aspernatur minus porro sunt dolor labore debitis nobis quisquam temporibus! Quam deleniti distinctio velit exercitationem maiores! Similique deleniti possimus exercitationem saepe labore soluta adipisci aliquid excepturi aliquam. Doloremque, aperiam quam.</p>
                </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.comment {
    
       h3 {
            font-size: 20px;
            margin-left: 20px;
        }

         p {
            font-size: 14px;
            margin-left: 20px;
        }

}

.header-comments {
    width: 45%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 15px;

     #pp {
        height: 50px;
        width: 50px;
        border-radius: 50%;
        margin-bottom: 5px;
        object-fit: cover;
    }
}


.commentaire {
    width: 100%;
    height: 30%;
    border: 1px solid #707070;
    border-radius: 16px;
    margin-bottom: 30px;
    padding: 15px;
}

</style>