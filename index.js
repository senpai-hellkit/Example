var ourCanvas = $("#ourChart");
var ourLine = $("#ourLine");
var ourPie = $("#ourPie");

/*
Chart.defaults.font.family = "Lato";
Chart.defaults.font.size = 18;
Chart.defaults.color = "blue";
*/

var chartElement = new Chart(ourCanvas, {
    type: 'bar',
    data: {
        labels: ["Китай", "Индия", "США", "Индонезия", "Бразилия", "Пакистан", "Нигерия", "Бангладеш", "Россия", "Япония"],
        datasets: [
            {
                label: 'Популяция',
                data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(54, 162, 235, 0.9)',
                    /*
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)',
                    'rgba(255, 159, 64, 0.6)',
                    'rgba(255, 99, 132, 0.6)',
                    'rgba(54, 162, 235, 0.6)',
                    'rgba(255, 206, 86, 0.6)',
                    'rgba(75, 192, 192, 0.6)',
                    'rgba(153, 102, 255, 0.6)'
                    */
            },
            {
                label: 'Популяция',
                data: [1579302771, 1381935911, 526625791, 460580739, 307353391, 304924861, 290632261, 257826578, 242257519, 326451398],
                backgroundColor: 'rgba(255, 206, 86, 0.3)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(255, 206, 86, 1)'
            }
        ]
    },
    options: {
        /* indexAxis: 'y', */
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "bottom",
                labels: {
                    boxWidth: 50,
                    color: "black",
                    /*
                    font: {
                        size: 24,
                        weight: "bold",
                        style: "italic"
                    }
                     */
                }

            },
            /*
            tooltip: {
                cornerRadius: 0,
                caretSize: 0,
                padding: 10,
                backgroundColor: 'black',
                borderColor: "gray",
                borderWidth: 5,
                titleMarginBottom: 4,
                titleFont: {
                    "weight": "bold",
                    "size": 22
                }
            },

            title: {
                display: true,
                text: 'Самые свежие данные',
                font: {
                    "weight": "bold",
                    "size": 22
                }
            }
                        */
        },

    }
});




var chartLine = new Chart(ourLine, {
    type: 'line',
    data: {
        labels: ["Китай", "Индия", "США", "Индонезия", "Бразилия", "Пакистан", "Нигерия", "Бангладеш", "Россия", "Япония"],
        datasets: [
            {
                label: 'Популяция',
                data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(54, 162, 235, 0.9)'
            }
        ]
    },
});



var chartPie = new Chart(ourPie, {
    type: 'doughnut', /* pie */
    data: {
        labels: ["Хирургия",
            "Стоматология",
            "Гинекология",
            "При родах, особенно после кесарева сечения",
            "Общая терапия",
            "Педиатрия",
            "Травматология",
            "Офтальмология",
            "Анестезиология",
            "Оказание скорой медицинской помощи"],
        datasets: [
            {
                label: 'Популяция',
                data: [25,
                15,
                15,
                15,
                10,
                5,
                5,
                5,
                3,
                2,
                ],
                backgroundColor: [
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                    'rgba(153, 102, 255, 0.3)',
                    'rgba(255, 159, 64, 0.3)',
                    'rgba(255, 99, 132, 0.3)',
                    'rgba(54, 162, 235, 0.3)',
                    'rgba(255, 206, 86, 0.3)',
                    'rgba(75, 192, 192, 0.3)',
                ],
                borderWidth: 1,
                borderRadius: 7,
                borderColor: [
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)',
                    'rgba(153, 102, 255, 0.9)',
                    'rgba(255, 159, 64, 0.9)',
                    'rgba(255, 99, 132, 0.9)',
                    'rgba(54, 162, 235, 0.9)',
                    'rgba(255, 206, 86, 0.9)',
                    'rgba(75, 192, 192, 0.9)'
                ]
            }
        ]
    },

    options: {
        plugins: {
            legend: {
                display: true,
                position: "left",
            }
        }
    }
});