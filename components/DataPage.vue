<template lang="pug">
#DataPage
  Top(type="light")
  .clear
  DataFilters(v-bind:state="this.state",v-bind:metro="this.metro",v-bind:district="this.district")
  DataSummary(v-bind:state="this.state",v-bind:metro="this.metro",v-bind:district="this.district")
  .section.section_demand
    p The Demand
    p New research shows that demand for apartments is on the rise.  Whether it's young professionals, couples, families or empty nesters, the country will add 
      b 4.6 million 
      | new apartment households 
      b by 2030

  .section.section_charts
    .chart.chart_populationgrowth
      Chart(type='line',data='popgrowth',id='popgrowth')
      .copys
        .copy Population Growth
        .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna .  Lorem ipsum dolor sit amet, 

</template>

<script>
import Top from '~/components/Top.vue'
import Chart from '~/components/Chart.vue'
import DataFilters from '~/components/DataFilters.vue'
import DataSummary from '~/components/DataSummary.vue'
import filtermixin from '~plugins/filter-mixin.js'

export default {
  mixins: [ filtermixin ],
  components: {
    Top,
    DataFilters,
    DataSummary,
    Chart
  },
  methods: {
    capitalizeFirstLetter (string) {
      return string[0].toUpperCase() + string.slice(1)
    },
    formatParam (type, string) {
      if (string === undefined) return this.$props[type]
      let words = string.split('-')
      for (let index in words) {
        words[index] = this.capitalizeFirstLetter(words[index])
      }
      return words.join(' ')
    }
  },
  data () {
    return {
      metro: this.formatParam('metro', this.$route.params.metro),
      state: this.formatParam('state', this.$route.params.state),
      district: this.formatParam('district', this.$route.params.district)
    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#DataPage
  > .section_demand
    border-top 30px solid offwhite
    padding 120px 0
    text-align center
    > p:first-child
      font h1
    > p:nth-child(2)
      color grey
      max-width 490px
      margin auto
      > b
        color black
  > .section_charts
    width 1200px
    margin auto
    > .chart
      float left
      width 400px
      > .copys
        margin 20px 0 0 0
        > .copy:first-child
          font c2
          padding 0 0 10px 0
        > .copy:nth-child(2)
          color grey


</style>
