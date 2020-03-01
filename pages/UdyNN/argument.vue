<template>
<div id="">
  <!-- <h2 @click="A">A</h2>
  <h2 @click="superA('argument!!')">superA</h2>
  <h3> {{ msg }} </h3> -->

  <br>
  <h2 :class="numClass">{{ num }}</h2>
  <button type="button" @click="add(10)">+1</button>
  <button type="button" @click="add(-10)">-1</button>

</div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    msg: "msg",
    isActive: false,
    num: 0,
  }),
  methods: {
    A: function() {
      alert("A")
    },
    superA(v) {
      // alert(v)
      // this.msg = v
      // this.isActive = !this.isActive
      this.msg = v
    },
    add(val){
      this.num = this.num + val
    }
  },
  computed: {
    numClass(){
      if(this.num > 30 && this.num <= 60){
        return "orange"
      }
      if(this.num > 60){
        return "red"
      }
    }
   },
}
</script>
<style lang="scss" scoped>
.orange{
  color: orange
}
.red{
  color: red
}
</style>
