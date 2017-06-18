<template lang="pug">
#GradientChart
  .chart
  .data
    .copys
      .copy Supply isn't meeting demand.
      .copy Unless we act now, America's affordability crisis will worsen.
    .legend
      .stat
        .color.color_grey
        .copy Population<br /> Growth
        .value 9.79%
        i.fa.fa-long-arrow-up(aria-hidden=true)
      .stat
        .color.color_red
        .copy Growth in Rentership Rate
        .value 20.4%
        i.fa.fa-long-arrow-up(aria-hidden=true)
      .stat
        .color.color_darkgrey
        .copy Apartment Household Growth
        .value 12.79%
        i.fa.fa-long-arrow-up(aria-hidden=true)
    .values
      .value 32k+
      .value 4.5M+
      .value 9k+
</template>
<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#GradientChart
  width 1200px
  height 563px
  margin 60px auto
  > .chart
    position absolute
    width inherit
    height inherit
    background-image url('/gradientChart.png')
    background-position cover
  > .data
    position absolute
    width inherit
    height inherit
    > .copys
      float left
      width 300px
      > .copy:nth-child(1)
        font h1
        line-height 30px
        padding 0 0 10px 0
      > .copy:nth-child(2)
        font c1s
        color grey
        width 200px
    > .legend
      float right
      margin 0 90px 0 0
      > .stat
        float left
        width 120px
        margin 0 30px 0 0
        &:nth-child(1) > .copy
          color grey
        &:nth-child(3) > .copy
          color grey
        &:last-child
          margin 0
        > .copy
          font c1s
          padding 10px 0
        > .color
          width 10px
          height 10px
          border-radius 50%
          &.color_grey
            background-color grey
          &.color_red
            background-color red
          &.color_darkgrey
            background-color darkgrey
        > .value
          font c1
        > .value
          float left
          padding 0 10px 0 0
        > i
          color green

    > .values
      position absolute
      top 50%
      right 30px
      margin-top -75px
      > .value:nth-child(2)
        margin 120px 0
        color white

</style>
