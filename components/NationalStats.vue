<template lang="pug">
#NationalStats
  .title National Stats

  .body
    .copy Intro text

    .stats
      .stat.is-royalpurple
        .title STAT
        .value +50%
        .clear
        .progress
          .inner
    .stats
      .stat.is-blue
        .title STAT
        .value +50%
        .clear
        .progress
          .inner

    .stats
      .stat.is-yellow
        .title STAT
        .value +50%
        .clear
        .progress
          .inner


    .numbers
      .number
        .label Spending Power
        .value $405,970,000,000
        .clear
      .number
        .label Jobs Supported
        .value 3,571,319
        .clear
      .number
        .label Contribution
        .value $1,028,930,000,000
        .clear
      .clear

</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#NationalStats
  float right
  border 1px solid lightgrey
  border-radius 6px
  width 310px
  > .title
    font h3
    padding 20px
    border-bottom 1px solid lightgrey
  > .body
    padding 20px
    > .copy
      color grey

    > .numbers
      padding-top 20px
      > .number
        padding 0 0 20px 0
        &:nth-child(3)
          padding 0 0 0 0
        > .label
          float left
        > .value
          float right
          color grey

    > .stats
      padding 20px 0
      > .stat
        &.is-royalpurple
          > .value
            color lightpurple
          > .progress
            background-color lightpurple
            > .inner
              background-color royalpurple
        &.is-blue
          > .value
            color sail
          > .progress
            background-color sail
            > .inner
              background-color cerulean
        &.is-yellow
          > .value
            color lemonChiffon
          > .progress
            background-color lemonChiffon
            > .inner
              background-color goldenFizz

        > .title
          float left
        > .value
          float right
        > .progress
          width 100%
          height 10px
          background-color rgba(red, 0.5)
          border-radius 6px
          > .inner
            background-color red
            width 50%
            height 100%
            border-radius 6px 
</style>
