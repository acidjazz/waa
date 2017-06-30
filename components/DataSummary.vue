<template lang="pug">
#DataSummary(:class="{ filtersSticky: filtersSticky }")
  .inner
    .breadcrumb(v-if="choice().type == 'national'") national data
    .breadcrumb(v-if="choice().type == 'state'") state data
    .breadcrumb(v-if="choice().type == 'metro'") {{ choice().state }}
    .breadcrumb(v-if="choice().type == 'district'") {{ choice().state }}
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

const residentsUS = '/US Apt Residents.json'
const residentsState = '/State Apt Residents.json'
const residentsMetro = '/Metro Apt Residents.json'
const residentsDistrict = '/District Apt Residents.json'

const homesUS = '/US Apts.json'
const homesState = '/State Apartments.json'
const homesMetro = '/Metro Occupied Apartments.json'
const homesDistrict = '/District Occupied Apts.json'

const contribUS = '/US Economic Contribution.json'
const contribState = '/State Economic Contribution.json'
const contribMetro = '/Metro Economic Contribution.json'
const contribDistrict = '/District Economic Contribution.json'

const jobsUS = '/US Jobs.json'
const jobsState = '/State Jobs.json'
const jobsMetro = '/Metro Jobs.json'
const jobsDistrict = '/District Total Jobs.json'

export default {
  mixins: [ filtermixin ],

  methods: {

    json (sheets, result) {
      let gets = []
      for (let key in sheets) {
        gets.push(window.axios.get(sheets[key]))
      }
      window.axios.all(gets).then(response => {
        result(response)
      })
    },

    value (text) {
      return Number(text.toString().replace(/\$,k,b,m,\./, ''))
    },
    populate () {
      const numeral = window.numeral
      switch (this.choice().type) {
        case 'national':
          this.json([residentsUS, homesUS, contribUS, jobsUS], (result) => {
            this.residents = numeral(result[0].data.data['Total U.S.']).format('0.0a')
            this.homes = numeral(result[1].data.data['Total U.S.']).format('0.0a')
            this.contrib = numeral(result[2].data.data['Total U.S.']).format('0.0a')
            this.jobs = numeral(result[3].data.data['Total U.S.']).format('0.0a')
          })
          break
        case 'state':
          this.json([residentsState, homesState, contribState, jobsState], (result) => {
            this.residents = numeral(result[0].data.data[this.choice().value]).format('0.0a')
            this.homes = numeral(result[1].data.data[this.choice().value]).format('0.0a')
            this.contrib = numeral(result[2].data.data[this.choice().value]).format('0.0a')
            this.jobs = numeral(result[3].data.data[this.choice().value]).format('0.0a')
          })
          break
        case 'district':
          this.json([residentsDistrict, homesDistrict, contribDistrict, jobsDistrict], (result) => {
            this.residents = numeral(result[0].data.data[this.choice().value][0]).format('0.0a')
            this.homes = numeral(result[1].data.data[this.choice().value]).format('0.0a')
            this.contrib = numeral(result[2].data.data[this.choice().value]).format('0.0a')
            this.jobs = numeral(result[3].data.data[this.choice().value]).format('0.0a')
          })
          break
        case 'metro':
          this.json([residentsMetro, homesMetro, contribMetro, jobsMetro], (result) => {
            this.residents = numeral(result[0].data.data[this.choice().value][0]).format('0.0a')
            this.homes = numeral(result[1].data.data[this.choice().value]).format('0.0a')
            this.contrib = numeral(result[2].data.data[this.choice().value]).format('0.0a')
            this.jobs = numeral(result[3].data.data[this.choice().value]).format('0.0a')
          })
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
