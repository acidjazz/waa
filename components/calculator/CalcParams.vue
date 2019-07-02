<template lang="pug">
OffsetSection
  .font-os.mb-4 ACTIVITY
  .text-3xl.mb-8 Fill out a few parameters below and see the results.
  .flex.flex-col.w-128.mx-auto

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

    .bg-seashell.h-px.w-full.my-10

    .flex.items-center.mb-2(@click="by = 'metro'")
      .w-1_5.mr-8.text-right Calculate by
      .w-4_5.mr-4.flex
        CheckBox(:checked="by === 'metro'").w-12.mr-4
        SelectInput

    .flex.items-center.mb-2(@click="by = 'state'")
      .w-1_5.mr-8.text-right
      .w-4_5.mr-4.flex
        CheckBox(:checked="by === 'state'").w-12.mr-4
        SelectInput

</template>


<script>
import OffsetSection from '@/components/global/OffsetSection'
import CheckBox from '@/components/form/CheckBox'
import SelectInput from '@/components/form/SelectInput'
import TextInput from '@/components/form/TextInput'
export default {
  components: { OffsetSection, CheckBox, TextInput, SelectInput },
  data () {
    return {
      type: 'existing',
      homes: '',
      by: 'metro',
    }
  },
  methods: {
    change_type(type) {
      this.type = type
    },
    change_by(type) {
      this.by = by
    },
  },
}
</script>
