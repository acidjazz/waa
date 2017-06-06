<template lang="pug">
  #DataSummary
    .inner
      .copy {{ choice().value }}
      .copy Apartments and their residents contribute more than $3.5 billion to the economy every day.
      .copy_print Market Snapshot
      .stats
        .stat
          .value 38.8m
          .copy Million Apartment Residents
        .stat
          .value 20.4m
          .copy Million Apartment Homes
        .stat
          .value 1.3t
          .copy Trillion Dollars Economic Contribution
        .stat
          .value 12.3m
          .copy Total Jobs Supported
        .clear
</template>

<script>
import filtermixin from '~plugins/filter-mixin.js'
export default {
  mixins: [ filtermixin ],
  data () {
    return {}
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
      animation inFromTop 0.2s ease-in-out 0s both
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

</style>
