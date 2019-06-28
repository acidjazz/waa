<template lang="pug">
#FactTicker.p-10
  .mx-auto.max-w-4xl.text-white
    .timer-bar.relative.w-full.h-1(v-in-vp).vp-y
      .absolute.bg-white.h-1.w-full
      .absolute.bg-coolblue.h-1.left-0(
        :style="`width: ${width}%`",
        :class="{'tran-width-1s-l': width > 0}")
    .flex.justify-end.text-2xl.mt-6.mr-4
      .border.border-white.rounded-full.w-10.text-center.mr-4.cursor-pointer.hover_border-coolblue.vp-l(v-in-vp)
        i.mdi.mdi-chevron-left.cursor-pointer(@click="next")
      .border.border-white.rounded-full.w-10.text-center.hover_border-coolblue.vp-l.vp-d-1(v-in-vp)
        i.mdi.mdi-chevron-right.cursor-pointer(@click="prev")
    .copy(v-in-vp).vp-y.vp-d-2.h-24
      transition(name="fade-in-right")
        .text-2xl.w-full.mt-4.lg_w-10_12.lg_mt-0(
          v-for="fact, index in facts",
          v-if="index === current",
          :key="index",
          v-in-vp): div {{ fact }}
</template>

<script>
import sheets from '@/mixins/sheets'
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ sheets, inViewport ],
  data () {
    return {
      range: 'Copy-Ticker',
      width: 0,
      current: 0,
      interval: false,
    }
  },
  computed: { facts () { return this.sheet_oned }, },
  watch: {
    'inViewport.now' (visible) {
      if (visible) this.start()
      if (!visible) this.end()
    }
  },
  methods: {
    start () { this.interval = setInterval(this.tick, 1000) },
    end () { clearInterval(this.interval) },
    tick () {
      if (this.width === 100) this.next(false)
      return this.width = (this.width >= 100) ? 0 : this.width+20
    },
    next (reset=true) {
      if (this.reset) this.width = 0
      this.current = this.current === (this.sheet_oned.length-1) ? 0 : this.current+1
    },
    prev (reset=true) {
      if (this.reset) this.width = 0
      this.current = this.current === 0 ? this.sheet_oned.length-1 : this.current-1
    },
  }
}
</script>
