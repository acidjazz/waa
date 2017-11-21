<template lang="pug">
#DataPage
  .datapage_web
    Top(type="light")
    .clear
    DataFilters(:state="state",:metro="metro",:district="district")
    DataSummary(:state="state",:metro="metro",:district="district",type="web")
    .soon Coming Soon
    Bottom
</template>

<script>

import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'
import DataFilters from '~/components/DataFilters.vue'
import filtermixin from '~plugins/filter-mixin.js'
export default {
  mixins: [ filtermixin ],
  components: {
    Top,
    Bottom,
    DataFilters,
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

.soon
  height 30vh
  text-align center
  font h1
  line-height 20vh
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
          height 80px
          > .stat
            padding 10px
            max-width 150px
            height 60px
            animation none !important
            &:first-child, &:nth-child(2), &:nth-child(3)
              border-right 1px solid lightblue
            > .value
              padding 0 0 10px 0
              color purple
              animation none !important
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
        font c1s
        > span
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
        > .dchart
          overflow hidden
        > .dchart > .inner
          > .chartainer
            width 244px
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
      width 640px
      margin auto
      > .chart
        float left
        width 45%
        margin-right 60px
        > .chartainer > .tooltip
          display none
        &:nth-child(2)
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
      margin-top 20px
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
              margin 10px 0 0 0
              background-color rgba(red, 0.5)
              width 10px
              height 10px
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
      > #Share
        top 85px
        right 90px
      > p:first-child
        font h1
      > p:nth-child(2)
        color grey
        max-width 544px
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
      width 880px
      margin auto
      > .chart
        float left
        width 380px
        margin-right 120px
        &:nth-child(2)
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
        > .chartainer > .tooltip
          top -20px
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
