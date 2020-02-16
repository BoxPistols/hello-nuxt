<template>
  <div id="todo">
    <h2>ToDo List</h2>
    <form class="" v-on:submit.prevent>
      <input type="text" v-model="newItem">
      <button v-on:click="addItem">Add item</button>
    </form>
    <!-- <pre>{{ $data }}</pre> -->
    <ul>
      <li v-for="todo in todos" v-bind:key="todo">{{ todo.item }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    newItem: '',
    todos: [],
  }),
  methods: {
    addItem: function(e){
      if(this.newItem == '') return
      let todo = {
        item: this.newItem // input Content
      }
      this.todos.push(todo)
      this.newItem = ''
    }
  }

}
</script>
<style lang="scss" scoped>
#todo{
  padding: 20px;
}
</style>
