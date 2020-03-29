<template>
  <div id="">
  <h2>{{ teamName }}</h2>
  <ul v-for="data in datas" :key="data.id">
  <li>{{ data.name }}</li>
  <li>{{ data.id }}</li>
  <li :class="pC(data.position)">{{ data.position }}</li>
  <li :class="hC(data.height)">{{ data.height }}</li>
  </ul>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    datas: Object,
    teamName: String
  },
  methods: {
    hC(height) {
      console.log(height)
      if (height > 170) {
        console.log("hi")
        return 'hi'
      } else {
        console.log("no")
        return 'low'
      }
    },
    pC(position){
      if(position === "族車"){
        return 'gold'
      }
    }
  }
}
</script>

<style lang="sass" scoped>
h2
  margin: 28px 0 0 0
  line-height: 1
.hi
  background: pink
.low
  background: lightgray
.gold
  background: gold
</style>
