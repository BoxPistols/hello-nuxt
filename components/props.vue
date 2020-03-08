<template>
  <div id="">
    <p>Prop</p>
    <p>pen: {{ price.pen }}</p>
    <p>eraser: {{ price.eraser }}</p>
    <p>scissor: {{ price.scissor }}</p>
  </div>
</template>
<script>
export default {
  name: "",
  props: {
    price: Object
  },
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
