<template lang="pug">
  .DualItems
    .inner
      .area.left
        .box
          .copy apartment renters
          CircleChart(id="metro",width=300,height=300)
          .copy Of Apartment Renters
          .copy Are spending over 20% of income on apartment rental
        .copys
          .copy Text
          .copy Lorem Ipsum
      .area.right
        .box
          .copy year apartment built
          PercChart
        .copys
          .copy Text
          .copy Lorem Ipsum
      .clear
</template>

<script>
import CircleChart from '~components/CircleChart.vue'
import PercChart from '~components/PercChart.vue'
export default {
  components: { CircleChart, PercChart }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
.DualItems
  > .inner
    padding 60px 0
    width 715px
    margin auto
    > .area.left
      float left
      margin-right 30px
    > .area.right
      float right
    > .area
      > .box
        padding 20px
        border 1px solid lightblue
        border-radius 3px
        width 300px
        height 400px
        > .copy:first-child
          font c1sb
          color darkblue
          text-transform uppercase
        > .copy:nth-child(3)
          width 100px
          margin -130px auto 0 auto
          color grey
          text-align center
        > .copy:nth-child(4)
          color grey
          text-align center
          margin 60px auto 0 auto
      > .copys
        > .copy:nth-child(1)
          padding 20px 0 0 0
          font h3
        > .copy:nth-child(2)
          color grey
          padding 10px 0 0 0

</style>
