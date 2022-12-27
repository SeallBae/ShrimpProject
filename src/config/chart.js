var Time = [50, 60, 70, 80, 90, 100];
var Values = [7, 8, 8, 9, 9, 9, 10, 11, 14, 14, 15];
new Chart("EC-Chart", {
  type: "line",
  data: {
    labels: Time,
    datasets: [
      {
        lineTension: 0,
        backgroundColor: ["rgba(105, 0, 132, .2)"],
        borderColor: ["rgba(200, 99, 132, .7)"],
        borderWidth: 2,
        data: Values,
      },
    ],
  },
  options: {
    legend: { display: false },
    scales: {
      yAxes: [{ ticks: { min: 6, max: 16 } }],
    },
  },
});
