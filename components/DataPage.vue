<template lang="pug">
#DataPage
  .datapage_web
    Top(type="light")
    .clear
    DataFilters(:state="state",:metro="metro",:district="district")
    DataSummary(:state="state",:metro="metro",:district="district",type="web")
    DiagSection
    .section.section_demand(v-if="this.choice().type !== 'district'")
      .inner
        p The Demand
        Demand(:type="this.choice().type",:value="this.choice().value")
        Share(:pdf="false")
        // .pointer
    .clear
    .section.section_district(v-if="this.choice().type === 'district'")
      DistrictCopy(:district="this.choice().value")
      Share
    .section.section_trio(v-if="this.choice().type === 'district'")
      DistrictTrio(type="web",:choice="this.choice()")

    .section.section_chart(v-if="this.choice().type !== 'district'")
      .chart.left
        MultiLineChart(
          :animation="true",
          :choice="this.choice()",
          data='aptsneeded',
          id='aptsneeded',
          width=820,height=396)
      .right
        NationalStats(:choice="this.choice()")
      .clear

    .section.section_charts(v-if="this.choice().type !== 'district'")

      .chart
        .copys
          .copy Supply at Risk
          .copy The apartment stock is aging. Without resources to support rehabilitation and preservation efforts, the current supply-demand imbalance will worsen, affecting affordability.
        .title AGE OF STOCK
        NationalStats(:stock="true",:choice="this.choice()")
 

      .chart
        .copys
          .copy(v-if="this.choice().type === 'state'") Household Growth
          .copy(v-else) Population Growth
          .copy As our population grows, this puts strain on the existing housing supply. A variety of housing options will be needed to meet diverse needs. 
        .title POPULATION
        SingleLineChart(
          :noborder="true",
          :nopadding="true",
          data='popgrowth',
          id='popgrowth',
          :choice="this.choice()",
          :animation="true",
          theme="aqua",
          description="Forecasted by the year 2030",
          tagline="Text Needed",
          width=380,height=220)

      .chart
        .copys
          .copy Renting on The Rise
          .copy(v-if="isNational") Many people in the U.S. call apartments home.  They appreciate mortgage-free living, the ability to fllow new work opportunities and amenities that fit their lifestyles.
          .copy(v-if="!isNational") Many people in {{ this.choice().value }} call apartments home.  They appreciate mortgage-free living, the ability to fllow new work opportunities and amenities that fit their lifestyles.
        .title(v-if="isNational") IN THE U.S.
        .title(v-if="isState") IN YOUR STATE
        .title(v-if="isMetro") IN YOUR METRO
        CircleChart(
          :width="255",
          :height="255",
          id="ontherise",
          :choice="this.choice()",
          :animation="true",
          title="Renting on The Rise")
        .copy.has-text-grey.has-text-centered(v-if="isNational") Of U.S. residents call an apartment home
        .copy.has-text-grey.has-text-centered(v-if="!isNational") Of residents in {{ this.choice().value }} call an apartment home

    .clear
    CustomPDF(:choice="this.choice()")
    MetroStack(:choice="choice()")
    Compare
    QuoteBar
    .clear
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
    DataSummary(:state="state",:metro="metro",:district="district",type="print")
    .section.section_trio(v-if="this.choice().type === 'district'")
      DistrictTrio(type="print",:choice="this.choice()")
    .section.section_chart(v-if="this.choice().type !== 'district'")
      .chart.left
        MultiLineChart(
          :animation="false",
          :choice="this.choice()",
          data='aptsneeded',
          id='aptsneeded_print',
          width=550,height=230)

      .right
        .section_demand
          p The Demand
          Demand(:type="this.choice().type",:value="this.choice().value")
          // .pointer
      .clear

    .section.section_charts(v-if="this.choice().type !== 'district'")
      .chart
        .copys
          .copy Renting on The Rise
          .copy(v-if="isNational") Many people in the U.S. call apartments home.  They appreciate mortgage-free living, the ability to fllow new work opportunities and amenities that fit their lifestyles.
          .copy(v-if="!isNational") Many people in {{ this.choice().value }} call apartments home.  They appreciate mortgage-free living, the ability to fllow new work opportunities and amenities that fit their lifestyles.
        .title(v-if="isNational") IN THE U.S.
        .title(v-if="isState") IN YOUR STATE
        .title(v-if="isMetro") IN YOUR METRO
        CircleChart(
          :width="170",
          :height="170",
          id="ontherise-print",
          :choice="this.choice()",
          :animation="false",
          title="Renting on The Rise")
        .copy.has-text-grey.has-text-centered(v-if="isNational") Of U.S. residents call an apartment home
        .copy.has-text-grey.has-text-centered(v-if="!isNational") Of residents in {{ this.choice().value }} call an apartment home
      .chart
        .copys
          .copy(v-if="this.choice().type === 'state'") Household Growth
          .copy(v-else) Population Growth
          .copy As our population grows, this puts strain on the existing housing supply. A variety of housing options will be needed to meet diverse needs. 
        .title POPULATION
        SingleLineChart(
          :noborder="true",
          :nopadding="true",
          data='popgrowth',
          id='popgrowth-print',
          :choice="this.choice()",
          :animation="false",
          theme="aqua",
          description="Forecasted by the year 2030",
          tagline="Text Needed",
          width=380,height=200)
      .chart
        .copys
          .copy Supply at Risk
          .copy The apartment stock is aging. Without resources to support rehabilitation and preservation efforts, the current supply-demand imbalance will worsen, affecting affordability.
        .title AGE OF STOCK
        NationalStats(:stock="true",:choice="this.choice()")
      .clear

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
import CircleChart from '~/components/CircleChart.vue'
import MultiLineChart from '~/components/MultiLineChart.vue'
import NationalStats from '~/components/NationalStats.vue'
import Demand from '~/components/Demand.vue'
import Share from '~/components/Share.vue'
import BuildMore from '~/components/BuildMore.vue'
import Downloads from '~/components/Downloads.vue'
import Compare from '~/components/Compare.vue'
import MetroStack from '~/components/MetroStack.vue'
import QuoteBar from '~/components/QuoteBar.vue'
import CustomPDF from '~/components/CustomPDF.vue'
import DiagSection from '~/components/DiagSection.vue'

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
    CircleChart,
    MultiLineChart,
    NationalStats,
    Demand,
    Share,
    BuildMore,
    Downloads,
    Compare,
    MetroStack,
    CustomPDF,
    QuoteBar,
    DiagSection,
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

  computed: {
    isNational () {
      return this.choice().type === 'national'
    },
    isState () {
      return this.choice().type === 'state'
    },
    isMetro () {
      return this.choice().type === 'metro'
    },
    isDistrict () {
      return this.choice().type === 'district'
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

  .datapage_web
    visibility visible
    // display none
    > .section_demand
      width 1200px
      margin auto
      > .inner
        padding 30px
        background-color lightwhite
        border-radius 6px
        float left
        position relative
        margin 60px 0 90px 60px
        > .pointer
          position absolute
          width 3px
          height 60px
          background-color black
          left 100px
          bottom -40px
        > #Share
          top 40px
          right 40px
        > p:first-child
          font h2
          margin 0 0 20px 0
        > p:nth-child(2)
          color grey
          max-width 615px
          margin auto
          > span
            color black
            > span
              color red
    > .section_district
      width 1200px
      margin auto
      position relative
      > #Share
        top 30px
        right 60px
    > .section_charts
      width 1200px
      margin auto
      > .chart
        > .title
          font c1sb
          text-decoration uppercase
        float left
        width 380px
        margin-right 30px
        &:nth-child(3)
          margin-right 0px
        > .copys
          margin 20px 0 0 0
          height 150px
          > .copy:first-child
            font h3
            padding 0 0 10px 0
          > .copy:nth-child(2)
            color grey
    > .section_chart
      margin 30px auto
      width 1200px
      > .chart
        float left

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
@import '../assets/stylus/datapage-print.styl'

</style>
