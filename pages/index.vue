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
    <nuxt-link to="/percentNum">percentNum</nuxt-link>
    <nuxt-link to="/dataFunc">dataFunc</nuxt-link>
  </div>

  <Member :data="member"/>
</div>
</template>


<script>
import Member from '~/components/member.vue'

export default {
  name: "",
  components: {
    Member
  },
  data: () => ({
    member:{
      name: "俺"
    },
  })
}
</script>
<style lang="sass" scoped>
.columns
  display: inline-flex
  > a
    font-size: 20px
    margin-left: 12px
</style>
