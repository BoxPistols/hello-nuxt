<template>
  <div id="">
    <p>{{ basePrice }}</p>

    <p>basePrice <input type="number" v-model="basePrice"></p>
    <p><br></p>
    <p>Tax in <input type="number" v-model="taxInPrice"></p>

  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    basePrice: 100,
  }),
  computed:{
    taxInPrice: {
      get: function(){
        return this.basePrice * 1.08
      },
      set: function(taxInPrice){
        this.basePrice = taxInPrice / 1.08
      },
    },
  },

}
</script>
<style lang="sass" scoped>
</style>
