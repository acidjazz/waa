<template lang="pug">
.p-16.bg-trantrue.text-center.text-white
  .text-5xl.mb-4.font-bolder.ani-sit {{ area.location }}
  .lg_w-128.text-lg.mx-auto.ani-sit.ani-d-1.mb-8
    | {{ area.location }} apartments and their
    | &nbsp;
    no-ssr
      span.text-bolder: VueCountUp(:endVal="residents",:options="options.residents")
    | &nbsp;
    | residents contribute
    | &nbsp;
    no-ssr(v-if="contribution !== 0")
      span.text-bolder: VueCountUp(:endVal="contribution",:options="options.contribution")
      | &nbsp;
    | to the
    | &nbsp;
    span {{ area.type }}
    | &nbsp;
    | economy annually
    no-ssr(v-if="jobs != '0.00'")
      | , supporting
      | &nbsp;
      span.text-bolder: VueCountUp(:endVal="jobs",:options="options.jobs")
      | &nbsp;
      | jobs.
    span(v-else) .
</template>


<script>
import sheets from '@/mixins/sheets'
import numeral from 'numeral'
export default {
  mixins: [ sheets ],
  props: {
    area: {
      type: Object,
      required: true,
    }
  },
  data () {
    return {
      options: {
        residents: {
          suffix: '',
          decimalPlaces: 1,
        },
        contribution: {
          prefix: '$',
          decimalPlaces: 1,
          suffix: '',
        },
        jobs: {
          suffix: '',
          decimalPlaces: 1,
        },
      }
    }
  },
  computed: {
    residents_national () { return this.sheet('main', 'dataResidentsUS', 1) },
    residents_state () { return this.sheet('main', 'dataResidentsState', 'State') },
    residents_metro () { return this.sheet('main', 'dataResidentsMetro', 'Metro Area') },
    residents_district () { return this.sheet('main', 'dataResidentsDistrict', ['State', 'District']) },
    residents () { return this.value('residents', 'Apartment_Residents') },

    jobs_national () { return this.sheet('main', 'dataJobsUS', 1) },
    jobs_state () { return this.sheet('main', 'dataJobsState', 'State') },
    jobs_metro () { return this.sheet('main', 'dataJobsMetro', 'Metro Area') },
    jobs_district () { return this.sheet('main', 'dataJobsDistrict', ['State', 'District']) },
    jobs () { return this.value('jobs', 'Jobs') },

    contribution_national () { return this.sheet('main', 'dataContributionUS', 1) },
    contribution_state () { return this.sheet('main', 'dataContributionState', 'State') },
    contribution_metro () { return this.sheet('main', 'dataContributionMetro', 'Metro Area') },
    contribution_district () { return this.sheet('main', 'dataContributionDistrict', ['State', 'District']) },
    contribution () { return this.value('contribution', 'Contribution') },

  },
  methods: {
    value (type, key) {
      let data = this[`${type}_${this.area.type}`]
      let value = numeral(this.area.type === 'national' ? data['Total U.S.'] :
        ['state','metro'].includes(this.area.type)  ? data[this.area.key].hasOwnProperty(key) ? data[this.area.key][key] : '0' :
        this.area.type === 'district' ? data[this.area.key][key] : '?')
      if (type === 'contribution') value = numeral(value.value() / 365)
      value = numeral(value).format('0.0a')
      this.options[type].suffix = value[value.length-1]
      return value.slice(0, -1)*1
    }
  },
}
</script>
