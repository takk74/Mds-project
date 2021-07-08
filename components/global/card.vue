<template>
  
  <div class="card">

      <nuxt-link to ="projet">
      <img :src="projectCard.img" alt="photo du projet" class="top-img">
      </nuxt-link>

      <div class="card-footer">

          <div class="footer-left">

          <img :src="projectCard.avatar_url" alt="avatar du profil" class="avatar">
          <p id="name">{{projectCard.name}}</p>
          <p id="promo">{{projectCard.promo}}</p>
          </div>
 
        <div class="footer-right">
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            <p>{{projectCard.likes_count}}</p>
            <svg id="comments" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
            <p>{{projectCard.comments_count}}</p>
        </div>
        
      </div>
      

  </div>

</template>



<script>
export default {
  name: "card",
  props : [
      "projectCard"
  ]

}
</script>


<style lang="scss" scoped>

.card {
    font-family: "Rubik";
    
}
.top-img {
    border-radius: 11px;
    height: 270px;
    width: 100%;
    object-fit: cover;
    &:hover {
        opacity: 0.8;
    }
}

svg {
    height: 15px;
    width: 20px;
    color : $noir;
    
}

.avatar {
    height: 35px;
    width: 35px;
    border-radius: 50%;
    object-fit: cover;
}

.card-footer {
    height: 55px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 5px 10px 5px;
}

.footer-left {
    height: 100%;
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.footer-right {
    height: 100%;
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

p {
    font-size: 12px;
    font-weight: medium ;
    margin-left: 2px;
    color: $noir;
}

#name {
    font-weight: bold;
    text-align: center;
}

#comments {
    margin-left: 12px;
}
</style>