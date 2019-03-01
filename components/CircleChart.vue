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
    transform translate(-50%, -50%)
    font h2b
    text-align center
    > span
      font h2

</style>

<script>

import colors from '~/assets/colors.json'

const data = 'US Housing Costs.json'
const datab = 'US % Total Pop.json'
const databs = 'State Apt Residents.json'
const databm = 'Metro % of Total HHs.json'
const datad = 'District Apt Residents.json'
const datam = 'Metro Apt Residents.json'

export default {

  props: ['id', 'width', 'height', 'value', 'district', 'choice', 'animation'],

  methods: {
    json (sheet, result) {
      window.axios.get('/' + encodeURIComponent(sheet))
        .then(response => {
          result(response)
        })
    },

    populate (complete) {
      /*
      if (this.value === undefined) {
        this.json(data, (result) => {
          this.perc = Math.round(result.data.data['Total U.S.'] * 100)
          console.log('undef', this.perc)
          complete()
        })
      } else {
        this.perc = this.value
        console.log('value', this.perc)
        complete()
      }
      */

      if (this.value !== undefined) {
        this.perc = this.value
        return complete()
      }

      if (this.district === undefined && this.choice.type === 'state') {
        this.json(databs, (result) => {
          this.perc = Math.round(result.data.data[this.choice.value][1] * 100)
          complete()
        })
        return
      }

      if (this.district === undefined && this.choice.type === 'metro') {
        this.json(datam, (result) => {
          this.perc = Math.round(result.data.data[this.choice.value][1] * 100)
          complete()
        })
        return
      }

      if (this.id === 'ontherise' || this.id === 'ontherise-print') {
        this.json(datab, (result) => {
          this.perc = Math.round(result.data.data['Total U.S.'][0] * 100)
          complete()
        })
        return
      }

      if (this.id === 'metroresidents') {
        this.json(datam, (result) => {
          this.perc = Math.round(result.data.data[this.value][1] * 100)
          complete()
        })
        return
      }

      if (this.district !== undefined) {
        this.json(datad, (result) => {
          this.perc = Math.round(result.data.data[this.district][1] * 100)
          complete()
        })
      }

    },

    draw () {

      let canvas = document.getElementById('chart-' + this.id)
      let ctx = canvas.getContext('2d')
      ctx.clearRect(0, 0, this.width, this.height)

      ctx.beginPath()
      ctx.arc(this.width / 2, this.width / 2, this.width / 3, 0, Math.PI * 2)
      ctx.strokeStyle = colors.silver
      ctx.lineWidth = 20
      // ctx.setLineDash([10, 10])
      ctx.stroke()

      let hundo = Math.PI * 2
      let value = this.perc / 100 * hundo
      ctx.beginPath()
      ctx.arc(this.width / 2, this.width / 2, this.width / 3, 4.65, value + 4.65)
      ctx.strokeStyle = colors.orange
      ctx.lineWidth = 20
      ctx.setLineDash([0, 0])
      ctx.stroke()
    },
    populateDraw () {
      this.populate(() => this.draw())
    },

  },
  watch: {
    '$route' () {
      this.populateDraw()
    }
  },
  mounted () {
    this.populateDraw()
  },
  data () {
    return {
      perc: 0,
    }
  },

}
</script>
