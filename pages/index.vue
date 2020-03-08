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
    <nuxt-link to="/props">props</nuxt-link>
  </div>

  <Member :data="member" :teamName="teamName"/>
  <hr>
  <Props :price="stationary" />

</div>
</template>


<script>
import Member from '~/components/member.vue'
import Props from '~/components/props.vue'

export default {
  name: "",
  components: {
    Member,
    Props
  },
  data: () => ({
    teamName: "爆音小僧",
    member: {
      name: "浅川拓",
      id: 1,
      position: "パシリ",
      height: 160
    },
    stationary: {
      pen: 120,
      eraser: 100,
      scissor: 320,
    }
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
