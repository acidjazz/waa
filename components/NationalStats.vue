<template lang="pug">
#NationalStats
  .title {{ choice.value }} Stats

  .body
    .copy Intro text

    .stats
      .stat.is-royalpurple
        .title Before 1959
        .value {{ stat.a }}%
        .clear
        .progress
          .inner(:style="`width: ${stat.a}%`")

    .stats
      .stat.is-red
        .title 1960-1979
        .value {{ stat.b }}%
        .clear
        .progress
          .inner(:style="`width: ${stat.b}%`")

    .stats
      .stat.is-blue
        .title 1980-1999
        .value {{ stat.c }}%
        .clear
        .progress
          .inner(:style="`width: ${stat.c}%`")

    .stats
      .stat.is-yellow
        .title 2000 or Later
        .value {{ stat.d }}%
        .clear
        .progress
          .inner(:style="`width: ${stat.d}%`")

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

<script>

import udata from '../static/US Age of Stock'
import sdata from '../static/State Age of Stock'
import mdata from '../static/Metro Age of Occupied Stock'

export default {

  props: {
    choice: {
      type: Object,
      required: true,
    }
  },

  computed: {

    stat: function () {

      var data = udata.data['Total U.S.']

      if (this.choice.type === 'state') {
        data = sdata.data[this.choice.value]
      }

      if (this.choice.type === 'metro') {
        data = mdata.data[this.choice.value]
      }

      let total = data[0] + data[1] + data[2] + data[3]

      return {
        a: Math.round(data[0] * 100 / total),
        b: Math.round(data[1] * 100 / total),
        c: Math.round(data[2] * 100 / total),
        d: Math.round(data[3] * 100 / total),
      }

    }

  },

  data () {
    return {

    }

  }

}

</script>

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
      padding 11px 0
      > .stat
        &.is-royalpurple
          > .value
            color lightpurple
          > .progress
            background-color lightpurple
            > .inner
              background-color royalpurple
        &.is-red
          > .value
            color lightred
          > .progress
            background-color lightred
            > .inner
              background-color red
        &.is-blue
          > .value
            color sail
          > .progress
            background-color sail
            > .inner
              background-color cerulean
        &.is-yellow
          > .value
            color black
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
            width 0%
            height 100%
            border-radius 6px 
            transition width 1s linear 0s
@media all and (min-width: 1px) and (max-width: 1000px)
  #NationalStats
    float none
    margin auto
</style>
