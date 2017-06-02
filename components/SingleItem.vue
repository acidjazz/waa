<template lang="pug">
#SingleItem
  .inner
    .left
      .copy One item example.
      .copy As supply is unable to keep up with demand, more and more people have to pay higher rent to live.
      .cta Learn more
    .right
      DualLineChart(id="dualLine",width=300,height=200)
    .clear
  .clear
</template>

<script>
import DualLineChart from '~components/DualLineChart.vue'
export default {
  components: { DualLineChart }
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
    > .left
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
    > .right
      float right
      width 300px
</style>
