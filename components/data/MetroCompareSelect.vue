<template lang="pug">
.flex
  .hidden.lg_block.lg_w-1_2
    img(src="/apt1.jpg")
  .lg_w-1_2.lg_ml-10
    .font-os.uppercase.text-2xl.mb-4 ACTIVITY
    .text-bolder.text-4xl.mb-4 Compare your metro
    .mb-4 Enter two cities to cities below to compare how they stack up against another city.
    form(autocomplete="off").relative
      .input.relative.mb-4(v-for="name, input in inputs")
        input.py-2.px-4.bg-seashell.lg_w-96(
          type="text",
          v-model="city[input].name",
          :placeholder="`ENTER CITY ${name}`",
          autocomplete="off")
        .matches.absolute.z-10.bg-white.w-96(v-if="matches(input)")
          .match.py-2.px-4.border.border-seashell.cursor-pointer.hover_bg-coolblue.hover_text-white(
            v-for="city in matches(input)",
            @click="select(input, city)",
            ) {{ city }}
    .flex.items-center
      .waa-button-black(v-if="ready",@click="compare") Calculate
      .waa-button-readonly(v-else) Calculate
      .ml-2
        i.mdi.mdi-close-circle.text-alum.mdi-24px.cursor-pointer(v-if="ready",@click="clear")

</template>

<script>
import sheets from '@/mixins/sheets'
export default {
  mixins: [ sheets ],
  data () {
    return {
      inputs: {
        one: 'ONE',
        two: 'TWO',
      },
      city: {
        one: {
          name: '',
          selected: false,
        },
        two: {
          name: '',
          selected: false,
        }
      }
    }
  },
  computed: {
    ready () {
      return  this.city.one.name === this.city.one.selected &&
        this.city.two.name === this.city.two.selected
    },
    metrosf () {
      return Object.keys(this.sheet('calc', 'operationImpactsMetro', 'Metro')).map(m => this.value(m))
    },
  },
  methods: {
    matches(model) {
      if (this.city[model].name === '') return false
      if (this.city[model].name === this.city[model].selected) return false
      return this.metrosf.filter(m => m.match(new RegExp(this.city[model].name, 'gi'))).slice(0, 5)
    },
    select (input, city) {
      this.city[input].name = city
      this.city[input].selected = city
    },
    compare () {
      return this.$emit('compare', [this.city.one.selected, this.city.two.selected])
    },
    clear () {
      this.city.one.name = ''
      this.city.one.selected = false
      this.city.two.name = ''
      this.city.two.selected = false
      return this.$emit('compare', false)
    },
  },

}
</script>
