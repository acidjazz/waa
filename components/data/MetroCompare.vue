<template lang="pug">
.flex
  .lg_w-1_2
    img(src="/apt1.jpg")
  .lg_w-1_2.ml-10
    .font-os.uppercase.text-2xl.mb-4 ACTIVITY
    .text-bolder.text-4xl.mb-4 Compare your metro
    .mb-4 Enter two cities to cities below to compare how they stack up against another city.
    form(autocomplete="off").relative
      .input.relative.mb-4(v-for="name, input in inputs")
        input.py-2.px-4.bg-seashell.w-96(
          type="text",
          v-model="city[input].name",
          :placeholder="`ENTER CITY ${name}`",
          autocomplete="off")
        .matches.absolute.z-10.bg-white.w-96(v-if="matches(input)")
          .match.py-2.px-4.border.border-seashell.cursor-pointer.hover_bg-coolblue.hover_text-white(
            v-for="city in matches(input)",
            @click="select(input, city)",
            ) {{ city }}
    .waa-button-black(v-if="ready") Calculate
    .waa-button-readonly(v-else) Calculate
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
  },
  methods: {
    matches(model) {
      if (this.city[model].name === '') return false
      if (this.city[model].name === this.city[model].selected) return false
      return this.metros.filter(m => m.match(new RegExp(this.city[model].name, 'gi')))
    },
    select (input, city) {
      this.city[input].name = city
      this.city[input].selected = city
    },
  },
}
</script>
