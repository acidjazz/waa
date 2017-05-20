
<template lang="pug">
.page.data
  BarChart(type="bar")
  BarChart(type="line")
</template>

<script>
import BarChart from '~components/BarChart.vue'
BarChart
export default {
  components: { BarChart }
}
</script>
