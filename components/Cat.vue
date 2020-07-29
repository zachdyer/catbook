<template>
  <div>
    <div class="card mx-auto mt-4" style="width: 300px">
      <img class="card-img-top" :src="thumbnail" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ name }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['cat'],
    data(){
      return{
        // url: this.$store.state.cat.url,
        // name: this.$store.state.cat.name,
      }
    },
    computed: {
      thumbnail(){
        return this.$store.state.thumbnail
      },
      name(){
        return this.$store.state.name
      }
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
