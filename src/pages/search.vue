<template>
  <div id="page_top">
    <el-container>
      <el-main v-loading.fullscreen.lock="isLoading">
        <search-form />
        <search-result />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="babel">
import {mapState} from 'vuex'
import SearchResult from '~/components/SearchResult.vue'
import SearchForm from '~/components/SearchForm.vue'

export default {
  layout: 'navbar',
  components: {
    SearchForm,
    SearchResult
  },
  computed: mapState(['isLoading']),
  fetch ({ store }) {
    store.dispatch('getItems', {
      keyword: 'nuxt.js'
    })
  }
}
</script>