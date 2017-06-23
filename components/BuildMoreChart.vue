<template lang="pug">
#BuildMoreChart
  .chart
    canvas(id="BuildMoreChart-chart",:width="width",:height="height")
</template>

<script>
import colors from '~/assets/colors.json'
import houseHolds from '~/store/US Apt HHs (Landing).json'
let numeral = require('numeral')
export default {

  data () {
    return {
      width: 770,
      height: 320,
    }
  }
}
</script>


<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
</style>
