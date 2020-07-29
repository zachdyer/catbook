<template>
  <div class="container">
    <div>
      <Logo />
      <h2 class="title">
        Cat Cred
      </h2>
      <Nav />
      <div class="card-columns mt-4">
        <div class="card" v-for="cat in catCreds" v-bind:class="{'text-white bg-success': cat.name == winner}">
          <img class="card-img-top" :src="cat.url" alt="Card image cap">
          <div class="card-body">
            <h5 class="card-title">{{ cat.name }} <span class="badge badge-primary">{{cat.cred}}</span></h5>
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
      catCreds: this.$store.state.catCreds,
      winner: null
    }
  },
  mounted(){
    console.log(this.$store.state.catCreds)
    let highscore = 0
    for (const catprop in this.$store.state.catCreds) {
      let cat = this.$store.state.catCreds[catprop]
      console.log(cat)
      if(cat.cred > highscore) {
        highscore = cat.cred
        this.winner = cat.name
      }
    }
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
