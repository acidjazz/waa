<template lang="pug">
.calculator
  .header
    .icon
      .inner
    .copy
      p Calculate
      p The economic contribution of an apartment community in your state or metro area
  .params
    .param
      .label: .copy type
      .options
        .option(@click="type = 'existing'",:class="{ selected: (type === 'existing')}")
          .checkbox: .fa.fa-check
          .copy Existing Apartment Community
        .option(@click="type = 'new'",:class="{ selected: (type === 'new')}")
          .checkbox: .fa.fa-check
          .copy Potential New Development
    .param
      .label: .copy number
      .options
        .input
          input(type="number",placeholder="How many apartment homes?",v-model="number",:class="{ error: errors.number }")
    .param
      .label: .copy calculate
      .options(:class="{ error: errors.calculate }")
        .copy Calculate By:
        .pulldowns
          .pulldown(:class="{ selected: (by === 'metro') }",@change="state = 'State'; by = 'metro'; value = metro")
            .checkbox: .fa.fa-check
            .pullarea
              .pull: .fa.fa-chevron-down
              .select.select_metro
                select(v-model="metro")
                  option(value="Metro Area") Metro Area
                  option(v-for="option in metros",:value="option",selected,v-if="option === metro") {{ option }}
                  option(v-for="option in metros",:value="option",v-else) {{ option }}

          .pulldown(:class="{ selected: (by === 'state') }",@change="metro = 'Metro Area'; national = false; by = 'state'; value = state")
            .checkbox: .fa.fa-check
            .pullarea
              .pull: .fa.fa-chevron-down
              .select.select_state
                select(v-model="state",v-if="browser()")
                  option(selected,value="State") State
                  option(v-for="option in states",:value="option",selected,v-if="option === state") {{ option }}
                  option(v-for="option in states",:value="option",v-else) {{ option }}
          .pulldown(:class="{ selected: (by === 'national') }",@click="national = true;metro = 'Metro Area'; state = 'State'; by = 'national'; value = 'national'")
            .checkbox: .fa.fa-check
            .pullarea
              .copy National
  router-link.cta(:to="'/calculated#by-' + by + '-value-' + value + '-number-' + number + '-type-' + type") Calculate

  .fade(:class="{ on: ($route.name === 'calculated'), off: ($route.name !== 'calculated')}")
  .calculated(:class="{ on: ($route.name === 'calculated'), off: ($route.name !== 'calculated')}",v-if="browser()")

    .inner
      .source Source: https://weareapartments.org/ {{ $route.path }}
      router-link.close(:to="'/calculator' + $route.hash")
        .fa.fa-times.fa-2x

      .copy(v-if="by === 'metro'") metro area
      .copy(v-if="by === 'state'") state
      .copy(v-if="by === 'national'") National
      .copy(v-if="by !== 'national'") {{ value }}
      .copy(v-else) United States

      .data
        .inner
          .copy Economic Impact of {{ number }} New Apartment Homes
          .copy.copy_header Managing Apartments
          .copy.copy_body Apartment homes are economic engines, driving dollars and jobs that strengthen local communities.

          
          //.copy Total Apartment Homes &nbsp;
            b {{ data.homes }}
          //-.copy Operation Dollars Spent &nbsp;
            b $69,058,231,708
          //.copy DIrect On-site Jobs &nbsp;
            b 468,955

          .stat
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

          .stat(v-if="type === 'new'")
            .copy Construction Dollars Spent
            .value {{ data.construction.dollars }}
            .clear
          .stat(v-if="type === 'new'")
            .copy On-site Jobs
            .value {{ data.construction.jobsOnsite }}
            .clear
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

          //.stat
            .copy Apartment Residents
            .value {{ data.spending.residents }}
            .clear
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
</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/calculator.styl'
</style>

<script>

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

import Filters from '~/store/Filters.json'

json.homes.national  = require('../store/US Apts.json').data['Total U.S.']
json.homes.state  = require('../store/State Apartments.json').data
json.homes.metro  = require('../store/Metro Occupied Apartments.json').data

json.impact.state.operation = require('~/store/Operation Impacts.json').data
json.impact.state.construction = require('~/store/Construction Impacts.json').data
json.impact.state.spending = require('~/store/Spending Impacts.json').data

json.impact.metro.operation = require('~/store/Operation Impacts (metro).json').data
json.impact.metro.construction = require('~/store/Construction Impacts (metro).json').data
json.impact.metro.spending = require('~/store/Spending Impacts (metro).json').data

let numeral = require('numeral')

export default {

  watch: {
    number (n) {
      if (this.isNumeric(n)) {
        this.errors.number = false
      }
    },
    by (n) {
      if (n !== null) {
        this.errors.calculate = false
      }
    }

  },

  methods: {

    isNumeric (n) {
      return !isNaN(parseFloat(n)) && isFinite(n)
    },

    browser () {
      return process.BROWSER_BUILD
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
        if (this.by === 'state') {
          this.metro = params[3]
        }
      }
    },

    populate () {
      for (let key in Filters.data) {
        if (Filters.data[key].State !== undefined) {
          this.states.push(Filters.data[key].State)
        }
        if (Filters.data[key].Metro !== undefined) {
          for (let metro of Filters.data[key].Metro.split(',')) {
            this.metros.push(metro)
          }
        }
      }
    },

    calculate () {

      let value = this.value.trim()
      let by = this.by

      if (this.by === 'national') {
        by = 'state'
        value = 'USA Total'
        this.data.homes = numeral(json.homes['national']).format('0,0')
      } else {
        this.data.homes = numeral(json.homes[by][value]).format('0,0')
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

      // this.data.spending.residents = numeral(json.impact[this.by].spending[value][0]).format('0,0')

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
    if (this.value !== null && this.by !== null && this.number !== null && this.$route.name === 'calculated') {
      this.calculate()
    }

    this.$router.beforeEach((to, from, next) => {

      if (!this.isNumeric(this.number)) {
        this.errors.number = true
      }

      if (this.by === null) {
        this.errors.calculate = true
      }

      if (this.errors.number === true && this.errors.calculate === true) {
        return false
      }

      next()

    })
  },
  data () {
    return {
      errors: {
        number: false,
        calculate: false,
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

