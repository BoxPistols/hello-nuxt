<template>
<div id="">
  <h2>{{ teamName }}</h2>
  <ul>
    <li>{{ data.name }}</li>
    <li>{{ data.id }}</li>
    <li>{{ data.position }}</li>
    <li>{{ data.height }}</li>
  </ul>
</div>
</template>
<script>
export default {
  name: "",
  props: {
    data: Object,
    teamName: String,
  }
}
</script>
<style lang="sass" scoped>
  h2
    margin: 28px 0 0 0
    line-height: 1
</style>
