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

  <Member :datas="member" :teamName="teamName" />
  <hr>
  <Props :price="stationary" />
  <Battle/>

</div>
</template>


<script>
import Member from '~/components/member.vue'
import Props from '~/components/props.vue'
import Battle from '~/components/battle.vue'

export default {
  name: "",
  components: {
    Member,
    Props,
    Battle
  },
  data: () => ({
    teamName: "爆音小僧",
    member:
    [
      { name: "浅川拓", id: 1, position: "パシリ",  height: 165},
      { name: "鰐淵", id: 2, position: "族車",  height: 185},
      { name: "武丸", id: 3, position: "ツルハシ",  height: 178},
    ],
    stationary: {
      pen: 120,
      eraser: 100,
      scissor: 320,
    }
  }),

}
</script>
<style lang="sass" scoped>
.columns
  display: inline-flex
  > a
    font-size: 20px
    margin-left: 12px
.hi
  color: red
</style>
