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
          input(type="number",placeholder="How many apartment homes?",v-model="number")
    .param
      .label: .copy calculate
      .options
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
                select(v-model="state")
                  option(selected,value="State") State
                  option(v-for="state in states") {{ state }}
          .pulldown(:class="{ selected: (national === true) }",@click="national = true;metro = 'Metro Area'; state = 'State'; by = 'national'; value = 'national'")
            .checkbox: .fa.fa-check
            .pullarea
              .copy National
  router-link.cta(:to="'/calculated#by-' + by + '-value-' + value + '-number-' + number + '-type' + type") Calculate
  .fade(:class="{ on: ($route.name === 'calculated'), off: ($route.name !== 'calculated')}")
  .calculated(:class="{ on: ($route.name === 'calculated'), off: ($route.name !== 'calculated')}")
    .inner
      .close
        router-link.fa.fa-times.fa-2x(:to="'/calculator' + $route.hash")

      .copy(v-if="by === 'metro'") metro area
      .copy(v-if="by === 'state'") state
      .copy(v-if="by === 'national'") National
      .copy {{ value }}

      .data
        .inner
          .copy Economic Impact of {{ number }} New Apartment Homes
          .copy.copy_header Managing Apartments
          .copy.copy_body Apartment homes are economic engines, driving dollars and jobs that strengthen local communities.

          .copy Total Apartment Homes 
            b 20,378,207
          .copy Operaition Dollars Spent 
            b $69,058,231,708
          .copy DIrect On-site Jobs 
            b 468,955

          .stat
            .copy Total Apartment Homes
            .value 20,378,207
            .clear
          .stat
            .copy Operation Dollars Spent
            .value $69,058,231,708
            .clear
          .stat
            .copy Direct On-site Jobs
            .value 468,955
            .clear

          .stat.colored.tomato
            .copy Total Economic Contribution
            .value $190,739,000,000
            .clear
          .stat
            .copy Total Jobs Supported
            .value 1,510,302
            .clear

          .copy.copy_header Building Apartments
          .copy.copy_body Apartment construction continues as a bright spot in the economy, helping lead the housing recovery

          .stat
            .copy Construction Dollars Spent
            .value 20,378,207
            .clear
          .stat
            .copy On-site Jobs
            .value $69,058,231,708
            .clear
          .stat.colored.yellow
            .copy Total Economic Contribution 
            .value $92,555,382,497
            .clear
          .stat
            .copy Total Jobs Supported
            .value 702,482
            .clear

          .copy.copy_header Living in Apartments
          .copy.copy_body Renting can be a smart choice for w ide range of individuals and faimilies across all income levels.  That's why a diverse array of people call apartments home.

          .stat.colored.green
            .copy Apartment Residents
            .value 38,791,276
            .clear
          .stat
            .copy Spending Power
            .value $405,970,000,000
          .stat
            .copy Direct Jobs Supported
            .value 3,571,319
          .stat
            .copy Total Economic Contribution
            .value $1,028,930,000,000
          .stat
            .copy Total Jobs Supported
            .value 10,082,905
            .clear




</template>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/calculator.styl'
</style>

<script>
import Filters from '~/store/Filters.json'
export default {

  methods: {

    hash () {

      if (this.$route.hash !== '') {
        let params = this.$route.hash.split('-')
        console.log(params)
        this.by = params[1]
        this.value = params[3]
        this.number = params[5]
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
    }
  },

  mounted () {
    this.hash()
    this.populate()
    console.log(this.$route)
  },
  data () {
    return {
      states: [],
      metros: [],
      type: 'new',
      number: null,
      by: null,
      metro: 'Metro Area',
      state: 'State',
      value: null,
      national: false,
    }
  }
}
</script>

