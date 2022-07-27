<template>
  <div id="RenterGrowth">
    <div class="text-2xl font-bold print_text-lg">Renter Household Growth</div>
    <div class="text-bolder text-3xl print_text-xl">{{ increase }}% Increase</div>
    <div class="text">Forecasted by the year 2030</div>
    <div class="bar w-16 h-1 bg-mountainmeadow my-2 print_hidden" />
    <div class="w-5_6">
      <growth-chart :current="current" :future="future" :height="140" />
    </div>
  </div>
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
