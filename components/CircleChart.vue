<template lang="pug">
  .circle-chart
    canvas(:id="'chart-' + id",:width="width",:height="height")
    .value {{ value }}
      span %
</template>

<style lang="stylus">

json('../assets/colors.json')
json('../assets/fonts.json')

.circle-chart
  text-align center
  position relative
  > .value
    position absolute
    top 50%
    left 50%
    margin-top -30px
    margin-left -35px
    font h2b 
    text-align center
    margin-top -100px 0 45% 0
    > span
      font h2

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
    ctx.clearRect(0, 0, this.width, this.height)

    ctx.beginPath()
    ctx.arc(this.width / 2, this.width / 2, this.width / 3, 0, Math.PI * 2)
    ctx.strokeStyle = colors.lightgrey
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
