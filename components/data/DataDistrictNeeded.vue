<template lang="pug">
#DataDistrictNeeded.text-center
  .text-bolder.text-3xl.mb-4 New Apartments Needed
  .mx-16
    .text-lg.mb-2 Apartment demand is growing and the industry needs to keep up. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions.
    .text-lg
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
