<template>
<div id="">
  <section id="warikan">
    <h1>Warikan Calc</h1>
    <table>
      <tr>
        <th>Total</th>
        <th>Total</th>
        <th>Peoples</th>
        <th>Yen</th>
      </tr>
      <tr>
        <td>
          <label><input v-model.number="totalPrice" type="number"></label></td>
        <td>
          <label>
            <select v-model="totalPrice2">
              <option v-for="option in options2" :value="option.value" :key="option.value">
                {{ option.text }}
              </option>
            </select>
            <!-- <span>Selected: {{ people }}</span> -->
          </label>
        </td>
        <td>

          <label>
            <select v-model="people">
              <option v-for="option in options" v-bind:value="option.value" :key="option.value">
                {{ option.text }}
              </option>
            </select>
            <!-- <span>Selected: {{ people }}</span> -->
          </label>

        </td>
        <td>{{ totalPrice + totalPrice2 }} </td>
      </tr>
      <tr>
        <td>
          <label><input v-model.number="totalPrice3" type="number"></label></td>
        <td>
          <label><input v-model.number="totalPrice4" type="number"></label>
        </td>
        <td>
          <label><input v-model.number="people2" type="number"></label>
        </td>
        <td>{{ totalPrice3 + totalPrice4 }} </td>
      </tr>
      <tr>
        <td></td>
        <td></td>
        <td>{{ people + people2 }}</td>
        <td>{{ totalPrice + totalPrice2 + totalPrice3 + totalPrice4}}</td>
      </tr>

    </table>
    <p>Pay of one People</p>
    <p class="unitPrice">{{ unitPrice }} <span>Yen</span></p>
    <p class="unitPrice">Add Tax： {{ unitPrice2 }} <span>Yen</span></p>
  </section>
</div>
</template>

<script>
export default {
  name: "",
  data: () => ({
    totalPrice: 3000,
    totalPrice2: 2000,
    options2: [{
        text: 'low',
        value: 1000
      },
      {
        text: 'mid',
        value: 2000
      },
      {
        text: 'hi',
        value: 3000
      }
    ],
    totalPrice3: 1000,
    totalPrice4: 1000,
    people2: 1,
    people: 1,
    options: [{
        text: '1',
        value: 1
      },
      {
        text: '2',
        value: 2
      },
      {
        text: '3',
        value: 3
      }
    ],
  }),
  computed: {
    totals: function(){

    },
    unitPrice: function() {
      let totalP =
        (this.totalPrice +
          this.totalPrice2 +
          this.totalPrice3 +
          this.totalPrice4) /
        (this.people + this.people2);
      return Math.ceil(totalP);
    },
    unitPrice2: function() {
      let totalP =
        (this.totalPrice +
          this.totalPrice2 +
          this.totalPrice3 +
          this.totalPrice4) /
        (this.people + this.people2);
      return Math.floor(totalP * 1.1);
    },
  },
}
</script>

<style lang="scss" scoped>
#warikan {
    width: 90%;
    margin: 20px auto;
    max-width: 500px;
    border: 1px solid #eee;
    padding: 0 20px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
}

h1 {
    text-align: center;
    font-size: 30px;
    margin: 24px;
}

input {
    padding: 10px;
    margin: 5px 0.5em;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.unitPrice {
    padding: 10px;
    border-bottom: 1px solid #ccc;
    font-size: 1.5em;
    text-align: right;
    margin: 0 0 20px;
}

.unitPrice span {
    font-size: 15px;
}

table {
    border-spacing: 0;
    color: #555;
    th {
        font-weight: normal;
        text-align: left;
        padding-left: 0.2em;
    }
    td {
        border-spacing: 0;
        border: 1px solid #ccc;
        min-width: 40px;
        min-width: 30px;
        padding: 4px 8px;
        text-align: center;
        input {
            max-width: 60px;
            border: 1px solid #f9f9f9;
            margin: 0;
            font-size: 1em;
            padding: 4px;
            line-height: 1.3;
            text-align: center;
            color: #555;
        }
        select {
            width: 100%;
            height: 32px;
            border: 1px solid #eee;
            font-size: 1em;
            color: #555;
            /* padding: 24px; */
        }
    }
}
</style>
