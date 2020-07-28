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
    cat[0].name =  `Random Cat ${cat[0].id}`
    cat[1].name =  `Random Cat ${cat[0].id}`
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
        axios.get(`/api/catpics`).then((response)=>{
          let cat = _.sample(response.data)
      
          this.deck = {
            name: cat.name,
            url: `/img/cats/${cat.url}`
          }
          let preload = new Image()
          preload.src = cat.url
          preload.addEventListener('load',function(){console.log('image preloaded')})
          this.$store.commit('add', this.deck)
          console.log(cat)
        })
        
      } else {
        axios
        .get(`https://api.thecatapi.com/v1/images/search`)
        .then((response) => {
          let preload = new Image()
          preload.src = response.data[0].url
          preload.addEventListener('load',function(){console.log('image preloaded')})
          response.data[0].name = `Random Cat ${response.data[0].id}`
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
