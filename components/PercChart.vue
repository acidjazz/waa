<template lang="pug">
#percs
  .perc.perc_orange
    .label 2000 or later
    .value 85%
    progress(value="85",max="100")
  .perc.perc_lime
    .label 1980 - 1999
    .value 37%
    progress(value="37",max="100")
  .perc.perc_red
    .label 1960 - 1979
    .value 85%
    progress(value="85",max="100")
  .perc.perc_purple
    .label 1959 or earlier
    .value 37%
    progress(value="37",max="100")
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#percs
  margin 30px 20px
  > .perc
    &.perc_orange
      > progress
      > progress::-webkit-progress-value
        background-color orange
        border-radius 6px
      > progress::-webkit-progress-bar
        background-color lightorange
        border-radius 6px
      > .value
        color orange
    &.perc_lime
      > progress
      > progress::-webkit-progress-value
        background-color lime
      > progress::-webkit-progress-bar
        background-color lightlime
      > .value
        color lime
    &.perc_red
      > progress
      > progress::-webkit-progress-value
        background-color red
      > progress::-webkit-progress-bar
        background-color lightred
      > .value
        color red
    &.perc_purple
      > progress
      > progress::-webkit-progress-value
        background-color purple
      > progress::-webkit-progress-bar
        background-color lightpurple
      > .value
        color purple
    > .label
      float left
      text-transform uppercase
      font c1sb
    > .value
      float right
    > progress
      width 100%
      margin 20px 0
      height 6px
</style>
