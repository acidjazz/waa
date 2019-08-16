<template lang="pug">
.flex.mb-12.flex-col
  .font-os.my-4(v-in-vp).vp-r NATIONAL DATA
  .text-4xl.font-okib.font-bold.mb-2(v-in-vp).vp-r We need to build more
  .text-3xl.mb-6.lg_w-2_3(v-in-vp).vp-r The country will need to build an average of 328,000 new apartment homes each year to keep up with demand. The industry averaged just 242,614 completions from 2011-2017.

  .flex.flex-col.lg_flex-row
    .lg_w-1_2.lg_mr-4
      .text-3xl.text-bolder.mb-6(v-in-vp).vp-r Median Apartment Income
      .mb-2.lg_h-40(v-in-vp).vp-r Rental housing has gotten more expensive to build and operate. At the same time, stagnant incomes have made it harder for people to pay for housing. In 2017 dollars, the median income of an apartment household has risen only marginally since 1985 and has fallen since 2001.
      .text-bolder(v-in-vp).vp-r Median apartment income (2015 dollars)
      ChartIncome(:height="220")
    .lg_w-1_2.lg_ml-4
      .text-3xl.text-bolder.mb-6(v-in-vp).vp-r Apartment Households
      .mb-2.lg_h-40(v-in-vp).vp-r Lack of income growth has led to an increasing number of renter households who are paying more than they can afford. The total share of cost-burdened apartment households (those paying more than thirty percent of their income on housing) increased steadily from 42 percent in 1985 to 54 percent in 2017.
      .text-bolder(v-in-vp).vp-r Apartment HHS paying over 30% of income on housing
      ChartAfford(:height="220")

  .flex.items-center.mt-8(v-in-vp).vp-r
    .text-xs.mr-4
      i.mdi.mdi-checkbox-blank-circle.text-deepsky.mr-2
      span.font-okib.font-bold.uppercase # of new apartment households per year
    .text-xs
      i.mdi.mdi-checkbox-blank-circle.text-orange.mr-2
      span.font-okib.font-bold.uppercase # of apartments built per year

</template>

<script>
import ChartIncome from '@/components/charts/ChartIncome'
import ChartAfford from '@/components/charts/ChartAfford'
export default {
  components: { ChartIncome, ChartAfford },
}
</script>
