<template lang="pug">
doctype
#MetroStack
  .inner
    VertBorder
    .title(v-in-viewport) Barriers to New Apartments
    .copy(v-in-viewport) Based on specific factors like local regulations and available land to develop, the Barriers to Apartment Construction Index ranks 50 metro areas on how hard it is to build new apartments. See how your city stacks up.
    .copy2(v-in-viewport) Multifamily supply restrictions index
    HeatChart(v-if="choice.type === 'metro' && this.choice.value !== 'Ann Arbor'",:metro="this.choice.value")
    .copy3.has-text-centered(v-if="choice.type === 'metro' && this.choice.value !== 'Ann Arbor'") {{ choice.value }}

    .metros(v-in-viewport)
      .list
        .metro(v-for="value, key in metros")
          i-count-up.value(:startVal=0,:endVal="metros[key]", :class="{ value_grey: loading === true, value_red: value > 5.0, value_orange: value < 5.0 && value > 1.6, value_green: value <= 1.6 }")
          router-link.name(:to="'/data/metro/' + key.trim().toLowerCase().replace(/ /g, '-')") {{ key }}
</template>

<script>
import restrictIndex from '~/static/Metro Restriction Index.json'
import ICountUp from 'vue-countup-v2'
import inViewportDirective from 'vue-in-viewport-directive'
import inViewport from 'vue-in-viewport-mixin'
import VertBorder from '~/components/VertBorder'
import HeatChart from '~/components/HeatChart'
export default {
  props: [ 'choice' ],
  components: { ICountUp, VertBorder, HeatChart },
  directives: { 'in-viewport': inViewportDirective },
  mixins: [ inViewport ],
  methods: {
    sort (object) {
      let sortable = []
      let sorted = {}
      for (let key in object) {
        sortable.push([key, object[key]])
      }
      sortable.sort((a, b) => {
        return b[1] - a[1]
      })
      for (let key in sortable) {
        sorted[sortable[key][0]] = object[sortable[key][0]]
      }
      return sorted
    },
    populate () {
      this.loading = false
      let sorted = this.sort(restrictIndex.data)
      for (let key in sorted) {
        this.metros[key] = Number(sorted[key].toFixed(2))
      }
    },
    zeros () {
      this.loading = true
      let sorted = this.sort(restrictIndex.data)
      for (let key in sorted) {
        this.metros[key] = 0
      }
    }
  },
  created () {
    if (this.browser) {
      this.zeros()
    } else {
      this.populate()
    }
  },
  watch: {
    'inViewport.now' (visible) {
      if (!this.browser) {
        return true
      }
      if (visible) {
        setTimeout(() => {
          this.populate()
        }, 1000)
      } else {
        this.zeros()
      }
    }
  },
  data () {
    return {
      metros: this.sort(restrictIndex.data),
      end: 0,
      loading: true,
      browser: process.browser,
    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#MetroStack
  padding 90px 0
  > .inner
    > .title
      font h1
      text-align center
      padding 30px 0 0 0
      &.below-viewport
        opacity 0
        transform translate(0, 20px)
      &.in-viewport
        opacity 1
        transform translate(0, 0)
        transition opacity 1s ease-in-out 0s, transform 1s ease-in-out 0s
    > .copy
      text-align center
      color grey
      width 500px
      margin auto
      padding 30px 0 0 0
      &.below-viewport
        opacity 0
        transform translate(0, 20px)
      &.in-viewport
        opacity 1
        transform translate(0, 0)
        transition opacity 1s ease-in-out 0.1s, transform 1s ease-in-out 0.1s
    > .copy2
      font c1b
      text-transform uppercase
      text-align center
      padding 30px 0
      &.below-viewport
        opacity 0
        transform translate(0, 20px)
      &.in-viewport
        opacity 1
        transform translate(0, 0)
        transition opacity 1s ease-in-out 0.1s, transform 1s ease-in-out 0.1s
    > .copy3
      font h3b
    > .metros
      width 900px
      margin auto
      padding-top 60px
      &.below-viewport
        opacity 0
        transform translate(0, 20px)
      &.in-viewport
        opacity 1
        transform translate(0, 0)
        transition opacity 1s ease-in-out 0s, transform 1s ease-in-out 0s
      > .list
        column-count 4
        column-gap 30px
        > .metro
          > .value
            float left
            width 50px
            font c1b
            transition color 1s linear 0s
            &.value_red
              color red
            &.value_orange
              color orange
            &.value_green
              color green
            &.value_grey
              color grey !important
          > .name
            color black
            text-decoration none
            transition color 0.1s ease 0s, text-decoration 0.1s ease 0.05s
            &:hover
              color blue
              text-decoration underline
@media all and (min-width: 1px) and (max-width: 1000px)
  #MetroStack
    padding 60px 20px
    > .inner
      > .copy
        width auto
      > .metros
        width auto
        > .copy
          font c1sb
        > .list
          column-count 2
          column-gap 16px
          > .metro
            > .name, > .value
              font c1s
</style>
