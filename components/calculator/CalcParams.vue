<template>
  <offset-section>
    <div v-in-vp class="font-os mb-4 vp-r">ACTIVITY</div>
    <div v-in-vp class="text-3xl mb-8 w-full lg:w-1/2 vp-r vp-d-1">Fill out a few parameters below and see the results.</div>
    <div v-in-vp class="flex flex-col w-full lg:max-w-lg mx-auto vp-r vp-d-2">
      <div class="flex items-center justify-between cursor-pointer mb-2" @click="change_type('existing')">
        <div class="w-1/5 mr-8 text-right">Type</div>
        <div class="w-3/5 font-bold text-xl">Existing apartment community</div>
        <check-box class="mr-4 w-10" :checked="type === 'existing'" />
      </div>
      <div class="flex items-center justify-between cursor-pointer mb-2" @click="change_type('new')">
        <div class="w-1/5 mr-8" />
        <div class="w-3.5 font-bold text-xl">Potential new development</div>
        <check-box class="mr-4 w-10" :checked="type === 'new'" />
      </div>
      <div class="bg-seashell h-px w-full my-10" />
      <div class="flex items-center mb-2">
        <div class="w-1/5 mr-8 text-right">Number of homes</div>
        <div class="w-4/5 text-right mr-4">
          <text-input v-model="homes" type="number" placeholder="How many apartment homes?" />
        </div>
      </div>
      <div class="flex items-center mb-2">
        <div class="w-1_5 mr-8 text-right" />
        <div class="w-4_5 text-left mr-4 text-sm text-bpink">
          <div v-if="error" class="ani-sir">Please specify a number</div>
          <div v-else>&nbsp;</div>
        </div>
      </div>
      <div class="bg-seashell h-px w-full my-10" />
      <div class="flex items-center mb-2 cursor-pointer" @click="by = 'national'; selected = ''">
        <div class="w-1/5 mr-8 text-right">Calculate by</div>
        <div class="w-4/5 mr-4 flex">
          <check-box class="w-12 mr-4" :checked="by === 'national'" />
          <div class="bg-seashell text-xl font-bold w-full rounded py-1 px-2">National</div>
        </div>
      </div>
      <div class="flex items-center mb-2 cursor-pointer" @click="by = 'metro'">
        <div class="w-1/5 mr-8 text-right" />
        <div class="w-4/5 mr-4 flex">
          <check-box class="w-12 mr-4" :checked="by === 'metro'" />
          <select-input v-model="selected" placeholder="Metro" :options="calc_metros" />
        </div>
      </div>
      <div class="flex items-center mb-2 cursor-pointer" @click="by = 'state'">
        <div class="w-1/5 mr-8 text-right" />
        <div class="w-4/5 mr-4 flex">
          <check-box class="w-12 mr-4" :checked="by === 'state'" />
          <select-input v-model="selected" placeholder="State" :options="states" />
        </div>
      </div>
      <div class="flex mt-12 justify-center">
        <div class="waa-button-black" @click="calculate">Calculate</div>
      </div>
    </div>
  </offset-section>
</template>

<script>
import OffsetSection from '@/components/global/OffsetSection'
import CheckBox from '@/components/form/CheckBox'
import SelectInput from '@/components/form/SelectInput'
import TextInput from '@/components/form/TextInput'
import sheets from '@/mixins/sheets'
export default {
  components: { OffsetSection, CheckBox, TextInput, SelectInput },
  mixins: [ sheets ],
  data () {
    return {
      type: 'existing',
      homes: '',
      by: 'national',
      selected: '',
      error: false,
    }
  },
  computed: {
    calc_metros() {
      return Object.keys(this.sheet('calc', 'constructionImpactsMetro', 'Metro')).map(m => m.replace(/_/g, ' '))
    },
  },
  methods: {
    change_type(type) {
      this.type = type
    },
    change_by(type) {
      this.by = by
    },
    calculate () {
      if (this.homes === '') return this.error = true
      this.$emit('calculate', {type: this.type, homes: this.homes, by: this.by, selected: this.selected})
    },
  },
}
</script>
