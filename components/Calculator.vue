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
          .pulldown(:class="{ selected: (metro !== 'Metro Area') }",@change="state = 'State'; national = false")
            .checkbox: .fa.fa-check
            .pullarea
              .pull: .fa.fa-chevron-down
              .select.select_metro
                select(v-model="metro")
                  option(selected,value="Metro Area") Metro Area
                  option(v-for="metro in metros",:value="metro") {{ metro }}
          .pulldown(:class="{ selected: (state !== 'State') }",@change="metro = 'Metro Area'; national = false")
            .checkbox: .fa.fa-check
            .pullarea
              .pull: .fa.fa-chevron-down
              .select.select_state
                select(v-model="state")
                  option(selected,value="State") State
                  option(v-for="state in states") {{ state }}
          .pulldown(:class="{ selected: (national === true) }",@click="national = true;metro = 'Metro Area'; state = 'State'")
            .checkbox: .fa.fa-check
            .pullarea
              .pull: .fa.fa-chevron-down
              .copy National
  .cta calculate
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
  },
  mounted () {
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
  data () {
    return {
      states: [],
      metros: [],
      type: 'new',
      number: null,
      metro: 'Metro Area',
      state: 'State',
      national: false,
    }
  }
}
</script>

