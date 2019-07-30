<template lang="pug">
OffsetSection.bg-deepsky
  .flex
    a.flex.items-center.w-12.cursor-pointer(@click="prev")
      i.mdi.mdi-chevron-left.mdi-48px.w-4.-ml-4.text-white
    transition(:name="direction",mode="out-in")
      .ml-10.text-white(key="report",v-if="section === 'report'").lg_h-48
        .text-bolder.text-4xl.mb-4 The Report
        .flex.flex-col.lg_flex-row
          .lg_w-2_3.text-xl
            .lg_w-2_3
              | NMHC and NAA partnered with
              a.text-bold.underline.px-2(href="http://hoytgroup.org/hoyt-advisory-services/") Hoyt Advisory Services
              | to identify the demand for apartments through 2030.  Download their analysis of the apartment industry.
          .lg_w-1_3.text-center
            a.mt-4.lg_mt-0.inline-block.border.border-white.rounded.p-4.hover_shadow.hover_bg-white.hover_text-deepsky.tran-colors(href="/NMHC-NAA-US-Apartment-Demand-in-2030.pdf")
              .flex.text-left
                div
                  .text-sm U.S. Apartment
                  .text-sm Demand – A
                  .text-sm Forward Look
                  .text-sm.text-bold.underline Download PDF
                div.pl-4
                  i.mdi.mdi-file-pdf-outline.mdi-48px
      .ml-10.text-white(key="vision",v-else).lg_h-48
        .text-bolder.text-4xl.mb-4 A Vision for 2030
        .flex.flex-col.lg_flex-row
          .lg_w-2_3.text-xl
            .lg_w-2_3
              | Meeting the country's demand for apartments will take courageous steps at the federal, state and local levels.
          .lg_w-1_3.text-center
            a.mt-4.lg_mt-0.inline-block.border.border-white.rounded.p-4.hover_shadow.hover_bg-white.hover_text-deepsky.tran-colors(href="/Vision2030.pdf")
              .flex.items-center
                .text-sm.text-bold.underline Download PDF
                div.pl-4
                  i.mdi.mdi-file-pdf-outline.mdi-48px
    a.flex.items-center.w-12.cursor-pointer(@click="next")
      i.mdi.mdi-chevron-right.mdi-48px.w-4.lg_-mr-4.text-white.-ml-4
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection },
  data () {
    return  {
      section: 'report',
      direction: 'slide-right',
    }
  },
  methods: {
    next () {
      this.direction = 'slide-right'
      this.swap()
    },
    prev () {
      this.direction = 'slide-left'
      this.swap()
    },
    swap () { return this.section = this.section === 'report' ? 'vision' : 'report' },
  },
}
</script>
