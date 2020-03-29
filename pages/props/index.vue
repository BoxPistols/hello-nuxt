<template lang="html">
<div class="app">
  <div :class="numColor">
    {{ number }}
  </div>
  <button @click="addNum(20)">Add</button>
  <button @click="addNum(-20)">Minus</button>
</div></template>

<script>
export default {
  data() {
  return {number: 0}
  },
  methods: {
  addNum(value) {
    this.number = this.number + value
  }
  },
  computed: {
    numColor() {
      if(this.number % 100 === 0){
        return this.numColor = 'red'
      }
      return 'teal'
    },
  },
}
</script>

<style lang="stylus" scoped="scoped">
.app
  font-size 24px
.red
  color red
.teal
  color teal
</style>
