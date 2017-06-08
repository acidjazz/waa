<template lang="pug">
  #DataSummary
    .inner
      .copy {{ selection }}
      .copy Apartments and their residents contribute more than $3.5 billion to the economy every day.
      .copy_print Market Snapshot
      .stats
        .stat
          .value {{ residents }}
          .copy Apartment Residents
        .stat
          .value {{ homes }}
          .copy Apartment Homes
        .stat
          .value 1.3t
          .copy Economic Contribution
        .stat
          .value 12.3m
          .copy Total Jobs Supported
        .clear
</template>

<script>

/*
Residents
---------
US Apt Residents
State Apt Residents
Metro Apt Residents
District Apt Residents

Homes
-----
US Apts
State Apartments
Metro Occupied Apartments
District Occupied Apartments

Contribution
------------
US Economic Contribution
State Economic Contribution
Metro Economic Contribution
District Economic Contribution
*/

import filtermixin from '~plugins/filter-mixin.js'

import residentsUS from '../store/US Apt Residents.json'
import residentsState from '../store/State Apt Residents.json'
import residentsMetro from '../store/Metro Apt Residents.json'
import residentsDistrict from '../store/District Apt Residents.json'

import homesUS from '../store/US Apts.json'
import homesState from '../store/State Apartments.json'
import homesMetro from '../store/Metro Occupied Apartments.json'
import homesDistrict from '../store/District Occupied Apts.json'

console.log(residentsDistrict.data)

let numeral = require('numeral')

export default {
  mixins: [ filtermixin ],

  methods: {
    populate () {
      switch (this.choice().type) {
        case 'national':
          this.residents = numeral(residentsUS.data['Total U.S.']).format('0.0a')
          this.homes = numeral(homesUS.data['Total U.S.']).format('0.0a')
          break
        case 'state':
          this.residents = numeral(residentsState.data[this.choice().value]).format('0.0a')
          this.homes = numeral(homesState.data[this.choice().value]).format('0.0a')
          break
        case 'district':
          this.residents = numeral(residentsDistrict.data[this.choice().value]).format('0.0a')
          this.homes = numeral(homesDistrict.data[this.choice().value]).format('0.0a')
          break
      }
    }
  },
  created () {
    this.populate()
  },
  watch: {
    '$route' () {
      this.populate()
    }
  },

  computed: {
    selection () {
      return this.choice().value
    }
  },

  data () {
    return {
      residents: 0,
      homes: 0,
      contribution: 0,
      jobs: 0,
    }
  }
}

</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#DataSummary
  background url('~static/building.jpg')
  color white
  text-align center
  > .inner
    background-color rgba(darkblue, 0.9)
    padding 60px 0
    > .copy:first-child
      font-size 30px
      animation fadeIn 0.2s ease-in-out 0s both
    > .copy
      padding 0 0 30px 0
    > .copy_print
      display none
    > .stats
      > .stat
        padding 30px 
        height 100px
        max-width 170px
        vertical-align top
        display inline-block
        &:first-child, &:nth-child(2), &:nth-child(3)
          border-right 1px solid white
        > .value
          font h5
          padding 0 0 30px 0
          animation fadeIn 0.2s ease-in-out 0.3s both

</style>
