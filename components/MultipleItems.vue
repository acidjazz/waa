<template lang="pug">
#MultipleItems
  .inner
    // .copy Multiple Items
    // .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
    //.border.small
    .items(:class="{ double: choice.type === 'state' || choice.type === 'metro' }")
      .item(v-if="choice.type === 'national'")
        .copy economic contribution
        #DollarsEarned
          .value {{ contrib }}
          .copy Dollars Earned
          .copy The apartment industry and its residents contribute $1.3t to the economy each year.
      .item
        .copy year apartment built
        PercChart(:metro="choice.value",v-if="choice.type === 'metro'")
        PercChart(:choice="choice",v-else)
      .item
        .copy apartment residents
        CircleChart(id="metroresidents",width="300",height="300",:value="choice.value",v-if="choice.type === 'metro'")
        CircleChart(id="ontherise",width="300",height="300",v-else)
        .copy(v-if="choice.type === 'national'") Of the country calls<br /> an apartment home
        .copy(v-if="choice.type === 'state'") Of the state calls<br /> an apartment home
        .copy(v-if="choice.type === 'metro'") Of the metro calls<br /> an apartment home
        .copy(v-if="choice.type === 'district'") Of the district calls<br /> an apartment home
      .clear

    .copys(:class="{ double: choice.type === 'state' || choice.type === 'metro' }")
      .copyarea(v-if="choice.type === 'national'")
        .copy Dollars and Jobs
        .copy The construction, operations and resident spending supports more than 12 million jobs nationwide, with an economic contribution that is $3.5 billion every day. 
      .copyarea
        .copy Supply at Risk
        .copy The nation's apartment stock is aging, with about half built before 1980. Without resources to support rehabilitation and preservation efforts, the current supply-demand imbalance will worsen, affecting affordability.
      .copyarea
        .copy Renting on the Rise
        .copy Many people call apartments home. They  appreciate mortgage-free living, the ability to follow new work opportunities and amenities that fit their lifestyles.  
      .clear

</template>
<script>

import contribUS from '../static/US Economic Contribution.json'

import BarChart from '~/components/BarChart.vue'
import CircleChart from '~/components/CircleChart.vue'
import PercChart from '~/components/PercChart.vue'

const numeral = window.numeral

export default {
  props: [ 'choice' ],
  components: {
    BarChart, CircleChart, PercChart
  },
  methods: {
    populate () {
      this.contrib = numeral(contribUS.data['Total U.S.']).format('$0.0a')
    }
  },
  created () {
    this.populate()
  },
  data () {
    return {
      contrib: 0,
    }
  },
  watch: {
    '$route' () {
      this.populate()
    }
  }
}
</script>
<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#MultipleItems
  > .inner
    padding 90px 0
    > .copy:first-child
      text-align center
      font h2
    > .copy:nth-child(2)
      text-align center
      color grey
      width 300px
      margin auto
      padding 30px 0 0 0
    > .border
        width 600px
        margin 30px auto
    > .items
      width 960px
      margin auto
      &.double
        width 670px
        > .item:nth-child(2)
          float right
      > .item
        float left
        width 300px
        height 400px
        margin-right 27px
        border 1px solid lightgrey
        border-radius 3px
        &:nth-child(3)
          margin-right 0px
        > .copy:first-child
          padding 20px 0 0 20px
          text-transform uppercase
          font c1sb
          color darkblue
        > .copy:nth-child(3)
          text-align center
          color grey
          margin -20px 0 0 0
    > .copys
      width 960px
      margin auto
      &.double
        width 670px
        > .copyarea:nth-child(2)
          float right
      > .copyarea
        float left
        width 300px
        margin-right 27px
        margin-top 20px
        &:nth-child(3)
          margin-right 0px
        > .copy:first-child
          font h3
          padding 0 0 10px 0
        > .copy:nth-child(2)
          color grey

#DollarsEarned
  padding 40px
  > .value
    color red
    font h4
    text-align center
  > .copy:nth-child(2)
    padding 0 0 30px 0
    text-align center
  > .copy:nth-child(3)
    color grey
  > .copy:nth-child(4)
    color grey

@import '../assets/stylus/multipleitems-mobile.styl'

</style>
