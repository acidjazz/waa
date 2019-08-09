<template lang="pug">
OffsetSection
  .font-os.mb-4(v-in-vp).vp-r ACTIVITY
  .text-3xl.mb-8.w-full.lg_w-1_2(v-in-vp).vp-r.vp-d-1 Fill out a few parameters below and see the results.

  .flex.flex-col.w-full.lg_w-128.mx-auto(v-in-vp).vp-r.vp-d-2

    .flex.items-center.justify-between.cursor-pointer.mb-2(@click="change_type('existing')")
      .w-1_5.mr-8.text-right Type
      .w-3_5.font-bold.text-xl Existing apartment community
      CheckBox(:checked="type === 'existing'").mr-4

    .flex.items-center.justify-between.cursor-pointer.mb-2(@click="change_type('new')")
      .w-1_5.mr-8
      .w-3_5.font-bold.text-xl Potential new development
      CheckBox(:checked="type === 'new'").mr-4

    .bg-seashell.h-px.w-full.my-10

    .flex.items-center.mb-2
      .w-1_5.mr-8.text-right Number of homes
      .w-4_5.text-right.mr-4
        TextInput(type="number",v-model="homes",placeholder="How many apartment homes?")
    .flex.items-center.mb-2
      .w-1_5.mr-8.text-right
      .w-4_5.text-left.mr-4.text-sm.text-bpink
        .ani-sir(v-if="error") Please specify a number
        div(v-else) &nbsp;

    .bg-seashell.h-px.w-full.my-10

    .flex.items-center.mb-2.cursor-pointer(@click="by = 'national'; selected = ''")
      .w-1_5.mr-8.text-right Calculate by
      .w-4_5.mr-4.flex
        CheckBox(:checked="by === 'national'").w-12.mr-4
        .bg-seashell.text-xl.font-bold.w-full.rounded.py-1.px-2 National

    .flex.items-center.mb-2.cursor-pointer(@click="by = 'metro'")
      .w-1_5.mr-8.text-right
      .w-4_5.mr-4.flex
        CheckBox(:checked="by === 'metro'").w-12.mr-4
        SelectInput(placeholder="Metro",:options="metros",v-model="selected")

    .flex.items-center.mb-2.cursor-pointer(@click="by = 'state'")
      .w-1_5.mr-8.text-right
      .w-4_5.mr-4.flex
        CheckBox(:checked="by === 'state'").w-12.mr-4
        SelectInput(placeholder="State",:options="states",v-model="selected")

    .flex.mt-12.justify-center
      .waa-button-black(@click="calculate") Calculate

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
