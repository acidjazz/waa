<template lang="pug">
.bg-white.my-32.mr-0.lg_mr-10.print_mr_0.tran-all-p2s(:class="`bg-${bg} text-${fg}`")
  .px-4.py-10.-mr-0.lg_-mr-10.lg_py-20.print_py-2
    .mr-0.lg_mr-10
      .canister
        .flex
          a.flex.items-center.w-12.cursor-pointer(@click="prev")
            i.mdi.mdi-chevron-left.mdi-48px.-ml-4
          transition(:name="direction",mode="out-in")

            .ml-10(key="report",v-if="section == 'report'").lg_h-64
              .text-bolder.text-4xl.mb-4 The Report
              .flex.flex-col.lg_flex-row
                .lg_w-2_3.text-xl
                  | NMHC and NAA partnered with
                  a.text-bold.underline.px-2(href="http://hoytgroup.org/hoyt-advisory-services/") Hoyt Advisory Services
                  | to identify the demand for apartments through 2030.  Download their analysis of the apartment industry.
                .lg_w-1_3.text-center
                  a.mt-4.lg_mt-0.inline-block.border.rounded.p-4.hover_shadow(href="/NMHC-NAA-US-Apartment-Demand-in-2030.pdf")
                    .flex.items-center
                      .text-sm.text-bold.underline Download PDF
                      .pl-4.text-white
                        i.mdi.mdi-file-pdf-outline.mdi-48px

            .ml-10(key="vision",v-else-if="section == 'vision'").lg_h-64
              .text-bolder.text-4xl.mb-4 A Vision for 2030
              .flex.flex-col.lg_flex-row.items-center
                .lg_w-2_3.text-xl Meeting the country's demand for apartments will take courageous steps at the federal, state and local levels.
                .lg_w-1_3.text-center
                  a.mt-4.lg_mt-0.inline-block.border.border-black.rounded.p-4.hover_shadow(href="/Vision2030.pdf")
                    .flex.items-center
                      .text-sm.text-bold.underline Download PDF
                      .pl-4.text-white
                        i.mdi.mdi-file-pdf-outline.mdi-48px

            .ml-10(key="impact",v-else-if="section == 'impact'").lg_h-64
              .text-bolder.text-4xl.mb-4 Economic Impact
              .flex.flex-col.lg_flex-row
                .lg_w-2_3.text-xl This report summarizes the methods and findings of a study that was conducted by Hoyt Advisory Services on  behalf  of  the  National  Apartment  Association  (NAA)  and  the  National  Multifamily  Housing  Council (NMHC). The study explored the impact the apartment industry had on the US economy in 2013 and 2016.
                .lg_w-1_3.text-center
                  a.mt-4.lg_mt-0.inline-block.border.rounded.p-4.hover_shadow(href="/Economic_Impact.pdf")
                    .flex.items-center
                      .text-sm.text-bold.underline Download PDF
                      .pl-4.text-white
                        i.mdi.mdi-file-pdf-outline.mdi-48px

          a.flex.items-center.w-12.cursor-pointer(@click="next")
            i.mdi.mdi-chevron-right.mdi-48px
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection },
  data () {
    return  {
      section: 'impact',
      direction: 'slide-right',
      sections: {
        report: {
          bg: 'scooter',
          fg: 'white',
        },
        vision: {
          bg: 'supernova',
          fg: 'black',
        },
        impact: {
          bg: 'japonica',
          fg: 'white',
        },
      }
    }
  },
  computed: {
    bg () { return this.sections[this.section].bg },
    fg () { return this.sections[this.section].fg },
  },
  methods: {
    next () {
      this.direction = 'slide-right'
      let a = Object.keys(this.sections)
      let s = a.indexOf(this.section)
      this.section = s == 2 ? 'report' : a[s+1]
      console.log(this.section)
    },
    prev () {
      this.direction = 'slide-left'
      let a = Object.keys(this.sections)
      let s = a.indexOf(this.section)
      this.section = s == 0 ? 'impact' : a[s-1]
      console.log(this.section)
    },
  },
}
</script>
