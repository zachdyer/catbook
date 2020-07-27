export const state = () => ({
  cats: [],
})

export const mutations = {
  add (state, cat) {
    state.cats.push(cat)
  }
}