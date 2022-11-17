<template>
  <div>
    <canvas id="LineChart" ref="LineChart"></canvas>
  </div>
</template>

<script>
import { Chart, registerables} from 'chart.js'
Chart.register(...registerables)

export default {
  mounted() {
    // let ctx = document.getElementById('LineChart')
    let ctx = this.$refs.LineChart.getContext('2d')
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [{
                label: 'My First dataset',
                backgroundColor: 'rgb(255, 99, 132)',
                borderColor: 'rgb(255, 99, 132)',
                data: [0, 10, 5, 2, 20, 30, 45],
            }]
        },
        options: {}
    })
  }
}
</script>

<style>

</style>