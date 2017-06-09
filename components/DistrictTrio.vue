<template lang="pug">

.district_charts
  .dchart
    .inner
      .title in your district
      CircleChart(:id="'district_' + this.type",:width="(this.type === 'print') ? 200 : 255",:height="(this.type === 'print') ? 200 : 255",value="80")
      .copy Of your district residents call an apartment home
    .copys
      .copy Renting on the rise
      .copy Many people in your district call apartments home.  They appreciate mortgage-free living, the ability to follow new work opportunities and amenities that fit their lifestyles.
  .dchart
    .inner
      .title year apartment built
      PercChart
    .copys
      .copy Supply at risk
      .copy The nation's apartment stock is aging, with a majority built before 1980.  Without resources to support rehabilitation and preservation efforts, the current supply-demand imabalance will worsen, affecting affordability.
  .dchart
    .inner
      .title in your state
      SingleLineChart(type='line',data='buildmore',:id="'buildmore_' + this.type",theme="lime",:width="(this.type === 'print') ? 200 : 300",:height="(this.type === 'print') ? 200 : 300",animation=false)
    .copys
      .copy We Need to Build More
      .copy Apartment demand is growing and the industry needs to keep up.  However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions.
  .clear

</template>

<script>
import CircleChart from '~components/CircleChart.vue'
import PercChart from '~components/PercChart.vue'
import SingleLineChart from '~components/SingleLineChart.vue'
export default {
  props: [ 'type' ],
  components: { CircleChart, PercChart, SingleLineChart },
  mounted () {
  }
}
</script>

<style lang="stylus">

json('../assets/colors.json')
json('../assets/fonts.json')

.district_charts
  width 1200px
  margin auto
  padding 30px 0
  > .dchart
    float left
    width 33%
    > .inner
      margin 20px
      border 1px solid lightblue
      border-radius 3px
      height 400px
      > .title
        padding 25px 0 0 25px
        text-transform uppercase
        font c1sb
        color darkblue
      > .copy
        color grey
        width 70%
        margin auto
        text-align center
    > .copys
      margin 0 20px
      > .copy:nth-child(1)
        padding 0 0 10px 0
        font h3
      > .copy:nth-child(2)
        color grey

</style>

