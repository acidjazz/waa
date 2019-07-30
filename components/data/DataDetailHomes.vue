<template lang="pug">
#DataDetailsHomes
  .text-bolder.text-6xl.print_hidden: VueCountUp(:endVal="count_val(apartments)",:options="count_opts(apartments)")
  .text-bolder.text-3xl.hidden.print_block {{ apartments | numeral }}
  .text-bolder.text-2xl Apartment Homes
  .my-8.h-24.print_my-2.print_h-16.print_text-sm
    | The operation of {{ loc_copy }}'s apartment homes contributes
    .data-val ${{ contribution.Property_Economic_Impact | numeral }}
    | to the local economy each year (including
    .data-val ${{ contribution.Tax_Economic_Impact | numeral }}
    | in property taxes), creating
    .data-val {{ contribution.Property_Employment_Impact | numeral }}
    | jobs
</template>


<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ], }
</script>
