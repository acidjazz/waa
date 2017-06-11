<template lang="pug">
  .circle-chart
    canvas(:id="'chart-' + id",:width="width",:height="height")
    .value {{ perc }}
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
import data from '~/store/US Housing Costs.json'
import datab from '~/store/US % Total Pop.json'
import datad from '~/store/District Apt Residents.json'
export default {

  props: ['id', 'width', 'height', 'value', 'district'],

  data () {
    return {
      perc: 0
    }
  },
  methods: {
    populate () {
      if (this.value === undefined) {
        this.perc = Math.round(data.data['Total U.S.'] * 100)
      } else {
        this.perc = this.value
      }

      if (this.id === 'ontherise') {
        this.perc = Math.round(datab.data['Total U.S.'][0] * 100)
      }

      if (this.id === 'metroresidents') {
        let json = require('../store/Metro Apt Residents.json')
        this.perc = Math.round(json.data[this.value][1] * 100)
      }

      if (this.district !== undefined) {
        this.perc = Math.round(datad.data[this.district][1] * 100)
      }

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
      let value = this.perc / 100 * hundo
      ctx.beginPath()
      ctx.arc(this.width / 2, this.width / 2, this.width / 3, 4.65, value + 4.65)
      ctx.strokeStyle = colors.orange
      ctx.lineWidth = 10
      ctx.setLineDash([0, 0])
      ctx.stroke()
    }
  },
  watch: {
    '$route' () {
      this.populate()
    }
  },
  mounted () {
    this.populate()
  }
}
</script>
