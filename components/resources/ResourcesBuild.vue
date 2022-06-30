<template>
  <div class="flex mb-12 flex-col">
    <div v-in-vp class="font-os my-4 vp-r">NATIONAL DATA</div>
    <div v-in-vp class="text-4xl font-okib font-bold mb-2 vp-r">We need to build more</div>
    <div v-in-vp class="text-3xl mb-6 vp-r">The country needs to build 328,000 new apartment homes each year to meet demand. Yet, the industry averaged just 255,000 annual completions from 2011-2018. If this demand goes unmet, existing affordability issues will only be exacerbated.</div>
    <div class="flex flex-col lg:flex-row">
      <div class="lg:w-1/2 lg:mr-4">
        <div v-in-vp class="text-3xl text-bolder mb-6 vp-r">Median Apartment Income</div>
        <div v-in-vp class="mb-2 lg:h-40 vp-r">Rental housing has gotten more expensive to build and operate. At the same time, stagnant incomes have made it harder for people to pay for housing. In 2017 dollars, the median income of an apartment household has risen only marginally since 1985 and has fallen since 2001.</div>
        <div v-in-vp class="text-bolder vp-r">Median apartment income (2015 dollars)</div>
        <chart-income :height="220" />
      </div>
      <div class="lg:w-1/2 lg:ml-4">
        <div v-in-vp class="text-3xl text-bolder mb-6 vp-r">Apartment Households</div>
        <div v-in-vp class="mb-2 lg:h-40 vp-r">Lack of income growth has led to an increasing number of renter households who are paying more than they can afford. The total share of cost-burdened apartment households (those paying more than thirty percent of their income on housing) increased steadily from 42 percent in 1985 to 54 percent in 2017.</div>
        <div v-in-vp class="text-bolder vp-r">Apartment HHS paying over 30% of income on housing</div>
        <chart-afford :height="220" />
      </div>
    </div>
    <div v-in-vp class="flex items-center mt-8 vp-r">
      <div class="text-xs mr-4"><i class="mdi mdi-checkbox-blank-circle text-deepsky mr-2" /><span class="font-okib font-bold uppercase"># of new apartment households per year</span></div>
      <div class="text-xs"><i class="mdi mdi-checkbox-blank-circle text-orange mr-2" /><span class="font-okib font-bold uppercase"># of apartments built per year</span></div>
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
