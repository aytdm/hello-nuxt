import axios from 'axios'

const BASE_URL = 'https://qiita.com/api/v2/'

export default {
  async getItems ({ commit }, payload) {
    commit('showLoading')
    const response = await axios.get(`${BASE_URL}items`, {
      headers: { 'Content-Type': 'application/json' },
      params: {
        page: 1,
        per_page: 20,
        query: payload.keyword
      },
      timeout: 15000
    }).catch((error) => {
      console.error(error)
      commit('hideLoading')
      this.$router.push('/error')
    })
    commit('setItems', response.data)
    commit('hideLoading')
  }
}
