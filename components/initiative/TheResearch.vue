<template>
  <offset-section>
    <div v-in-vp class="font-os mb-4 vp-r">THE RESEARCH</div>
    <div v-in-vp class="text-3xl text-bolder w-full lg:w-3/4 mb-8 vp-r vp-d-1">We partnered with top researchers at Hoyt Advisory Services and Eigen10 Advisors to estimate the economic impact of the apartment industry as well as demand for apartments in the future.</div>
    <div class="flex flex-col lg:flex-row lg:flex-wrap -mx-4">
      <div v-in-vp class="w-full lg:w-1/3 p-4 vp-r vp-d-2">
        <div class="text-4xl font-okib font-bold h-28">Forecasted Demographic Data</div>
        <div class="mt-4">
          Demographic data was drawn from several U.S. Census Bureau surveys, including the 2020 American Community Survey (ACS) which was the most recent ACS survey at the time of this report. Economic and demographic trend and forecast data was drawn from Moody's Analytics supplemented by other sources including U.S. Census Bureau, Federal Reserve and other forecast surveys such as the Federal Reserve Bank of Philadelphia Survey of Professional Forecasters. Property market data was derived from the U.S. Census Bureau and CoStar Realty information.
        </div>
      </div>
      <div v-in-vp class="w-full lg:w-1/3 p-4 vp-r vp-d-3">
        <div class="text-4xl font-okib font-bold h-28">Economic Impact Data</div>
        <div class="mt-4">Economic impact data (spending, economic contribution and jobs created) were estimated by Hoyt Advisory Services and Eigen10 Advisors using multipliers from the U.S. Bureau of Economic Analysis, Regional Input-Output Modelling System (RIMS II). Source data for the impact analysis included the NAA Survey of Income and Expenses and the U.S. Census Bureau’s New Residential Construction, Building Permits, and Value of Construction Put in Place surveys, as well as their Survey of Residential Improvements and Repairs. Other data sources include CoStar© Realty Information and the U.S. Bureau of Labor Statistics’ Consumer Expenditure Survey.</div>
      </div>
      <div v-in-vp class="w-full lg:w-1/3 p-4 vp-r vp-d-4">
        <div class="text-4xl font-okib font-bold h-28">Other Demographics</div>
        <div class="mt-4">Descriptive current and historical demographic and housing data (such as the number of apartment residents and the size of the apartment stock) are NMHC tabulations of the most recently available American Community Survey microdata.</div>
      </div>
    </div>
  </offset-section>
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default { components: { OffsetSection } }
</script>
