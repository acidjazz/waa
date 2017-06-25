<template lang="pug">
.page.page_vision
  Top(type="light")
  .page_content
    .section.section_top
      .inner
        .copy The country needs at least 4.6 million new apartments by 2030
        .highlight
        .copys
          p But getting there won't be easy. It is time to take action across the country, in ways that are tailored to the needs of each community. The apartment industry stands ready to work with urban, suburban and rural communities in every region to meet the housing demand of Americans across all income levels.
          p Policymakers at all levels of government must recognize that addressing local housing needs requires a partnership between government and the private sector. The federal government can ensure sufficient funding of housing programs, enact a pro-housing tax policy, and reform regulations that unnecessarily increase housing costs. 
    .border.small
    .section.section_together
      .inner
        .copy We Can Do This
        .copy State and local governments have a toolbox of approaches they can take to address the apartment shortage and help reduce the cost of housing. They can: 
        .blocks
          .block
            .icon.icon-heart
              .inner
            .copy adopt
            .copy Adopt local public policies and programs that harness the power of the private sector to make housing affordability more feasible. 
          .block
            .icon.icon-comment
              .inner
            .copy collaborate
            .copy Collaborate with business and community leaders to champion apartments. 
          .block
            .icon.icon-network
              .inner
            .copy authority
            .copy Leverage state-level authority to overcome obstacles to apartment construction. 
          .block
            .icon.icon-shake
              .inner
            .copy partnerships
            .copy Increase public-private partnerships to produce apartments that households can afford. 
    .section.section_download
      .inner
        .copy Read our Vision for 2030 on how public-private partnerships can help us solve the country's housing affordability challenge.
        a.cta(href="/Vision2030.pdf") download
        .clear
    .section.section_stakes
      .inner
        .copy The Stakes are High
        .copy Keeping up with the demand for millions of apartments will mean public-private partnerships at all levels of government. If we don't start today, our nation's housing affordability crisis will only worsen.
    .border.small
    .section.section_chart.section_chart_buildmore
      .inner
        .copy_legend
          .copy We Need to Build More
          .copy The country will need to build an average of 324,000 new apartment homes each year to keep up with demand. The industry averaged just 225,000 completions from 2011-2016.
          .legend
            .row
              .color.color_purple
              .copy number of new apartment households per year
            .row
              .color.color_yellow
              .copy number of apartments built per year
        .chart_area
          BuildMoreChart
        .clear
    .border.small
    .section.section_chart.section_chart_metros
      .inner
        .copy_legend
          .copy Barriers to Apartments Mean Higher Rents
          .copy When regulations or lack of available land make it harder to build apartments, costs go up for everyone. The Barriers to Apartments Index shows the hardest and easiest cities to add the needed supply.
          .legend
            .row
              .color.color_grey
              .copy barriers to apartments construction index
            .row
              .color.color_darkblue
              .copy % of households paying over 35% on rent
        .chart_area
          MetroChart
        .clear
    .section.section_chart.section_chart_incomeafford
      .inner
        .copy_legend
          .copy Income and Affordability
          .copy Affordability is a growing problem and housing costs continue to climb while incomes haven't kept up
          .legend
            .row
              .color.color_green
              .copy income
            .row
              .color.color_yellow
              .copy affordability
        .chart_area
          DualLineChart
        .clear
    .border.small

  Bottom
</template>
<style lang="stylus">
@import '../../assets/stylus/vision.styl'
</style>
<script>
import Top from '~/components/Top.vue'
import BuildMoreChart from '~/components/BuildMoreChart.vue'
import MetroChart from '~/components/MetroChart.vue'
import DualLineChart from '~/components/DualLineChart.vue'
import Bottom from '~/components/Bottom.vue'
export default { components: { Top, BuildMoreChart, MetroChart, DualLineChart, Bottom } }
</script>
