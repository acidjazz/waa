<template>
  <offset-section>
    <div class="flex mb-12 flex-col lg:flex-row-reverse">
      <div v-in-vp class="lg:w-2/3 vp-r vp-d-1">
        <img src="/pathway.jpg" alt="Pathway">
      </div>
      <div v-in-vp class="lg:w-1/3 lg:mr-12 vp-r">
        <div class="font-os my-4">OUTREACH</div>
        <div class="text-4xl font-bold mb-2">We can do this</div>
        <div class="text-2xl font-bold mb-4">It takes a team</div>
        <div class="mb-4">Apartments and their residents contribute $3.4 trillion to the national economy annually, supporting 17.5 million jobs.</div>
        <div class="mb-4">The apartment industry and lawmakers at all levels of government have a variety of policy levers they can use to address the need for more apartments.</div>
        <div class="mb-4">By working together we can solve housing affordability challenges.</div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row my-8">
      <div v-in-vp class="lg:w-1/3 vp-r">
        <div class="text-2xl text-bolder mb-4">Economic Impact Report</div>
        <div class="text-sm pr-4">
          Hoyt Advisory Services and Eigen10 Advisors research estimates the estimated how much apartments and their residents contribute to the economy at the national, state and local level.
        </div>
        <div class="mt-6 inline-block border border-black rounded-full px-6 py-2">
          <a href="/pdf/Economic_Impact.pdf">Download PDF</a>
        </div>
      </div>
      <div v-in-vp class="lg:w-1/3 vp-r vp-d-1">
        <div class="text-2xl text-bolder mb-4">Future Demand Research</div>
        <div class="text-sm pr-4">
          NMHC and NAA partnered with Hoyt Advisory Services to identify the demand for apartments through 2035. Download their analysis of the apartment industry.
        </div>
        <ul class="mt-6 list-disc text-sm ml-6">
          <li><a href="#" class="text-heart">Download Executive Summary</a></li>
          <li><a href="#" class="text-heart">Download National Report (Only)</a></li>
          <li><a href="#" class="text-heart">Download 50-Metros Report (Only)</a></li>
        </ul>
        <div class="mt-8 inline-block border border-black rounded-full px-6 py-2">
          <a href="/pdf/NMHC-NAA-US-Apartment-Demand-in-2030.pdf">
            <div> Download Full Report PDF </div>
            <div class="text-sm">(National Report + 50 Metros)</div>
          </a>
        </div>
      </div>
      <div v-in-vp class="lg:w-1/3 vp-r vp-d-2">
        <div class="text-2xl text-bolder mb-4">Policies that work</div>
        <div class="text-sm pr-4">
          Solutions to help build the housing the nation needs are out there but need to be more broadly adopted across the country. They include reducing barriers to apartment construction, reforming land-use and zoning regulations, reducing parking requirements, and creating more public-private partnerships.
        </div>
        <div class="mt-6 inline-block border border-black rounded-full px-6 py-2">
          <a href="/pdf/Policy.Recommendations.Vision.2035.pdf">Download PDF</a>
        </div>
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
