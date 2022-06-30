<template>
  <div id="FactTicker" class="p-10">
    <div class="mx-auto max-w-4xl text-white">
      <div v-in-vp class="timer-bar relative w-full h-1 vp-y">
        <div class="absolute bg-white h-1 w-full" />
        <div class="absolute bg-coolblue h-1 left-0" :style="`width: ${width}%`" :class="{'tran-width': width &gt; 0}" />
      </div>
      <div class="flex justify-end text-2xl mt-6 mr-4">
        <div v-in-vp class="border border-white rounded-full w-10 text-center mr-4 cursor-pointer hover:border-coolblue vp-l" @click="next">
          <client-only>
            <Icon icon="mdi:chevron-left" class="cursor-pointer mx-auto" />
          </client-only>
        </div>
        <div v-in-vp class="border border-white rounded-full w-10 text-center hover:border-coolblue vp-l vp-d-1" @click="prev">
          <client-only>
            <Icon icon="mdi:chevron-right" class="cursor-pointer mx-auto" />
          </client-only>
        </div>
      </div>
      <div v-in-vp class="copy vp-y vp-d-2 h-24">
        <transition name="fade-in-right">
          <div
            v-for="fact, index in facts" v-if="index === current" :key="index"
            v-in-vp class="lg:text-2xl w-full mt-4 lg:w-10/12 lg:mt-0 ml-8 relative"
          >
            <div>
              <span>{{ fact }}</span>
            </div>
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
  props: {
    range: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      width: 0,
      current: 0,
      interval: false,
    }
  },
  computed: {
    facts () { return this.sheet('main', this.range, false).flat() },
    delay () { return this.sheet('main', 'CopyTickerDelay', false).flat()[1] },
  },
  watch: {
    'inViewport.now' (visible) {
      if (visible) this.start()
      if (!visible) this.end()
    },
  },
  methods: {
    start () { this.interval = setInterval(this.tick, this.delay*200) },
    end () {
      clearInterval(this.interval)
      this.width = 0
    },
    tick () {
      if (this.width === 100) this.next(false)
      return this.width = (this.width >= 100) ? 0 : this.width+20
    },
    next (reset=true) {
      if (this.reset) this.width = 0
      this.current = this.current === (this.facts.length-1) ? 0 : this.current+1
    },
    prev (reset=true) {
      if (this.reset) this.width = 0
      this.current = this.current === 0 ? this.facts.length-1 : this.current-1
    },
  },
}
</script>
