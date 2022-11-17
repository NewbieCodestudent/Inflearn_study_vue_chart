<template>
  <div>
    <canvas ref="BarChart" id="BarChart" width="400" height="400"></canvas>
  </div>
</template>

<script>
// chart.js 3.5.1 버전으로 vue_cli 3버전 이상에서 지원하지 않아
// registerables를 이용해서 작성해야 한다.
import { Chart, registerables} from 'chart.js'
Chart.register(...registerables)
export default {
  props: ['propsdata'],
  mounted() {
    // let ctx = document.getElementById('BarChart')
    // refs 속성으로 접근하기
    let ctx = this.$refs.BarChart
    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: this.propsdata
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    })
  }
}
</script>

<style>

</style>