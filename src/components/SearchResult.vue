<template>
  <div>
    <div v-if="lists.length === 0 && !isLoading">
      <i class="el-icon-warning">&nbsp;No results found for your keyword.</i>
    </div>
    <div v-else>
      <el-col v-for="(element, index) in lists" :key="index" :span="6" class="col-style">
        <el-card :body-style="{ padding: '15px' }" class="box-card">
          <div slot="header">
            <a :href="element.url" target="_blank">{{ element.title }}</a>
          </div>
          <div class="content-style text">
            <div>{{ element.created_at | formatDate }}</div>
            <span>
              <img :src="element.user.profile_image_url" width="15" height="15">
              <template v-if="element.user.description">
                <el-popover slot="description" placement="top-start" width="300" trigger="hover" :content="element.user.description">
                  <span slot="reference">&nbsp;{{ element.user.id }}</span>
                </el-popover>
              </template>
              <template v-else>
                <span>&nbsp;{{ element.user.id }}</span>
              </template>
            </span>
            &nbsp;
            <span>
              <i class="el-icon-star-off">{{ element.likes_count }}</i>
            </span>
            <div>{{ element.body | description }}</div>
            <el-tag v-for="(tag, tagindex) in element.tags" :key="tagindex" size="mini" type="info" class="tag-style">
              {{ tag.name }}
            </el-tag>
          </div>
        </el-card>
      </el-col>
      <div v-if="250 < scrollY" class="page-component-up">
        <a id="return-top" v-scroll-to="'#page_top'" href="#">
          <i class="el-icon-caret-top" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="babel">
import { mapState } from 'vuex'

export default {
  data () {
    return {
      scrollY: 0
    }
  },
  computed: mapState(['lists', 'isLoading']),
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll () {
      this.scrollY = window.scrollY
    },
    scrollTop () {
      document.body.scrollTop = 0
      document.documentElement.scrollTop = 0
    }
  }
}
</script>
