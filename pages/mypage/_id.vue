<template>
<div id="">
  <section>
    <h1>マイページ</h1>
    <!-- <p>こんにちは、「{{ $route.params.id }}」さん！</p> -->
    <p>こんにちは、「{{ id }}」さん！</p>
    <a href="https://www.i-ryo.com/entry/2019/11/27/062247" target="_blank">参考</a>
  </section>

</div>
</template>

<script>
export default {
  name: "",
  data: () => ({}),
  computed: {
    id: function() {
      // return this.$route.params.id
      let id = this.$route.params.id != undefined ? this.$route.params.id : '仮の名前'
      return id
    }
  }
}
</script>
<style lang="scss" scoped>
section {
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 600px;
    padding: 30px;
    margin: 20px auto;
}
</style>
