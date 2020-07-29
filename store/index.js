export const state = () => ({
  catHistory: [],
  catCreds: {},
  cat: {name: 'kitty load...', url: 'img/loading.gif'},
  thumbnail: 'img/loading.gif',
  name: 'kitty load...'
})

export const mutations = {
  add (state, cat) {
    state.cat = cat
    if(cat.id) state.cat.name = `Random Cat ${cat.id}`
    state.catHistory.push(cat)
    state.thumbnail = cat.url
    state.name = cat.name
    console.log(cat)
  },
  catCred(state, cat){
    if(!state.catCreds[cat.name]) state.catCreds[cat.name] = {cred: 0, url: cat.url, name: cat.name}
    state.catCreds[cat.name].cred += 1
  },
  loading(state){
    state.thumbnail = 'img/loading.gif'
    state.name = 'kitty load...'
  }
}