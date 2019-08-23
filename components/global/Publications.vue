<template lang="pug">
OffsetSection(bg="supernova",fg="black")
  .font-os.my-4(v-in-vp).vp-r THE REPORTS
  .text-4xl.text-bolder(v-in-vp).vp-r Publications
  .flex.flex-col.lg_flex-row.my-8
    .lg_w-1_3(v-in-vp).vp-r
      .text-2xl.text-bolder.mb-4 Economic Impact Report
      .text-sm.pr-4.lg_h-24 Hoyt Advisory Services and Eigen10 Advisors estimated the economic impact of the apartment industry for the National Multifamily Housing Council and the National Apartment Association. Read the report.
      .my-8.inline-block.border.border-black.rounded-full.px-6.py-2
        a(href="/Economic_Impact.pdf") Download PDF
    .lg_w-1_3(v-in-vp).vp-r.vp-d-1
      .text-2xl.text-bolder.mb-4 Future Demand Report
      .text-sm.pr-4.lg_h-24 NMHC and NAA partnered with Hoyt Advisory Services to identify the demand for apartments through 2030. Download their analysis of the apartment industry.
      .my-8.inline-block.border.border-black.rounded-full.px-6.py-2
        a(href="/NMHC-NAA-US-Apartment-Demand-in-2030.pdf") Download PDF
    .lg_w-1_3(v-in-vp).vp-r.vp-d-2
      .text-2xl.text-bolder.mb-4 Vision 2030
      .text-sm.pr-4.lg_h-24 Meeting the country's demand for apartments will take courageous steps at the federal, state and local levels. Read more about how our vision illustrates the options available to the private sector and lawmakers.
      .my-8.inline-block.border.border-black.rounded-full.px-6.py-2
        a(href="/Vision2030.pdf") Download PDF
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection },
}
</script>
