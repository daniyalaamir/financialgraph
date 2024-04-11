const lineChart = {
  options: {
    chart: {
      toolbar: {
        show: false
      },
    },
    dataLabels: {
      enabled: false
    },
    stroke: {
      curve: "smooth"
    },
    yaxis: {
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: ["#8c8c8c"]
        },
        formatter: function(value) {
          return (value / 10000000)
        }
      }
    },
    xaxis: {
      type: "datetime",
      labels: {
        style: {
          fontSize: "14px",
          fontWeight: 600,
          colors: "#8c8c8c"
        }
      }
    },
    tooltip: {
      x: { format: "MMM dd, yyyy" },
      y: {
        formatter: function (val) {
          return "$" + (val / 10000000)
        }
      }
    },
    legend: {
      show: true
    }
  }
}

export default lineChart;
