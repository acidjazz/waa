<template lang="pug">
.page.page_init
  Top(type="dark")
  .page_content
    .section.section_top

      .inner
        .paper
        .vase
        .copys
          .copy Our Initiative
          .copy Growing apartment demand
          .copy Delayed marriages, an aging population and immigration are increasing a pressing need for new apartments, to the tune of 4.6 million by 2030. See how we can meet this demand.
          router-link.cta(to="/vision") our vision

      
      //.copy In communities across the country, apartments work – helping people live in a home that’s right for them. 
    .section.section_about
      .copy about the research
      .logos
       a(href="http://www.nmhc.org/",target="_new"): img(src="/logo-nmhc.png")
       a(href="https://www.naahq.org/",target="_new"): img(src="/logo-naa.png")
      .copy We partnered with top researchers to estimate the demand for apartments in the future.
      .copys
        .block
          .circle
          .title the team
          .copy Researchers from Hoyt Advisory Services (HAS), comprised of Dr. Jeffrey D. Fisher (Vice President, Hoyt Advisory Services & Professor Emeritus, Indiana University), Dr. Norman G. Miller (Professor of Real Estate, University of San Diego), Paige Mueller (Whitegate Real Estate Advisors), and Michael Dinn (Dinn Focused Marketing).
        .block
          .circle
          .title current and historical demographic
          .copy Descriptive current and historical demographic and housing data (such as the number of apartment residents and the size of the apartment stock) are NMHC tabulations of the most recently available American Community Survey microdata.
        .block
          .circle
          .title forecasted demographic
          .copy Economic and demographic trend and forecast data was drawn from Moody’s Analytics® supplemented by other sources including U.S. Census Bureau, Federal Reserve and other forecast surveys such as the Wall Street Journal Economic Forecasting Survey and the Federal Reserve Bank of Philadelphia Survey of Professional Forecasters. Property market data was derived from several sources including the U.S. Census Bureau, CoStar® Realty Information, CBRE® Econometrics and ESRI®.
        .block
          .circle
          .title economic impact data
          .copy Economic impact data (spending, economic contribution, and jobs created) were estimated by Dr. Stephen Fuller of George Mason University’s Center for Regional Analysis for 2013. 
        .clear
    .section.section_sources
      .inner
        .copy Data Sources
        .copy We are proud to have worked with the following sources
        .border.white
        .copys
          .block
            .circle
            .copy Dr. Stephen Fuller on behalf of NMHC and NAA, “The Trillion Dollar Apartment Industry” 
          .block
            .circle
            .copy Hoyt Advisory Services, Dinn Focused Marketing, and Whitegate Real Estate Advisors
          .block
            .circle
            .copy NMHC Tabulations of American Housing Survey microdata, US Census Bureau & US Dept. of Housing and Urban Development
          .block
            .circle
            .copy 2015 American Community Survey, 1-Year Estimates, US Census Bureau
          .block
            .circle
            .copy Axiometrics, a Realpage Company
          .block
            .circle
            .copy NMHC tabulations of 2015 American Community Survey microdata, IPUMS
          .block
            .circle
            .copy U.S. Census Bureau, New Residential Construction
      .flow
    .section.section_report
      .inner

        .block.left
          .inner
            .copy The Report
            .copy NMHC and NAA partnered with Hoyt Advisory Services to identify the demand for apartments through 2030. Download their analysis of the apartment industry.
            a.cta(href="/NMHC-NAA-US-Apartment-Demand-in-2030.pdf") download

        .block.right
          .inner
            .copy A vision for 2030
            .copy Meeting the country's demand for apartments will take courageous steps at the federal, state and local levels. 
            .cta Learn more

            
  Bottom
</template>
<style lang="stylus">
@import '../../assets/stylus/about.styl'
</style>
<script>
import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'
export default { components: { Top, Bottom } }
</script>
