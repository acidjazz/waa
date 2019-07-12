<template lang="pug">
.flex.mb-12.flex-col.lg_flex-row-reverse.-px-4
  .lg_w-1_3(v-in-vp).vp-r.p-4
    .text-4xl.font-okib.font-bold.mb-2 Income and affordability
    .mb-6 Housing affordability is a growing problem. Housing costs continue to climb while incomes haven't kept up.
    .flex.items-center.text-xs.mb-2
      i.mdi.mdi-checkbox-blank-circle.text-deepsky.mr-2
      .font-okib.font-bold.uppercase affordability
    .flex.items-center.text-xs.mb-12
      i.mdi.mdi-checkbox-blank-circle.text-orange.mr-2
      .font-okib.font-bold.uppercase income
  .lg_w-1_3(v-in-vp).vp-r.border.border-seashell.rounded.m-2.p-2
      .font-bold.font-okib Median apartment income
      .font-bold.font-okib.mb-4 (2015 dollars)
      ChartIncome(:height="220")
  .lg_w-1_3(v-in-vp).vp-r.border.border-seashell.rounded.m-2.p-2
      .font-bold.font-okib.mb-4 Apartment HHS paying over 30% of income on housing
      .font-bold.font-okib.mb-4
      ChartAfford(:height="220")

</template>


<script>
import ChartIncome from '@/components/charts/ChartIncome'
import ChartAfford from '@/components/charts/ChartAfford'
export default {
  components: { ChartIncome, ChartAfford },
}
</script>
