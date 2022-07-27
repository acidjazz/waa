<template>
  <offset-section>
    <div class="flex flex-col lg_flex-row">
      <div v-in-vp class="mr-0 lg_mr-12 w-full lg_w-1_3 vp-r vp-d-4">
        <div class="font-os mb-4">NATIONAL DATA</div>
        <div class="text-3xl font-bold mb-4">The Demand</div>
        <div class="text-xl font-bold mb-4">4.6 million new apartment homes needed in the U.S. by the year 2020</div>
        <div class="text-black">Population growth, immigration and changing lifestyle preferences mean more people will be living in apartments in the future. The challenge, however, is building the number of apartment homes to meet that growing demand.</div>
      </div>
      <div v-in-vp class="w-full lg_w-3_4 vp-r vp-d-5">
        <div class="chart w-full">
          <demand-chart :height="230" />
        </div>
      </div>
    </div>
  </offset-section>
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import DemandChart from '@/components/charts/DemandChart'
export default {
  components: { OffsetSection, DemandChart },
}
</script>
