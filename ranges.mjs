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
        values: "'Data-Contribution'!A2:B2",
      },
      dataContributionState: {
        labels: "'Data-Contribution'!A3:B3",
        values: "'Data-Contribution'!A4:B54",
      },
      dataContributionMetro: {
        labels: "'Data-Contribution'!A55:B55",
        values: "'Data-Contribution'!A56:B106",
      },
      dataContributionDistrict: {
        labels: "'Data-Contribution'!A107:C107",
        values: "'Data-Contribution'!A108:C543",
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
