<template>
  <div id="">
    <h2 @click="A">A</h2>
    <h2 @click="superA('argument!!')">superA</h2>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({

  }),
  methods: {
    A:　function(){
      alert("A")
    },
    superA(v){
      alert(v)
    },
  },
}
</script>
<style lang="scss" scoped>
</style>
