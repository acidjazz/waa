<template lang="pug">
#DataPage
  .datapage_web
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
      .chart
        SingleLineChart(type='line',data='popgrowth',id='popgrowth',theme="cyan",width=400,height=300)
        .copys
          .copy Population Growth
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna .  Lorem ipsum dolor sit amet, 
      .chart
        SingleLineChart(type='line',data='rvogrowth',id='rvogrowth',theme="lime",width=400,height=300)
        .copys
          .copy Renter vs Owner Growth
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna .  Lorem ipsum dolor sit amet, 
      .chart
        SingleLineChart(type='line',data='ahgrowth',id='ahgrowth',theme="orange",width=400,height=300)
        .copys
          .copy Apartment Household Growth
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna .  Lorem ipsum dolor sit amet, 
      .clear

    .section.section_chart
      .top
        .part.part_homes
          .value 5,000,000
          .copy Apartment Homes Needed.
        .part.part_numbers
          .graph
            i.fa.fa-2x.fa-bar-chart
          .copy 2017 Numbers
          .value 22,000
        .part.part_numbers
          .graph
            i.fa.fa-2x.fa-bar-chart
          .copy 2017 Numbers
          .value 15,550
      .left
        .copy We need to build more
        .copy The country will need to build an average of 324,000 new apartment homes each year to keep up with demand. The industry average just 244,000 completions from 2011-2016.
        .legend
          .dot
            .value
            .copy current rate text
          .clear
          .dot
            .value
            .copy needed rate text
      .chart
        MultiLineChart(type='line',data='aptsneeded',id='aptsneeded',theme="red",width=830,height=300)
      .clear
    .clear
    .border.big
    DemandAndSupply
    .border.big
    MultipleItems
    .border.big
  .datapage_print
    .source Source Aavailable @ http://waa.256.io{{ path }}
    .section.section_demand
      p {{ this.choice().value }}
      p New research shows that demand for apartments is on the rise.  Whether it's young professionals, couples, families or empty nesters, 
        b the country will add 
          i 4.6 million 
          | new apartment households 
          i by 2030

    .section.section_charts
      .chart
        SingleLineChart(type='line',data='popgrowth',id='popgrowth_print',theme="cyan",width=400,height=300)
        .copys
          .copy Growing Apartment Demand
          .copy Population growth and a higher propensity to rent will create a need for more apartments by 2030. 
      .chart
        SingleLineChart(type='line',data='rvogrowth',id='rvogrowth_print',theme="lime",width=400,height=300)
        .copys
          .copy More People
          .copy As our population grows, this puts strain on the existing housing supply. A variety of housing options will be needed to meet diverse needs. 
      .chart
        SingleLineChart(type='line',data='ahgrowth',id='ahgrowth_print',theme="orange",width=400,height=300)
        .copys
          .copy More Renters
          .copy An aging population, international immigration and fewer home purchases are increasing the need for apartments. 
    .clear

    .section.section_chart
      .left
        CircleChart(id="renters_print",width="255",height="255",value="70")
      .right
        MultiLineChart(type='line',data='aptsneeded',id='aptsneeded_print',theme="red",width=510,height=300)
      .clear
      .copys.copyLeft
        .copy Renting on the Rise
        .copy Many people in your district call apartments home. They  appreciate mortgage-free living, the ability to follow new work opportunities and amenities that fit their lifestyles.
      .copys.copyRight
        .copy We Need to Buld More
        .copy Apartment demand is growing and the industry needs to keep up. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions.

</template>

<script>
import filtermixin from '~plugins/filter-mixin.js'

import Top from '~/components/Top.vue'
import SingleLineChart from '~/components/SingleLineChart.vue'
import MultiLineChart from '~/components/MultiLineChart.vue'
import DataFilters from '~/components/DataFilters.vue'
import DataSummary from '~/components/DataSummary.vue'
import DemandAndSupply from '~/components/DemandAndSupply.vue'
import MultipleItems from '~/components/MultipleItems.vue'

import CircleChart from '~/components/CircleChart.vue'

export default {
  mixins: [ filtermixin ],
  components: {
    Top,
    DataFilters,
    DataSummary,
    SingleLineChart,
    MultiLineChart,
    DemandAndSupply,
    MultipleItems,
    CircleChart,
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
      path: this.$route.path,
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
  .datapage_print
    overflow hidden
    height 1px
    > .source
      text-align right
      color grey
      padding 6px
    > .section_demand
      text-align center
      > p:first-child
        font h1
      > p:nth-child(2)
        color grey
        max-width 490px
        margin auto
        > b
          color black
          > i
            color red
    > .section_charts
      width 765px
      margin auto
      > .chart
        float left
        width 33%
        margin-right 0px
        &:nth-child(3)
          margin-right 0px
        > .copys
          margin 20px 5px 0 5px
          > .copy:first-child
            font c2
            padding 0 0 10px 0
          > .copy:nth-child(2)
            color grey
    > .section_chart
      width 765px
      margin auto
      > .left
        float left
        width 255px
        height 290px
        border 1px solid lightgrey
        border-radius 3px
      > .right
        float right
        width 500px
        height 290px
        border 1px solid lightgrey
        border-radius 3px
      > .copyLeft
        float left
        width 255px
      > .copyRight
        float right
        width 500px
      > .copys
        margin 20px 0 0 0
        > .copy:nth-child(1)
          font c2
        > .copy:nth-child(2)
          padding 10px 0 0 0
          color grey
          margin 0 10px 0 0

  .datapage_web
    visibility visible
    // display none
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
      width 1260px
      margin auto
      > .chart
        float left
        width 400px
        margin-right 30px
        &:nth-child(3)
          margin-right 0px
        > .copys
          margin 20px 0 0 0
          > .copy:first-child
            font c2
            padding 0 0 10px 0
          > .copy:nth-child(2)
            color grey
    > .section_chart
      margin 60px auto 200px auto
      width 1260px
      > .top
        > .part
          float right
          width 260px
          &.part_homes
            text-align right
            > .value
              font h2
            > .copy
              color grey
          &.part_numbers
            > .graph
              float left
              margin 10px 10px 0 0
              > i
                color rgba(red, 0.5)
            > .copy
              margin 10px 0 0 20px
              color grey
              line-height 10px
            > .value
              margin 0 0 0 20px
            &:nth-child(2) > .graph > i
              color rgba(red, 1)
      > .left
        float left
        width 300px
        > .copy:first-child
          font h2
        > .copy:nth-child(2)
          color grey
          padding 30px 0 0 0
        > .legend
          padding 30px 0 0 0
          font c1s
          > .dot
            > .value
              float left
              width 10px
              height 10px
              border-radius 50%
              background-color red
              margin 5px 0 0 0
            > .copy
              float left
              text-transform uppercase
              margin 0 0 0 10px
        > .legend > .dot:first-child > .value
          background-color rgba(red, 0.5)
      > .chart
        float right
        width 830px
        margin 0 0 0 30px

@media print
  .datapage_web
    display none
  .datapage_print
    visibility visible
    overflow visible
    height auto !important

</style>
