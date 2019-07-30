<template lang="pug">
#DataDistrictNeeded.text-center
  .text-bolder.text-3xl.mb-4.print_text-2xl.print_mb-2 New Apartments Needed
  .mx-16
    .text-lg.print_text-sm.mb-2.print_mb-0 Apartment demand is growing and the industry needs to keep up. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions.
    .text-lg.print_text-sm
      | The construction of every 100 apartment units in your district contributes
      .data-val ${{ contribution.Construction_Economic_Impact | numeral }}
      | and
      .data-val {{ contribution.Construction_Employment_Impact | numeral }}
      | jobs to the state economy.
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ] }
</script>
