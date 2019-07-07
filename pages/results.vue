<template lang="pug">
.page.page-calculate.lg_mt-16.print_mt-0
  .bg-tranpurp.flex.justify-center.lg_py-32.print_py-2.min-h-screen
    .bg-white.w-screen.max-w-5xl.p-8.text-black.text-left(v-if="show")
      .max-w-4xl.mx-auto.flex.items-stretch
        .w-1_5.hidden.lg_block
        .flex-1
          .lg_p-4
            .text-center
              .font-os.text-lg.mb-4.uppercase.print_mb-2 {{ area }}
              .font-okib.font-bold.text-5xl.print_text-3xl.mb-4.print_mb-2(v-if='!is_national') {{ place }}
            .text-orange.font-bold.mb-4.text-center.print_text-sm Economic Impact of {{ homes }} {{ is_new ? 'New' : 'Existing' }} Apartment Homes.

            .text-3xl.font-okib.font-bold.mb-2.print_text-lg.print_mb-0 Total Impact
            .mb-4.print_text-sm.print_mb-2 The combined direct and indirect contribution of apartment construction, operations and resident spending to the state economy.
            .bg-black.text-white.flex.justify-between.py-2.px-4.mb-8.print_mb-2.print_py-0.print_bg-white.print_text-black
              .font-bold Total Economic Impact
              .font-bold ${{ this.totalImpact | numeral }}

            .text-3xl.font-okib.font-bold.mb-2.print_text-lg.print_mb-0 Total Jobs
            .mb-4.print_text-sm The total number of direct and indirect jobs supported by apartment construction, operations and resident spending within the state economy.
            .bg-black.text-white.flex.justify-between.py-2.px-4.mb-8.print_mb-2.print_py-0.print_bg-white.print_text-black
              .font-bold Total Jobs Supported
              .font-bold {{ totalJobs | numeral }}

            .text-3xl.font-okib.font-bold.print_text-lg.print_mb-0 Managing Apartments
            .mb-4.print_text-sm.print_mb-2 Apartment homes are economic engines, driving dollars and jobs that strengthen local communities.
            .flex.justify-between.py-2.px-4.print_py-0
              .font-bold Operation Dollars Spent
              .font-bold ${{ operationDollarsSpent | numeral }}
            .flex.justify-between.py-2.px-4.print_py-0
              .font-bold Direct On-site Jobs
              .font-bold {{ operationDirectOnSiteJobs | numeral }}
            .bg-black.text-white.flex.justify-between.py-2.px-4.print_py-0.print_bg-white.print_text-black
              .font-bold Total Economic Contribution
              .font-bold ${{ operationContribution | numeral }}
            .flex.justify-between.py-2.px-4.mb-8.print_mb-2.print_py-0
              .font-bold Total Jobs Supported
              .font-bold {{ operationJobs | numeral }}

            .text-3xl.font-okib.font-bold.print_text-lg.print_mb-0 Building Apartments
            .mb-4.print_text-sm.print_mb-2 Apartment construction continues as a bright spot in the economy, helping lead the housing recovery
            .bg-black.text-white.flex.justify-between.py-2.px-4.print_py-0.print_bg-white.print_text-black
              .font-bold Total Economic Contribution
              .font-bold ${{ constructionContribution | numeral }}
            .flex.justify-between.py-2.px-4.mb-8.print_mb-2.print_py-0
              .font-bold Total Jobs Supported
              .font-bold {{ constructionJobs | numeral }}

            .text-3xl.font-okib.font-bold.print_text-lg.print_mb-0 Living in Apartments
            .mb-4.print_text-sm.print_mb-2 Renting can be a smart choice for a wide range of individuals and families across all income levels. That's why a diverse array of people call apartments home.
            .flex.justify-between.py-2.px-4.print_py-0
              .font-bold Spending Power
              .font-bold ${{ spendingDollars | numeral }}
            .flex.justify-between.py-2.px-4.print_py-0
              .font-bold Direct Jobs Supported
              .font-bold {{ spendingDirectJobs | numeral }}
            .bg-black.text-white.flex.justify-between.py-2.px-4.print_py-0.print_bg-white.print_text-black
              .font-bold Total Economic Contribution
              .font-bold ${{ spendingContribution | numeral }}
            .flex.justify-between.py-2.px-4.print_py-0
              .font-bold Total Jobs Supported
              .font-bold {{ spendingJobs | numeral }}
        .w-1_5.hidden.lg_block
          .border.border-seashell.m-2.p-2.text-center
            .mdi.mdi-48px.mdi-file-pdf
            .text-center.font-bold.underline Printable PDF
            .flex.justify-center.mt-8
              .mdi.mdi-24px.mdi-facebook-box
              .mdi.mdi-24px.mdi-twitter
            div Share link
  //pre.w-64.block.mx-auto {{ $route.params }}
  //pre
    pre.print_hidden.text-center this will not show in print
    pre.notprint_hidden.text-center this will show in print
</template>


<script>
import sheets from '@/mixins/sheets'
import SectionHero from '@/components/global/SectionHero'
import numeral from 'numeral'
export default {
  components: { SectionHero },
  mixins: [ sheets ],
  data () {
    return {
      show: false,
    }
  },

  filters: {
    numeral (val) { return numeral(val).format('0,0') }
  },

  computed: {
    hash_array () { return this.$route.hash.substr(1).split(/\//g) },
    type () { return this.hash_array[0] },
    is_new () { return this.type === 'new' },
    is_existing () { return this.type === 'existing' },
    homes () { return this.hash_array[1] },
    place () { return this.hash_array[2].replace(/_/g, ' ') },
    is_national () { return this.place === 'national' },
    is_metro () { return this.area === 'metro area' },
    area () {
      return this.place === 'national' ? 'national' :
        this.states.includes(this.place) ? 'state' :
        this.metros.includes(this.place) ? 'metro area' :
        ''
    },
    key () { return this.is_national ? 'USA_Total' : this.place.replace(/ /g, '_') },
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
    totalJobs () {
      return this.constructionJobs +
        this.operationJobs +
        this.spendingJobs
    },
    totalImpact () {
      return this.constructionContribution +
        this.operationContribution +
        this.spendingContribution
    },
    constructionJobs () {
      return this.homes *
        this.constructionImpacts[this.key].Total_Employment /
        this.constructionImpacts[this.key].Building_Permits
    },
    operationJobs () {
      return this.homes *
        this.operationImpacts[this.key].Total_Jobs /
        this.operationImpacts[this.key].Direct_On_Site_Jobs
    },
    spendingJobs () {
      return this.homes *
        this.spendingImpacts[this.key].Total_Jobs_Supported /
        this.spendingImpacts[this.key].Total_Number_of_Renter_Households
    },
    operationDollarsSpent () {
      return this.homes *
        this.operationImpacts[this.key].Total_Annual_Operation_Cost /
        this.operationImpacts[this.key].Total_Number_of_Apartments
    },
    constructionDirectOnSiteJobs () {
      return this.homes *
        this.constructionImpacts[this.key].Direct_Jobs /
        this.constructionImpacts[this.key].Building_Permits
    },
    operationDirectOnSiteJobs () {
      return this.homes *
        this.constructionImpacts[this.key].Direct_On_Site_Jobs /
        this.constructionImpacts[this.key].Total_Number_of_Apartments
    },
    operationContribution () {
      return this.homes *
        this.operationImpacts[this.key].Economic_Contribution /
        this.operationImpacts[this.key].Total_Number_of_Apartments
    },
    constructionContribution () {
      return this.homes *
        this.constructionImpacts[this.key].Economic_Contribution /
        this.constructionImpacts[this.key].Building_Permits
    },
    spendingDollars () {
      return this.homes *
        this.spendingImpacts[this.key].Direct_Consumer_Spending /
        this.spendingImpacts[this.key].Total_Number_of_Renter_Households
    },
    spendingDirectJobs () {
      return this.homes *
        this.spendingImpacts[this.key].Direct_Jobs_Supported /
        this.spendingImpacts[this.key].Total_Number_of_Renter_Households
    },
    spendingContribution () {
      return this.homes *
        this.spendingImpacts[this.key].Total_Consumer_Spending /
        this.spendingImpacts[this.key].Total_Number_of_Renter_Households
    },

  },

  mounted () {
    this.show = true
    console.log(this.key)
  },

}
</script>

