<template>
  <div v-if="building > 0" id="DataDetailNeeded" class="text-center">
    <div v-if="building" class="text-bolder text-6xl print:hidden">
      <VueCountUp :end-val="count_val(building, '0,0a')" :options="count_opts(building, '', 0, '0,0a')" />
    </div>
    <div v-if="building" class="text-bolder text-3xl hidden print:block">{{ building | numeral('0,0a') }}</div>
    <div v-if="building" class="text-bolder text-2xl">New Apartments Needed Annually</div>
    <div v-else class="text-bolder text-2xl mt-8">New Apartments Needed</div>
    <div class="my-8 print:my-2 print:text-sm" />
    <div class="text-lg print:text-sm mb-2 print:mb-0">Apartment demand is growing and the industry needs to keep up. However, producing enough new apartments to meet demand requires new development approaches, more incentives and fewer restrictions.</div>
    <div v-if="area.district" class="text-lg print:text-sm">
      The construction of every 100 apartment units in your district contributes
      <div class="data-val">${{ contribution.Construction_Economic_Impact | numeral }}</div>and
      <div class="data-val">{{ contribution.Construction_Employment_Impact | numeral('0,0a') }}</div>jobs to the state economy.
    </div>
    <div v-else class="text-lg print:text-sm">
      {{ loc_copy_caps }}
      needs to build
      <div class="data-val">{{ building | numeral('0,0a') }}</div>new apartment homes each year to meet demand.  Apartment construction contributes
      <div class="data-val">${{ contribution.Construction_Economic_Impact | numeral }}</div>to {{ loc_copy }}'s economy annually, creating
      <div class="data-val">{{ contribution.Construction_Employment_Impact | numeral('0,0a') }}</div>jobs.
    </div>
  </div>
</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
export default { mixins: [ count, data ] }
</script>
