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
</template>

<script>
import Top from '~/components/Top.vue'
import DataFilters from '~/components/DataFilters.vue'
import DataSummary from '~/components/DataSummary.vue'
export default {
  props: {
    state: {
      type: String,
      default: 'National'
    },
    metro: {
      type: String,
      default: 'None'
    },
    district: {
      type: String,
      default: 'None'
    }
  },
  components: {
    Top,
    DataFilters,
    DataSummary
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

</style>
