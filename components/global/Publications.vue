<template>
  <offset-section bg="supernova" fg="black">
    <div v-in-vp class="font-os my-4 vp-r">THE REPORTS</div>
    <div v-in-vp class="text-4xl text-bolder vp-r">Publications</div>
    <div class="flex flex-col lg:flex-row my-8">
      <div v-in-vp class="lg:w-1/3 vp-r">
        <div class="text-2xl text-bolder mb-4">Economic Impact Report</div>
        <div class="text-sm pr-4 lg:h-24">Hoyt Advisory Services and Eigen10 Advisors estimated the economic impact of the apartment industry for the National Multifamily Housing Council and the National Apartment Association. Read the report.</div>
        <div class="my-8 inline-block border border-black rounded-full px-6 py-2"><a href="/Economic_Impact.pdf">Download PDF</a></div>
      </div>
      <div v-in-vp class="lg:w-1/3 vp-r vp-d-1">
        <div class="text-2xl text-bolder mb-4">Future Demand Report</div>
        <div class="text-sm pr-4 lg:h-24">NMHC and NAA partnered with Hoyt Advisory Services to identify the demand for apartments through 2030. Download their analysis of the apartment industry.</div>
        <div class="my-8 inline-block border border-black rounded-full px-6 py-2"><a href="/NMHC-NAA-US-Apartment-Demand-in-2030.pdf">Download PDF</a></div>
      </div>
      <div v-in-vp class="lg:w-1/3 vp-r vp-d-2">
        <div class="text-2xl text-bolder mb-4">Vision 2030</div>
        <div class="text-sm pr-4 lg:h-24">Meeting the country's demand for apartments will take courageous steps at the federal, state and local levels. Read more about how our vision illustrates the options available to the private sector and lawmakers.</div>
        <div class="my-8 inline-block border border-black rounded-full px-6 py-2"><a href="/Vision2030.pdf">Download PDF</a></div>
      </div>
    </div>
  </offset-section>
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection },
}
</script>
