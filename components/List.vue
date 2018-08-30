<template>
<div>
  <div v-if="lists.length === 0 && !hasData">
    <i class="el-icon-warning">&nbsp;No results found for your keyword.</i>
  </div>
  <div v-else>
    <el-col :span="6" v-for="(element, index) in lists" :key="index" class="col-style">
      <el-card :body-style="{ padding: '15px' }" class="box-card">
        <div slot="header" class="clearfix">
          <a :href="element.url" target="_blank">{{ element.title }}</a>
        </div>
        <div class="bottom clearfix content-style text">
          <div>{{ element.created_at }}</div>
          <span>
            <img :src="element.user.profile_image_url" width="15" height="15" />
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
          <div>{{ getDescription(element.body) }}</div>
          <el-tag size="mini" type="info" class="tab-style" v-for="(tag, index) in element.tags" :key="index">{{ tag.name }}</el-tag>
        </div>
      </el-card>
    </el-col>
    <div v-if="250 < scrollY" class="page-component-up">
      <a href="#" id="return-top" v-scroll-to="'#top'">
        <i class="el-icon-caret-top" />
      </a>
    </div>
  </div>
</div>
</template>

<script lang="babel">
export default {
  props: ['lists', 'hasData'],
  data () {
    return {
      scrollY: 0
    }
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    getDescription: function (body) {
      return body.slice(0, 100) + '...'
    },
    handleScroll: function () {
      this.scrollY = window.scrollY
    }
  }
}
</script>