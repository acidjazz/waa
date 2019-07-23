/*
 * ranges.js
 * Copyright (C) 2019 kevin olson <acidjazz@gmail.com>
 *
 * Distributed under terms of the APACHE license.
 */

export default {
  main: {
    id: '1qBIHotCidfZRqc3p_Izss5r0JocbLc5dot9FVWP3Bew',
    ranges: {
      Filters: {
        values: 'Filters!A2:D52',
      },
      HomeDemand: {
        values: "'Home-Demand'!A3:E16",
      },
      CopyTickerHome: {
        values: "Copy!A4:A7",
      },
      CopyTickerInit: {
        values: "Copy!A10:A13",
      },
      visionBuildMore: {
        labels: "'Vision-BuildMore'!A1:E1",
        values: "'Vision-BuildMore'!A3:E16",
      },
      visionIncomeAfford: {
        labels: "'Vision-IncomeAfford'!A1:C1",
        values: "'Vision-IncomeAfford'!A2:C17",
      },
      dataResidentsUS: {
        values: "'Data-Residents'!A2:B2",
      },
      dataResidentsState: {
        labels: "'Data-Residents'!A3:C3",
        values: "'Data-Residents'!A4:C54",
      },
      dataResidentsMetro: {
        labels: "'Data-Residents'!A55:C55",
        values: "'Data-Residents'!A56:C106",
      },
      dataResidentsDistrict: {
        labels: "'Data-Residents'!A107:D107",
        values: "'Data-Residents'!A108:D543",
      },

      dataJobsUS: {
        values: "'Data-Jobs'!A2:B2",
      },
      dataJobsState: {
        labels: "'Data-Jobs'!A3:B3",
        values: "'Data-Jobs'!A4:B54",
      },
      dataJobsMetro: {
        labels: "'Data-Jobs'!A55:B55",
        values: "'Data-Jobs'!A56:B106",
      },
      dataJobsDistrict: {
        labels: "'Data-Jobs'!A107:C107",
        values: "'Data-Jobs'!A108:C543",
      },
      dataContributionUS: {
        values: "'Data-Contribution'!A3:B3",
      },
      dataContributionState: {
        labels: "'Data-Contribution'!A5:O5",
        values: "'Data-Contribution'!A6:O56",
      },
      dataContributionMetro: {
        labels: "'Data-Contribution'!A58:B58",
        values: "'Data-Contribution'!A59:B106",
      },
      dataContributionDistrict: {
        labels: "'Data-Contribution'!A111:C111",
        values: "'Data-Contribution'!A112:C547",
      },

      dataApartmentsUS: {
        values: "'Data-Apartments'!A2:B2",
      },
      dataApartmentsState: {
        labels: "'Data-Apartments'!A3:B3",
        values: "'Data-Apartments'!A4:B54",
      },
      dataApartmentsMetro: {
        labels: "'Data-Apartments'!A55:B55",
        values: "'Data-Apartments'!A56:B106",
      },
      dataApartmentsDistrict: {
        labels: "'Data-Apartments'!A107:C107",
        values: "'Data-Apartments'!A108:C543",
      },

      dataBuildingUS: {
        values: "'Data-Building'!A2:D2",
      },
      dataBuildingState: {
        labels: "'Data-Building'!A6:C6",
        values: "'Data-Building'!A7:C57",
      },
      dataBuildingMetro: {
        labels: "'Data-Building'!A58:C58",
        values: "'Data-Building'!A58:C109",
      },

      dataPopulationUS: {
        labels: "'Data-Population'!A1:B1",
        values: "'Data-Population'!A2:B25",
      },
      dataPopulationState: {
        labels: "'Data-Population'!A26:F26",
        values: "'Data-Population'!A26:F77",
      },
      dataPopulationMetro: {
        labels: "'Data-Population'!A78:AZ78",
        values: "'Data-Population'!A79:AZ103",
      },

      dataStockUS: {
        labels: "'Data-Stock'!A1:E1",
        values: "'Data-Stock'!A2:E3",
      },
      dataStockState: {
        labels: "'Data-Stock'!A4:E4",
        values: "'Data-Stock'!A5:E55",
      },
      dataStockMetro: {
        labels: "'Data-Stock'!A56:E56",
        values: "'Data-Stock'!A57:E107",
      },
      dataStockDistrict: {
        labels: "'Data-Stock'!A108:F108",
        values: "'Data-Stock'!A109:F544",
      },
      dataRestrictionsMetro: {
        labels: "'Data-MetroRestrictions'!A1:B1",
        values: "'Data-MetroRestrictions'!A2:B51",
      },
    },
  },
  calc: {
    id: '1-BSBnznPjoUMJ3I1RSttUlGidAfZAgnoHBSiX2HUPz8',
    ranges: {
      constructionImpacts: {
        labels: "'Construction Impacts'!A3:M3",
        values: "'Construction Impacts'!A4:M56",
      },
      operationImpacts: {
        labels: "'Operation Impacts'!A2:N2",
        values: "'Operation Impacts'!A3:N56",
      },
      spendingImpacts: {
        labels: "'Spending Impacts'!A2:J2",
        values: "'Spending Impacts'!A3:J55",
      },
      constructionImpactsMetro: {
        labels: "'Construction Impacts (metro)'!A2:M2",
        values: "'Construction Impacts (metro)'!A3:M43",
      },
      operationImpactsMetro: {
        labels: "'Operation Impacts (metro)'!A2:N2",
        values: "'Operation Impacts (metro)'!A3:N43",
      },
      spendingImpactsMetro: {
        labels: "'Spending Impacts (metro)'!A2:J2",
        values: "'Spending Impacts (metro)'!A3:J43",
      },
    }
  },
}
