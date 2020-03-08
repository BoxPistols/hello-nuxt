<template>
<div>
  <div :class="color">
    現在：{{ height }} / 昨年：{{ oldHeight }} 　差：( {{ height - oldHeight }} )
  </div>

</div>
</template>
<script>
export default {
  name: "",

  props: {
    height: Number,
    oldHeight: Number,
  },
  computed: {
    color() {
      const height = this.height
      if (height < 170) {
        return 'red'
      }
      return 'teal'
    }
  },

  data: () => ({

  })
}
</script>
<style lang="sass" scoped>
.red
  background: rgba(215, 55, 12, 0.35)
.teal
  background: rgba(25, 193, 107, 0.31)
</style>
