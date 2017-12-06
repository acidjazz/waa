<template lang="pug">
.calculator
  .header
    .copy
      p Calculator
      p Calculate the economic contribution of an apartment community in your state or metro area below.
  .params
    .param
      .label: .copy type
      .options
        .option(@click="type = 'existing'",:class="{ selected: (type === 'existing')}")
          .checkbox: .fa.fa-check.fa-2x
          .copy Existing Apartment Community
        .option(@click="type = 'new'",:class="{ selected: (type === 'new')}")
          .checkbox: .fa.fa-check.fa-2x
          .copy Potential New Development
    .param
      .label: .copy number of homes
      .options
        .input
          input(type="number",placeholder="How many apartment homes?",v-model="number",:class="{ error: errors.number, success: errors.success.number }")
    .param
      .label: .copy calculate by
      .options(:class="{ error: errors.calculate, success: errors.success.calculate }")
        .pulldowns
          .pulldown(:class="{ selected: (by === 'metro') }")
            .checkbox: .fa.fa-check.fa-2x
            .pullarea
              .select.select_metro
                select(v-model="metro",@change="change('metro', $event.target.value)")
                  option(value="Metro Area") Metro Area
                  option(v-for="option in metros",:value="option",:selected="(option === metro)") {{ option }}
              .pull: .fa.fa-chevron-down

          .pulldown(:class="{ selected: (by === 'state') }")
            .checkbox: .fa.fa-check.fa-2x
            .pullarea
              .select.select_state
                select(v-model="state",@change="change('state', $event.target.value)")
                  option(selected,value="State") State
                  option(v-for="option in states",:value="option",:selected="option === state") {{ option }}
              .pull: .fa.fa-chevron-down
          .pulldown(:class="{ selected: (by === 'national') }",@click="change('national')")
            .checkbox: .fa.fa-check.fa-2x
            .pullarea
              .copy National

  router-link.cta(@click.native="decide()",:to="'/calculated#by-' + by + '-value-' + value + '-number-' + number + '-type-' + type") Calculate

  .fade(:class="{ on: $route.name === 'calculated', off: $route.name !== 'calculated'}")
  .calculated(:class="{ on: $route.name === 'calculated', off: $route.name !== 'calculated'}",v-on-clickaway="away")
    .inner
      .source Source: https://weareapartments.org/ {{ $route.path }}
      Share(query=true)
      router-link.close(:to="'/calculator' + $route.hash")
        .fa.fa-times.fa-2x

      .copy {{ subtitle }}
      .copy {{ title }}

      .data
        .inner
          .copy(v-if="type === 'existing'") Economic Impact of {{ number }} Existing Apartment Homes
          .copy(v-else) Economic Impact of {{ number }} New Apartment Homes

          .copy.copy_header Total Impact 
          .copy.copy_body The combined direct and indirect contribution of apartment construction, operations and resident spending to the state economy.

          .stat.colored.blue
            .copy Total Economic Impact
            .value {{ data.total.impact }}
            .clear

          .copy.copy_header Total Jobs 
          .copy.copy_body The total number of direct and indirect jobs supported by apartment construction, operations and resident spending within the state economy.

          .stat.colored.blue
            .copy Total Jobs Supported
            .value {{ data.total.jobs }}
            .clear

          .copy.copy_header Managing Apartments
          .copy.copy_body Apartment homes are economic engines, driving dollars and jobs that strengthen local communities.

          //.stat
            .copy Total Apartment Homes
            .value {{ data.homes }}
            .clear
          .stat
            .copy Operation Dollars Spent
            .value {{ data.operation.dollars }}
            .clear
          .stat
            .copy Direct On-site Jobs
            .value {{ data.operation.jobsOnsite }}
            .clear

          .stat.colored.tomato
            .copy Total Economic Contribution
            .value {{ data.operation.contribution }}
            .clear
          .stat
            .copy Total Jobs Supported
            .value {{ data.operation.jobs }}
            .clear

          .copy.copy_header(v-if="type === 'new'") Building Apartments
          .copy.copy_body(v-if="type === 'new'") Apartment construction continues as a bright spot in the economy, helping lead the housing recovery

          .stat.colored.yellow(v-if="type === 'new'")
            .copy Total Economic Contribution 
            .value {{ data.construction.contribution }}
            .clear
          .stat(v-if="type === 'new'")
            .copy Total Jobs Supported
            .value {{ data.construction.jobs }}
            .clear

          .copy.copy_header Living in Apartments
          .copy.copy_body Renting can be a smart choice for w ide range of individuals and faimilies across all income levels.  That's why a diverse array of people call apartments home.

          .stat
            .copy Spending Power
            .value {{ data.spending.dollars }}
            .clear
          .stat
            .copy Direct Jobs Supported
            .value {{ data.spending.jobsDirect }}
            .clear
          .stat.colored.green
            .copy Total Economic Contribution
            .value {{ data.spending.contribution }}
            .clear
          .stat
            .copy Total Jobs Supported
            .value  {{ data.spending.jobs }}
            .clear

          .logos
             img(src="/logo-nmhc.png")
             img(src="/logo-naa.png")
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/calculator.styl'
@import '../assets/stylus/calculator-mobile.styl'
</style>

<script>
import Share from '~/components/Share.vue'
import Filters from '~/static/Filters.json'
import { mixin as clickaway } from 'vue-clickaway'

const json = {
  homes: {
    'national': {},
    'state': {},
    'metro': {},
  },

  impact: {
    'state': {
      operation: {},
      construction: {},
      spending: {},
    },
    'metro': {
      operation: {},
      construction: {},
      spending: {},
    }
  },
}

json.homes.national  = require('../static/US Apts.json').data['Total U.S.']
json.homes.state  = require('../static/State Apartments.json').data
json.homes.metro  = require('../static/Metro Occupied Apartments.json').data

json.impact.state.operation = require('~/static/Operation Impacts.json').data
json.impact.state.construction = require('~/static/Construction Impacts.json').data
json.impact.state.spending = require('~/static/Spending Impacts.json').data

json.impact.metro.operation = require('~/static/Operation Impacts (metro).json').data
json.impact.metro.construction = require('~/static/Construction Impacts (metro).json').data
json.impact.metro.spending = require('~/static/Spending Impacts (metro).json').data

export default {

  mixins: [ clickaway ],

  components: { Share },

  watch: {
    number (n) {
      if (this.isNumeric(n)) {
        if (this.errors.number === true) {
          this.errors.success.number = true
        }
        this.errors.number = false
      } else {
        this.errors.success.number = false
      }
    },
    by (n) {

      if (this.errors.calculate === true && n !== null) {
        this.errors.success.calculate = true
      }
      if (n !== null) {
        this.errors.calculate = false
      }
    },
    '$route' () {
      this.populate()
      this.decide()
      this.hashv = this.$route.hash
    }
  },

  methods: {

    away () {
      if (this.$route.name === 'calculated') {
        this.$router.push('/calculator' + this.$route.hash)
      }
    },

    change (type, value) {

      if (type === 'metro') {
        if (this.metro === 'Metro Area') {
          this.by = null
          this.value = null
        } else {
          this.state = 'State'
          this.by = 'metro'
          this.value = value
          this.metro = value
        }
      }

      if (type === 'state') {
        if (this.state === 'State') {
          this.by = null
          this.value = null
        } else {
          this.metro = 'Metro Area'
          this.by = 'state'
          this.value = value
          this.state = value
        }
      }

      if (type === 'national') {
        this.national = true
        this.metro = 'Metro Area'
        this.state = 'State'
        this.by = 'national'
        this.value = 'national'
      }
    },

    isNumeric (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    },

    hash () {

      if (this.$route.hash !== '') {
        let params = this.$route.hash.split('-')
        this.by = params[1]
        this.value = params[3]
        this.number = params[5]
        this.type = params[7]
        if (this.by === 'state') {
          this.state = params[3]
        }
        if (this.by === 'metro') {
          this.metro = params[3]
        }
        this.hashv = this.$route.hash

        return true
      }

      let query = Object.keys(this.$route.query)[0]

      if (query !== undefined) {
        let params = query.split('-')
        this.by = params[1]
        this.value = params[3]
        this.number = params[5]
        this.type = params[7]
        if (this.by === 'state') {
          this.state = params[3]
        }
        if (this.by === 'metro') {
          this.metro = params[3]
        }
        this.hashv = this.$route.hash
      }

    },

    populate () {

      for (let key in Filters.data) {
        if (Filters.data[key].State !== undefined) {
          this.states.push(Filters.data[key].State.trim())
        }
        /*
        if (Filters.data[key].Metro !== undefined) {
          for (let metro of Filters.data[key].Metro.split(',')) {
            this.metros.push(metro.trim())
          }
        }
        */
      }
      // this.metros = Array.from(new Set(this.metros))
      let values = Object.keys(json.impact.metro.operation)
      values.shift()
      values.pop()
      this.metros = values
    },

    reset () {
      this.by = null
      this.value = null
      this.state = 'State'
      this.metro = 'Metro Area'
      this.number = null
      this.$route.hash = '#'
    },

    decide () {

      if (this.value !== null && this.by !== null && this.number !== null && this.$route.name === 'calculated') {
        this.calculate()
      }

      this.$router.beforeEach((to, from, next) => {

        if (to.name !== 'calculated') {
          next()
          return true
        }

        if (!this.isNumeric(this.number) || this.number === null || this.number === '') {
          this.errors.number = true
        }

        if (this.by === null) {
          this.errors.calculate = true
        }

        if (this.errors.number === true || this.errors.calculate === true) {
          return false
        }

        window.scrollTo(0, 120)
        next()

      })

    },

    calculate () {

      const numeral = window.numeral

      let value = this.value.trim()
      let by = this.by
      this.title = this.value

      switch (by) {
        case 'metro':
          this.subtitle = 'metro area'
          break
        case 'state':
          this.subtitle = 'state'
          break
        case 'national':
          this.title = 'United States'
          this.subtitle = 'national'
          break
      }

      console.log(this.by)
      if (this.by === 'national') {
        by = 'state'
        value = 'USA Total'
        this.data.homes = numeral(json.homes['national']).format('0,0')
      } else {
        this.data.homes = numeral(json.homes[by][value]).format('0,0')
        console.log(this.data.homes)
      }

      this.data.construction.dollars = numeral(
        this.number *
        json.impact[by].construction[value][1] /
        json.impact[by].construction[value][0]
      ).format('$0,0')

      this.data.construction.jobsOnsite = numeral(
        this.number *
        json.impact[by].construction[value][4] /
        json.impact[by].construction[value][0]
      ).format('0,0')

      this.data.construction.contribution = numeral(
        this.number *
        json.impact[by].construction[value][2] /
        json.impact[by].construction[value][0]
      ).format('$0,0')

      this.data.construction.jobs = numeral(
        this.number *
        json.impact[by].construction[value][5] /
        json.impact[by].construction[value][0]
      ).format('0,0')

      this.data.operation.dollars = numeral(
        this.number *
        json.impact[by].operation[value][0] /
        json.impact[by].operation[value][5]
      ).format('$0,0')

      this.data.operation.jobsOnsite = numeral(
        this.number *
        json.impact[by].operation[value][3] /
        json.impact[by].operation[value][5]
      ).format('0,0')

      this.data.operation.contribution = numeral(
        this.number *
        json.impact[by].operation[value][1] /
        json.impact[by].operation[value][5]
      ).format('$0,0')

      this.data.operation.jobs = numeral(
        this.number *
        json.impact[by].operation[value][4] /
        json.impact[by].operation[value][5]
      ).format('0,0')

      this.data.spending.dollars = numeral(
        this.number *
        json.impact[by].spending[value][1] /
        json.impact[by].spending[value][0]
      ).format('$0,0')

      this.data.spending.jobsDirect = numeral(
        this.number *
        json.impact[by].spending[value][2] /
        json.impact[by].spending[value][0]
      ).format('0,0')

      this.data.spending.contribution = numeral(
        this.number *
        json.impact[by].spending[value][3] /
        json.impact[by].spending[value][0]
      ).format('$0,0')

      this.data.spending.jobs = numeral(
        this.number *
        json.impact[by].spending[value][4] /
        json.impact[by].spending[value][0]
      ).format('0,0')

      this.data.total.impact =
        numeral(
          numeral(this.data.construction.contribution).value() +
          numeral(this.data.operation.contribution).value() +
          numeral(this.data.spending.contribution).value()
        ).format('$0,0')

      this.data.total.jobs =
        numeral(
          numeral(this.data.construction.jobs).value() +
          numeral(this.data.operation.jobs).value() +
          numeral(this.data.spending.jobs).value()
        ).format('0,0')
      if (this.type === 'existing') {
        this.data.total.impact =
          numeral(
            numeral(this.data.operation.contribution).value() +
            numeral(this.data.spending.contribution).value()
          ).format('$0,0')

        this.data.total.jobs =
          numeral(
            numeral(this.data.operation.jobs).value() +
            numeral(this.data.spending.jobs).value()
          ).format('0,0')
      }

    }

  },

  created () {
    this.populate()
    this.hash()
  },

  mounted () {
    this.decide()
  },
  head () {

    this.hash()

    if (this.$route.name === 'calculated') {

      let title = 'We are apartments:  Learn about the demand for apartments in your area'
      let description = 'Calculate the economic impact of new or existing apartment homes in your area'

      return {
        title: title,
        meta: [
          { hid: 'description', name: 'description', content: description },
          { hid: 'og:url', property: 'og:url', content: this.$route.path },
          { hid: 'og:title', property: 'og:title', content: title },
          { hid: 'og:description', property: 'og:description', content: description },
          { hid: 'twitter:title', name: 'twitter:title', content: title },
          { hid: 'twitter:description', name: 'twitter:description', content: description },
        ]

      }

    } else {
      return {}
    }

  },
  data () {
    return {
      hashv: this.$route.hash,
      subtitle: 'national',
      title: 'United States',
      errors: {
        number: false,
        calculate: false,
        success: {
          number: false,
          calculate: false
        }
      },
      states: [],
      metros: [],
      type: 'new',
      number: null,
      by: null,
      metro: 'Metro Area',
      state: 'State',
      value: null,
      national: false,
      data: {
        homes: 0,
        operation: {
          jobs: 0,
          jobsOnsite: 0,
          dollars: 0,
          contribution: 0,
        },
        construction: {
          jobs: 0,
          jobsOnsite: 0,
          dollars: 0,
          contribution: 0,
        },
        spending: {
          residents: '?',
          jobs: 0,
          jobsDirect: 0,
          dollars: 0,
          contribution: 0,
        },
        total: {
          impact: 0,
          jobs: 0,
        }
      }
    }
  }
}

</script>
