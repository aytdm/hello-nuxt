export default {
  setItems (state, lists) {
    state.lists = lists
  },
  hideLoading (state) {
    state.isLoading = false
  },
  showLoading (state) {
    state.isLoading = true
  }
}
