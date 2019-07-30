<template lang="pug">
#DataDetailResidents
  .text-bolder.text-6xl.print_hidden: VueCountUp(:endVal="count_val(residents)",:options="count_opts(residents)")
  .text-bolder.text-3xl.hidden.print_block {{ format(residents) }}
  .text-bolder.text-2xl Apartment Residents
  .my-8.h-24.print_my-2.print_h-16.print_text-sm
    | Spending from {{ loc_copy }}'s apartment residents contributes
    .data-val ${{ format(contribution.Renter_Economic_Impact) }}
    | to the local economy each year (including
    .data-val ${{ format(contribution.Spending_Economic_Impact) }}
    | in taxes), creating
    .data-val {{ format(contribution.Renter_Employment_Impact) }}
    | jobs
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ] }
</script>
