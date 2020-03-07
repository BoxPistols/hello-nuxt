<template>
<div id="">

　<div class="fx">
    <ul>
      <li v-for="item in myArray" v-bind:key="item.index">{{ item }}</li>
    </ul>

    <ul>
      <li v-for="item in myJP" v-bind:key="item.index">{{ item }}</li>
    </ul>
  </div>

  <input type="text" v-model="myPush">

  <button @click="sortData(myArray)">Sort</button>
  <button @click="sortDataRV(myArray)">SortRV</button>
  <button @click="pushData()">pushData</button>

  <p>{{ res }}</p>
</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    myArray: ['one', 'two', 'one', 'three', 'four'],
    myJP: ['いち', 'に', 'さん', 'に', 'よん'],
    myPush: '追加',
  }),
  methods: {
    sortData: function(listData) {
      listData.sort(function(a, b) {
        return (a < b ? -1 : 1)
      })
    },
    sortDataRV: function(listData) {
      listData.sort(function(a, b) {
        return (a > b ? -1 : 1)
      })
    },
    pushData: function() {
      this.myArray.push(this.myPush)
    },
  },
  computed: {
    res() {
      return this.myPush
    }
  }
}
</script>
<style lang="scss" scoped>
li {
    border: 1px solid #eee;
    list-style-type: none;
    max-width: 20vw;
    min-width: 120px;
    padding: 12px;
    margin: 4px;
    text-align: center;
}

button {
    font-size: 18px;
    margin: 8px auto;
    padding: 4px 16px;
    background: none;
    border-color: teal;
    border-radius: 4px;
}
.fx{
  display: flex;
  justify-content: start;
}
</style>
