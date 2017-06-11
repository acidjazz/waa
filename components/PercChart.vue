<template lang="pug">
#percs
  .perc.perc_orange
    .label 2000 or later
    .value {{ value.today }}%
    .clear
    .progress &nbsp;
      .inner(:style="'width: ' + bar.today + '%'")
  .perc.perc_lime
    .label 1980 - 1999
    .value {{ value.eighties }}%
    .clear
    .progress &nbsp;
      .inner(:style="'width: ' + bar.eighties + '%'")
  .perc.perc_red
    .label 1960 - 1979
    .value {{ value.sixties }}%
    .clear
    .progress &nbsp;
      .inner(:style="'width: ' + bar.sixties + '%'")
  .perc.perc_purple
    .label 1959 or earlier
    .value {{ value.fifties }}%
    .clear
    .progress &nbsp;
      .inner(:style="'width: ' + bar.fifties + '%'")
</template>

<script>

import ddata from '../store/District Age of Occupied Stock'
import udata from '../store/US Age of Stock'
import mdata from '../store/Metro Age of Occupied Stock'
let numeral = require('numeral')

export default {

  props: ['district', 'metro'],

  methods: {
    add (a, b) {
      return a + b
    },
    average (values, index) {
      return Math.round(values[index] * 100 / values.reduce(this.add, 0))
    },
    populate () {

      let values = udata.data['Total U.S.'].slice(0, 4)
      if (this.district !== undefined) {
        values = ddata.data[this.district]
      }

      if (this.metro !== undefined) {
        values = mdata.data[this.metro]
      }

      this.bar.fifties  = this.average(values, 0)
      this.bar.sixties  = this.average(values, 1)
      this.bar.eighties = this.average(values, 2)
      this.bar.today    = this.average(values, 3)

      this.randto('fifties', this.average(values, 0), 400)
      this.randto('sixties', this.average(values, 1), 400)
      this.randto('eighties', this.average(values, 2), 400)
      this.randto('today', this.average(values, 3), 400)
    },
    randto (key, value, speed) {

      let min = []
      let max = []
      let timer = 0

      for (let i = 0; i !== value.toString().length; i++) {
        min.push(1)
        max.push(9)
      }

      min = min.join('')
      max = max.join('')

      let random = this.randomInt(min, max)

      let interval = setInterval(() => {
        timer += 20
        this.value[key] = this.randomInt(min, max)

        if (timer > speed) {
          this.value[key] = value
          clearInterval(interval)
        }

      }, 20)

    },
    randomInt (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    }
  },

  watch: {
    '$route' () {
      this.populate()
    }
  },

  mounted () {
    this.populate()
  },

  data () {

    return {
      bar: {
        today    : 0,
        eighties : 0,
        sixties  : 0,
        fifties  : 0,
      },
      value: {
        today    : 0,
        eighties : 0,
        sixties  : 0,
        fifties  : 0,
      }
    }

  }

}
</script>

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
        height 10px
        background-color brown
        border-radius 6px
        transition width 1.5s ease-in-out 0s
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
