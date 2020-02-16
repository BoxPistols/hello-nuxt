<template>
<div id="">
  <ul>
    <li v-for="item in items" v-bind:key="item.name">
      {{item.name}}の個数: <input type="number" v-model="item.quantity" min="0">
    </li>
  </ul>
  <hr>
  <div v-bind:style="errorMessageStyle">
    <ul>
      <li v-for="item in items" v-bind:key="item.name">
        {{item.name}}: {{item.price}} × {{item.quantity}} ={{item.price * item.quantity | numberWithDelimiter}}円
      </li>
    </ul>
    <p>{{items[0].name}}: {{items[0].price}} × {{items[0].quantity}}</p>
    <p>小計: {{totalPrice | numberWithDelimiter}}円</p>
    <p>合計(税込): {{totalPriceWithTax | numberWithDelimiter}}円</p>
    <p v-show="!canBuy">
      {{1000 | numberWithDelimiter}}円以上からご購入いただけます
    </p>
    <button v-bind:disabled="!canBuy" v-on:click="doBuy">購入</button>
  </div>
</div>
</template>

<script>
var items = [{
    name: "鉛筆",
    price: 100,
    quantity: 2
  },
  {
    name: "消しゴム",
    price: 80,
    quantity: 2
  },
  {
    name: 'ノート',
    price: 100,
    quantity: 1
  }
]
export default {
  name: "",
  data: () => ({
    items: items,
    arr: ['い', 'ろ', 'は']
  }),
  filters: {
    numberWithDelimiter: function(value) {
      if (!value) {
        return '0'
      }
      return value.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,')
    }
  },
  methods: {
    doBuy: function() {
      //本来はここでサーバーと通信を行う
      alert(this.totalPriceWithTax + '円のお買い上げ！')
      this.items.forEach(function(item) {
        item.quantity = 0
      })
    }
  },
  computed: {
    totalPrice: function() {
      return this.items.reduce(function(sum, item) {
        return sum + (item.price * item.quantity)
      }, 0)
    },
    totalPriceWithTax: function() {
      return Math.floor(this.totalPrice * 1.08)
    },
    canBuy: function() {
      return this.totalPrice >= 1000
    },
    errorMessageClass: function() {
      return {
        error: !this.canBuy
      }
    },
    errorMessageStyle: function() {
      return {
        border: this.canBuy ? '' : '1px solid red',
        color: this.canBuy ? '' : 'red'
      }
    }
  }
}
</script>
<style lang="sass" scoped>
body
  padding: 24px
</style>
