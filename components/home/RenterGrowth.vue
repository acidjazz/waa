<template>
  <offset-section>
    <div class="flex flex-col lg_flex-row">
      <div v-in-vp class="mr-0 lg_mr-12 w-full lg_w-1_3 vp-r vp-d-4">
        <div class="font-os mb-4">NATIONAL DATA</div>
        <div class="text-2xl font-bold print_text-lg">Renter Household Growth</div>
        <div class="text-bolder text-3xl print_text-xl">{{ increase }}% Increase</div>
        <div class="text mb-4">Forecasted by the year 2030</div>
        <div class="text">The country needs to build 328,000 new apartment homes each year to meet demand.</div>
      </div>
      <div v-in-vp class="w-full lg_w-3_4 vp-r vp-d-5">
        <div class="chart w-full">
          <growth-chart :current="current" :future="future" :height="140" />
        </div>
      </div>
    </div>
  </offset-section>
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import data from '@/mixins/data'
import GrowthChart from '@/components/charts/GrowthChart'
export default {
  components: { OffsetSection, GrowthChart },
  mixins: [ data ],
  computed: {
    current () { return this.populationUS[2016] },
    future () { return this.populationUS[2030] },
    increase () { return 10 },
  },
}
</script>
