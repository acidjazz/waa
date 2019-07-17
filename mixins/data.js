/*
 * data.js most all sheets and sheet-related functions/properties
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */
import numeral from 'numeral'
import sheets from '@/mixins/sheets'
export default {
  mixins: [ sheets ],
  props: {
    area: {
      type: Object,
      required: true,
    }
  },
  computed: {

    residents_national () { return this.sheet('main', 'dataResidentsUS', 1)['Total U.S.'] },
    residents_state () { return this.sheet('main', 'dataResidentsState', 'State')[this.area.key].Apartment_Residents },
    residents_metro () { return this.sheet('main', 'dataResidentsMetro', 'Metro Area')[this.area.key].Apartment_Residents },
    residents_district () { return this.sheet('main', 'dataResidentsDistrict', ['State', 'District'])[this.area.key].Apartment_Residents },
    residents () { return this[`residents_${this.area.type}`] },

    jobs_national () { return this.sheet('main', 'dataJobsUS', 1)['Total U.S.'] },
    jobs_state () { return this.sheet('main', 'dataJobsState', 'State')[this.area.key].Jobs },
    jobs_metro () { return this.sheet('main', 'dataJobsMetro', 'Metro Area')[this.area.key].Jobs },
    jobs_district () { return this.sheet('main', 'dataJobsDistrict', ['State', 'District'])[this.area.key].Jobs },
    jobs () { return this[`jobs_${this.area.type}`] },

    contribution_national () { return this.sheet('main', 'dataContributionUS', 1)['Total U.S.'] },
    contribution_state () { return this.sheet('main', 'dataContributionState', 'State')[this.area.key].Contribution },
    contribution_metro () { return this.sheet('main', 'dataContributionMetro', 'Metro Area')[this.area.key].Contribution },
    contribution_district () { return this.sheet('main', 'dataContributionDistrict', ['State', 'District'])[this.area.key].Contribution },
    contribution () { return this[`contribution_${this.area.type}`].replace(/\$/, '')*1 },

    apartments_national () { return this.sheet('main', 'dataApartmentsUS', 1)['Total U.S.'] },
    apartments_state () { return this.sheet('main', 'dataApartmentsState', 'State')[this.area.key].Apartments },
    apartments_metro () { return this.sheet('main', 'dataApartmentsMetro', 'Metro Area')[this.area.key].Apartments },
    apartments_district () { return this.sheet('main', 'dataApartmentsDistrict', ['State', 'District'])[this.area.key].Apartments },
    apartments () { return this[`apartments_${this.area.type}`] },

    building_national () { return this.sheet('main', 'dataBuildingUS', 2)['Total U.S.'] },
    building_state () { return this.sheet('main', 'dataBuildingState', 'State')[this.area.key].Needed },
    building_metro () { return this.sheet('main', 'dataBuildingMetro', 'Metro Area')[this.area.key].Needed },
    // building_district () { return this.sheet('main', 'dataBuildingState', 'State')[this.key(this.area.state)].Building },
    building () { return this[`building_${this.area.type}`] },

  },

  methods: {
    format(value) { return numeral(value).format('0.0a') },
    count_val (value) {
      return numeral(value).format('0.0a').slice(0, -1)*1
    },
    count_opts (value, prefix='') {
      return {
        prefix: prefix,
        decimalPlaces: 1,
        suffix: numeral(value).format('0,0a').slice(-1),
      }
    },
  },

}
