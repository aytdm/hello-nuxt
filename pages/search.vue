<template>
  <div id="page_top">
    <el-container>
      <el-main>
        <el-form :inline="true" :model="searchForm" ref="searchForm" :rules="rules" @submit.native.prevent>
          <el-form-item prop="keyword">
            <el-input placeholder="search by keyword" prefix-icon="el-icon-search" v-model="searchForm.keyword"  @keyup.enter.native="search('searchForm')" />
          </el-form-item>
          <el-form-item>
            <el-button @click="search('searchForm')">search</el-button>
          </el-form-item>
        </el-form>
        <my-list :lists="mylist" :hasData="hasData" />
      </el-main>
    </el-container>
  </div>
</template>

<script lang="babel">
import MyList from '~/components/List.vue'

export default {
  layout: 'navbar',
  components: {
    MyList
  },
  async fetch ({ store }) {
    store.dispatch('getItems', {
      keyword: 'nuxt.js'
    })
  },
  data () {
    return {
      searchForm: {
        keyword: ''
      },
      rules: {
        keyword: [
          { required: true, message: 'Please input the keyword', trigger: 'blur' }
        ]
      },
      mylist: [],
      hasData: true
    }
  },
  methods: {
    search (form) {
      this.$refs[form].validate((valid) => {
        if (!valid) {
          return false
        }
        this.sendRequest()
      })
    },
    async sendRequest () {
      this.$store.dispatch('getItems', {
        keyword: this.searchForm.keyword
      }).catch((error) => {
        console.error(error)
        this.$router.push('/error')
      })
    }
  }
}
</script>
