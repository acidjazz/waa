<template lang="pug">
  .circle-chart
    canvas(:id="'chart-' + id",:width="width",:height="height")
    .value {{ value }}
      span %
    .copy Of Apartment Renters
    .copy Are spending over 30% of income on apartment rental
</template>

<style lang="stylus">

json('../assets/colors.json')
json('../assets/fonts.json')

.circle-chart
  text-align center
  > .value
    font h2b 
    text-align center
    margin-top -65%
    > span
      font h2
  > .copy:nth-child(3)
    width 120px
    margin auto
    color grey
  > .copy:nth-child(4)
    margin 20% 0 0 0
    color grey

</style>

<script>

import colors from '~/assets/colors.json'
export default {

  props: ['id', 'width', 'height', 'value'],

  data () {
    return {}
  },

  mounted () {
    let canvas = document.getElementById('chart-' + this.id)
    let ctx = canvas.getContext('2d')

    ctx.beginPath()
    ctx.arc(this.width / 2, this.width / 2, this.width / 3, 0, Math.PI * 2)
    ctx.strokeStyle = colors.grey
    ctx.lineWidth = 5
    ctx.setLineDash([10, 10])
    ctx.stroke()

    let hundo = Math.PI * 2
    let value = this.value / 100 * hundo
    ctx.beginPath()
    ctx.arc(this.width / 2, this.width / 2, this.width / 3, 4.65, value + 4.65)
    ctx.strokeStyle = colors.orange
    ctx.lineWidth = 10
    ctx.setLineDash([0, 0])
    ctx.stroke()
  }

}
</script>
