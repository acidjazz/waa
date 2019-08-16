<template lang="pug">
#OurInitiative
  OffsetSection
    .flex.flex-col.lg_flex-row(v-in-vp).vp-r.vp-d-3
      img(src="/pathway.jpg",alt="pathway").w-full.lg_w-3_4
      .lg_ml-10.my-10.lg_my-0.flex.items-center(v-in-vp).vp-r.vp-d-4
        .copy
          .text-3xl.font-bold.mb-4 Our Vision
          .text-black The apartment industry stands ready to work with urban, suburban and rural communities in every region to meet the housing demand of Americans across all income levels.
          nuxt-link(to="/vision").mt-8.inline-block.border.border-black.rounded-full.px-6.py-2.hover_bg-daisybush.hover_text-white.tran-colors
            span Our Vision
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection },
}
</script>
