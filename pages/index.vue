<template>
<div class="container">
  <h1>Home</h1>
  <div class="columns">
    <router-link to="/todo">ToDo</router-link>
    <nuxt-link to="/todo2">ToDo2s</nuxt-link>
    <nuxt-link to="/dev/calc">Calc</nuxt-link>
    <nuxt-link to="/warikan">warikan</nuxt-link>
    <nuxt-link to="/mypage">mypege</nuxt-link>
    <nuxt-link to="/getSet">getSet</nuxt-link>
    <nuxt-link to="/UdyNN/argument">argument</nuxt-link>
  </div>
</div>
</template>


<script>
export default {
  name: "",
  data: () => ({

  })
}
</script>
<style lang="sass" scoped>
.columns
  display: inline-flex
  > a
    font-size: 24px
    margin-left: 12px
</style>
