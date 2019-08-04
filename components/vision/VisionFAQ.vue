<template lang="pug">
#VisionFAQ.py-4.text-white
  .mx-auto.max-w-4xl.relative
    .text-bolder.mb-10.flex.flex-row.overflow-scroll.whitespace-no-wrap.text-4xl.no-scrollbar
      .short.mr-8.text-center.tran-all-1s.cursor-pointer(
        :ref="`short_${index}`",
        :id="`short_${index}`",
        @click="choose(index)",
        v-for="qa, index in faq",
        :class="{'o-p2': index != current}") {{ qa.Short_Question }}
    .timer-bar.relative.w-full.h-1(v-in-vp).vp-y
      .absolute.bg-white.h-1.w-full
      .absolute.bg-coolblue.h-1.left-0(
        :style="`width: ${width}%`",
        :class="{'tran-width': width > 0}")
    .flex.justify-end.text-2xl.mt-6.mr-4
      .border.border-white.rounded-full.w-10.text-center.mr-4.cursor-pointer.hover_border-coolblue.vp-l(v-in-vp)
        i.mdi.mdi-chevron-left.cursor-pointer(@click="next")
      .border.border-white.rounded-full.w-10.text-center.hover_border-coolblue.vp-l.vp-d-1(v-in-vp)
        i.mdi.mdi-chevron-right.cursor-pointer(@click="prev")
    .absolute.scale-2.opacity-p1.-mt-4
      .text-bolder.text-6xl Q
      .text-bolder.text-6xl.-mt-8 A
    .copy(v-in-vp).vp-y.vp-d-2.lg_h-36
      transition(name="fade-in-right")
        .mt-4.lg_w-10_12.lg_mt-0.ml-8.relative(
          v-for="qa, index in faq",
          v-if="index === current",
          :key="index",
          v-in-vp)
            .text-2xl.text-bolder {{ qa.Question }}
            .mt-4 {{ qa.Answer }}
</template>

<script>
import sheets from '@/mixins/sheets'
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ sheets, inViewport ],
  data () {
    return {
      width: 0,
      current: 0,
      interval: false,
    }
  },
  computed: {
    faq () { return Object.values(this.sheet('main', 'CopyFAQVision', 'Num')) },
    cfaq () { return this.faq[this.current] },
  },
  watch: {
    'inViewport.now' (visible) {
      //if (visible) this.start()
      //if (!visible) this.end()
    }
  },
  methods: {
    choose(index) {
      this.current = index
      this.width = 0
      if (process.browser) {
        this.$refs[`short_${index}`][0].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'})
      }
    },
    start () { this.interval = setInterval(this.tick, 1000) },
    end () { clearInterval(this.interval) },
    tick () {
      if (this.width === 100) this.next(false)
      return this.width = (this.width >= 100) ? 0 : this.width+20
    },
    prev (reset=true) {
      if (this.reset) this.width = 0
      this.current = this.current === (this.faq.length-1) ? 0 : this.current+1
    },
    next (reset=true) {
      if (this.reset) this.width = 0
      this.current = this.current === 0 ? this.faq.length-1 : this.current-1
    },
  }
}
</script>
