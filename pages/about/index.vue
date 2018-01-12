<template lang="pug">
doctype
.page.page_init
  Top(type="dark")
  .page_content
    .section.section_top
      .inner
        .background

        .copys
          .copy(v-in-viewport) growing apartment demand
          .copy(v-in-viewport) Delayed marriages, an aging population and immigration are increasing a pressing need for new apartments, to the tune of 4.6 million by 2030.
          .copy(v-in-viewport) See how we can meet this demand.

          .button.is-centered(v-in-viewport)
            router-link(to="/vision") our vision
      
    .section.section_about
      .copy(v-in-viewport) about the research
      .logos(v-in-viewport)
       a(href="http://www.nmhc.org/",target="_new"): img(src="/logo-nmhc.png")
       a(href="https://www.naahq.org/",target="_new"): img(src="/logo-naa.png")
      .copy(v-in-viewport) We partnered with top researchers to estimate the demand for apartments in the future.
      VertBorder
      .copys
        .block.block-image(v-in-viewport)
          img(src="/about/child.jpg")
        .block(v-in-viewport)
          .title The Team
          .copy Researchers from Hoyt Advisory Services (HAS), comprised of Dr. Jeffrey D. Fisher (Vice President, Hoyt Advisory Services & Professor Emeritus, Indiana University), Dr. Norman G. Miller (Professor of Real Estate, University of San Diego), Paige Mueller (Whitegate Real Estate Advisors), and Michael Dinn (Dinn Focused Marketing).
        .block(v-in-viewport)
          .title Forecasted Demographic
          .copy Economic and demographic trend and forecast data was drawn from Moody’s Analytics® supplemented by other sources including U.S. Census Bureau, Federal Reserve and other forecast surveys such as the Wall Street Journal Economic Forecasting Survey and the Federal Reserve Bank of Philadelphia Survey of Professional Forecasters. Property market data was derived from several sources including the U.S. Census Bureau, CoStar® Realty Information, CBRE® Econometrics and ESRI®.
        .block(v-in-viewport)
          .title Current and Historical Demographic
          .copy Descriptive current and historical demographic and housing data (such as the number of apartment residents and the size of the apartment stock) are NMHC tabulations of the most recently available American Community Survey microdata.
        .block(v-in-viewport)
          .title Economic Impact Data
          .copy Economic impact data (spending, economic contribution, and jobs created) were estimated by Dr. Stephen Fuller of George Mason University’s Center for Regional Analysis for 2013. 
        .clear
    .section.section_sources
      .inner
        .homes(v-in-viewport)
          img(src="/about/homes.png")
        VertBorder
        .title(v-in-viewport) We are proud to have worked with the following sources
        .copys
          .block(v-in-viewport)
            .square
            .copy Dr. Stephen Fuller on behalf of NMHC and NAA, “The Trillion Dollar Apartment Industry” 
          .block(v-in-viewport)
            .square
            .copy Hoyt Advisory Services, Dinn Focused Marketing, and Whitegate Real Estate Advisors
          .block(v-in-viewport)
            .square
            .copy NMHC Tabulations of American Housing Survey microdata, US Census Bureau & US Dept. of Housing and Urban Development
          .block(v-in-viewport)
            .square
            .copy 2015 American Community Survey, 1-Year Estimates, US Census Bureau
          .block(v-in-viewport)
            .square
            .copy Axiometrics, a Realpage Company
          .block(v-in-viewport)
            .square
            .copy NMHC tabulations of 2015 American Community Survey microdata, IPUMS
          .block(v-in-viewport)
            .square
            .copy U.S. Census Bureau, New Residential Construction
      QuoteBar(theme="blues")
      .flow
    Downloads
  Bottom
</template>
<style lang="stylus">
@import '../../assets/stylus/about.styl'
</style>
<script>
import Top from '~/components/Top.vue'
import Downloads from '~/components/Downloads.vue'
import Bottom from '~/components/Bottom.vue'
import VertBorder from '~/components/VertBorder.vue'
import QuoteBar from '~/components/QuoteBar.vue'
import inViewportDirective from 'vue-in-viewport-directive'
export default {
  directives: { 'in-viewport': inViewportDirective },
  components: { Top, Downloads, Bottom, VertBorder, QuoteBar },
}
</script>
