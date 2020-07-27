<template>
  <div class="container">
    <div>
      <Logo />
      <Cat :cat="cat" />
      <Nav v-on:anotherone="updateCat" />
      <Footer />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import _     from 'lodash'
export default {
  async asyncData ({ $axios, params }) {
    const cat = (await $axios.$get(`https://api.thecatapi.com/v1/images/search?limit=2`))
    const catpics = (await $axios.$get(`/api/catpics`))
    cat[0].name =  "Random Cat 1"
    cat[1].name =  "Random Cat 2"
    return {
      cat: cat[0],
      deck: cat[1],
      catpics: catpics
    }
  },
  head: {
    title: 'Catbook Webapp'
  },
  data(){
    return {
      deck: null
    }
  },
  mounted(){
    console.log(this.$route)
  },
  methods: {
    updateCat(){
      if(this.deck) this.cat = this.deck
      if(Math.random() < 0.5) {
        this.cat = {
          name: 'Katy Purry',
          url: `/img/cats/${_.sample(this.catpics)}`
        }
        this.$store.commit('add', this.cat)
      } else {
        axios
        .get(`https://api.thecatapi.com/v1/images/search`)
        .then((response) => {
          let preload = new Image()
          preload.src = response.data[0].url
          console.log(preload)
          preload.addEventListener('load',function(){console.log('image preloaded')})
          response.data[0].name = 'Random Cat'
          this.deck = response.data[0]
          this.$store.commit('add', response.data[0])
        })
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
