<template>
  <offset-section>
    <div class="flex mb-12 flex-col lg:flex-row-reverse">
      <div v-in-vp class="lg:w-2/3 vp-r vp-d-1"><img src="/pathway.jpg" alt="Pathway"></div>
      <div v-in-vp class="lg:w-1/3 lg:mr-12 vp-r">
        <div class="font-os my-4">OUTREACH</div>
        <div class="text-4xl font-bold mb-2">We can do this</div>
        <div class="text-2xl font-bold mb-4">It takes a team</div>
        <div class="mb-4">Apartments and their residents contribute $3.4 trillion to the national economy annually, supporting 17.5 million jobs.</div>
        <div class="mb-4">The apartment industry and lawmakers at all levels of government have a variety of policy levers they can use to address the need for more apartments.</div>
        <div class="mb-4">By working together we can solve housing affordability challenges.</div>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row">
      <div v-in-vp class="lg:w-1/2 lg:pr-8 vp-r vp-d-1">
        <div class="text-3xl font-bold mb-4 lg:h-28">Partnerships and Collaboration</div>
        <div class="mb-8">Policymakers should reform regulations and outdated rules to lower construction costs and create an environment conducive to building apartment homes at a variety of price points. Business and local leaders should collaborate to find actionable solutions to address the unique needs of communities throughout the country.</div>
      </div>
      <div v-in-vp class="lg:w-1/2 vp-r vp-d-3">
        <div class="text-3xl font-bold mb-4 lg:h-28 lg:w-48">Our Vision</div>
        <div class="mb-5">The Vision 2030 program outlines how public-private partnerships can help us solve the country's housing affordability challenge.</div><a class="waa-button-black-small mb-8" href="/Vision2030.pdf">Download PDF</a>
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
