<template lang="pug">
#DataPage
  .datapage_web
    Top(type="light")
    .clear
    DataFilters(v-bind:state="this.state",v-bind:metro="this.metro",v-bind:district="this.district")
    DataSummary(v-bind:state="this.state",v-bind:metro="this.metro",v-bind:district="this.district")
    .section.section_demand(v-if="this.choice().type !== 'district'")
      include ../assets/pug/partial/section_demand

    .section.section_district(v-if="this.choice().type === 'district'")
      DistrictCopy(:district="this.choice().value")

    .section.section_trio(v-if="this.choice().type === 'district'")
      DistrictTrio(type="web",:state="this.choice().state",:district="this.choice().value")

    .section.section_charts(v-if="this.choice().type !== 'district'")
      .chart
        SingleLineChart(data='apthhgrowth',id='apthhgrowth',:type="this.choice().type",:value="this.choice().value",theme="orange",width=380,height=300,animation=false)
        .copys
          .copy Apartment Household Growth
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna .  Lorem ipsum dolor sit amet, 
      .chart
        SingleLineChart(data='rentgrowth',id='rentgrowth',:type="this.choice().type",:value="this.choice().value",theme="lime",width=380,height=300,animation=false)
        .copys
          .copy Growth in Rentership
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna .  Lorem ipsum dolor sit amet, 
      .chart
        SingleLineChart(data='popgrowth',id='popgrowth',:type="this.choice().type",:value="this.choice().value",theme="cyan",width=380,height=300,animation=false)
        .copys
          .copy(v-if="this.choice().type === 'state'") Household Growth
          .copy(v-else) Population Growth
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna .  Lorem ipsum dolor sit amet, 
      .clear

    .section.section_chart(v-if="this.choice().type !== 'district'")
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
      .left.left_buildmore(v-if="this.choice().type !== 'metro'")
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
      .left.left_inyourcity(v-if="this.choice().type === 'metro'")
        .copy in your city
        HeatChart(:metro="this.choice().value")
        .copy Barriers to New Apartments Index

      .chart
        MultiLineChart(:type="this.choice().type",:value="this.choice().value",data='aptsneeded',id='aptsneeded',theme="red",width=830,height=300)
      .clear

    .clear
    .border.big
    //DemandAndSupply
    //.border.big
    MultipleItems(v-if="this.choice().type === 'national'")
    .border.big(v-if="this.choice().type === 'national'")
    SingleItem(v-if="this.choice().type === 'national'")
    .border.big(v-if="this.choice().type === 'national'")
    DualItems(v-if="this.choice().type === 'metro'")
    .border.big(v-if="this.choice().type === 'metro'")
    .section.section_links
      .inner
        .area.left
          .icon.icon-file
          .copy Lorem ipsum dolor sit amet, consetetur sadips 
            span National Data
          a.button download
        .area.right
          .icon.icon-bars
          .copy 
            span About the data 
            | consetetur sadipscing elitr, sed diam nonumy
          a.button learn more
        .clear

    Bottom
  .datapage_print
    .source Learn More @ http://waa.256.io{{ path }}
    .section.section_demand(v-if="this.choice().type !== 'district'")
      p {{ this.choice().value }}
      p New research shows that demand for apartments is on the rise.  Whether it's young professionals, couples, families or empty nesters, 
        b the country will add 
          span 4.6 million 
          | new apartment households 
          span by 2030

    .section.section_district_name(v-if="this.choice().type === 'district'")
      .copy {{ this.choice().value }}
      .copy Apartments bring dolalrs and jobs that stay close to home
    DataSummary(v-bind:state="this.state",v-bind:metro="this.metro",v-bind:district="this.district",v-if="this.choice().type === 'district'")
    .section.section_district(v-if="this.choice().type === 'district'")
      DistrictCopy(:district="this.choice().value")

    .section.section_trio(v-if="this.choice().type === 'district'")
      DistrictTrio(type="print",:state="this.choice().state",:district="this.choice().value")

    .section.section_charts(v-if="this.choice().type !== 'district'")
      .chart
        SingleLineChart(data='popgrowth',id='popgrowth_print',:type="this.choice().type",:value="this.choice().value",theme="cyan",width=400,height=300)
        .copys
          .copy Growing Apartment Demand
          .copy Population growth and a higher propensity to rent will create a need for more apartments by 2030. 
      .chart
        SingleLineChart(data='rvogrowth',id='rvogrowth_print',:type="this.choice().type",:value="this.choice().value",theme="lime",width=400,height=300)
        .copys
          .copy More People
          .copy As our population grows, this puts strain on the existing housing supply. A variety of housing options will be needed to meet diverse needs. 
      .chart
        SingleLineChart(data='ahgrowth',id='ahgrowth_print',:type="this.choice().type",:value="this.choice().value",theme="orange",width=400,height=300)
        .copys
          .copy More Renters
          .copy An aging population, international immigration and fewer home purchases are increasing the need for apartments. 
    .clear

    .section.section_chart(v-if="this.choice().type !== 'district'")
      .left(v-if="this.choice().type !== 'metro'")
        CircleChart(id="renters_print",width="225",height="225",value="70")
      .left(v-else)
        HeatChart(:metro="this.choice().value")
      .right
        MultiLineChart(:type="this.choice().type",:value="this.choice().value",data='aptsneeded',id='aptsneeded_print',theme="red",width=510,height=225)
      .clear

      .copys.copyLeft
        .copy Renting on the Rise
        .copy Many people in your district call apartments home. They  appreciate mortgage-free living, the ability to follow new work opportunities and amenities that fit their lifestyles.
      .copys.copyRight
        .copy We Need to Buld More
        .copy Apartment demand is growing and the industry needs to keep up. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions.

    .clear
    DataSummary(v-bind:state="this.state",v-bind:metro="this.metro",v-bind:district="this.district",v-if="this.choice().type !== 'district'")

</template>

<script>
import filtermixin from '~plugins/filter-mixin.js'

import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'
import SingleLineChart from '~/components/SingleLineChart.vue'
import MultiLineChart from '~/components/MultiLineChart.vue'
import DataFilters from '~/components/DataFilters.vue'
import DataSummary from '~/components/DataSummary.vue'
import DistrictCopy from '~/components/DistrictCopy.vue'
import DistrictTrio from '~/components/DistrictTrio.vue'
// import DemandAupply from '~/components/DemandAndSupply.vue'
import MultipleItems from '~/components/MultipleItems.vue'
import DualItems from '~/components/DualItems.vue'
import SingleItem from '~/components/SingleItem.vue'

import CircleChart from '~/components/CircleChart.vue'
import HeatChart from '~/components/HeatChart.vue'

export default {
  mixins: [ filtermixin ],
  components: {
    Top,
    Bottom,
    DataFilters,
    DataSummary,
    DistrictCopy,
    DistrictTrio,
    SingleLineChart,
    MultiLineChart,
    // DemandAndSupply,
    MultipleItems,
    DualItems,
    SingleItem,
    CircleChart,
    HeatChart,
  },

  methods: {
    populate () {
      this.path = this.$route.path
      this.metro = this.formatParam('metro', this.$route.params.metro)
      this.state = this.formatParam('state', this.$route.params.state)
      this.district = this.formatParam('district', this.$route.params.district)
    }
  },
  created () {
    this.populate()
  },
  data () {
    return {
      path: false,
      metro: false,
      state: false,
      district: false
    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#DataPage
  > .datapage_web, > .datapage_print
    > .section_district
      > .DistrictCopy
        > .inner
          padding 30px 0
          > .copy:first-child
            text-align center
            text-transform uppercase
            padding 0 0 30px 0
            font c1sb
            color darkblue
          > .copy:nth-child(2)
            color grey
            text-align center
            width 300px
            margin auto
            padding 0 0 30px 0
        > .pointers
          width 1200px
          margin auto
          > .pointer
            width 33.3333%
            float left
            > .icon
              float left
              width 30px
              height 30px
              background-size contain
              &.icon-residents
                background-image url('~static/icon-residents.png')
                height 20px
              &.icon-operation
                background-image url('~static/icon-operations.png')
              &.icon-graph
                background-image url('~static/icon-graph.png')
            > .copy
              margin 0 10px 0 40px
            > .copy:nth-child(2)
              font h3
              padding 0 0 10px 0
            > .copy:nth-child(3)
              font c1
              color grey



  .datapage_print
    overflow hidden
    height 1px
    > #DataSummary
      background none
      color black
      > .inner
        position relative
        background none
        background-color white
        padding 10px 0
        > .copy:first-child, > .copy:nth-child(2)
          display none
        > .copy_print
          display block
          margin 0 0 -14px 0
          background-color white
          text-transform uppercase
          padding 0 10px
          position absolute
          top 0px
          left 50%
          width 200px
          margin-left -100px
          font c1sb
          color darkblue
        > .stats
          border-top 1px solid lightblue
          width 765px
          margin auto
          padding-top 10px
          > .stat
            padding 20px
            max-width 150px
            &:first-child, &:nth-child(2), &:nth-child(3)
              border-right 1px solid lightblue
            > .value
              padding 0 0 10px 0
              color purple
            > .copy
              font c1s
    > .source
      text-align right
      color grey
      padding 6px
      font c1s
    > .section_demand
      text-align center
      > p:first-child
        font h1
        line-height 2px
      > p:nth-child(2)
        color grey
        max-width 490px
        margin auto
        > b
          color black
          > span
            color red

    > .section_district
      > .DistrictCopy
        > .inner
          padding 10px 0
          > .copy:first-child
            padding 0 0 10px 0
        > .pointers
          width 765px

    > .section_trio
      > .district_charts
        padding 10px 0
        > .dchart > .inner
          > .circle-chart
            > .value
              margin-top -25px
          > .copy:nth-child(3)
            display none
          > .copy:nth-child(4)
            margin -20px auto 0 auto


    > .section_district_name
      text-align center
      > .copy:first-child
        font h1
      > .copy:nth-child(2)
        color grey
        padding 30px 0
    > .section_trio
      > .district_charts
        width 765px
        > .dchart
           > .copys
            display none
           > .inner
             margin 3px
             height 300px
             > .copy
               margin -20px auto 0 auto
               width 90%
             > #percs
               > .perc
                 > .progress
                   margin 5px 0
           > .copys
             margin 0 3px
           

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
          margin 0px 5px 0 5px
          > .copy:first-child
            font c1
            padding 0 0 10px 0
          > .copy:nth-child(2)
            color grey
            font c1s
    > .section_chart
      width 765px
      margin auto
      > .left
        float left
        width 255px
        height 225px
        border 1px solid lightgrey
        border-radius 3px
        > .HeatChart
          > .legend
            margin-top -30px
      > .right
        float right
        width 500px
        height 225px
        border 1px solid lightgrey
        border-radius 3px
      > .copyLeft
        float left
        width 255px
      > .copyRight
        float right
        width 500px
      > .copys
        margin 10px 0 0 0
        > .copy:nth-child(1)
          font c1
        > .copy:nth-child(2)
          font c1s
          padding 5px 0 0 0
          color grey
          margin 0 5px 0 0

  .datapage_web
    visibility visible
    // display none
    > .section_demand
      border-top 30px solid offwhite
      padding 60px 0
      text-align center
      > p:first-child
        font h1
      > p:nth-child(2)
        color grey
        max-width 490px
        margin auto
        > b
          color black
          > span
            color red
    > .section_charts
      width 1200px
      margin auto
      > .chart
        float left
        width 380px
        margin-right 30px
        &:nth-child(3)
          margin-right 0px
        > .copys
          margin 20px 0 0 0
          > .copy:first-child
            font h3
            padding 0 0 10px 0
          > .copy:nth-child(2)
            color grey
    > .section_chart
      margin 60px auto auto
      width 1200px
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
        &.left_buildmore
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
        &.left_inyourcity
          height 340px
          border 1px solid lightgrey
          border-radius 3px
          > .copy:first-child
            color darkblue
            font c1sb
            text-transform uppercase
            padding 25px 0 0 25px
          > .copy:last-child
            text-align center
            color grey
      > .mbottom
        width 1200px
        padding 0 0 30px 0
        > .copys.copyLeft
          float left
          width 300px
        > .copys.copyRight
          float right
          width 830px
          margin 0 0 0 30px
        > .copys
          > .copy:first-child
            font h3
            padding 0 0 10px 0
          > .copy:nth-child(2)
            color grey

      > .chart
        float right
        width 830px
        margin 0 0 0 30px
    > .section_links
      > .inner
        padding 60px 0
        width 831px
        margin auto
        text-align center
        > .area
          float left
          width 400px
          &:nth-child(1)
            margin-right 30px
            border-right 1px solid lightgrey
          > .icon
            width 50px
            height 50px
            background-position contain
            margin auto
            &.icon-file
              background-image url('~static/icon-file.png')
            &.icon-bars
              background-image url('~static/icon-bars.png')
          > .copy
            width 260px
            margin auto
            padding 30px 0
            color grey
            > span
              color black

          > .button
            display inline-block
            padding 10px 30px
            text-transform uppercase
            border-radius 3px
          &:nth-child(1) > .button
            border 1px solid blue
            background-color blue
            color white
          &:nth-child(2) > .button
            border 1px solid lightblue
            color black

@media print
  .datapage_web
    display none
  .datapage_print
    visibility visible
    overflow visible
    height auto !important

</style>
