<template lang="pug">
OffsetSection
  .font-os.mb-4(v-in-vp).vp-r THE RESEARCH
  .text-3xl.text-bolder.w-full.lg_w-3_4.mb-8(v-in-vp).vp-r.vp-d-1 We partnered with top researchers at Hoyt Advisory Services and Eigen10 Advisors to estimate the economic impact of the apartment industry as well as demand for apartments in the future.
  .flex.flex-col.lg_flex-row.-mx-4
    .w-full.lg_w-1_3.p-4(v-in-vp).vp-r.vp-d-2
      .text-4xl.font-okib.font-bold.h-28 Forecasted Demographic
      .mt-4 Economic and demographic trend and forecast data was drawn from Moody’s Analytics® supplemented by other sources including U.S. Census Bureau, Federal Reserve and other forecast surveys such as the Wall Street Journal Economic Forecasting Survey and the Federal Reserve Bank of Philadelphia Survey of Professional Forecasters. Property market data was derived from several sources including the U.S. Census Bureau, CoStar® Realty Information, CBRE® Econometrics and ESRI®.
    .w-full.lg_w-1_3.p-4(v-in-vp).vp-r.vp-d-3
      .text-4xl.font-okib.font-bold.h-28 Economic Impact Data
      .mt-4 Economic impact data (spending, economic contribution, and jobs created) were estimated by Hoyt Advisory Services and Eigen10 Advisors using multipliers from the U.S. Bureau of Economic Analysis, Regional Input-Output Modelling System (RIMS II). Source data for the impact analysis included the NAA Survey of Income and Expenses and the U.S. Census Bureau’s New Residential Construction, Building Permits, and Value of Construction Put in Place surveys, as well as their Survey of Residential Improvements and Repairs. Other data sources include CoStar© Realty Information and the U.S. Bureau of Labor Statistics’ Consumer Expenditure Survey.
    .w-full.lg_w-1_3.p-4(v-in-vp).vp-r.vp-d-4
      .text-4xl.font-okib.font-bold.h-28 Other Demographics
      .mt-4 Descriptive current and historical demographic and housing data (such as the number of apartment residents and the size of the apartment stock) are NMHC tabulations of the most recently available American Community Survey microdata.
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default { components: { OffsetSection } }
</script>
