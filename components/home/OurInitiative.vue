<template>
  <div id="OurInitiative">
    <OffsetSection>
      <div v-in-vp class="flex flex-col lg:flex-row vp-r vp-d-3">
        <img class="w-full lg:w-3/4 h-64 lg:h-96" src="/pathway.jpg" alt="pathway">
        <div v-in-vp class="lg:w-1/4 lg:ml-10 my-10 lg:my-0 flex items-center vp-r vp-d-4">
          <div class="copy">
            <div class="text-3xl font-bold mb-4">Our Vision</div>
            <div class="text-black">The apartment industry stands ready to work with urban, suburban and rural communities in every region to meet the housing demand of Americans across all income levels.</div>
            <nuxt-link class="mt-8 inline-block border border-black rounded-full px-6 py-2 hover:bg-daisybush hover:text-white tran-colors" to="/vision"><span>Our Vision</span></nuxt-link>
          </div>
        </div>
      </div>
    </OffsetSection>
  </div>
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection },
}
</script>
