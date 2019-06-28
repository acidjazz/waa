<template lang="pug">
.bg-seashell.mt-20.p-24
  .container.mx-auto.flex
    .w-1_2
      HeaderTitle.mb-4
      .mt-4.ml-4.w-64 In communities across the country, apartments work - helping people live in a home that’s right for them.
    div.w-1_2.flex.flex-col.items-end
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
