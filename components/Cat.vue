<template>
  <div>
    <div class="card mx-auto mt-4" style="width: 300px" v-if="cat">
      <img class="card-img-top" :src="cat.url" alt="Card image cap">
      <div class="card-body">
        <h5 class="card-title">{{ cat.name }}</h5>
      </div>
    </div>
  </div>
</template>
<script>
export default {
    props: ['cat'],
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
