<template lang="pug">
OffsetSection
  .flex.mb-12.flex-col.lg_flex-row-reverse
    .lg_w-2_3(v-in-vp).vp-r.vp-d-1
      img(src="/pathway.jpg",alt="Pathway")
    .lg_w-1_3.lg_mr-12(v-in-vp).vp-r
      .font-os.my-4 OUTREACH
      .text-4xl.font-bold.mb-2 We can do this
      .text-2xl.font-bold.mb-4 It takes a team
      .mb-4 Apartments and their residents contribute $3.4 trillion to the national economy annually, supporting 17.5 million jobs.
      .mb-4 The apartment industry and lawmakers at all levels of government have a variety of policy levers they can use to address the need for more apartments.
      .mb-4 By working together we can solve housing affordability challenges.
  .flex.flex-col.lg_flex-row
    .lg_w-1_2.lg_pr-8(v-in-vp).vp-r.vp-d-1
      .text-3xl.font-bold.mb-4.lg_h-28 Partnerships and Collaboration
      .mb-8 Policymakers should reform regulations and outdated rules to lower construction costs and create an environment conducive to building apartment homes at a variety of price points. Business and local leaders should collaborate to find actionable solutions to address the unique needs of communities throughout the country.
    .lg_w-1_2(v-in-vp).vp-r.vp-d-3
      .text-3xl.font-bold.mb-4.lg_h-28.lg_w-48 Our Vision
      .mb-5 The Vision 2030 program outlines how public-private partnerships can help us solve the country's housing affordability challenge.
      .waa-button-black-small.mb-8 Download PDF
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection },
}
</script>
