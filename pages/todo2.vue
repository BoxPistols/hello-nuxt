<template>
<div id="todo2">
  <h2>ToDo2</h2>

  <ul v-if="todos.length">
    <li v-for="(todo, index) in todos">
      <span><input type="checkbox" v-model="todo.isDone"></span>
      <span :class="{done: todo.isDone}">{{ todo.title }}</span>
      <span @click="deleteItem(index)">[ x ]</span>
    </li>
  </ul>
  <ul v-else>
    <li>Nothig to do</li>
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
      // { title: 'taks1', isDone: false },
      // { title: 'taks2', isDone: false },
      // { title: 'taks3', isDone: false },
    ],
  }),
  methods: {
    addItem: function() {
      let item = {
        title: this.newItem,
        isDone: false
      }
      this.todos.push(item)
      this.newItem = ''
    },
    deleteItem: function(index) {
      if (confirm("ok?")) {
        this.todos.splice(index, 1)
      }
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
