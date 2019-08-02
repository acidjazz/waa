<template lang="pug">
#RenterGrowth
  .text-2xl.font-bold.print_text-lg Renter Household Growth
  .text-bolder.text-3xl.print_text-xl {{ increase }}% Increase
  .text Forecasted by the year 2030
  .bar.w-16.h-1.bg-mountainmeadow.my-2.print_hidden
  .w-5_6
    GrowthChart(:current="current",:future="future",:height="140")
</template>

<script>
import data from '@/mixins/data'
import GrowthChart from '@/components/charts/GrowthChart'
export default {
  components: { GrowthChart },
  mixins: [ data ],

  computed: {
    current () {
      if (this.area.type === 'state')
        return this.populationState[this.area.key][2016]
      if (this.area.type === 'metro')
        return this.populationMetro[2016][this.area.key]
      return this.populationUS[2016]
    },
    future () {
      if (this.area.type === 'state')
        return this.populationState[this.area.key][2030]
      if (this.area.type === 'metro')
        return this.populationMetro[2030][this.area.key]
      return this.populationUS[2030]
    },
    increase () {
      if (this.area.type === 'national')
        return 10
      if (this.area.type === 'state')
        return Math.round(this.populationState[this.area.key].Percent_Change*100)
      if (this.area.type === 'metro')
        return Math.round(this.populationMetro[2016][this.area.key] /
          this.populationMetro[2030][this.area.key]*10)
      return 0
    },
  },

}
</script>
