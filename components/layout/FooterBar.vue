<template lang="pug">
.bg-seashell.mt-32.p-12.lg_p-24
  .canister.flex.flex-col.lg_flex-row
    .w-full.lg_w-1_2.mb-10.lg_mb-0
      HeaderTitle.mb-4
      .mt-4.ml-4.w-64 In communities across the country, apartments work - helping people live in a home that’s right for them.
    div.w-full.lg_w-1_2.flex.flex-col.items-center.lg_items-end
      div
        .text-3xl.font-bold.mb-4 Join Us
        input.p-2.rounded.font-os.w-64.mb-8(placeholder="E-MAIL")
        .text-right.w-64
          .inline.bg-flamingo.text-white.px-8.py-4.text-sm.rounded-full.text-center Subscribe
      .mt-10.flex.flex-row
        a(href="https://nmhc.org",target="_new")
          img(src="/icon-nmhc.png").mr-8.object-contain.h-8
        a(href="https://www.naahq.org/",target="_new")
          img(src="/icon-naa.png").object-contain.h-8


</template>


<script>
import HeaderTitle from '@/components/layout/HeaderTitle'
export default {
  components: { HeaderTitle },
}
</script>
