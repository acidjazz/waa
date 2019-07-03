<template lang="pug">
.page.page-calculate.mt-16
  .bg-tranpurp.flex.justify-center.py-32
    .bg-white.w-screen.max-w-5xl.p-8.text-black.text-left
      .max-w-3xl.mx-auto.flex.items-stretch
        .w-1_5
        .flex-1
          .p-4
            .text-center
              .font-os.text-lg.mb-4 METRO AREA
              .font-okib.font-bold.text-6xl.mb-4 Albuquerque
            .text-orange.font-bold.mb-4 Economic Impact of 44 New Apartment Homes.

            .text-3xl.font-okib.font-bold.mb-2 Total Impact
            .mb-4 The combined direct and indirect contribution of apartment construction, operations and resident spending to the state economy.
            .bg-black.text-white.flex.justify-between.py-2.px-4.mb-8
              div Total Economic Impact
              div $3,796,154

            .text-3xl.font-okib.font-bold.mb-2 Total Jobs
            .mb-4 The total number of direct and indirect jobs supported by apartment construction, operations and resident spending within the state economy.
            .bg-black.text-white.flex.justify-between.py-2.px-4.mb-8
              div Total Jobs Supported
              div 82

            .text-3xl.font-okib.font-bold Managing Apartments
            .mb-4 Apartment homes are economic engines, driving dollars and jobs that strengthen local communities.
            .flex.justify-between.py-2.px-4
              .font-bold Operation Dollars Spent
              .font-bold $34,909
            .flex.justify-between.py-2.px-4
              .font-bold Direct On-site Jobs
              .font-bold 0
            .bg-black.text-white.flex.justify-between.py-2.px-4
              div Total Economic Contribution
              div $77,179
            .flex.justify-between.py-2.px-4.mb-8
              .font-bold Total Jobs Supported
              .font-bold 1

            .text-3xl.font-okib.font-bold Building Apartments
            .mb-4 Apartment construction continues as a bright spot in the economy, helping lead the housing recovery
            .bg-black.text-white.flex.justify-between.py-2.px-4
              div Total Economic Contribution
              div $77,179
            .flex.justify-between.py-2.px-4.mb-8
              .font-bold Total Jobs Supported
              .font-bold 1

            .text-3xl.font-okib.font-bold Living in Apartments
            .mb-4 Renting can be a smart choice for a wide range of individuals and families across all income levels. That's why a diverse array of people call apartments home.
            .flex.justify-between.py-2.px-4
              .font-bold Spending Power
              .font-bold $34,909
            .flex.justify-between.py-2.px-4
              .font-bold Direct Jobs Supported
              .font-bold 2
            .bg-black.text-white.flex.justify-between.py-2.px-4
              div Total Economic Contribution
              div $77,179
            .flex.justify-between.py-2.px-4
              .font-bold Total Jobs Supported
              .font-bold 1
        .w-1_5
          .border.border-seashell.m-2.p-2.text-center
            .mdi.mdi-48px.mdi-file-pdf
            .text-center.font-bold.underline Printable PDF
            .flex.justify-center.mt-8
              .mdi.mdi-24px.mdi-facebook-box
              .mdi.mdi-24px.mdi-twitter
            div Share link
  //pre.w-64.block.mx-auto {{ $route.params }}
  //pre
    pre.print_hidden.text-center this will not show in print
    pre.notprint_hidden.text-center this will show in print
</template>


<script>
import sheets from '@/mixins/sheets'
import SectionHero from '@/components/global/SectionHero'
export default {
  components: { SectionHero },
  mixins: [ sheets ],
  data () {
    return {
      ranges: {
        'ApartmentsNational': 'single',
        'ApartmentsState': 'keyvalue',
        'ApartmentsMetro': 'keyvalue',
      },
    }
  },

  mounted () {
    console.log(this.$route)
  },

}
</script>

