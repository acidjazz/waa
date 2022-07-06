<template>
  <div class="my-32 mr-0 lg_mr-10 print_mr_0 tran-all-p2s" :class="`bg-${bg} text-${fg}`">
    <div class="px-4 py-10 -mr-0 lg_-mr-10 lg_py-20 print_py-2">
      <div class="mr-0 lg_mr-10">
        <div class="canister">
          <div class="flex">
            <a class="flex items-center w-4 lg_w-12 cursor-pointer" @click="prev"><i class="mdi mdi-chevron-left mdi-48px lg_-ml-4 -ml-8" /></a>
            <transition :name="direction" mode="out-in">
              <div v-if="section == 'report'" key="report" class="ml-4 lg_ml-10 lg_h-64">
                <div class="text-bolder text-4xl mb-4">The Report</div>
                <div class="flex flex-col lg_flex-row">
                  <div class="lg_w-2_3 text-xl">NMHC and NAA partnered with<a class="text-bold underline px-2" href="http://hoytgroup.org/hoyt-advisory-services/">Hoyt Advisory Services</a>to identify the demand for apartments through 2030.  Download their analysis of the apartment industry.</div>
                  <div class="lg_w-1_3 text-center">
                    <a class="mt-4 lg_mt-0 inline-block border rounded p-4 hover_shadow" href="/NMHC-NAA-US-Apartment-Demand-in-2030.pdf">
                      <div class="flex items-center">
                        <div class="text-sm text-bold underline">Download PDF</div>
                        <div class="pl-4 text-white"><i class="mdi mdi-file-pdf-outline mdi-48px" /></div>
                      </div></a>
                  </div>
                </div>
              </div>
              <div v-else-if="section == 'vision'" key="vision" class="lg_ml-10 lg_h-64">
                <div class="text-bolder text-4xl mb-4">A Vision for 2030</div>
                <div class="flex flex-col lg_flex-row items-center">
                  <div class="lg_w-2_3 text-xl">Meeting the country's demand for apartments will take courageous steps at the federal, state and local levels.</div>
                  <div class="lg_w-1_3 text-center">
                    <a class="mt-4 lg_mt-0 inline-block border border-black rounded p-4 hover_shadow" href="/Vision2030.pdf">
                      <div class="flex items-center">
                        <div class="text-sm text-bold underline">Download PDF</div>
                        <div class="pl-4 text-white"><i class="mdi mdi-file-pdf-outline mdi-48px" /></div>
                      </div></a>
                  </div>
                </div>
              </div>
              <div v-else-if="section == 'impact'" key="impact" class="lg_ml-10 lg_h-64">
                <div class="text-bolder text-4xl mb-4">Economic Impact</div>
                <div class="flex flex-col lg_flex-row">
                  <div class="lg_w-2_3 text-xl">This report summarizes the methods and findings of a study that was conducted by Hoyt Advisory Services on  behalf  of  the  National  Apartment  Association  (NAA)  and  the  National  Multifamily  Housing  Council (NMHC). The study explored the impact the apartment industry had on the US economy in 2013 and 2016.</div>
                  <div class="lg_w-1_3">
                    <a class="mt-8 lg_mt-0 inline-block border rounded p-4 hover_shadow" href="/Economic_Impact.pdf">
                      <div class="flex items-center">
                        <div class="text-sm text-bold underline">Download PDF</div>
                        <div class="pl-4 text-white"><i class="mdi mdi-file-pdf-outline mdi-48px" /></div>
                      </div></a>
                  </div>
                </div>
              </div>
            </transition><a class="flex items-center w-4 lg_w-12 cursor-pointer" @click="next"><i class="mdi mdi-chevron-right mdi-48px" /></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
export default {
  components: { OffsetSection },
  data () {
    return  {
      section: 'report',
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
      },
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
    },
    prev () {
      this.direction = 'slide-left'
      let a = Object.keys(this.sections)
      let s = a.indexOf(this.section)
      this.section = s == 0 ? 'impact' : a[s-1]
    },
  },
}
</script>
