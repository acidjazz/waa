<template lang="pug">
.copy The country will need to add over 
  b {{ homes }} 
  | new apartment homes each year on average to keep up with demand. The industry averaged just  
  b {{ completions }} 
  | {{ wording }} from 2011-2017 .
</template>

<script>
export default {
  props: [ 'choice' ],

  methods: {
    json (sheet, result) {
      window.axios.get('/' + sheet)
        .then(response => {
          result(response)
        })
    },
    populate () {
      const numeral = window.numeral

      let json = {}

      switch (this.choice.type) {
        case 'national':
        case 'state':
          this.json('US Building.json', (result) => {
            this.homes = numeral(result.data.data['Total U.S.'][1]).format('0,0a')
            this.completions = numeral(result.data.data['Total U.S.'][0]).format('0,0a')
            this.type = 'country'
          })
          break
        case 'disabled-was-state':
          this.json('State Building Needed.json', (result) => {
            this.homes = numeral(result.data.data[2017][result.data.labels.indexOf(this.choice.value)]).format('0,0a')
          })
          this.json('State Building Current.json', (result) => {
            this.completions = numeral(result.data.data[2017][result.data.labels.indexOf(this.choice.value)]).format('0,0a')
            this.type = 'state'
            this.wording = 'permits'
          })
          break
      }
    },
  },

  mounted () {
    this.populate()
  },
  watch: {
    '$route' () {
      this.populate()
    }
  },
  data () {
    return {
      homes: 0,
      completions: 0,
      type: 'country',
      wording: 'completions',
    }
  }
}
</script>
