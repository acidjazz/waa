<template>
  <div class="flex">
    <div class="hidden lg:block lg:w-1:2">
      <img src="/apt1.jpg" alt="Metro Compare">
    </div>
    <div class="lg:w-1/2 lg:ml-10">
      <div class="font-os uppercase text-2xl mb-4">ACTIVITY</div>
      <div class="text-bolder text-4xl mb-4">Compare your metro</div>
      <div class="mb-4">Enter two metros below to compare how they stack up.</div>
      <form class="relative" autocomplete="off">
        <div v-for="name, input in inputs" :key="name" class="input relative mb-4">
          <input
            v-model="city[input].name" class="py-2 px-4 bg-seashell lg:w-96" type="text"
            :placeholder="`ENTER METRO ${name}`" autocomplete="off"
          >
          <div v-if="matches(input)" class="matches absolute z-10 bg-white w-96">
            <div
              v-for="lcity in matches(input)"
              :key="lcity"
              class="match py-2 px-4 border border-seashell cursor-pointer hover:bg-coolblue hover:text-white"
              @click="select(input, lcity)"
            >
              {{ lcity }}
            </div>
          </div>
        </div>
      </form>
      <div class="flex items-center">
        <div v-if="ready" class="waa-button-black" @click="compare">Calculate</div>
        <div v-else class="waa-button-readonly">Calculate</div>
        <div class="ml-2">
          <Icon
            v-if="ready" icon="mdi:close-circle" class=" text-alum cursor-pointer"
            @click="clear"
          />
        </div>
      </div>
    </div>
  </div>
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
        },
      },
    }
  },
  computed: {
    ready () {
      return  this.city.one.name === this.city.one.selected &&
        this.city.two.name === this.city.two.selected
    },
    metrosf () {
      return Object.keys(this.sheet('calc', 'operationImpactsMetro', 'Metro'))
        .map(m => this.value(m))
        .filter(m => !['Sioux Falls', 'Hololulu', 'Pittsburgh'].includes(m))
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
