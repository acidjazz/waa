<template lang="pug">
#SingleItem
  .inner
    .left.area
      .copy We Need to build More
      .copy Apartment demand is growing and the industry needs to keep up. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions. 
      //.cta Learn more
    .right.area
      // DualLineChart(id="dualLine",width=300,height=200)
      CircleChart(id="rentersb",width="300",height="300")
      .copy Are spending over 30% of income
    .clear
  .clear
</template>

<script>
// import DualLineChart from '~components/DualLineChart.vue'
import CircleChart from '~/components/CircleChart.vue'
export default {
  components: { CircleChart }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#SingleItem
  > .inner
    padding 60px 0
    width 630px
    margin auto
    height 400px
    > .left.area
      float left
      width 300px
      > .copy:nth-child(1)
        font h2
        padding 30px 0 30px 0
      > .copy:nth-child(2)
        color grey
      > .cta
        color blue
        padding 30px 0 0 0
    > .right.area
      float right
      width 300px
      > .copy:nth-child(2)
        color grey
        text-align center
        marign -20px 0 0 0
</style>
