<template>
  <div>
    <!--<h2>{{ test }}</h2>-->
    <img v-if="cat" :src="cat.url" class="img-thumbnail mt-4" style="width: 300px"/>
  </div>
</template>
<script>
import axios from 'axios'
export default {
    props: ['cat'],
    data() {
     return {
      // cat: null
     }
    },
     
   mounted(){
    // axios
    //   .get(`https://api.thecatapi.com/v1/images/search`)
    //   .then(function(response){
    //     console.log(response)
    //     this.cat = response[0]
    //   })
   },
   methods:{
   }
}
</script>
<style>
.NuxtLogo {
  animation: 1s appear;
  margin: auto;
}
@keyframes appear {
  0% {
    opacity: 0;
  }
}
</style>
