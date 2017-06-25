module.exports = {
  methods: {

    chartOptions () {

      return {
        tooltips: {
          displayColors: false,
          bodyFontFamily: 'Maven Pro',
          bodyFontSize: 16,
          titleFontSize: 16,
          borderWidth: 2,
        },
        legend: {
          display: false
        },
      }

    }
  }
}
