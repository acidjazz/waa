<template lang="pug">
doctype
#GradientChart
  .chart
  .data
    .copys(v-in-viewport)
      .copy Demand Is Rising
      .copy Population growth, immigration and changing lifestyle preferences mean more people will be living in apartments in the future. The challenge, however, is building the number of apartment homes to meet that growing demand.
    .legend(v-in-viewport)
      .stat.stat_hh(:class="{ active: (this.active === 'hh') }")
        .color.color_grey
        .copy Apartment Household Growth
        .value 4.6M
        i.fa.fa-long-arrow-up(aria-hidden=true)
      .stat.stat_rent(:class="{ active: (this.active === 'rent') }")
        .color.color_red
        .copy Population Growth 
        .value 31.8M
        i.fa.fa-long-arrow-up(aria-hidden=true)
    .values(v-in-viewport)
      .value(v-on:mouseover="highlight('hh')") 20.04%
      .value(v-on:mouseover="highlight('rent')") 9.79%
</template>
<script>
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  methods: {
    highlight (stat) {
      this.active = stat
      let ti = setTimeout(() => {
        this.active = false
      }, 2000)
    }
  },
  data () {
    return {
      active: false,
    }
  }
}
</script>
<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#GradientChart
  width 1200px
  height 563px
  margin 60px auto 120px auto
  position relative
  > .chart
    top 60px
    position absolute
    width inherit
    height inherit
    background-image url('/gradientChart.png')
    background-size cover
  > .data
    position absolute
    width inherit
    height inherit
    > .copys
      float left
      margin 0 0 0 90px

      &.below-viewport > .copy
        opacity 0
        transform translate(0, 20px)
      &.above-viewport > .copy
        opacity 0
        transform translate(0, -20px)
      &.in-viewport
        opacity 1
        transform translate(0, 0)
      &.in-viewport > .copy:nth-child(1)
        transition opacity 1s ease 0s, transform 1s ease 0s
      &.in-viewport > .copy:nth-child(2)
        transition opacity 1s ease 0.1s, transform 1s ease 0.1s

      > .copy:nth-child(1)
        font h1
        line-height 30px
        padding 0 0 10px 0
      > .copy:nth-child(2)
        font c1s
        color grey
        width 400px
        line-height 30px

    > .legend
      float right
      margin 0 90px 0 0
      &.below-viewport > .stat
        > .color, > .copy, > .value, > i
          opacity 0
          transform translate(0, 20px)
      &.above-viewport > .stat
        > .color, > .copy, > .value, > i
          opacity 0
          transform translate(0, -20px)
      &.in-viewport > .stat
        > .color, > .copy, > .value, > i
          opacity 1
          transform translate(0, 0)
        > .color
          transition opacity 1s ease 0s, transform 1s ease 0s
        > .copy
          transition opacity 1s ease 0.1s, transform 1s ease 0.1s
        > .value
          transition opacity 1s ease 0.3s, transform 1s ease 0.2s
        > i
          transition opacity 1s ease 0.2s, transform 1s ease 0.3s
      > .stat
        float left
        width 120px
        margin 0 30px 0 0
        padding 10px
        border-radius 3px
        transition background-color 2s ease 0s 
        &.active
          background-color lightlime
          transition background-color 0.2s ease 0s 
        &:nth-child(2) > .copy
          color grey
        &:last-child
          margin 0
          width 100px
        > .copy
          font c1s
          padding 10px 0
        > .color
          width 10px
          height 10px
          border-radius 50%
          &.color_grey
            background-color lightgrey
          &.color_red
            background-color red
        > .value
          font c4
        > .value
          float left
          padding 0 10px 0 0
        > i
          color green

    > .values
      position absolute
      top 50%
      right 60px
      margin-top -40px
      &.in-viewport
        > .value
          opacity 1
          transform translate(0, 0)
        > .value:nth-child(1)
          transition opacity 1s ease 0s, transform 1s ease 0s
        > .value:nth-child(2)
          transition opacity 1s ease 0.1s, transform 1s ease 0.1s
      > .value
        cursor pointer
        font c4
        opacity 0
        transform translate(20px, 0)
      > .value:nth-child(2)
        margin 140px 0
        color white
@import '../assets/stylus/gradientchart-mobile.styl'
</style>
