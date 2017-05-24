<template lang="pug">
  #DataSummary
    .inner
      .copy National Data
      .copy Apartments and their residents contribute more than $3.5 billion to the economy every day.
      .stats
        .stat
          .value 38.8
          .copy Million Apartment Residents
        .stat
          .value 20.4
          .copy Million Apartment Homes
        .stat
          .value $1.3
          .copy Trillion Dollars Economic Contribution
        .stat
          .value 12.3
          .copy Total Jobs Supported
        .clear
</template>

<script>
export default {
  data () {
    return {}
  }
}

</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#DataSummary
  background-color darkblue
  color white
  padding 60px 0
  text-align center
  > .inner
    > .copy:first-child
      font-size 30px
    > .copy
      padding 0 0 30px 0

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
          font h2
          padding 0 0 30px 0

</style>
