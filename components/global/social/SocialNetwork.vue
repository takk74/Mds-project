<template>
<li>
        <a :href="url">
        <!-- slot //  -->
          <slot/>
          <!-- end slot -->
        </a>
      </li>
</template>

<script>
export default {
  name: "SocialNetwork",
  props: ['url'],
  data() {
      return {
        
      }
  },

}
</script>

<style lang="scss" scoped>

#social {
  padding: 0;
}

#social li {
  height: 45px;
  width: 45px;
  border-radius: 12px;
  list-style-type: none;
  background-color: $gris;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  font-size: 32px;
  
}

#social li i {
  color: $noir;
}
</style>

