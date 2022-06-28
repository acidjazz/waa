<template>
  <div class="page page-calculate pt-16 bg-white print:pt-0">
    <div class="bg-tranpurp flex justify-center lg:py-32 min-h-screen print:py-0 print:bg-white">
      <div class="bg-white w-screen max-w-5xl lg:p-8 p-4 text-black text-left">
        <div v-if="show" class="max-w-4xl mx-auto flex flex-col relative">
          <div class="absolute right-0">
            <print-and-share />
          </div>
          <div class="font-os text-lg mb-4 uppercase text-center">{{ area }}</div>
          <div v-if="!is_national" class="font-okib text-5xl mb-2">{{ place }}</div>
          <div class="text-orange font-bold">Economic Impact of {{ homes }} {{ is_new ? 'New' : 'Existing' }} Apartment Homes.</div>
          <div class="border border-seashell rounded lg:p-4 p-2 my-4">
            <div class="text-2xl font-bold">Economic Impact</div>
            <div class="my-2">The combined contribution of apartment construction, renovation and repair, operations and resident spending to the metro economy.</div>
            <div class="flex flex-wrap items-center justify-between p-4 lg:mr-12">
              <div v-if="is_new" class="text w-1/2">Construction</div>
              <div v-if="is_new" class="w-1/2 text-right">${{ constructionContribution | numeral }}</div>
              <div class="text w-1/2">Renovation & Repair</div>
              <div class="w-1/2 text-right">${{ renovationImpact | numeral }}</div>
              <div class="text w-1/2">Operation Expenditures</div>
              <div class="w-1/2 text-right">${{ operationContribution | numeral }}</div>
              <div class="text w-1/2">Resident Spending</div>
              <div class="w-1/2 text-right">${{ spendingContribution | numeral }}</div>
            </div>
            <div class="flex items-center justify-between lg:mr-12">
              <div class="text-xl text-bolder w-1/2">Total Economic Impact</div>
              <div class="text-xl text-bolder w-1/2 text-right">${{ totalImpact | numeral }}</div>
            </div>
            <div class="bg-seashell p-4 my-4 rounded border border-alum">
              <div class="text-xl">Impact from Tax Revenue</div>
              <div class="flex flex-wrap items-center justify-between p-4 lg:mr-12">
                <div class="w-2/3">Operation Expenditures</div>
                <div class="text-right">${{ operationExpenditures | numeral }}</div>
                <div class="w-2/3">Resident Spending</div>
                <div class="text-right">${{ spendingResident | numeral }}</div>
                <div class="w-2/3 text-bolder">Total Impact from Tax Revenue</div>
                <div class="text-right text-bolder">${{ totalImpactTax | numeral }}</div>
              </div>
            </div>
          </div>
          <div class="border border-seashell rounded p-4">
            <div class="text-2xl font-bold">Employment Impact</div>
            <div class="my-2">The total number of jobs supported by apartment construction, operations, and resident spending within the metro economy.</div>
            <div class="flex flex-wrap items-center justify-between p-4 lg:mr-12">
              <div v-if="is_new" class="text w-1/2">Construction</div>
              <div v-if="is_new" class="w-1/2 text-right">{{ constructionJobs | numeral }}</div>
              <div class="text w-1/2">Renovation & Repair</div>
              <div class="w-1/2 text-right">{{ renovationJobs | numeral }}</div>
              <div class="text w-1/2">Operations</div>
              <div class="w-1/2 text-right">{{ operationJobs | numeral }}</div>
              <div class="text w-1/2">Resident Spending</div>
              <div class="w-1/2 text-right">{{ spendingJobs | numeral }}</div>
              <div class="w-2/3 text-bolder">Total Jobs Supported</div>
              <div class="text-right text-bolder">{{ totalJobs| numeral }}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import sheets from '@/mixins/sheets'
import formulas from '@/mixins/formulas'
import numeral from 'numeral'
import PrintAndShare from '@/components/global/PrintAndShare'
export default {
  components: { PrintAndShare },
  filters: {
    numeral (val) { return numeral(val).format('0,0') },
  },
  mixins: [ sheets, formulas ],
  data () {
    return {
      show: false,
    }
  },
  computed: {
    hash_array () { return this.$route.hash.substr(1).split(/\//g) },
    type () { return this.hash_array[0] },
    is_new () { return this.type === 'new' },
    is_existing () { return this.type === 'existing' },
    homes () { return this.hash_array[1] },
    place () { return this.hash_array[2] ? this.hash_array[2].replace(/_/g, ' ') : 'national' },
    is_national () { return this.place === 'national' },
    is_metro () { return this.area === 'metro area' },
    area () {
      return this.place === 'national' ? 'national' :
        this.states.includes(this.place) ? 'state' :
        this.metros.includes(this.place) ? 'metro area' :
        ''
    },
    ckey () { return this.is_national ? 'USA_Total' : this.place.replace(/ /g, '_') },

    constructionImpacts () {
      return this.is_metro ?
        this.sheet('calc', 'constructionImpactsMetro', 'Metro')
        : this.sheet('calc', 'constructionImpacts', 'State')
    },
    operationImpacts () {
      return this.is_metro ?
        this.sheet('calc', 'operationImpactsMetro', 'Metro')
        : this.sheet('calc', 'operationImpacts', 'State')
    },
    spendingImpacts () {
      return this.is_metro ?
        this.sheet('calc', 'spendingImpactsMetro', 'Metro')
        : this.sheet('calc', 'spendingImpacts', 'State')
    },
    renovationImpacts () {
      return this.is_metro ?
        this.sheet('calc', 'renovationImpactsMetro', 'Metro')
        : this.sheet('calc', 'renovationImpacts', 'State')
    },
  },

  mounted () { this.show = true },

}
</script>

