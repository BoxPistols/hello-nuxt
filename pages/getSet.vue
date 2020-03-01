<template>
  <div id="">

    <p>basePrice <input type="number" v-model="basePrice"></p>
    <p><br></p>
    <p>Tax in <input type="number" v-model="taxInPrice"></p>

    <table v-for="item in items">
      <li>{{ item.itemA.name }} / {{ item.itemA.price }}</li>
      <li>{{ item.itemB.name }} / {{ item.itemB.price }}</li>
    </table>

    <p>{{ itemTotalPrice }}</p>

  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    basePrice: 100,
    items: [{
       itemA:{name: "itemA", price: 1000},
       itemB:{name: "itemB", price: 2000},
    }],
    itemPrice: 0,
  }),
  computed:{
    taxInPrice: {
      get: function(){
        return parseInt(this.basePrice * 1.08)
      },
      set: function(taxInPrice){
        this.basePrice = Math.ceil(taxInPrice / 1.08)
      },
    },
    // TODO
    // itemTotalPrice: {
    //   get: function(){
    //     return parseInt(this.items.itemA.price + this.items.itemB.price)
    //   },
    //   set: function(itemTotalPrice){
    //     this.itemPrice = Math.ceil(this.itemPrice)
    //   },
    // },
  },

}
</script>
<style lang="sass" scoped>
</style>
