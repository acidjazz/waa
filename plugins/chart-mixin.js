module.exports = {
  methods: {
    ticksCallback (label, index, labels) {
      if (label.toString().indexOf('.') !== -1) {
        return window.numeral(label).format('0%')
      }
      if (window.numeral(label).format('0a').length > 2) {
        return window.numeral(label).format('0a')
      } else {
        return window.numeral(label).format('0.0a')
      }
    },
    chartYAxes () {
      return {
        position: 'left',
        gridLines: {},
        ticks: {
          color: this.colors.grey,
          fontColor: this.colors.grey,
          maxTicksLimit: 6,
          callback: function (label, index, labels) {
            if (label.toString().indexOf('.') !== -1) {
              return window.numeral(label).format('0%')
            }
            return window.numeral(label).format('0a')
          }
        }
      }
    },
    chartXAxes () {
      return {
        gridLines: {},
        ticks: {
          maxTicksLimit: 6,
          maxRotation: 0,
          color: this.colors.grey,
          fontColor: this.colors.grey,
        }
      }
    },
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
        layout: {},
        scales: {
          yAxes: [this.chartYAxes()],
          xAxes: [this.chartXAxes()],
        }
      }

    },
    chartDataset () {
      return {
        pointBorderWidth: 4,
        pointRadius: 5,
      }
    }
  },
  data () {
    return {
      colors: require('~/assets/colors.json'),
    }
  }
}
