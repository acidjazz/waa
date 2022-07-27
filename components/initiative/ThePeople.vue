<template>
  <div class="flex flex-col lg:flex-row">
    <div class="lg:ml-10 ml-0">
      <div class="flex flex-col lg:flex-row -p-4">
        <div v-in-vp class="lg:w-1/3 p-4 flex flex-col justify-around pl-0 vp-r vp-d-1">
          <div class="text-3xl mb-4">We are proud to have worked with the following sources</div>
        </div>
        <div v-in-vp class="lg:w-1/3 p-4 flex flex-col justify-around vp-r vp-d-2">
          <div v-for="source in sourcesA" :key="source" class="flex mb-4">
            <Icon icon="mdi:circle" class="text-alum mr-2 w-4 h-4 flex-shrink-0" />
            <div class="text-sm">{{ source }}</div>
          </div>
        </div>
        <div v-in-vp class="lg:w-1/3 p-4 flex flex-col justify-around vp-r vp-d-2">
          <div v-for="source in sourcesB" :key="source" class="flex mb-4">
            <Icon icon="mdi:circle" class="text-alum mr-2 w-4 h-4 flex-shrink-0" />
            <div class="text-sm">{{ source }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      sourcesA: [
        'Hoyt Advisory Services, Eigen10 Advisors and Dinn Focused Marketing',
        'NMHC Tabulations of American Housing Survey microdata, US Census Bureau & US Dept. of Housing and Urban Development',
        '2017 American Community Survey, 1-Year Estimates, US Census Bureau',
      ],
      sourcesB: [
        'RealPage',
        'NMHC tabulations of 2017 American Community Survey microdata, IPUMS',
        'U.S. Census Bureau, New Residential Construction',
      ],
    }
  },
}
</script>
