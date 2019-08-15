<template lang="pug">
.border.border-seashell.rounded.flex.items-stretch.lg_p-2.print_hidden
  a(:href="url").flex.flex-col.items-center.lg_mr-3.hover_text-orange
    .mdi.mdi-36px.mdi-file-pdf.hidden.lg_block
    .mdi.p-1.mdi-24px.mdi-file-pdf.lg_hidden
    .text-sm.hover_underline.hidden.lg_block Printable PDF
  .flex.flex-col.items-center.justify-between
    .flex
      a.mdi.p-1.lg_p-2.mdi-24px.mdi-facebook-box.hover_text-orange.cursor-pointer(@click="share('facebook')")
      a.mdi.p-1.lg_p-2.mdi-24px.mdi-twitter.hover_text-orange.cursor-pointer(@click="share('twitter')")
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
  methods: {
    share (type) {
      let href = location.href
      if (this.query) {
        href = href.replace('#', '?')
      }

      if (type === 'facebook') {
        this.popup('https://www.facebook.com/sharer/sharer.php?u=' + href,
          'Share on Facebook', 626, 438)
        return true
      }
      if (type === 'twitter') {
        this.popup('https://twitter.com/intent/tweet?url=' + encodeURIComponent(href),
          'Share on Twitter', 626, 438)
        return true
      }
    },
    popup (url, title, w, h) {
      let dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : screen.left
      let dualScreenTop = window.screenTop !== undefined ? window.screenTop : screen.top

      let width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : screen.width
      let height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : screen.height

      let left = ((width / 2) - (w / 2)) + dualScreenLeft
      let top = ((height / 2) - (h / 2)) + dualScreenTop
      let newWindow = window.open(url, title, 'scrollbars=yes, width=' + w + ', height=' + h + ', top=' + top + ', left=' + left)

      // Puts focus on the newWindow
      if (window.focus) {
        newWindow.focus()
      }
    }

  }
}
</script>
