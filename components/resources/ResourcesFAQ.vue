<template>
  <div id="VisionFAQ" class="text-white">
    <div class="mx-auto max-w-5xl relative lg_h-96">
      <div class="text-bolder mb-10 flex flex-row overflow-scroll whitespace-no-wrap text-xl lg_text-4xl no-scrollbar">
        <div
          v-for="qa, index in faq" :id="`short_${index}`" :ref="`short_${index}`"
          :key="index"
          class="short mx-4 text-center tran-all-1s cursor-pointer" :class="{'o-p2': index != current}" @click="choose(index)"
        >
          {{ qa.Short_Question }}
        </div>
        <div class="block px-16">
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      </div>
      <div v-in-vp class="timer-bar relative w-full h-1 vp-y">
        <div class="absolute bg-white h-1 w-full" />
        <div class="absolute bg-coolblue h-1 left-0" :style="`width: ${width}%`" :class="{'tran-width': width > 0}" />
      </div>
      <div class="flex justify-end text-2xl mt-6 mr-4">
        <div v-in-vp class="border border-white rounded-full w-10 text-center mr-4 cursor-pointer hover_border-coolblue vp-l"><i class="mdi mdi-chevron-left cursor-pointer" @click="next" /></div>
        <div v-in-vp class="border border-white rounded-full w-10 text-center hover_border-coolblue vp-l vp-d-1"><i class="mdi mdi-chevron-right cursor-pointer" @click="prev" /></div>
      </div>
      <div class="absolute scale-2 opacity-p1 -mt-4">
        <div class="text-bolder text-6xl">Q</div>
        <div class="text-bolder text-6xl -mt-8">A</div>
      </div>
      <div v-in-vp class="copy vp-y vp-d-2 lg_h-36">
        <transition name="fade-in-right">
          <div
            v-for="qa, index in faq" v-if="index === current" :key="index"
            v-in-vp class="mt-4 lg_w-10_12 lg_mt-0 ml-8 relative"
          >
            <div class="text-2xl text-bolder">{{ qa.Question }}</div>
            <div class="mt-4">{{ qa.Answer }}</div>
          </div>
        </transition>
      </div>
    </div>
  </div>
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
    },
  },
  methods: {
    choose(index) {
      this.current = index
      this.width = 0
      if (process.browser)
        this.$refs[`short_${index}`][0].scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
          inline: 'start'})

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
      this.choose(this.current)
    },
    next (reset=true) {
      if (this.reset) this.width = 0
      this.current = this.current === 0 ? this.faq.length-1 : this.current-1
      this.choose(this.current)
    },
  },
}
</script>
