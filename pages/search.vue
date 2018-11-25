<template>
  <div>
    <el-container>
      <el-main>
        <search-form @send-lists="getLists" />
        <search-result :lists="resultLists" :hasData="hasData" />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="babel">
import SearchResult from '~/components/List.vue'
import SearchForm from '~/components/SearchForm.vue'

export default {
  layout: 'navbar',
  components: {
    SearchForm,
    SearchResult
  },
  data () {
    return {
      resultLists: [],
      hasData: true
    }
  },
  methods: {
    getLists (responseList) {
      this.resultLists = responseList
    }
  }
}
</script>

<style>
.el-main {
  background-color: #fff;
}
</style>