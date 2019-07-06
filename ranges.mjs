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
