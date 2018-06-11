<template lang="pug">
doctype
.page.page_vision
  Top(type="dark")
  .page_content
    .section.section_top
      .outer
      .inner
        .title(v-in-viewport) GROWING APARTMENT DEMAND
        .copy(v-in-viewport) The apartment industry stands ready to work with urban, suburban and rural communities in every region to meet the housing demand of Americans across all income levels
        a.button.cta(v-in-viewport,href="/Vision2030.pdf") DOWNLOAD PDF
    ScrollDown
    DiagSection
    .section.section_together
      .inner
        .top-block(v-in-viewport)
          Share(:pdf="false")
          .title(v-in-viewport) We Can Do This
          .copy(v-in-viewport) State and local governments have a toolbox of approaches they can take to address the apartment shortage and help reduce the cost of housing. Working together, we can help them:
          .line

        .image-text-block-1
          .image(v-in-viewport)
            img(src="/vision/1.png")
          .text(v-in-viewport)
            .title Authority & Partnerships
            .copy Leverage state-level authority to overcome obstacles to apartment construction and increase public-private partnerships to produce apartments that households can afford
          .clear

        .image-text-block-2
          .image(v-in-viewport)
            img(src="/vision/2.png")
          .text(v-in-viewport)
            .title Policy & Collaboration
            .copy Adopt locla public policies and programs that harness the power of the private sector to make housing affordability more feasible.  Collaborate with business and community leaders to champion apartments.
          .clear

        .bottom-block(v-in-viewport)
          .copy Read our Vision for 2030 on how public-private partnerships can help us solve the country's housing affordability challenge.
          a.cta(href="/Vision2030.pdf") DOWNLOAD PDF
          .clear
          .line

    .section.section_stakes
      .inner
        .copy(v-in-viewport) The Stakes are High
        .copy(v-in-viewport) Keeping up with the demand for millions of apartments will mean public-private partnerships at all levels of government. If we don't start today, our nation's housing affordability crisis will only worsen.
    VertBorder
    .section.section_chart.section_chart_buildmore
      .inner
        .copy_legend
          .copy(v-in-viewport) We Need to Build More
          .copy(v-in-viewport) The country will need to build an average of 324,000 new apartment homes each year to keep up with demand. The industry averaged just 242,614 completions from 2011-2017.
          .legend(v-in-viewport)
            .row
              .color.color_purple
              .copy number of new apartment households per year
            .row
              .color.color_yellow
              .copy number of apartments built per year

        .chart_area
          BuildMoreChart
        .clear
    .border.small.margined
    .section.section_chart.section_chart_metros
      .inner
        .copy_legend
          .copy(v-in-viewport) Barriers to Apartments Mean Higher Rents
          .copy(v-in-viewport) When regulations or lack of available land make it harder to build apartments, costs go up for everyone. The Barriers to Apartment Construction Index shows the hardest and easiest cities to add the needed supply.
          .legend(v-in-viewport)
            .row
              .color.color_tomato
              .copy barriers to apartment construction index
            .row
              .color.color_blue
              .copy % of households paying over 35% on rent
        .chart_area
          BarrierChart
    .border.small.margined
    .section.section_chart.section_chart_incomeafford
      .inner
        .copy_legend
          .copy(v-in-viewport) Income and Affordability
          .copy(v-in-viewport) Housing affordability is a growing problem. Housing costs continue to clime while incomes haven't kept up.
          .legend(v-in-viewport)
            .row
              .color.color_green
              .copy affordability
            .row
              .color.color_yellow
              .copy income
        .chart_area
          DualLineChart
        .clear
  DiagSection
  FAQ
  Downloads
  Bottom
</template>
<style lang="stylus">
@import '../../assets/stylus/vision.styl'
@import '../../assets/stylus/vision-mobile.styl'
</style>
<script>
import Top from '~/components/Top.vue'
import BuildMoreChart from '~/components/BuildMoreChart.vue'
import MetroChart from '~/components/MetroChart.vue'
import BarrierChart from '~/components/BarrierChart.vue'
import DualLineChart from '~/components/DualLineChart.vue'
import FAQ from '~/components/FAQ.vue'
import Share from '~/components/Share.vue'
import Bottom from '~/components/Bottom.vue'
import inViewportDirective from 'vue-in-viewport-directive'
import DiagSection from '~/components/DiagSection.vue'
import ScrollDown from '~/components/ScrollDown.vue'
import Downloads from '~/components/Downloads.vue'
import VertBorder from '~/components/VertBorder.vue'
export default {
  directives: { 'in-viewport': inViewportDirective },
  components: { Top, BuildMoreChart, BarrierChart, DualLineChart, FAQ, Share, Bottom, DiagSection, Downloads, ScrollDown, VertBorder }
}
</script>
