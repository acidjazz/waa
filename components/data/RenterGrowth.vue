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
import growth from '@/mixins/growth'
import GrowthChart from '@/components/charts/GrowthChart'
export default {
  components: { GrowthChart },
  mixins: [ data, growth ],
}
</script>
