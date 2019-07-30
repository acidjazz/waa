<template lang="pug">
.border.border-seashell.rounded.flex.items-stretch.lg_p-2.print_hidden
  a(:href="url").flex.flex-col.items-center.lg_mr-3.hover_text-orange
    .mdi.mdi-36px.mdi-file-pdf.hidden.lg_block
    .mdi.p-1.mdi-24px.mdi-file-pdf.lg_hidden
    .text-sm.hover_underline.hidden.lg_block Printable PDF
  .flex.flex-col.items-center.justify-between
    .flex
      a.mdi.p-1.lg_p-2.mdi-24px.mdi-facebook-box.hover_text-orange(href="test")
      a.mdi.p-1.lg_p-2.mdi-24px.mdi-twitter.hover_text-orange(href="test")
    .text-sm.hidden.lg_block Share link
</template>

<script>
export default {
  computed: {
    host () { return process.browser ? encodeURI(window.document.URL).replace(/#/g, '%23') : false },
    url () {
      return 'https://pdf-api.weareapartments.org/api/render?' +
      Object.entries({
        scrollPage: 'true',
        emulateScreenMedia: 'false',
        'pdf.margin.top': '0.5cm',
        'pdf.margin.bottom': '0.5cm',
        'pdf.margin.left': '0.5cm',
        'pdf.margin.right': '0.5cm',
        url: this.host,
      }).map(([k,v]) => `${k}=${v}`).join('&')
    },
  },
}
</script>
