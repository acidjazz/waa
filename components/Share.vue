<template lang="pug">
#Share
  a.action.share
    .button(@click="modal('shares')")
      i.fa.fa-fw.fa-share
      .copy Share
    .modal.modal_shares(
      :class="{ on: modals.shares, off: !modals.shares }",
      v-on-clickaway="away",
    )
      .chevron
        .inner
      .inner
        .share.share_facebook
          i.fa.fa-fw.fa-facebook(@click="share('facebook')")
        .share.share_twitter
          i.fa.fa-fw.fa-twitter(@click="share('twitter')")
  a.action.pdf(:href="'http://pdf.weareapartments.org?url=' + $route.path")
    .button
      i.fa.fa-fw.fa-lg.fa-file-pdf-o
      .copy Create PDF
</template>

<script>
import { mixin as clickaway } from 'vue-clickaway'
export default {
  mixins: [ clickaway ],
  methods: {
    modal (modal, toggle) {
      let before = this.modals[modal]
      setTimeout(() => {
        this.modals[modal] = toggle === undefined ? !before : toggle
      }, 20)
    },
    away () {
      for (let modal in this.modals) this.modals[modal] = false
    },
    share (type) {

      if (type === 'facebook') {
        this.popup('https://www.facebook.com/sharer/sharer.php?u=' + location.href,
          'Share on Facebook', 626, 438)
        return true
      }
      if (type === 'twitter') {
        this.popup('https://twitter.com/intent/tweet?url=' + encodeURIComponent(location.href),
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
  },

  data () {
    return {
      modals: {
        shares: false
      }
    }
  }

}
</script>

<style lang="stylus">
json('../assets/colors.json')
json('../assets/fonts.json')
@import '../assets/stylus/mixins.styl'
#Share
  position absolute
  > .action
    cursor pointer
    float left
    position relative
    user-select none
    > .button
      border-radius 3px
      padding 10px
      transition background-color 0.2s ease 0s
      &:hover
        background-color blue
        color white
        > .fa, > .copy
          color white
      &:nth-child(1)
        margin 0 10px 0 0
      > .fa
        color blue
      > .fa, > .copy
        transition color 0.2s ease 0.02s
        float left
      > .copy
        font c1
        color black
        padding-left 5px 
        line-height 15px
    > .modal
      position absolute
      animation scaleIn 0.2s ease 0s both
      top 40px
      onoff()
      > .chevron
        position absolute
        top 0
      > .inner
        width 78px
        border 1px solid lightblue
        background-color lightwhite
        border-radius 3px
        margin 12px 0 0 0
        text-align center
        > .share
          padding 6px
          display inline-block
          transition colo 0.1s linear 0s
          color grey
          > i
            transition transform 0.1s linear 0s
            transform scale(1)
          &:nth-child(1)
            margin-right 12px
          &:hover
            color blue
            > i
              transform scale(1.2)


</style>
