<template lang="pug">
doctype
.page.page_compare
  Top(type="light")
  .inner
  .fade
  .modal
    router-link.close(to="/data")
      .fa.fa-times.fa-2x
    .copy we are apartments
    .copy Your City Comparison
    .border.small

    table(cellspacing=0,cellpadding=0)
      thead
        tr
          th
          th {{ city.one.name }}
          th {{ city.two.name }}
      tbody
        tr
          td Total Apartment Homes
          td(:class="{ green: compare('one', 'homes'), tomato: !compare('one', 'homes') }")
            i-count-up(:end="city.one.homes.formatted",:decimals="1")
            span {{ city.one.homes.multiplier }}
          td(:class="{ green: compare('two', 'homes'), tomato: !compare('two', 'homes') }")
            i-count-up(:end="city.two.homes.formatted",:decimals="1")
            span {{ city.two.homes.multiplier }}
        tr
          td Operation Dollars Spent
          td(:class="{ green: compare('one', 'operation'), tomato: !compare('one', 'operation') }")
            span $
            i-count-up(:end="city.one.operation.formatted",:decimals="1")
            span {{ city.one.operation.multiplier }}
          td(:class="{ green: compare('two', 'operation'), tomato: !compare('two', 'operation') }")
            span $
            i-count-up(:end="city.two.operation.formatted",:decimals="1")
            span {{ city.two.operation.multiplier }}
        tr
          td Direct On-Site Jobs
          td(:class="{ green: compare('one', 'jobs'), tomato: !compare('one', 'jobs') }")
            i-count-up(:end="city.one.jobs.formatted",:decimals="1")
            span {{ city.one.jobs.multiplier }}
          td(:class="{ green: compare('two', 'jobs'), tomato: !compare('two', 'jobs') }")
            i-count-up(:end="city.two.jobs.formatted",:decimals="1")
            span {{ city.two.jobs.multiplier }}
        tr
          td Total Economic Contribution
          td(:class="{ green: compare('one', 'contrib'), tomato: !compare('one', 'contrib') }")
            span $
            i-count-up(:end="city.one.contrib.formatted",:decimals="1")
            span {{ city.one.contrib.multiplier }}
          td(:class="{ green: compare('two', 'contrib'), tomato: !compare('two', 'contrib') }")
            span $
            i-count-up(:end="city.two.contrib.formatted",:decimals="1")
            span {{ city.two.contrib.multiplier }}
        tr
          td Total Jobs Supported
          td(:class="{ green: compare('one', 'supported'), tomato: !compare('one', 'supported') }")
            i-count-up(:end="city.one.supported.formatted",:decimals="1")
            span {{ city.one.supported.multiplier }}
          td(:class="{ green: compare('two', 'supported'), tomato: !compare('two', 'supported') }")
            i-count-up(:end="city.two.supported.formatted",:decimals="1")
            span {{ city.two.supported.multiplier }}
        tr
          td Construction Dollars Spent
          td(:class="{ green: compare('one', 'spent'), tomato: !compare('one', 'spent') }")
            span $
            i-count-up(:end="city.one.spent.formatted",:decimals="1")
            span {{ city.one.spent.multiplier }}
          td(:class="{ green: compare('two', 'spent'), tomato: !compare('two', 'spent') }")
            span $
            i-count-up(:end="city.two.spent.formatted",:decimals="1")
            span {{ city.two.spent.multiplier }}
        tr
          td Spending Power
          td(:class="{ green: compare('one', 'power'), tomato: !compare('one', 'power') }")
            span $
            i-count-up(:end="city.one.power.formatted",:decimals="1")
            span {{ city.one.power.multiplier }}
          td(:class="{ green: compare('two', 'power'), tomato: !compare('two', 'power') }")
            span $
            i-count-up(:end="city.two.power.formatted",:decimals="1")
            span {{ city.two.power.multiplier }}
  Bottom
</template>

<style lang="stylus">
@import '../../assets/stylus/compare.styl'
</style>

<script>
import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'
import { mixin as clickaway } from 'vue-clickaway'
import inViewportDirective from 'vue-in-viewport-directive'
import ICountUp from 'vue-countup-v2'

const json = {
  homes: {},
  operation: {},
  construction: {},
  spending: {},
}

json.homes = require('~/static/Metro Occupied Apartments.json').data
json.operation = require('~/static/Operation Impacts (metro).json').data
json.construction = require('~/static/Construction Impacts (metro).json').data
json.spending = require('~/static/Spending Impacts (metro).json').data

export default {
  directives: { 'in-viewport': inViewportDirective },
  components: { Top, Bottom, ICountUp },
  mixins: [ clickaway ],

  methods: {
    compare (city, type) {
      if (city === 'one') {
        return this.city.one[type].value > this.city.two[type].value
      }
      return this.city.two[type].value > this.city.one[type].value
    }
  },

  mounted () {
    const numeral = window.numeral
    let params = this.$route.hash.substr(1).split(',')

    this.city.one.name = params[0]
    this.city.two.name = params[1]

    this.city.one.homes.value = json.homes[params[0]]
    this.city.two.homes.value = json.homes[params[1]]

    this.city.one.operation.value = json.operation[this.city.one.name][0]
    this.city.two.operation.value = json.operation[this.city.two.name][0]

    this.city.one.jobs.value = json.spending[this.city.one.name][2]
    this.city.two.jobs.value = json.spending[this.city.two.name][2]

    this.city.one.contrib.value = json.construction[this.city.one.name][2]
    this.city.two.contrib.value = json.construction[this.city.two.name][2]

    this.city.one.supported.value = json.spending[this.city.one.name][4]
    this.city.two.supported.value = json.spending[this.city.two.name][4]

    this.city.one.spent.value = json.construction[this.city.one.name][1]
    this.city.two.spent.value = json.construction[this.city.two.name][1]

    this.city.one.power.value = json.spending[this.city.one.name][1]
    this.city.two.power.value = json.spending[this.city.two.name][1]

    for (let city of ['one', 'two']) {
      for (let index in this.city[city]) {
        if (index === 'name') { continue }
        this.city[city][index].formatted = Number.parseFloat(numeral(this.city[city][index].value).format('0.0a').slice(0, -1))
        this.city[city][index].multiplier = numeral(this.city[city][index].value).format('0.0a').slice(-1)
      }
    }

  },

  data () {

    return {
      city: {
        one: {
          name: null,
          homes: { value: 0, formatted: 0, multiplier: null },
          operation: { value: 0, formatted: 0, multiplier: null },
          jobs: { value: 0, formatted: 0, multiplier: null },
          contrib: { value: 0, formatted: 0, multiplier: null },
          supported: { value: 0, formatted: 0, multiplier: null },
          spent: { value: 0, formatted: 0, multiplier: null },
          power: { value: 0, formatted: 0, multiplier: null },
        },
        two: {
          name: null,
          homes: { value: 0, formatted: 0, multiplier: null },
          operation: { value: 0, formatted: 0, multiplier: null },
          jobs: { value: 0, formatted: 0, multiplier: null },
          contrib: { value: 0, formatted: 0, multiplier: null },
          supported: { value: 0, formatted: 0, multiplier: null },
          spent: { value: 0, formatted: 0, multiplier: null },
          power: { value: 0, formatted: 0, multiplier: null },
        },
      },
    }
  }
}
</script>
