<template>
<div class="links btn-group">
  <button @click="click" class="btn btn-primary" v-if="$route.name=='index'">Another One</button>
  <nuxt-link to="/" class="btn btn-secondary" v-if="$route.name!='index'">Home</nuxt-link>
  <nuxt-link to="/cat-cred" class="btn btn-secondary">Cat Cred</nuxt-link>
  <nuxt-link to="/history" class="btn btn-secondary">History</nuxt-link>
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
