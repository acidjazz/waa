<template lang="pug">
#DataSummary(:class="{ filtersSticky: filtersSticky }")
  .inner
    .breadcrumb(v-if="choice().type == 'national'") national data
    .breadcrumb(v-if="choice().type == 'state'") state data
    .breadcrumb(v-if="choice().type == 'metro'") metro data
    .breadcrumb(v-if="choice().type == 'district'") district data
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
      .stat(v-if="value(contrib) !== 0")
        .value ${{ contrib }}
        .copy Economic Contribution
      .stat(v-if="value(contrib) !== 0")
        .value {{ jobs }}
        .copy Total Jobs Supported
        .clear
</template>

<script>

import filtermixin from '~plugins/filter-mixin.js'

import residentsUS from '../store/US Apt Residents.json'
import residentsState from '../store/State Apt Residents.json'
import residentsMetro from '../store/Metro Apt Residents.json'
import residentsDistrict from '../store/District Apt Residents.json'

import homesUS from '../store/US Apts.json'
import homesState from '../store/State Apartments.json'
import homesMetro from '../store/Metro Occupied Apartments.json'
import homesDistrict from '../store/District Occupied Apts.json'

import contribUS from '../store/US Economic Contribution.json'
import contribState from '../store/State Economic Contribution.json'
import contribMetro from '../store/Metro Economic Contribution.json'
import contribDistrict from '../store/District Economic Contribution.json'

import jobsUS from '../store/US Jobs.json'
import jobsState from '../store/State Jobs.json'
import jobsMetro from '../store/Metro Jobs.json'
import jobsDistrict from '../store/District Total Jobs.json'

export default {
  mixins: [ filtermixin ],

  methods: {

    value (text) {
      return text
    },
    populate () {
      const numeral = window.numeral
      switch (this.choice().type) {
        case 'national':
          this.residents = numeral(residentsUS.data['Total U.S.']).format('0.0a')
          this.homes = numeral(homesUS.data['Total U.S.']).format('0.0a')
          this.contrib = numeral(contribUS.data['Total U.S.']).format('0.0a')
          this.jobs = numeral(jobsUS.data['Total U.S.']).format('0.0a')
          break
        case 'state':
          this.residents = numeral(residentsState.data[this.choice().value]).format('0.0a')
          this.homes = numeral(homesState.data[this.choice().value]).format('0.0a')
          this.contrib = numeral(contribState.data[this.choice().value]).format('0.0a')
          this.jobs = numeral(jobsState.data[this.choice().value]).format('0.0a')
          break
        case 'district':
          this.residents = numeral(residentsDistrict.data[this.choice().value][0]).format('0.0a')
          this.homes = numeral(homesDistrict.data[this.choice().value]).format('0.0a')
          this.contrib = numeral(contribDistrict.data[this.choice().value]).format('0.0a')
          this.jobs = numeral(jobsDistrict.data[this.choice().value]).format('0.0a')
          break
        case 'metro':
          this.residents = numeral(residentsMetro.data[this.choice().value][0]).format('0.0a')
          this.homes = numeral(homesMetro.data[this.choice().value]).format('0.0a')
          this.contrib = numeral(contribMetro.data[this.choice().value]).format('0.0a')
          this.jobs = numeral(jobsMetro.data[this.choice().value]).format('0.0a')
          break
      }
    }
  },
  mounted () {
    this.populate()
  },
  watch: {
    '$route' () {
      this.populate()
    },
    '$store.state.sticky' () {
      this.filtersSticky = this.$store.state.sticky
    },
  },

  computed: {
    selection () {
      return this.choice().copy
    }
  },

  data () {
    return {
      filtersSticky: this.$store.state.sticky,
      residents: 0,
      homes: 0,
      contrib: 0,
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
  &.filtersSticky
    margin 340px 0 0 0
  > .inner
    background linear-gradient(-67deg, rgba(#0099ff, 0.7), rgba(#00cccc, 0.7))
    background-size 200% 200%
    animation gradients 3s ease infinite
    padding 60px 0
    > .breadcrumb
      font c1sb
      text-transform uppercase
      padding 0 0 20px 0
    > .copy:nth-child(2)
      font-size 30px
      animation fadeIn 0.2s ease-in-out 0s both
      z-index 1
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
        border-right 1px solid white
        &:last-child
          border-right none
        > .value
          font h5
          padding 0 0 30px 0
          animation fadeIn 0.2s ease-in-out 0s both
        for i in 1..4
          &:nth-child({i}) > .value
            animation-delay unit((0.02*i) + 0.1, 's')

@import '../assets/stylus/datasummary-mobile.styl'
@keyframes gradients
  0%
    background-position 0% 14%
  50%
    background-position 100% 87%
  100%
    background-position 0% 14%


</style>
