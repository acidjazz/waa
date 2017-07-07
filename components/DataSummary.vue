<template lang="pug">
#DataSummary(:class="{ filtersSticky: filtersSticky }")
  .bars
    .bar
    .bar
    .bar
  .inner
    .breadcrumb(v-if="choice().type == 'national'") national data
    .breadcrumb(v-if="choice().type == 'state'") state data
    .breadcrumb(v-if="choice().type == 'metro'") {{ choice().state }}
    .breadcrumb(v-if="choice().type == 'district'") {{ choice().state }}
    .copy {{ selection }}
    .copy Apartments and their residents contribute more than $3.5 billion to the economy every day.
    .copy_print Market Snapshot
    .stats
      .stat(v-if="residents.value !== 0")
        .value
          i-count-up.number(:start="0",:end="residents.value",:decimals="1",:duration="2")
          span {{ residents.a }}
        .copy Apartment Residents
      .stat(v-if="homes.value !== 0")
        .value
          i-count-up.number(:start="0",:end="homes.value",:decimals="1",:duration="2")
          span {{ homes.a }}
        .copy Apartment Homes
      .stat(v-if="contrib.value !== 0")
        .value
          span $
          i-count-up.number(:start="0",:end="contrib.value",:decimals="1",:duration="2")
          span {{ contrib.a }}
        .copy Economic Contribution
      .stat(v-if="contrib.value !== 0")
        .value
          i-count-up.number(:start="0",:end="jobs.value",:decimals="1",:duration="2")
          span {{ jobs.a }}
        .copy Total Jobs Supported
        .clear
</template>

<script>
import filtermixin from '~plugins/filter-mixin.js'
import ICountUp from 'vue-countup-v2'

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
  components: { ICountUp },

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
    parse (integer, format) {
      const numeral = window.numeral
      let number = numeral(integer).format(format)
      return {
        value: Number(number.slice(0, -1)),
        a: number[number.length - 1],
      }
    },
    value (text) {
      return Number(text.toString().replace(/\$,k,b,m,\./, ''))
    },
    populate () {
      const numeral = window.numeral
      switch (this.choice().type) {
        case 'national':
          this.json([residentsUS, homesUS, contribUS, jobsUS], (result) => {
            this.residents = this.parse(result[0].data.data['Total U.S.'], '0.0a')
            this.homes = this.parse(result[1].data.data['Total U.S.'], '0.0a')
            this.contrib = this.parse(result[2].data.data['Total U.S.'], '0.0a')
            this.jobs = this.parse(result[3].data.data['Total U.S.'], '0.0a')
          })
          break
        case 'state':
          this.json([residentsState, homesState, contribState, jobsState], (result) => {
            this.residents = this.parse(result[0].data.data[this.choice().value], '0.0a')
            this.homes = this.parse(result[1].data.data[this.choice().value], '0.0a')
            this.contrib = this.parse(result[2].data.data[this.choice().value], '0.0a')
            this.jobs = this.parse(result[3].data.data[this.choice().value], '0.0a')
          })
          break
        case 'district':
          this.json([residentsDistrict, homesDistrict, contribDistrict, jobsDistrict], (result) => {
            this.residents = this.parse(result[0].data.data[this.choice().value][0], '0.0a')
            this.homes = this.parse(result[1].data.data[this.choice().value], '0.0a')
            this.contrib = this.parse(result[2].data.data[this.choice().value], '0.0a')
            this.jobs = this.parse(result[3].data.data[this.choice().value], '0.0a')
          })
          break
        case 'metro':
          this.json([residentsMetro, homesMetro, contribMetro, jobsMetro], (result) => {
            this.residents = this.parse(result[0].data.data[this.choice().value][0], '0.0a')
            this.homes = this.parse(result[1].data.data[this.choice().value], '0.0a')
            this.contrib = this.parse(result[2].data.data[this.choice().value], '0.0a')
            this.jobs = this.parse(result[3].data.data[this.choice().value], '0.0a')
          })
          break
      }
    }
  },
  mounted () {
    setTimeout(() => {
      this.populate()
    }, 800)
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

      residents: { value: 0, a: null },
      homes: { value: 0, a: null },
      contrib: { value: 0, a: null },
      jobs: { value: 0, a: null },

    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
@import '../assets/stylus/keyframes.styl'
#DataSummary
  // background url('~static/building.jpg')
  color white
  text-align center
  position relative
  overflow hidden
  > .bars
    position absolute
    fullsize()
    > .bar
      background-color white
      height 33.3333%
      width 100%
      &:nth-child(1)
        animation barToLeft 1s cubic-bezier(.99,.05,.3,.88) 0.4s both
      &:nth-child(2)
        animation barToRight 1s cubic-bezier(.99,.05,.3,.88) 0.3s both
      &:nth-child(3)
        animation barToLeft 1s cubic-bezier(.99,.05,.3,.88) 0.4s both
  &.filtersSticky
    margin 340px 0 0 0
  > .inner
    background linear-gradient(-67deg, rgba(#0099ff, 1), rgba(#00cccc, 1))
    background-size 130% 130%
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
      height 160px
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
