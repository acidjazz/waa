<template lang="pug">
#PercChart
  .flex.flex-col(v-for="value, label in datas")
    .flex.justify-between.my-2
      .text-bold {{ label }}
      .text-bold
        no-ssr
          VueCountUp(:endVal="perc(value)")
        span %
    .relative.h-4
      .absolute.bg-seashell.inset-0.my-1.w-full
      .absolute.bg-coolblue.inset-0.tran-width.inset-y(:style="`width: ${perc(value)}%;`")
</template>
<script>
// import inViewport from 'vue-in-viewport-mixin'
export default {
  // mixins: [ inViewport ],
  props: {
    datas: {
      type: Object,
      required: true,
    },
    print: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data () { return { fire: true, } },
  computed: {
    vals () { return Object.values(this.datas) },
    sum () { return this.vals.reduce( (a,b) => a + b) },
  },

  // watch: { 'inViewport.now' (visible) { return this.fire = visible } },

  methods: {
    perc (value) {
      if (!this.fire) return 0
      return Math.round(value / this.sum * 100)
    },
  },
}
</script>
