<template>
  <div>
    <el-form :inline="true" :model="searchForm" ref="searchForm" :rules="rules" @submit.native.prevent>
      <el-form-item prop="keyword">
      <el-input placeholder="search by keyword" prefix-icon="el-icon-search" v-model="searchForm.keyword"  @keyup.enter.native="search('searchForm')" />
      </el-form-item>
      <el-form-item>
      <el-button @click="search('searchForm')">search</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="babel">
import axios from 'axios'
const BASE_URL = 'https://qiita.com/api/v2/'

export default {
  layout: 'navbar',
  data () {
    return {
      searchForm: {
        keyword: ''
      },
      rules: {
        keyword: [
          { required: true, message: 'Please input the keyword', trigger: 'blur' }
        ]
      }
    }
  },
  created () {
    this.searchForm.keyword = 'nuxt.js'
    this.sendRequest()
    this.searchForm.keyword = ''
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
    sendRequest () {
      axios.get(BASE_URL + 'items', {
        headers: {'Content-Type': 'application/json'},
        params: {
          page: 1,
          per_page: 20,
          query: this.searchForm.keyword
        }
      })
        .then(response => {
          if (response.data.length === 0) {
            this.hasData = false
          }
          this.$emit('send-lists', response.data)
        })
        .catch(e => {
          console.error('error:', e)
        })
    }
  }
}
</script>

<style>
.el-form {
  margin-top: 1em;
  margin-left: 1em;
}
</style>