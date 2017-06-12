<template lang="pug">
.page.page_init
  Top(type="light")
  .page_content
    .section.section_top
      .copy In communities across the country, apartments work – helping people live in a home that’s right for them. 
      .logos
       a(href="http://www.nmhc.org/",target="_new"): img(src="/logo-nmhc.png")
       a(href="https://www.naahq.org/",target="_new"): img(src="/logo-naa.png")
      .copys
        .copy The We Are Apartments Initiative
        p Whether it’s young professionals starting out, empty nesters looking to downsize and simplify, workers wanting to live near their jobs, married couples without children or families building a better life, apartment homes provide a sensible choice to meet their specific housing needs.
        p Demand for apartments continues to grow. America needs to build more than 4.6 million new apartment homes at a variety of price points by 2030, according to new research from Hoyt Advisory Services (HAS), commissioned by the National Multifamily Housing Council (NMHC) and the National Apartment Association (NAA).
        p To that end, NMHC and NAA are committed to finding bold, innovative solutions that will help meet America’s housing shortfall.
        p For more than 20 years, NMHC and NAA have partnered on behalf of America’s apartment industry.
        .clear
      .clear
    .border.big
    .section.section_about
      .copy about the research
      .copy We partnered with top researchers to estimate the demand for apartments in the future.
      .copys
        .block
          .title the team
          .copy Researchers from Hoyt Advisory Services (HAS), comprised of Dr. Jeffrey D. Fisher (Vice President, Hoyt Advisory Services & Professor Emeritus, Indiana University), Dr. Norman G. Miller (Professor of Real Estate, University of San Diego), Paige Mueller (Whitegate Real Estate Advisors), and Michael Dinn (Dinn Focused Marketing).
        .block
          .title economic impact data
          .copy Economic impact data (spending, economic contribution, and jobs created) were estimated by Dr. Stephen Fuller of George Mason University’s Center for Regional Analysis for 2013. 
        .clear
        .block
          .title current and historical demographic
          .copy Descriptive current and historical demographic and housing data (such as the number of apartment residents and the size of the apartment stock) are NMHC tabulations of the most recently available American Community Survey microdata.
        .block
          .title forecasted demographic
          .copy All forecasted demographic and housing data (such as the change in the rentership rate over time) are provided by Hoyt Advisory Services. 
        .clear
  Bottom
</template>
<style lang="stylus">
json('../../assets/colors.json')
json('../../assets/fonts.json')
.page.page_init > .page_content
  padding 120px 0 30px 0
  > .section
    width 900px
    margin 0 auto
    &.section_top
      > .copy:nth-child(1)
        font h6
        text-align cneter
        width 500px
        margin auto
      > .logos
        padding 60px 0
        width 410px
        margin auto
        text-align center
        border-bottom 1px solid lightgrey
        margin-bottom 30px
        > a > img
          height 60px
      > .copys
        width 700px
        margin auto
        padding 0 0 90px 0
        > .copy:nth-child(1)
          font h2
          padding 0 0 30px 0
    &.section_about
      margin 60px auto
      > .copy:nth-child(1)
        text-transform uppercase
        color grey
        text-align center
      > .copy:nth-child(2)
        text-align center
        font h2
        line-height 50px
        width 700px
        margin auto
        border-bottom 1px solid lightgrey
        padding-bottom 30px
        margin-bottom 30px
      > .copys
        > .block
          float left
          width 50%
          padding 20px 0
          &:nth-child(1) > .title
            color green
          &:nth-child(2) > .title
            color tomato
          &:nth-child(4) > .title
            color blue
          &:nth-child(5) > .title
            color purple
          > .title
            text-transform uppercase
            padding 0 0 10px 0
            font c1b
          > .copy
            padding 0 80px 0 0
            color grey
@import '~assets/stylus/about-mobile.styl'
</style>

<script>
import Top from '~/components/Top.vue'
import Bottom from '~/components/Bottom.vue'
export default { components: { Top, Bottom } }
</script>
