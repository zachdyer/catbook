<template>
  <div class="container">
    <div>
      <Logo />
      <div class="card-columns mt-4">
        <div class="card" v-for="cat in cats">
          <img class="card-img-top" :src="cat.url" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ cat.name }}</h5>
          </div>
        </div>
      </div>
      <h1 class="title">
        History
      </h1>
      <Footer />
      <Nav />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cats: this.$store.state.cats
    }
  },
  mounted(){
    console.log(this.$store.state.cats)
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family:
    'Quicksand',
    'Source Sans Pro',
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    'Helvetica Neue',
    Arial,
    sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
