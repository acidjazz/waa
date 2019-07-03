<template lang="pug">
.page.page-calculate.bg-white
  br
  br
  br
  br
  br
  br
  pre.print_hidden.text-center this will not show in print
  pre.notprint_hidden.text-center this will show in print
  pre.w-64.block.mx-auto {{ $route.params }}
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
  br
</template>


<script>
import sheets from '@/mixins/sheets'
export default {
  mixins: [ sheets ],
  data () {
    return {
      ranges: {
        'ApartmentsNational': 'single',
        'ApartmentsState': 'keyvalue',
        'ApartmentsMetro': 'keyvalue',
      },
    }
  },

  mounted () {
    console.log(this.sheets_data.ApartmentsNational)
  },

}
</script>
