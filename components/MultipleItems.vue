<template lang="pug">
#MultipleItems
  .inner
    .copy Multiple Items
    .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
    .border.small
    .items
      .item
        #DollarsEarned
          .value 1.3
          .copy Trillian Dollars Earned
          .copy economic contribution
          .copy Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
      .item
        .copy TBD
        PercChart
      .item
        .copy apartment households
        CircleChart(id="renters",width="300",height="300",value="70")
      .clear

</template>
<script>
import BarChart from '~/components/BarChart.vue'
import CircleChart from '~/components/CircleChart.vue'
import PercChart from '~/components/PercChart.vue'
export default {
  components: {
    BarChart, CircleChart, PercChart
  }
}
</script>
<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
#MultipleItems
  > .inner
    padding 60px 0
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
      > .item
        float left
        width 300px
        height 400px
        margin-right 27px
        border 1px solid lightblue
        border-radius 3px
        &:nth-child(3)
          margin-right 0px
        > .copy
          padding 20px 0 0 20px
          text-transform uppercase

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
    color red
    text-transform uppercase
  > .copy:nth-child(4)
    color grey
</style>
