<template lang="pug">
.page.page_data
  Top(type="light")
  .charts
    .chart
      BarChart(type="bar",testid="bob")
    .chart
      BarChart(type="line",testid="suzy")
</template>

<script>
import Top from '~/components/Top.vue'
import BarChart from '~components/BarChart.vue'
export default { components: { Top, BarChart } }
</script>

<style lang="stylus">
.page.page_data
  > .charts
    padding-top 60px
    clear both
</style>
