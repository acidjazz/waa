<template lang="pug">
#RenterGrowth.my-4
  .flex.items-center.my-4
    .w-2.h-2.mr-4.bg-trueblue
    .text-2xl.font-bold.text-steel Renter Household Growth
  .text-bolder.text-3xl {{ increase }}% Increase
  .text Forecasted by the year 2030
  .bar.w-16.h-1.bg-mountainmeadow.my-2
  GrowthChart(:current="current",:future="future",:height="200").w-full
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
    },
  },

  mounted () {
    console.log(this.current, this.future)
    console.log(this.populationMetro)
    /*
    console.log(this.populationUS[2016])
    console.log(this.populationUS[2030])
    console.log(this.populationMetro)
    */
  }

}
</script>
