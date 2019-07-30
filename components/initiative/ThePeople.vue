<template lang="pug">
OffsetSection
  .flex.flex-col.lg_flex-row
    .lg_ml-10.ml-0
      .font-os.mb-4(v-in-vp).vp-r PEOPLE
      .flex.flex-col.lg_flex-row.-p-4
        .lg_w-1_3.p-4.flex.flex-col.justify-around.pl-0(v-in-vp).vp-r.vp-d-1
          .text-4xl.font-okib.font-bold.mb-4 We are proud to have worked with the following sources
        .lg_w-1_3.p-4.flex.flex-col.justify-around(v-in-vp).vp-r.vp-d-2
          .flex
            i.mdi.mdi-circle.text-alum.mr-2
            .text-sm Dr. Stephen Fuller on behalf of NMHC and NAA, “The Trillion Dollar Apartment Industry”
          .flex
            i.mdi.mdi-circle.text-alum.mr-2
            .text-sm Hoyt Advisory Services, Dinn Focused Marketing, and Whitegate Real Estate Advisors
          .flex
            i.mdi.mdi-circle.text-alum.mr-2
            .text-sm NMHC Tabulations of American Housing Survey microdata, US Census Bureau & US Dept. of Housing and Urban Development
        .lg_w-1_3.p-4.flex.flex-col.justify-around.pr-0(v-in-vp).vp-r.vp-d-3
          .flex
            i.mdi.mdi-circle.text-alum.mr-2
            .text-sm 2015 American Community Survey, 1-Year Estimates, US Census Bureau
          .flex
            i.mdi.mdi-circle.text-alum.mr-2
            .text-sm Axiometrics, a RealPage Company
          .flex
            i.mdi.mdi-circle.text-alum.mr-2
            .text-sm NMHC tabulations of 2015 American Community Survey microdata, IPUMS
          .flex
            i.mdi.mdi-circle.text-alum.mr-2
            .text-sm U.S. Census Bureau, New Residential Construction
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default { components: { OffsetSection } }
</script>
