<template lang="pug">
#NationalStats(:class="{'stock': stock}")
  .title(v-if="!stock") {{ choice.value }} Apartment Stats

  .body
    .copy(v-if="!stock") {{ tabs[tab] }}
    .tab-circles(v-if="!stock")
      .tab-circle(v-for="value,key in tabs",:class="{active: key === tab}",@click="tab = key")
    .clear

    .stats
      .stat.is-royalpurple
        .title {{ labels[tab][0] }}
        .value {{ stat.a }}%
        .clear
        .progress
          .inner(:style="`width: ${stat.a}%`")

    .stats
      .stat.is-red
        .title {{ labels[tab][1] }}
        .value {{ stat.b }}%
        .clear
        .progress
          .inner(:style="`width: ${stat.b}%`")

    .stats
      .stat.is-blue
        .title {{ labels[tab][2] }}
        .value {{ stat.c }}%
        .clear
        .progress
          .inner(:style="`width: ${stat.c}%`")

    .stats
      .stat.is-yellow
        .title {{ labels[tab][3] }}
        .value {{ stat.d }}%
        .clear
        .progress
          .inner(:style="`width: ${stat.d}%`")

    //.numbers
      .number
        .label Jobs Supported
        .value  {{ jobs | numeral }}
        .clear
      .number
        .label Economic Contribution
        .value ${{ contrib | numeral }}
        .clear
      .clear

</template>

<script>
// age of stock
import uAdata from '../static/US Age of Stock'
import sAdata from '../static/State Age of Stock'
import mAdata from '../static/Metro Age of Occupied Stock'

// persons
import uPdata from '../static/US Persons in Household'
import sPdata from '../static/State Persons in Household'
import mPdata from '../static/Metro Persons in Household'

// type
import uTdata from '../static/US Household Type'
import sTdata from '../static/State Household Type'
import mTdata from '../static/Metro Household Type'

import contribUS from '../static/US Economic Contribution.json'
import contribState from '../static/State Economic Contribution.json'
import contribMetro from '../static/Metro Economic Contribution.json'
import contribDistrict from '../static/District Economic Contribution.json'

import jobsUS from '../static/US Jobs.json'
import jobsState from '../static/State Jobs.json'
import jobsMetro from '../static/Metro Jobs.json'
import jobsDistrict from '../static/District Total Jobs.json'

// elipsis subnav - Age of Stock | Persons in Household | Household Type

var datas = {
  national: {
    'stock': uAdata,
    'persons': uPdata,
    'type': uTdata,
  },
  state: {
    'stock': sAdata,
    'persons': sPdata,
    'type': sTdata,
  },
  metro: {
    'stock': mAdata,
    'persons': mPdata,
    'type': mTdata,
  },
}

export default {

  props: {
    stock: {
      type: Boolean,
      required: false,
      default: false,
    },
    choice: {
      type: Object,
      required: true,
    }
  },

  filters: {
    numeral (value) {
      if (process.browser) {
        return window.numeral(value).format('0.0a')
      }

      return value
    },
  },

  created () {
    if (this.stock) {
      this.tab = 'stock'
    }
  },

  computed: {

    stat: function () {

      var data = datas[this.choice.type][this.tab]

      if (this.choice.type === 'national') {
        data = data.data['Total U.S.']
        this.contrib = contribUS.data['Total U.S.']
        this.jobs = jobsUS.data['Total U.S.']
      }

      if (this.choice.type === 'state') {
        data = data.data[this.choice.state]
        this.contrib = contribState.data[this.choice.value]
        this.jobs = jobsState.data[this.choice.value]
      }

      if (this.choice.type === 'metro') {
        data = data.data[this.choice.value]
        this.contrib = contribMetro.data[this.choice.value]
        this.jobs = jobsMetro.data[this.choice.value]
      }

      if (this.tab === 'type') {

        let total = data[0] + data[1] + data[2] + data[3] + data[4] + data[5]
        return {
          a: Math.round(data[0] * 100 / total),
          b: Math.round(data[1] * 100 / total),
          c: Math.round(data[2] * 100 / total),
          d: Math.round((data[3] + data[4] + data[5]) * 100 / total),
        }
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
      contrib: '...',
      jobs: '...',
      tab: 'type',
      tabs: {
        'type': 'Household Type',
        'persons': 'Persons in Household',
        // 'stock': 'Age of Stock',
      },

      labels: {
        stock: [
          'Before 1959',
          '1960-1979',
          '1980-1999',
          '2000 or Later',
        ],
        persons: [
          '1',
          '2',
          '3',
          '4+',
        ],
        type: [
          'Single Living Alone',
          'Married with Children',
          'Married without Children',
          'Other',
        ],
      },
    }

  },

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
  height 500px
  &.stock
    float left
    width 350px
    border 0px solid transparent
    height auto
    > .title
      font c1sb
      border-bottom 0px solid transparent
      padding 10px 0 0 0
    > .body
      padding 0px
      > .stats
        padding 0px
  > .title
    font h3
    padding 16px
    border-bottom 1px solid lightgrey
  > .body
    padding 20px
    > .copy
      color grey
      float left
    > .tab-circles
      float right
      > .tab-circle
        cursor pointer
        width 10px
        height 10px
        float right
        border 2px solid grey
        margin 0 0 0 10px
        border-radius 50%
        &:hover:not(.active)
          background-color rgba(blue, 0.5)
        &.active
          background-color blue
          border 2px solid blue

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
        padding-top 20px
        padding-bottom 20px
        &.is-royalpurple
          > .value
            color royalpurple
          > .progress
            background-color lightpurple
            > .inner
              background-color royalpurple
        &.is-red
          > .value
            color red
          > .progress
            background-color lightred
            > .inner
              background-color red
        &.is-blue
          > .value
            color cerulean
          > .progress
            background-color sail
            > .inner
              background-color cerulean
        &.is-yellow
          > .value
            color casal
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
    height auto
</style>
