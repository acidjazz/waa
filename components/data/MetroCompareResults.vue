<template lang="pug">
#MetroCompareResults.my-8
  .font-os.uppercase.text-2xl.mb-4 YOUR METRO COMPARISON

  table.table.w-full
    thead
      tr.border-b.border-alum
        th
        th {{ comparison[0] }}
        th {{ comparison[1] }}
    tbody
      tr.border-b.border-alum(v-for="str in structure")
        td.p-2.border-l.border-alum {{ str.label }}
        td.p-2.px-8.border-l.border-alum
          .flex.justify-between
            i.mdi.mdi-check.text-mountainmeadow(v-if="data[str.compute][first][str.key] > data[str.compute][second][str.key]")
            i.mdi.mdi-check.text-white(v-else)
            span {{ data[str.compute][first][str.key] | numeral }}
        td.p-2.px-8.border-l.border-r.border-alum
          .flex.justify-between
            i.mdi.mdi-check.text-mountainmeadow(v-if="data[str.compute][first][str.key] < data[str.compute][second][str.key]")
            i.mdi.mdi-check.text-white(v-else)
            span {{ data[str.compute][second][str.key] | numeral }}
</template>


<script>
import sheets from '@/mixins/sheets'
import numeral from 'numeral'
export default {
  filters: {
    numeral (value) {
      return numeral(value).format('0.0a')
    },
  },
  mixins: [ sheets ],
  props: {
    comparison: {
      type: Array,
      required: true,
    }
  },
  data () {
    return {
      structure: [
        {
          label: 'Total Apartment Homes',
          compute: 'apartments',
          key: 'Apartments',
        },
        {
          label: 'Operation Dollars Spent',
          compute: 'operations',
          key: 'Economic_Contribution',
        },
        {
          label: 'Direct On-Site Jobs',
          compute: 'spending',
          key: 'Total_Jobs_Supported',
        },
        {
          label: 'Total Economic Contribution',
          compute: 'contribution',
          key: 'Economic_Impact_($)',
        },
        {
          label: 'Total Jobs Supported',
          compute: 'spending',
          key: 'Total_Jobs_Supported',
        },
        {
          label: 'Construction Dollars Spent',
          compute: 'construction',
          key: 'Economic_Contribution',
        },
        {
          label: 'Spending Power',
          compute: 'spending',
          key: 'Total_Jobs_Supported',
        },
      ]
    }
  },
  computed: {
    data () {
      return {
        apartments: this.sheet('main', 'dataApartmentsMetro', 'Metro Area'),
        operations: this.sheet('calc', 'operationImpactsMetro', 'Metro'),
        contribution: this.sheet('main', 'dataContributionMetro', 'Metro Area'),
        construction: this.sheet('calc', 'constructionImpactsMetro', 'Metro'),
        spending: this.sheet('calc', 'spendingImpactsMetro', 'Metro'),
      }
    },
    first () { return this.key(this.comparison[0]) },
    second () { return this.key(this.comparison[1]) },
  },

  mounted () {
    console.log(this.first, this.second)
    /*
    console.log(this.operations)
    console.log(this.contribution)
    console.log(this.construction)
    console.log(this.spending)
    */
  },

}
</script>
