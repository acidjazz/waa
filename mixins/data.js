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
  filters: {
    numeral (value, format='0.0a') {
      return numeral(value).format(format).toUpperCase()
    },
  },
  props: {
    area: {
      type: Object,
      required: false,
      default: () => {},
    }
  },
  computed: {

    metro_msa () { return this.sheet('main', 'MetroMSA', 'Metro')[this.area.key] },

    residents_national () { return this.sheet('main', 'dataResidentsUS', 3)['Total U.S.'] },
    residents_state () { return this.sheet('main', 'dataResidentsState', 'State')[this.area.key].Apartment_Residents_2017 },
    residents_metro () { return this.sheet('main', 'dataResidentsMetro', 'Metro Area')[this.area.key].Apartment_Residents_2017 },
    residents_district () { return this.sheet('main', 'dataResidentsDistrict', ['State', 'District'])[this.area.key].Apartment_Residents_2017 },
    residents () { return this[`residents_${this.area.type}`] },

    jobs_national () { return this.sheet('main', 'dataJobsUS', 1)['Total U.S.'] },
    jobs_state () { return this.sheet('main', 'dataJobsState', 'State')[this.area.key].Jobs },
    jobs_metro () { return this.sheet('main', 'dataJobsMetro', 'Metro Area')[this.area.key].Jobs },
    jobs_district () { return this.sheet('main', 'dataJobsDistrict', ['State', 'District'])[this.area.key].Jobs },
    jobs () { return this[`jobs_${this.area.type}`] },

    contribution_national () { return this.sheet('main', 'dataContributionUS', 'Geography')['Total_U.S.'] },
    contribution_state () { return this.sheet('main', 'dataContributionState', 'State')[this.area.key] },
    contribution_metro () { return this.sheet('main', 'dataContributionMetro', 'Metro Area')[this.area.key] },
    contribution_district () { return this.sheet('main', 'dataContributionDistrict', ['State', 'District'])[this.area.key] },
    contribution () { return this.sheet_select('contribution', this.area.type) },

    apartments_national () { return this.sheet('main', 'dataApartmentsUS', 2)['Total U.S.'] },
    apartments_state () { return this.sheet('main', 'dataApartmentsState', 'State')[this.area.key].Apartments_2017 },
    apartments_metro () { return this.sheet('main', 'dataApartmentsMetro', 'Metro Area')[this.area.key].Apartments_2017 },
    apartments_district () { return this.sheet('main', 'dataApartmentsDistrict', ['State', 'District'])[this.area.key].Apartments_2017 },
    apartments () { return this[`apartments_${this.area.type}`] },

    building_national () { return this.sheet('main', 'dataBuildingUS', 2)['Total U.S.'] },
    building_state () { return this.sheet('main', 'dataBuildingState', 'State')[this.area.key].Needed },
    building_metro () { return this.sheet('main', 'dataBuildingMetro', 'Metro Area')[this.area.key].Needed },
    // building_district () { return this.sheet('main', 'dataBuildingState', 'State')[this.key(this.area.state)].Building },
    building () { return this[`building_${this.area.type}`] },

    populationUS () { return this.sheet('main', 'dataPopulationUS', 1) },
    populationState () { return this.sheet('main', 'dataPopulationState', 'State') },
    populationMetro () { return this.sheet('main', 'dataPopulationMetro', 'Year') },

    stock_national () { return this.sheet('main', 'dataStockUS', 'Type')['Growth'] },
    stock_state () { return this.sheet('main', 'dataStockState', 'State')[this.area.key] },
    stock_metro () { return this.sheet('main', 'dataStockMetro', 'Metro')[this.area.key] },
    stock_district () { return this.sheet('main', 'dataStockDistrict', ['State', 'District'])[this.area.key] },
    stock () { return this.sheet_select('stock', this.area.type) },

    persons_national () { return this.sheet('main', 'dataPersonsUS', 'Geography')['Total_U.S.'] },
    persons_state () { return this.sheet('main', 'dataPersonsState', 'Geography')[this.area.key] },
    persons_metro () { return this.sheet('main', 'dataPersonsMetro', 'Geography')[this.area.key] },
    persons () { return this.sheet_select('persons', this.area.type) },

    housetype_national () { return this.sheet('main', 'dataHouseTypeUS', 'Geography')['Total_U.S.'] },
    housetype_state () { return this.sheet('main', 'dataHouseTypeState', 'Geography')[this.area.key] },
    housetype_metro () { return this.sheet('main', 'dataHouseTypeMetro', 'Geography')[this.area.key] },
    housetype () { return this.sheet_select('housetype', this.area.type) },

    rentergrowth_national () { return this.sheet('main', 'dataRenterGrowthUS', 'State')['Total_U.S.']  },
    rentergrowth_state () { return this.sheet('main', 'dataRenterGrowthState', 'State')  },
    rentergrowth_metro () { return this.sheet('main', 'dataRenterGrowthMetro', 'State')  },
    rentergrowth () { return this.sheet_select('rentergrowth', this.area.type) },

    restrictionMetro () { return this.sheet('main', 'dataRestrictionsMetro', 'Metro Area ') },

    loc_copy () {
      if (this.area.type === 'national') return 'the country'
      return this.area.value
    },
    loc_copy_caps () {
      if (this.area.type === 'national') return 'The country'
      return this.area.value
    }

  },

  methods: {
    sheet_select(value, type) {
      if (this[`${value}_${type}`])
        return this[`${value}_${type}`]
      return false
    }
  },

}
