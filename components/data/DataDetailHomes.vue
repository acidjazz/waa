<template>
  <div id="DataDetailsHomes" class="lg:h-64 print:h-48 flex flex-col">
    <div class="text-bolder text-6xl print:hidden">
      <VueCountUp :end-val="count_val(apartments)" :options="count_opts(apartments)" />
    </div>
    <div class="text-bolder text-3xl hidden print:block">{{ apartments | numeral }}</div>
    <div class="text-bolder text-2xl">Apartment Homes</div>
    <div class="my-6 lg:mt-6 print:mt-2 print:my-2 print:text-sm">
      The operation of {{ loc_copy }}'s apartment homes contributes
      <div class="data-val">${{ contribution.Property_Economic_Impact | numeral }}</div>to the local economy each year (including
      <div class="data-val">${{ contribution.Tax_Economic_Impact | numeral }}</div>in property taxes), creating
      <div class="data-val">{{ contribution.Property_Employment_Impact | numeral('0,0a') }}</div>jobs.
    </div>
  </div>
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ] }
</script>
