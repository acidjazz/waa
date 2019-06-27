

<template lang="pug">
#FactTicker.py-10
  .mx-auto.max-w-4xl.text-white
    .timer-bar.relative.w-full.h-1
      .absolute.bg-white.h-1.w-full
        .absolute.bg-coolblue.h-1.left-0(
          :style="`width: ${width}%`",
          :class="{'tran-width-1s-l': width > 0}")
    .nav-buttons.flex.justify-end.text-2xl.mt-6.mr-4
      .border.border-white.rounded-full.w-10.text-center.mr-4.cursor-pointer(class="hover:border-coolblue")
        i.mdi.mdi-chevron-left
      .border.border-white.rounded-full.w-10.text-center(class="hover:border-coolblue")
        i.mdi.mdi-chevron-right
    transition(name="fade-in-left")
      .text-2xl.h-24(
        v-for="fact, index in facts",
        v-if="index === current",
        :key="index",
        class="w-10/12"): .copy {{ fact }}
</template>

<script>
import sheets from '@/mixins/sheets'
export default {
  mixins: [ sheets ],
  data () {
    return {
      range: 'Copy-Ticker',
      width: 0,
      current: 0,
      interval: false,
    }
  },
  computed: { facts () { return this.sheet_oned }, },
  mounted () { this.interval = setInterval(this.tick, 1000) },
  beforeDestroyed () { clearInterval(this.interval) },
  methods: {
    tick () {
      if (this.width === 100) this.next()
      return this.width = (this.width >= 100) ? 0 : this.width+20
    },
    next () {
      this.current = this.current === (this.sheet_oned.length-1) ? 0 : this.current+1
    },
  }
}
</script>
