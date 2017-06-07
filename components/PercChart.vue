<template lang="pug">
#percs
  .perc.perc_orange
    .label 2000 or later
    .value 85%
    .clear
    .progress &nbsp;
      .inner(style="width: 85%")
  .perc.perc_lime
    .label 1980 - 1999
    .value 37%
    .clear
    .progress &nbsp;
      .inner(style="width: 37%")
  .perc.perc_red
    .label 1960 - 1979
    .value 85%
    .clear
    .progress &nbsp;
      .inner(style="width: 85%")
  .perc.perc_purple
    .label 1959 or earlier
    .value 37%
    .clear
    .progress &nbsp;
      .inner(style="width: 37%")
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#percs
  margin 30px 20px
  > .perc
    > .label
      float left
      text-transform uppercase
      font c1sb
    > .value
      float right
    > .progress
      width 100%
      margin 20px 0
      height 10px
      border-radius 6px
      background-color pink
      position relative
      > .inner
        position absolute
        top 0
        left 0
        width 100%
        height 10px
        background-color brown
        border-radius 6px
    &.perc_orange
      > .value
        color orange
      > .progress
          background-color lightorange
          > .inner
            background-color orange
    &.perc_lime
      > .value
        color lime
      > .progress
        background-color lightlime
        > .inner
          background-color lime
    &.perc_red
      > .value
        color red
      > .progress
        background-color lightred
        > .inner
          background-color red
    &.perc_purple
      > .value
        color purple
      > .progress
        background-color lightpurple
        > .inner
          background-color purple

</style>
