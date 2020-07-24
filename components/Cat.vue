<template>
  <div>
    <img :src="cat.url" class="img-thumbnail mt-4" style="width: 300px"/>
  </div>
</template>
<script>
export default {
   props: ['cat']
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
