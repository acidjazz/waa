<template>
  <div class="border border-seashell rounded flex items-stretch lg:p-2 print:hidden">
    <a class="flex flex-col items-center lg:mr-3 hover:text-orange" :href="url">
      <Icon icon="mdi:file-pdf" class="hidden lg:block w-8 h-8 mb-2" />
      <Icon icon="mdi:file-pdf" class="lg:hidden w-6 h-6" />
      <div class="text-sm hover:underline hidden lg:block">Printable PDF</div></a>
    <div class="flex flex-col items-center justify-between">
      <div class="flex">
        <a class="p-1 lg:p-2 hover:text-orange cursor-pointer" @click="share('facebook')">
          <Icon icon="mdi:facebook-box" class="w-6 h-6" />
        </a>
        <a class="p-1 lg:p-2 hover:text-orange cursor-pointer" @click="share('twitter')">
          <Icon icon="mdi:twitter" class="w-6 h-6" />
        </a>
      </div>
      <div class="text-sm hidden lg:block">Share link</div>
    </div>
  </div>
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
        'pdf.pageRanges': 1,
        url: this.host,
      }).map(([k,v]) => `${k}=${v}`).join('&')
    },
  },
  methods: {
    share (type) {
      let href = location.href
      if (this.query)
        href = href.replace('#', '?')


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
      if (window.focus)
        newWindow.focus()

    },

  },
}
</script>
