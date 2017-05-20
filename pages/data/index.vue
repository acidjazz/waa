
<template lang="pug">
.page.data
  .chart
    BarChart(type="bar",testid="bob")
  .chart
    BarChart(type="line",testid="suzy")
</template>

<script>
import BarChart from '~components/BarChart.vue'
export default {
  components: { BarChart }
}
</script>
