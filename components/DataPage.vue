<template lang="pug">
#DataPage
  .datapage_web
    Top(type="light")
    .clear
    DataFilters(:state="state",:metro="metro",:district="district")
    DataSummary(:state="state",:metro="metro",:district="district")
    .section.section_demand(v-if="this.choice().type !== 'district'")
      p The Demand
      Demand(:type="this.choice().type",:value="this.choice().value")
      a.pdf(:href="'http://pdf.weareapartments.org?url=' + $route.path")
        .fa.fa-2x.fa-file-pdf-o
        .copy Create PDF

    .section.section_district(v-if="this.choice().type === 'district'")
      DistrictCopy(:district="this.choice().value")
      a.pdf(:href="'http://pdf.weareapartments.org?url=' + $route.path")
        .fa.fa-2x.fa-file-pdf-o
        .copy Create PDF

    .section.section_trio(v-if="this.choice().type === 'district'")
      DistrictTrio(type="web",:choice="this.choice()")

    .section.section_charts(v-if="this.choice().type !== 'district'")
      .chart
        SingleLineChart(data='apthhgrowth',id='apthhgrowth',:choice="this.choice()",:animation="true",theme="orange",width=380,height=300)
        .copys
          .copy Apartment Household Growth
          .copy Population growth and a higher propensity to rent will create a need for more apartments by 2030. 
      .chart
        SingleLineChart(data='rentgrowth',id='rentgrowth',:choice="this.choice()",:animation="true",theme="lime",width=380,height=300)
        .copys
          .copy Growth in Rentership
          .copy An aging population, immigration and fewer home purchases are increasing the need for apartments. 
      .chart
        SingleLineChart(data='popgrowth',id='popgrowth',:choice="this.choice()",:animation="true",theme="cyan",width=380,height=300)
        .copys
          .copy(v-if="this.choice().type === 'state'") Household Growth
          .copy(v-else) Population Growth
          .copy As our population grows, this puts strain on the existing housing supply. A variety of housing options will be needed to meet diverse needs. 
      .clear

    .section.section_chart(v-if="this.choice().type !== 'district'")
      .top
        .part.part_homes
          .value {{ $store.state.homesNeeded }} 
          .copy Apartment Homes Needed in 
            span(v-if="this.choice().type !== 'metro'") the Country
            span(v-if="this.choice().type === 'metro'") {{ this.choice().copy }}
        .part.part_numbers
          .graph
          .copy Avg Annual Construction Rate (2011-2016)
        .part.part_numbers
          .graph
          .copy New Apartments Needed
      .left.left_buildmore(v-if="this.choice().type !== 'metro'")
        .copy We need to build more
        BuildMore(:choice="this.choice()")
        //.legend
          .dot
            .value
            .copy current rate text
          .clear
          .dot
            .value
            .copy needed rate text
      .left.left_inyourcity(v-if="this.choice().type === 'metro'")
        .copy barriers to apartments construction
        HeatChart(:metro="this.choice().value")
        .tip Index based on local regulations and available land
        .title Red Tape Rating
        .copy Over the last three decades, regulatory barriers to apartment construction have increased significantly, most notably at the local level.
      .chart
        MultiLineChart(:animation="true",:type="this.choice().type",:value="this.choice().value",:state="this.choice().state",data='aptsneeded',id='aptsneeded',theme="red",width=830,height=300)
      .clear
      .copys.copyLeft(v-if="this.choice().type === 'district'")
        .copy Red Tape Rating
        .copy Over the last three decades, regulatory barriers to apartment construction have increased significantly, most notably at the local level
      .clear
      .copys.copyRight(v-if="this.choice().type === 'district' || this.choice().type === 'metro'")
        .copy We Need to Build More
        .copy Apartment demand is growing and the industry needs to keep up. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions.

    .clear
    .sources Source: 
      b Hoyt Advisory Services; NMHC/NAA; U.S. Census Bureau.; Axiometrics, a RealPage Company
    .border.big
    //.border.big
    // .border.big(v-if="(this.choice().type !== 'district')")
    //SingleItem(v-if="this.choice().type === 'national'")
    //.border.big(v-if="this.choice().type === 'national'")
    //DualItems(v-if="this.choice().type === 'metro'")
    // .border.big(v-if="this.choice().type === 'metro'")
    Downloads
    //.section.section_links
      .inner
        .area.left
          .icon.icon-file
          .copy 
            span Download 
            | the report on the 2030 demand for apartments.
          a.button(href="/NMHC-NAA-US-Apartment-Demand-in-2030.pdf") download
        .area.right
          .icon.icon-bars
          .copy 
            span Read 
            | about the methodology behind all of the data. 
          router-link(to='/about').button learn more
        .clear

    Bottom
  .datapage_print
    .source Learn More @ https://weareapartments.org{{ path }}
    .section.section_demand(v-if="this.choice().type !== 'district'")
      p {{ this.choice().copy }}
      Demand(:type="this.choice().type",:value="this.choice().value")
    .section.section_district_name(v-if="this.choice().type === 'district'")
      .copy {{ this.choice().value }}
      .copy Apartments and their residents contribute more than $3.5 billion to the economy every day.
    DataSummary(:state="state",:metro="metro",:district="district",v-if="this.choice().type === 'district'")
    .section.section_district(v-if="this.choice().type === 'district'")
      DistrictCopy(:district="this.choice().value")

    .section.section_trio(v-if="this.choice().type === 'district'")
      DistrictTrio(type="print",:choice="this.choice()")

    .section.section_charts(v-if="this.choice().type !== 'district'")
      .chart
        SingleLineChart(data='apthhgrowth',id='ahgrowth_print',:choice="this.choice()",:animation="false",theme="orange",width=400,height=300)
        .copys
          .copy Apartment Household Growth
          .copy Population growth and a higher propensity to rent will create a ..
      .chart
        SingleLineChart(data='rentgrowth',id='rentgrowth_print',:choice="this.choice()",:animation="false",theme="lime",width=400,height=300)
        .copys
          .copy Growth in Rentership
          .copy An aging population, immigration and fewer ..
      .chart
        SingleLineChart(data='popgrowth',id='popgrowth_print',:choice="this.choice()",:animation="false",theme="cyan",width=400,height=300)
        .copys
          .copy(v-if="this.choice().type === 'state'") Household Growth
          .copy(v-else) Population Growth
          .copy As our population grows, this puts strain on the existing housing ..
    .clear

    .section.section_chart(v-if="this.choice().type !== 'district'")
      .top
        .part.part_homes
          .value {{ $store.state.homesNeeded }} 
          .copy Apartment Homes Needed in 
            b(v-if="this.choice().type !== 'metro'") the Country
            b(v-if="this.choice().type === 'metro'") {{ this.choice().copy }}
        .part.part_numbers
          .graph
          .copy Avg Annual Construction Rate (2011-2016)
        .part.part_numbers
          .graph
          .copy New Apartments Needed
      .left(v-if="this.choice().type !== 'metro'")
        // CircleChart(id="renters_print",width="225",height="225",value="70")
      .left(v-else)
        .copy barriers to apartments construction
        HeatChart(:metro="this.choice().value")
        .tip Index based on local regulations and available land
      .right
        MultiLineChart(:animation="false",:type="this.choice().type",:value="this.choice().value",:state="this.choice().state",data='aptsneeded',id='aptsneeded_print',theme="red",width=510,height=225)
      .clear

      //.copys.copyLeft
        .copy Renting on the Rise
        .copy Many people in your district call apartments home. They  ..
      .copys.copyRight
        .copy We Need to Build More
        .copy Apartment demand is growing and the industry needs to keep up. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions
    .clear
    DataSummary(:state="state",:metro="metro",:district="district",v-if="this.choice().type !== 'district'")
    .logos
       img(src="/logo-nmhc.png")
       img(src="/logo-naa.png")
    .clear

</template>

<script>
import filtermixin from '~plugins/filter-mixin.js'

import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'
import DataFilters from '~/components/DataFilters.vue'
import DataSummary from '~/components/DataSummary.vue'
import DistrictCopy from '~/components/DistrictCopy.vue'
import DistrictTrio from '~/components/DistrictTrio.vue'
import SingleLineChart from '~/components/SingleLineChart.vue'
import MultiLineChart from '~/components/MultiLineChart.vue'
import Demand from '~/components/Demand.vue'
import BuildMore from '~/components/BuildMore.vue'
import HeatChart from '~/components/HeatChart.vue'
import Downloads from '~/components/Downloads.vue'

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
    Demand,
    BuildMore,
    HeatChart,
    Downloads,
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
  watch: {
    '$route' () {
      this.value = this.choice().value
      this.type = this.choice().type
      if (this.choice().type === 'metro') {
        this.metro = this.choice().value
      }
      if (this.choice().type === 'state') {
        this.state = this.choice().value
      }
      if (this.choice().type === 'district') {
        this.district = this.choice().value
      }
    },
  },
  data () {
    return {
      path: false,
      metro: false,
      state: this.choice().state,
      district: false,
      value: this.choice().value,
      type: this.choice().type,
    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#DataPage
  > .datapage_web, > .datapage_print
    > .sources
      font c1s
      padding 0 0 20px 0
      width 1200px
      margin auto
      color grey
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
      padding-top 20px
      > .inner
        position relative
        background none
        background-color white
        padding 10px 0
        > .breadcrumb
          display none
        > .copy:nth-child(2), > .copy:nth-child(3)
          display none
        > .copy_print
          display block
          margin 0 
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
          width 750px
          margin auto
          padding-top 5px
          height 110px
          > .stat
            padding 10px
            max-width 150px
            height 60px
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

    > .section_district_name
      > .copy:nth-child(2)
        padding 10px 0 !important
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
      width 750px
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
            display none
    > .section_chart
      width 750px
      margin auto
      > .top
        background-color green
        > .part
          float right
          width 250px
          &.part_homes
            text-align left
            line-height 20px
            padding 5px 0 0 0
            > .value
              display inline
            > .copy
              color grey
              display inline
          &.part_numbers
            > .graph
              float left
              margin 10px 10px 0 0
              background-color rgba(red, 0.5)
              width 20px
              height 20px
              border-radius 50%
            > .copy
              margin 5px 0 0 40px
              color grey
              line-height 10px
              width 184px
              line-height 20px
            > .value
              margin 0 0 0 20px
            &:nth-child(2) > .graph 
              background-color rgba(red, 1)
      > .left
        float left
        border none
        width 0px
        height 225px
        margin 50px 0 0 0
        > .copy
          font c1ssb
          width 280px
          text-transform uppercase
        > .HeatChart
          margin 5px 0 0 0
          > .legend
            margin-top -55px
            width 160px
        > .tip
          font c1ss
          color grey
          text-align center
          width 160px
          margin 0 0 0 20px
      > .right
        float right
        border none
        margin 10px auto
        width 550px
        height 225px
      > .copyLeft
        float left
        width 255px
        display none
      > .copyRight
      > .copys
        float left
        > .copy:nth-child(1)
          font c1
          float left
          margin 20px 0 0 0
          width 177px
        > .copy:nth-child(2)
          font c1s
          float right
          width 565px
          padding 5px 0 0 0
          color grey
          margin 0 5px 0 0
    > .logos
      width 750px
      height 30px
      margin 20px auto 0 auto
      text-align right
      > img
        height 50px


  .datapage_web
    visibility visible
    // display none
    > .section_demand
      padding 60px 0
      text-align center
      position relative
      width 1200px
      margin auto
      > .pdf
        top 85px
        right 90px
      > p:first-child
        font h1
      > p:nth-child(2)
        color grey
        max-width 544px
        margin auto
        > b
          color black
          > span
            color red
    > .section_district
      width 1200px
      margin auto
      position relative
      > .pdf
        top 30px
        right 60px
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
      margin 90px auto 30px auto
      width 1200px
      > .top
        > .part
          float right
          width 220px
          line-height 22px
          font c1s
          &.part_homes
            text-align left
            padding 5px 0 0 0
            > .value
              display inline
              font c1b
              line-height 22px
            > .copy
              color grey
              display inline
          &.part_numbers
            width 200px
            > .graph
              float left
              margin 10px 10px 0 0
              background-color rgba(red, 0.5)
              width 15px
              height 15px
              border-radius 50%
            > .copy
              margin 5px 0 0 30px
              color grey
              width 144px
            > .value
              margin 0 0 0 20px
            &:nth-child(2)
              margin 0 180px 0 0
            &:nth-child(2) > .graph
              background-color rgba(red, 1)
            &:nth-child(2) > .copy
              width 184px
      > .copyLeft
        float left
        width 300px
      > .copys
        width 800px
        margin -30px 20px 120px 0
        float right
        > .copy:nth-child(1)
          font c3b
          padding 0 0 5px 0
        > .copy:nth-child(2)
          font c1
          color grey

      > .left
        float left
        width 340px
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
          height 300px
          border 1px solid lightgrey
          border-radius 3px
          > .copy:first-child
            color darkblue
            font c1sb
            text-transform uppercase
            padding 25px 0 0 25px
          > .tip
            color grey
            width 250px
            margin -10px auto 0 auto
            text-align center
            font c1s
          > .title
            margin 40px 0 0 0
            padding 0 0 5px 0
            font c3b
          > .copy:last-child
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
        width 800px
        margin 0 0 30px
    > .section_links
      > .inner
        padding 90px 0
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
  #Filters
    display none !important
  .datapage_web
    display none
  .datapage_print
    visibility visible
    overflow visible !important
    height auto !important

@import '../assets/stylus/datapage-mobile.styl'

</style>
