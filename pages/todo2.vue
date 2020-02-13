<template>
<div id="todo2">
  <h2>ToDo2</h2>

  <ul>
    <li v-for="todo in todos"> {{ todo }}</li>
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
    todos: ["A", "B", "C"],
  }),
  methods: {
    addItem: function(e) {
      this.todos.push(this.newItem)
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
