<template>
  <div class="container">
    <div>
      <Logo />
      <h2 class="title">
        Cat History
      </h2>
      <Nav />
      <div class="card-columns mt-4">
        <div class="card" v-for="cat in catHistory">
          <img class="card-img-top" :src="cat.url" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ cat.name }}</h5>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      catHistory: this.$store.state.catHistory
    }
  },
  mounted(){
    console.log(this.$store.state.catHistory)
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
  color: #3b5999;
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
