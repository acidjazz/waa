
<template lang="pug">
.page.data
  BarChart(type="bar",id="bob")
  BarChart(type="line",id="suzy")
</template>

<script>
import BarChart from '~components/BarChart.vue'
BarChart
export default {
  components: { BarChart }
}
</script>
