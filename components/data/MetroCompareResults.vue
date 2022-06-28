<template>
  <div id="MetroCompareResults" class="my-8">
    <div class="font-os uppercase text-2xl mb-4">YOUR METRO COMPARISON</div>
    <table class="table w-full">
      <thead>
        <tr class="border-b border-alum">
          <th />
          <th>{{ comparison[0] }}</th>
          <th>{{ comparison[1] }}</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="str in structure"
          :key="str.key"
          class="border-b border-alum"
        >
          <td class="p-2 border-l border-alum">{{ str.label }}</td>
          <td class="p-2 px-8 border-l border-alum">
            <div class="flex justify-between">
              <Icon v-if="val(data[str.compute][first][str.key]) &gt; val(data[str.compute][second][str.key])" class="text-mountainmeadow" icon="mdi:check" />
              <Icon v-else class="text-white" icon="mdi:check" />
              <span>{{ val(data[str.compute][first][str.key]) | numeral(str.format) }}</span>
            </div>
          </td>
          <td class="p-2 px-8 border-l border-r border-alum">
            <div class="flex justify-between">
              <Icon v-if="val(data[str.compute][first][str.key]) &lt; val(data[str.compute][second][str.key])" class="text-mountainmeadow" icon="mdi:check" />
              <Icon v-else class="text-white" icon="mdi:check" />
              <span>{{ val(data[str.compute][second][str.key]) | numeral(str.format) }}</span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>


<script>
import sheets from '@/mixins/sheets'
import numeral from 'numeral'
export default {
  filters: {
    numeral (value, format) {
      return numeral(value).format(format)
    },
  },
  mixins: [ sheets ],
  props: {
    comparison: {
      type: Array,
      required: true,
    },
  },
  data () {
    return {
      structure: [
        {
          label: 'Total Apartment Homes',
          compute: 'apartments',
          key: 'Apartments',
          format: '0.0a',
        },
        /*{
          label: 'Operation Dollars Spent',
          compute: 'operations',
          key: 'Economic_Contribution',
          format: '$0.0a',
        },
        {
          label: 'Direct On-Site Jobs',
          compute: 'spending',
          key: 'Total_Jobs_Supported',
          format: '0.0a',
        },*/
        {
          label: 'Total Economic Contribution',
          compute: 'contribution',
          key: 'Total_Economic_Impact',
          format: '$0.0a',
        },
        {
          label: 'Total Jobs Supported',
          compute: 'spending',
          key: 'Total_Jobs_Supported',
          format: '0.0a',
        },
        /*{
          label: 'Construction Dollars Spent',
          compute: 'construction',
          key: 'Economic_Contribution',
          format: '$0.0a',
        },
        {
          label: 'Spending Power',
          compute: 'spending',
          key: 'Total_Jobs_Supported',
          format: '0.0a',
        },*/
      ],
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

  methods: {
    val (val) {
      return val.toString().replace(/\$/g, '')*1
    },
  },

}
</script>
