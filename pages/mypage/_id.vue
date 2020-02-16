<template>
<div id="">
  <section>
    <h1>マイページ</h1>
    <!-- <p>こんにちは、「{{ $route.params.id }}」さん！</p> -->
    <p>ここは「{{ id }}」のページ</p>
    <p>こんにちは、「{{ name }}」さん！</p>
    <p>example: /mypage/設定変更?name=山田太郎</p>
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
      // ↓ page path
      let id = this.$route.params.id != undefined ? this.$route.params.id : 'ページ名'
      return id
    },
    name: function() {
      // query param
      let name = this.$route.query.name != undefined ? this.$route.query.name : '仮の名前'
      return name
    },
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
