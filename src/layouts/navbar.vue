<template>
  <div>
    <my-header />
    <nuxt />
    <my-footer />
  </div>
</template>

<script>
import MyHeader from '~/components/Header.vue'
import MyFooter from '~/components/Footer.vue'
export default {
  name: 'Navbar',
  components: {
    MyHeader,
    MyFooter
  }
}
</script>
