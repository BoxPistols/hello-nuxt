<template>
<div id="todo2">
  <h2>ToDo2</h2>
  <p>{{ remaining }}件 / {{ todos.length }}</p>
  <ul>
    <li v-for="(todo, index) in todos" v-bind:key="todo.index">
      <span><input type="checkbox" v-model="todo.isDone"></span>
      <span :class="{done: todo.isDone}">{{ todo.title }}</span>
      <span :class="{}">  | {{ todo.sub }}</span>
      <span @click="deleteItem(index)">[ x ]</span>
    </li>
    <li v-show="!todos.length">Nothig to do</li>
  </ul>

  <form class="" @submit.prevent="addItem">
    newItem<input type="text" v-model="newItem">
    newItem2<input type="text" v-model="newItem2">
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
    newItem2: '',
    todos: [{
        title: 'taks1',
        sub: 'xxtaks1',
        isDone: false,
        isDay: true
      },
      {
        title: 'taks2',
        sub: 'xxtaks2',
        isDone: true,
        isDay: true
      },
      {
        title: 'taks3',
        sub: 'xxtaks3',
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
      var item2 = {
        sub: this.newItem2,
        isDone: false
      };
      this.todos.push(item, item2);
      this.newItem = '';
      this.newItem2 = '';
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
li, form{
  display: flex;
}
#todo2 {
    padding: 4px;
    font-size: 16px;
}
</style>
