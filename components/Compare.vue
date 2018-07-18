<template lang="pug">
doctype
#Compare
  .fade(:class="{ on: calculated, off: !calculated }")
  .outer
    .modal(:class="{ on: calculated, off: !calculated }")
      .close(to="/data",@click="reset()")
        .fa.fa-times.fa-2x
      .copy we are apartments
      .copy Your Metro Comparison
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
            td(:class="{ higher: compare('one', 'homes')}")
              .fa.fa-check
              i-count-up(:end="city.one.homes.formatted",:decimals="1")
              span {{ city.one.homes.multiplier }}
            td(:class="{ higher: compare('two', 'homes')}")
              .fa.fa-check
              i-count-up(:end="city.two.homes.formatted",:decimals="1")
              span {{ city.two.homes.multiplier }}
          tr
            td Operation Dollars Spent
            td(:class="{ higher: compare('one', 'operation') }")
              .fa.fa-check
              span $
              i-count-up(:end="city.one.operation.formatted",:decimals="1")
              span {{ city.one.operation.multiplier }}
            td(:class="{ higher: compare('two', 'operation') }")
              .fa.fa-check
              span $
              i-count-up(:end="city.two.operation.formatted",:decimals="1")
              span {{ city.two.operation.multiplier }}
          tr
            td Direct On-Site Jobs
            td(:class="{ higher: compare('one', 'jobs') }")
              .fa.fa-check
              i-count-up(:end="city.one.jobs.formatted",:decimals="1")
              span {{ city.one.jobs.multiplier }}
            td(:class="{ higher: compare('two', 'jobs') }")
              .fa.fa-check
              i-count-up(:end="city.two.jobs.formatted",:decimals="1")
              span {{ city.two.jobs.multiplier }}
          tr
            td Total Economic Contribution
            td(:class="{ higher: compare('one', 'contrib') }")
              .fa.fa-check
              span $
              i-count-up(:end="city.one.contrib.formatted",:decimals="1")
              span {{ city.one.contrib.multiplier }}
            td(:class="{ higher: compare('two', 'contrib') }")
              .fa.fa-check
              span $
              i-count-up(:end="city.two.contrib.formatted",:decimals="1")
              span {{ city.two.contrib.multiplier }}
          tr
            td Total Jobs Supported
            td(:class="{ higher: compare('one', 'supported') }")
              .fa.fa-check
              i-count-up(:end="city.one.supported.formatted",:decimals="1")
              span {{ city.one.supported.multiplier }}
            td(:class="{ higher: compare('two', 'supported') }")
              .fa.fa-check
              i-count-up(:end="city.two.supported.formatted",:decimals="1")
              span {{ city.two.supported.multiplier }}
          tr
            td Construction Dollars Spent
            td(:class="{ higher: compare('one', 'spent')}")
              .fa.fa-check
              span $
              i-count-up(:end="city.one.spent.formatted",:decimals="1")
              span {{ city.one.spent.multiplier }}
            td(:class="{ higher: compare('two', 'spent')}")
              .fa.fa-check
              span $
              i-count-up(:end="city.two.spent.formatted",:decimals="1")
              span {{ city.two.spent.multiplier }}
          tr
            td Spending Power
            td(:class="{ higher: compare('one', 'power')}")
              .fa.fa-check
              span $
              i-count-up(:end="city.one.power.formatted",:decimals="1")
              span {{ city.one.power.multiplier }}
            td(:class="{ higher: compare('two', 'power')}")
              .fa.fa-check
              span $
              i-count-up(:end="city.two.power.formatted",:decimals="1")
              span {{ city.two.power.multiplier }}

  .inner
    .section.section_right
      img(src="/data.png")
    .section.section_left

      .title(v-in-viewport) Compare Your Metro
      .copy(v-in-viewport) Enter two cities names in order to compare them
      .inputs(v-in-viewport)
        input(
          placeholder="City One",
          v-model="city.one.name",
          @keydown.down="key('down', 'one')",
          @keydown.up="key('up', 'one')",
          @keydown.enter="key('enter', 'one')",
          :class="{ matching: this.city.one.matching }"
        )
        .suggest(:class="{ off: suggest.one.matches.length < 1, on: suggest.one.matches.length > 0 }")
          ul
            li(
              v-for="city, index in suggest.one.matches",
              :class="{ selected: suggest.one.selected === index}",
              @click="choose('one', city)",
            ) {{ city }}
        input(
          placeholder="City Two",
          v-model="city.two.name"
          @keydown.down="key('down', 'two')",
          @keydown.up="key('up', 'two')",
          @keydown.enter="key('enter', 'two')",
          :class="{ matching: this.city.two.matching }"
        )
        .suggest(:class="{ off: suggest.two.matches.length < 1, on: suggest.two.matches.length > 0 }")
          ul
            li(
              v-for="city, index in suggest.two.matches",
              :class="{ selected: suggest.two.selected === index}",
              @click="choose('two', city)",
            ) {{ city }}

      .cta(v-in-viewport)
        input(
        type="submit",
        value="compare",
        :class="{ active: this.city.one.matching === true && this.city.two.matching === true }",
        @click="calculate()",
        @keydown.enter="calculate()"
      )

    .clear
</template>
<script>
import Filters from '../static/Filters.json'
import inViewportDirective from 'vue-in-viewport-directive'
import ICountUp from 'vue-countup-v2'
let metros = require('~/static/Operation Impacts (metro).json').data

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
  components: { ICountUp },
  methods: {

    reset () {

      let defaults = { value: 0, formatted: 0, multiplier: null }

      for (let city of ['one', 'two']) {
        for (let index in this.city[city]) {
          if (index === 'name' || index === 'matching') { continue }
          this.city[city][index].value = 0
          this.city[city][index].formatted = 0
          this.city[city][index].multiplier = null
        }
      }

      this.calculated = false

    },

    compare (city, type) {

      if (city === 'one') {
        return this.city.one[type].value > this.city.two[type].value
      }

      return this.city.two[type].value > this.city.one[type].value

    },

    calculate () {

      if (!this.city.one.matching || !this.city.two.matching) {
        return true
      }

      this.city.one.homes.value = json.homes[this.city.one.name]
      this.city.two.homes.value = json.homes[this.city.two.name]

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

      const numeral = window.numeral

      for (let city of ['one', 'two']) {
        for (let index in this.city[city]) {
          if (index === 'name' || index === 'matching') { continue }
          this.city[city][index].formatted = Number.parseFloat(numeral(this.city[city][index].value).format('0.0a').slice(0, -1))
          this.city[city][index].multiplier = numeral(this.city[city][index].value).format('0.0a').slice(-1)
        }
      }

      this.calculated = true

    },

    populate () {
      let values = Object.keys(metros)
      values.shift()
      values.pop()
      this.metros = values
    },

    key (dir, input) {
      switch (dir) {
        case 'down' :
          if (this.suggest[input].selected === (this.suggest[input].matches.length - 1)) {
            this.suggest[input].selected = 0
          } else {
            this.suggest[input].selected++
          }
          break
        case 'up' :
          if (this.suggest[input].selected  === 0) {
            this.suggest[input].selected = (this.suggest[input].matches.length - 1)
          } else {
            this.suggest[input].selected--
          }
          break
        case 'enter' :
          if (this.suggest[input].matches.length > 0) {
            this.city[input].name = this.suggest[input].matches[this.suggest[input].selected]
          }
          break
      }
      return true
    },

    choose (input, name) {
      this.city[input].name = name
    },

    update (input) {

      this.suggest[input].matches = []
      this.city[input].matching = false

      if (this.city[input].name.length < 1) {
        return true
      }

      if (this.metros.indexOf(this.city[input].name) > -1) {
        this.city[input].matching = true
        return true
      }

      let matches = this.metros.map((metro) => {
        if (metro.toUpperCase().indexOf(this.city[input].name.toUpperCase()) === 0) {
          this.suggest[input].matches.push(metro)
        }
      })

      this.suggest[input].selected = 0

    },

  },

  created () {
    this.populate()
  },

  watch: {
    'city.one.name' () {
      this.update('one')
    },
    'city.two.name' () {
      this.update('two')
    },
  },

  data () {
    return {
      calculated: false,
      metros: [],
      city: {
        one: {
          name: null,
          matching: false,
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
          matching: false,
          homes: { value: 0, formatted: 0, multiplier: null },
          operation: { value: 0, formatted: 0, multiplier: null },
          jobs: { value: 0, formatted: 0, multiplier: null },
          contrib: { value: 0, formatted: 0, multiplier: null },
          supported: { value: 0, formatted: 0, multiplier: null },
          spent: { value: 0, formatted: 0, multiplier: null },
          power: { value: 0, formatted: 0, multiplier: null },
        }
      },
      suggest: {
        one: {
          matches: [],
          selected: 0,
        },
        two:  {
          matches: [],
          selected: 0,
        },
      },
    }
  }

}
</script>

<style lang="stylus">
@import '../assets/stylus/mixins'
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../../assets/stylus/compare.styl'
@media all and (min-width: 1px) and (max-width: 1000px)
  #Compare
    display none
</style>
