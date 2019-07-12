<template lang="pug">
.flex.mb-12.flex-col.lg_flex-row
  .lg_w-1_3(v-in-vp).vp-r
    .font-os.my-4 NATIONAL DATA
    .text-4xl.font-okib.font-bold.mb-2.lg_w-48 We need to build more
    .mb-6 The country will need to build an average of 328,000 new apartment homes each year to keep up with demand. The industry averaged just 242,614 completions from 2011-2017.
    .flex.items-center.text-xs.mb-2
      i.mdi.mdi-checkbox-blank-circle.text-deepsky.mr-2
      .font-okib.font-bold.uppercase # of new apartment households per year
    .flex.items-center.text-xs.mb-12
      i.mdi.mdi-checkbox-blank-circle.text-orange.mr-2
      .font-okib.font-bold.uppercase # of apartments built per year
  .lg_w-2_3(v-in-vp).vp-r.vp-d-1.border.border-seashell.rounded.p-4
    BuildMoreChart(:height="220")
</template>

<script>
import BuildMoreChart from '@/components/charts/BuildMoreChart'
export default {
  components: { BuildMoreChart },
}
</script>
