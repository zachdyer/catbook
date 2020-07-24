<template>
  <div class="container">
    <div>
      <Logo />
      <Cat :cat="cat" />
      <h1 class="title">
        Catbook
      </h1>
      <Nav />
    </div>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  async asyncData ({ params }) {
    const { data } = await axios.get(`https://api.thecatapi.com/v1/images/search`)
    console.log(data[0])
     return { cat: data[0] }
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
