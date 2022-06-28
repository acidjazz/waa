<template>
  <div id="PercChart">
    <div v-for="value, label in datas" :key="label" class="flex flex-col">
      <div class="flex justify-between my-2">
        <div class="text-bold">{{ label }}</div>
        <div class="text-bold">
          <client-only>
            <VueCountUp :end-val="perc(value)" />
          </client-only><span>%</span>
        </div>
      </div>
      <div class="relative h-4">
        <div class="absolute bg-seashell inset-0 my-1 w-full" />
        <div class="absolute bg-coolblue inset-0 tran-width inset-y" :style="`width: ${perc(value)}%;`" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
  data () { return { fire: true } },
  computed: {
    vals () { return Object.values(this.datas) },
    sum () { return this.vals.reduce( (a,b) => a + b) },
  },
  methods: {
    perc (value) {
      if (!this.fire) return 0
      return Math.round(value / this.sum * 100)
    },
  },
}
</script>
