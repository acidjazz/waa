<template>
  <div class="flex mb-12 flex-col lg_flex-row-reverse -px-4">
    <div v-in-vp class="lg_w-1_3 vp-r p-4">
      <div class="text-4xl font-okib font-bold mb-2">Income and affordability</div>
      <div class="mb-6">Housing affordability is a growing problem. Housing costs continue to climb while incomes haven't kept up.</div>
      <div class="flex items-center text-xs mb-2">
        <icon icon="mdi:checkbox-blank-circle" class="text-deepsky mr-2" />
        <div class="font-okib font-bold uppercase">affordability</div>
      </div>
      <div class="flex items-center text-xs mb-12">
        <icon icon="mdi:checkbox-blank-circle" class="text-orange mr-2" />
        <div class="font-okib font-bold uppercase">income</div>
      </div>
    </div>
    <div v-in-vp class="lg_w-1_3 vp-r border border-seashell rounded m-2">
      <div class="font-bold font-okib px-2 pt-2">Median apartment income</div>
      <div class="font-bold font-okib mb-4 px-2 pb-2">(2015 dollars)</div>
      <chart-income :height="220" />
    </div>
    <div v-in-vp class="lg_w-1_3 vp-r border border-seashell rounded m-2">
      <div class="font-bold font-okib mb-4 p-2">Apartment HHS paying over 30% of income on housing</div>
      <chart-afford :height="220" />
    </div>
  </div>
</template>


<script>
import ChartIncome from '@/components/charts/ChartIncome'
import ChartAfford from '@/components/charts/ChartAfford'
export default {
  components: { ChartIncome, ChartAfford },
}
</script>
