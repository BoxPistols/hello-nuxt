<template>
<div id="todo2">
  <h2>ToDo2</h2>
  <p>{{ remaining }}件 / {{ todos.length }}</p>
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
    todos: [
      { title: 'taks1', isDone: false, isDay: true },
      { title: 'taks2', isDone: true, isDay: true },
      { title: 'taks3', isDone: false, isDay: false },
    ],
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
