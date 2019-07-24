<template lang="pug">
#DataDetail
  DataName(:area="area")
  .flex.lg_w-5_6.mx-auto.-p-4.flex-col.lg_flex-row

    .lg_w-1_2.p-4
      DataDetailResidents(:area="area")
      .bg-black.h-2
      DataDetailNeeded(:area="area")
    .lg_w-1_2.p-4
      DataDetailHomes(:area="area")
      .bg-black.h-2
      DataDetailRepair(:area="area")

</template>

<script>
import count from '@/mixins/count'
import data from '@/mixins/data'
import numeral from 'numeral'
import DataName from '@/components/data/DataName'
import DataDetailResidents from '@/components/data/DataDetailResidents'
import DataDetailHomes from '@/components/data/DataDetailHomes'
import DataDetailNeeded from '@/components/data/DataDetailNeeded'
import DataDetailRepair from '@/components/data/DataDetailRepair'
export default {
  components: {
    DataName,
    DataDetailResidents,
    DataDetailHomes,
    DataDetailNeeded,
    DataDetailRepair,
  },
  mixins: [ data, count ],
  props: {
    area: {
      type: Object,
      required: true,
    }
  },
}
</script>
