<template>
<div id="todo2">
  <h2>ToDo2</h2>
  <p>{{ stationary }}　- {{ stationary.length }}</p>
  <p>{{ remaining }}件 / {{ st.length }}</p>

  <ul>
    <li v-for="(i, index) in st">
      {{ i }}
    </li>
  </ul>
  <ul>
    <li v-for="(todo, index) in todos">
      <span><input type="checkbox" v-model="todo.isDone"></span>
      <span :class="{done: todo.isDone}">{{ todo.title }}</span>
      <span @click="deleteItem(index)">[ x ]</span>
    </li>
    <li v-show="!todos.length">Nothig to do</li>
  </ul>

  <form class="" @submit.prevent="addItem">
    <input type="text" v-model="newItem">
    <input type="submit" value="Add">
  </form>

</div>
</template>

<script>
export default {
  data: () => ({
    msg: "hello",
    name: "",
    newItem: '',
    todos: [{
        title: 'taks1',
        isDone: false,
        isDay: true
      },
      {
        title: 'taks2',
        isDone: true,
        isDay: true
      },
      {
        title: 'taks3',
        isDone: false,
        isDay: false
      },
    ],
    st :{
        'pencil': 100,
        'notebook': 80,
        'scissors': 250,
        'sticker': 150
      },
  }),
  methods: {
    addItem: function() {
      var item = {
        title: this.newItem,
        isDone: false
      };
      this.todos.push(item);
      this.newItem = '';
    },
    deleteItem: function(index) {
      if (confirm('are you sure?')) {
        this.todos.splice(index, 1);
      }
    },
  },
  computed: {
    remaining: function() {
      var items = this.todos.filter(function(todo) {
        return !todo.isDone;
      });
      return items.length;
    },
    stationary: function() {
      var stationeries = this.st
      var tools = ['notebook', 'eraser', 'sticker', 'screw', 'paint'];

      var result = tools.filter(function(value, index) {
        for (var stationery in this) {
          // 共通アイテム
          if (stationery === value) return value;

        }
      }, stationeries ) //第2引数にオブジェクトを指定
      return result

    }
  }
}
</script>

<style lang="scss" scoped>
@import "./assets/style.scss";

#todo2 {
    padding: 24px;
    font-size: 18px;
}
</style>
