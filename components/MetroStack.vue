<template lang="pug">
#MetroStack
  .inner
    .title Stacking up the Metros
    .copy Based on specific factors like local regulations and available land to develop, the Barriers to Apartment Construction Index ranks 50 metro areas on how hard it is to add new apartments. See how your city stacks up. 
    .metros
      .copy Barriers to Apartment Construction Index
      .list
        .metro(v-for="value, key in metros")
          .value.value_red(v-if="value > 5.0") {{ value }}
          .value.value_orange(v-if="value < 5.0 && value > 1.6") {{ value }}
          .value.value_green(v-if="value <= 1.6") {{ value }}
          router-link.name(:to="'/data/metro/' + key.trim().toLowerCase().replace(/ /g, '-')") {{ key }}
</template>

<script>
import restrictIndex from '~/store/Metro Restriction Index.json'
let numeral = require('numeral')
export default {
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
      let sorted = this.sort(restrictIndex.data)
      for (let key in sorted) {
        this.metros[key] = numeral(sorted[key]).format('0.0a')
      }
    }
  },
  created () {
    this.populate()
  },
  data () {
    return {
      metros: {}
    }
  }
}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#MetroStack
  padding 60px 0
  > .inner
    > .title
      font h1
      text-align center
      padding 0 0 30px 0
    > .copy
      text-align center
      color grey
      width 560px
      margin auto
      padding 0 0 60px 0
    > .metros
      width 900px
      margin auto
      border-top 1px solid lightgrey
      padding-top 60px
      > .copy
        font c1b
        text-transform uppercase
        text-align center
        padding 0 0 30px 0
      > .list
        column-count 4
        column-gap 30px
        > .metro
          > .value
            float left
            width 50px
            font c1b
            &.value_red
              color red
            &.value_orange
              color orange
            &.value_green
              color green
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
