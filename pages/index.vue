<template>
  <section class="container">
    <div>
      <h1 class="title">
        Qiita
      </h1>
      <h4 class="subtitle">
        Qiita is a technical knowledge sharing and collaboration platform for programmers.
      </h4>
      <div class="links">
        <nuxt-link to="/search" class="button--white"><i class="el-icon-search"></i> Search</nuxt-link>
      </div>
    </div>
  </section>
</template>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: #59bb0c;
}

.title {
  display: block;
  font-weight: 400;
  font-size: 100px;
  color: #fff;
  letter-spacing: 5px;
}

.subtitle {
  font-weight: 300;
  font-size: 18px;
  color: #fff;
  word-spacing: 2px;
  padding-top: 24px;
  padding-bottom: 30px;
}

.links {
  padding-top: 15px;
}
</style>
