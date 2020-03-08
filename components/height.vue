<template>
  <div id="">
    現在：{{ height }} / 昨年：{{ oldHeight }} 　差：( {{ height - oldHeight }} )
  </div>
</template>
<script>
export default {
  name: "",

  props: {
    height: Number,
    oldHeight: Number,
  },

  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
