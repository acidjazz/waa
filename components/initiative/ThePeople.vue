<template lang="pug">
.flex.flex-col.lg_flex-row
  .lg_ml-10.ml-0
    .flex.flex-col.lg_flex-row.-p-4
      .lg_w-1_3.p-4.flex.flex-col.justify-around.pl-0(v-in-vp).vp-r.vp-d-1
        .text-3xl.mb-4 We are proud to have worked with the following sources
      .lg_w-1_3.p-4.flex.flex-col.justify-around(v-in-vp).vp-r.vp-d-2
        .flex.mb-4(v-for="source in sourcesA")
          i.mdi.mdi-circle.text-alum.mr-2
          .text-sm {{ source }}
      .lg_w-1_3.p-4.flex.flex-col.justify-around(v-in-vp).vp-r.vp-d-2
        .flex.mb-4(v-for="source in sourcesB")
          i.mdi.mdi-circle.text-alum.mr-2
          .text-sm {{ source }}
</template>

<script>
export default {
  data () {
    return {
      sourcesA: [
        'Hoyt Advisory Services, Eigen10 Advisors, and Dinn Focused Marketing',
        'NMHC Tabulations of American Housing Survey microdata, US Census Bureau & US Dept. of Housing and Urban Development',
        '2017 American Community Survey, 1-Year Estimates, US Census Bureau',
      ],
      sourcesB: [
        'RealPage',
        'NMHC tabulations of 2017 American Community Survey microdata, IPUMS',
        'U.S. Census Bureau, New Residential Construction',
      ],
    }
  }
}
</script>
