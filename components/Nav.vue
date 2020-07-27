<template>
<div class="links">
  <button @click="click" class="button--green" v-if="$route.name=='index'">Another One</button>
  <nuxt-link to="/" class="button--grey">Home</nuxt-link>
  <nuxt-link to="/history" class="button--grey">History</nuxt-link>
</div>
</template>
<script>
export default {
  methods: {
    click(){
       this.$emit("anotherone")
    }
  }
}
</script>
<style>

</style>
