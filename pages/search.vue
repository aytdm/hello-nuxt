<template>
  <div id="page_top">
    <el-container>
      <el-main v-loading.fullscreen.lock="isLoading">
      </el-main>
    </el-container>
  </div>
</template>

<script lang="babel">
import {mapState} from 'vuex'
import MyList from '~/components/List.vue'
import SearchForm from '~/components/SearchForm.vue'

export default {
  layout: 'navbar',
  components: {
    MyList,
    SearchForm
  },
  computed: mapState(['isLoading']),
  async fetch ({ store }) {
    store.dispatch('getItems', {
      keyword: 'nuxt.js'
    })
  }
}
</script>