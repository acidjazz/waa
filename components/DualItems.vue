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
          .copy Supply at Risk
          .copy The nation's apartment stock is aging, with a majority built before 1980. Without resources to support rehabilitation and preservation efforts, the current supply-demand imbalance will worsen, affecting affordability.
      .area.right
        .box
          .copy year apartment built
          PercChart
        .copys
          .copy We Need to build More
          .copy Many people in your district call apartments home. They appreciate mortgage-free living, the ability to follow new work opportunities and amenities that fit their lifestyles.
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
      > .box > .circle-chart > .value
        margin-top -40px
    > .area.right
      float right
    > .area
      > .box
        padding 20px
        border 1px solid lightgrey
        border-radius 3px
        width 300px
        height 400px
        > .copy:first-child
          font c1sb
          color darkblue
          text-transform uppercase
        > .copy:nth-child(3)
          width 100px
          margin -140px auto 0 auto
          color grey
          text-align center
          line-height 22px
        > .copy:nth-child(4)
          color grey
          text-align center
          margin 80px auto 0 auto
      > .copys
        width 300px
        > .copy:nth-child(1)
          padding 20px 0 0 0
          font h3
        > .copy:nth-child(2)
          color grey
          padding 10px 0 0 0

</style>
