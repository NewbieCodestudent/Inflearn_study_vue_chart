<template>
  <div>
    <h1>Chart.js</h1>
    <form action="">
      <select @change="SelectBox($event)" v-model="selected" name="select">
        <option selected hidden value="">지역</option>
        <option value="test1">test1</option>
        <option value="test2">test2</option>
        <option value="test3">test3</option>
      </select>
      <input name="checkbox" type="checkbox" v-model="checked" v-on:click="CheckBox" value="test1">
      <input name="checkbox" type="checkbox" v-model="checked" v-on:click="CheckBox" value="test2">
      <input name="checkbox" type="checkbox" v-model="checked" v-on:click="CheckBox" value="test3">
      <input type="submit">
    </form>
    <bar-chart v-bind:propsdata="ChartDataSet"></bar-chart>
    <line-chart></line-chart>
  </div>
</template>

<script>
import BarChart from './components/BarChart.vue'
import LineChart from './components/LineChart.vue'

export default {
  components: {
    BarChart,
    LineChart
  },
  methods: {
    SelectBox (event) {
      console.log(event.target.value);
    },
    CheckBox (event) {
      console.log(event.target.value);
      console.log(this.checked);
    }
  },
  data() {
    return {
      selected: '',
      checked: [],
      ChartDataSet: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
    }
  },
  created() {
    // 데이터를 불러오고 하는 함수를 상위에
    // component는 데이터를 받는 것만 할 수 있도록 구조화한다.
    // axios.get('charts/lin/1')
    // .then(response => this.chartDataSet = response.data)
    // .catch(error => console.log(error))
  }
}
</script>

<style>

</style>
