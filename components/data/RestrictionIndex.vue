<template>
  <div id="RestrictionIndex" class="flex items-center justify-center lg_justify-start">
    <div class="chart">
      <div class="w-32 h-32 rounded-full bg-rainbow p-3 tran-all-children">
        <div class="w-full h-full bg-white rounded-full p-3">
          <div class="relative w-full h-full" :style="`transform: rotate(${rotation}deg);`">
            <div class="border-4 w-full h-full rounded-full flex items-center justify-center" :class="`border-${color}`">
              <div class="pointer top-0 absolute -mt-2" :class="`pointer-${color}`" />
              <div class="text-3xl text-bolder" :style="`transform: rotate(${-rotation}deg);`">{{ index }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="w-32 flex text-alum bg-white justify-between -mt-8 pb-2"><span>Harder</span><span>Easier</span></div>
    </div>
    <div class="ml-4 text-bolder">
      <div>{{ metro.Metro_Area }}{{ plural }}</div>
      <div>Restriction Index</div>
    </div>
  </div>
</template>


<script>
export default {
  props: {
    metro: {
      type: Object,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
  },
  data () {
    return {
      a: 20,
      b: -5,
      c: -130,
      d: 130,
    }
  },
  computed: {
    index () { return this.metro.Restriction_Index },
    rotation () {
      return ( (this.index-this.a) * ( (this.d-this.c) / (this.b-this.a) ) ) + this.c
    },
    plural () { return this.metro.Metro_Area.substr(-1) === 's' ? "'" : "'s" },
  },
}
</script>
