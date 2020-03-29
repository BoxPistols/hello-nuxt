<template lang="html">
  <div class="app">
  <div class="Count">
    {{ number }}
  </div>

  <button @click="addNum(20)">Add</button>
  <button @click="addNum(-20)">Minus</button>
  </div>
</template>

<script>
  export default {
  data() {
    return {number: 0}
  },
  methods: {
    addNum(value) {
    this.number = this.number + value
    }
  }
  }
</script>

<style lang="stylus" scoped="scoped">

</style>
