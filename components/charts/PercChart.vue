<template lang="pug">
#PercChart
  .flex.flex-col(v-for="value, label in datas")
    .flex.justify-between.my-2
      .text-bold {{ label }}
      .text-bold {{ perc(value) }}%
    .relative.h-4
      .absolute.bg-seashell.inset-0.my-1.w-full
      .absolute.bg-gradtrue.inset-0.tran-width.inset-y(:style="`width: ${perc(value)}%;`")
</template>


<script>
import inViewport from 'vue-in-viewport-mixin'
export default {
  mixins: [ inViewport ],
  props: {
    datas: {
      type: Object,
      required: true,
    }
  },
  data () { return { fire: false, } },
  computed: {
    vals () { return Object.values(this.datas) },
  },
  watch: { 'inViewport.now' (visible) { return this.fire = visible } },

  methods: {
    perc (value) {
      if (!this.fire) return 0
      return Math.round(value / ( this.vals[0] + this.vals[this.vals.length-1] ) * 100)
    }
  },
}
</script>
