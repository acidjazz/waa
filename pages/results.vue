<template lang="pug">
.page.page-calculate.pt-16.bg-white.print_pt-0
  .bg-tranpurp.flex.justify-center.lg_py-32.min-h-screen.print_py-0.print_bg-white
    .bg-white.w-screen.max-w-5xl.lg_p-8.p-4.text-black.text-left
      .max-w-4xl.mx-auto.flex.flex-col.relative(v-if="show")
        .absolute.right-0
          PrintAndShare
        .font-os.text-lg.mb-4.uppercase.text-center {{ area }}
        .font-okib.text-5xl.mb-2(v-if='!is_national') {{ place }}
        .text-orange.font-bold
          | Economic Impact of {{ homes }} {{ is_new ? 'New' : 'Existing' }} Apartment Homes.

        .border.border-seashell.rounded.lg_p-4.p-2.my-4
          .text-2xl.font-bold Economic Impact
          .my-2 The combined contribution of apartment construction, renovation and repair, operations and resident spending to the metro economy.

          .flex.flex-wrap.items-center.justify-between.p-4.lg_mr-12
            .text.w-1_2(v-if="is_new") Construction
            .w-1_2.text-right(v-if="is_new") ${{ constructionContribution | numeral }}
            .text.w-1_2 Renovation & Repair
            .w-1_2.text-right ${{ renovationImpact | numeral }}
            .text.w-1_2 Operation Expenditures
            .w-1_2.text-right ${{ operationContribution | numeral }}
            .text.w-1_2 Resident Spending
            .w-1_2.text-right ${{ spendingContribution | numeral }}
          .flex.items-center.justify-between.lg_mr-12
            .text-xl.text-bolder.w-1_2 Total Economic Impact
            .text-xl.text-bolder.w-1_2.text-right ${{ totalImpact | numeral }}

          .bg-seashell.p-4.my-4.rounded.border.border-alum
            .text-xl Impact form Tax Revenue
            .flex.flex-wrap.items-center.justify-between.p-4.lg_mr-12
              .w-2_3 Operation Expenditures
              .text-right ${{ operationExpenditures | numeral }}
              .w-2_3 Resident Spending
              .text-right ${{ spendingResident | numeral }}
              .w-2_3.text-bolder Total Impact from Tax Revenue
              .text-right.text-bolder ${{ totalImpactTax | numeral }}

        .border.border-seashell.rounded.p-4
          .text-2xl.font-bold Employment Impact
          .my-2 The total number of jobs supported by apartment construction, operations, and resident spending within the metro economy.
          .flex.flex-wrap.items-center.justify-between.p-4.lg_mr-12
            .text.w-1_2(v-if="is_new") Construction
            .w-1_2.text-right(v-if="is_new") {{ constructionJobs | numeral }}
            .text.w-1_2 Renovation & Repair
            .w-1_2.text-right {{ renovationJobs | numeral }}
            .text.w-1_2 Operations
            .w-1_2.text-right {{ operationJobs | numeral }}
            .text.w-1_2 Resident Spending
            .w-1_2.text-right {{ spendingJobs | numeral }}
            .w-2_3.text-bolder Total Jobs Supported
            .text-right.text-bolder {{ totalJobs| numeral }}
</template>

<script>
import sheets from '@/mixins/sheets'
import formulas from '@/mixins/formulas'
import SectionHero from '@/components/global/SectionHero'
import numeral from 'numeral'
import PrintAndShare from '@/components/global/PrintAndShare'
export default {
  components: { SectionHero, PrintAndShare },
  filters: {
    numeral (val) { return numeral(val).format('0,0') }
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

