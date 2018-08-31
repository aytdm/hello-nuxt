<template>
  <div class="error-container">
    <h1>An error occured ...(☍﹏⁰) </h1>
    <nuxt-link to="/">Back Top</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>