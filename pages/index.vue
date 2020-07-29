<template>
  <div class="container">
    <div>
      <Logo />
      <Nav v-on:anotherone="updateCat" />
      <Cat />
      <Footer />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
import _     from 'lodash'
export default {
  async asyncData ({ $axios, params }) {
    // const cat = (await $axios.$get(`https://api.thecatapi.com/v1/images/search?limit=2`))
    // cat[0].name =  `Random Cat ${cat[0].id}`
    // cat[1].name =  `Random Cat ${cat[0].id}`
    // console.log('done loading')
    // return {
    //   cat: cat[0],
    //   deck: cat[1],
    //   loading: false
    // }
  },
  head: {
    title: 'Catbook Webapp'
  },
  data(){
    return {
      thumbnail: 'img/loading.gif',
      title: 'kitty load...',
      cats: {},
      loading: true
    }
  },
  mounted(){

    this.updateCat()
  },
  methods: {
    updateCat(){

      this.$store.commit('loading')
      if(Math.random() < 0.5) {
        axios.get(`/api/catpics`).then((response)=>{
          let cat = _.sample(response.data)
          let preload = new Image()
          preload.src = cat.url
          preload.addEventListener('load',()=>{
            console.log('image preloaded', cat)
            if(!this.cats[cat.name]) this.cats[cat.name] = {cred: 0}
            this.cats[cat.name].cred += 1
            this.$store.commit('add', cat)
            this.$store.commit('catCred', cat)
          })
        })
      } else {
        axios
        .get(`https://api.thecatapi.com/v1/images/search`)
        .then((response) => {
          let cat = response.data[0]
          let preload = new Image()
          preload.src = cat.url
          preload.addEventListener('load',()=>{
            console.log('image preloaded', cat)
            this.$store.commit('add', cat)
          })
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
