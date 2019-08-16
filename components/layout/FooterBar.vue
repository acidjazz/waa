<template lang="pug">
footer.bg-seashell.mt-16.p-12.lg_p-24.print_hidden
  .canister.flex.flex-col.lg_flex-row
    .w-full.lg_w-1_2.mb-10.lg_mb-0
      HeaderTitle.mb-4
      .mt-4.w-64 In communities across the country, apartments work - helping people live in a home that’s right for them.
    div.w-full.lg_w-1_2.flex.flex-col.items-center.lg_items-end
      form(
        action="//weareapartments.us16.list-manage.com/subscribe/post?u=b5b3c7cd44e8ec9c9b1c2e7c4&amp;id=5cb9d4e7ac",
        method="post",
        id="joinus",
        name="joinus",
        target="_blank")
        label.block.text-3xl.font-bold.mb-4(for="mce-EMAIL") Join Us
        input.p-2.rounded.font-os.w-64.mb-8(id="mce-EMAIL",type="email",placeholder="E-MAIL",name="EMAIL")
        .text-right.w-64
          a.inline.bg-supernova.px-8.py-4.text-sm.rounded-full.text-center(
            href="/",
            onclick="document.forms['joinus'].submit(); return false;") Subscribe
      .mt-10.flex.flex-row
        a(href="https://nmhc.org",target="_new")
          img(src="/icon-nmhc.png",alt="NMHC logo").mr-8.object-contain.h-8
        a(href="https://www.naahq.org/",target="_new")
          img(src="/icon-naa.png",alt="NAA logo").object-contain.h-8
</template>


<script>
import HeaderTitle from '@/components/layout/HeaderTitle'
export default {
  components: { HeaderTitle },
}
</script>
