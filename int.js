var ourCanvas = $("#ourChart");


var chartElement = new Chart(ourCanvas, {
    type: 'bar',
    data: {
        labels: ["Китай", "Индия", "США", "Индонезия", "Бразилия", "Пакистан", "Нигерия", "Бангладеш", "Россия", "Япония"],
        datasets: [
            {
                label: 'Популяция в 2019 году',
                data: [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398],
                backgroundColor: 'rgba(54, 162, 235, 0.4)',
                borderWidth: 1,
                borderRadius: 7,
                borderColor: 'rgba(54, 162, 235, 0.9)'
            }
        ]
    }
});

$('#2019').click(function () {
    console.log('2019');
    $('#2019').removeClass('btn-secondary');
    $('#2020').removeClass('btn-primary');
    $('#2019').addClass('btn-primary');
    $('#2020').addClass('btn-secondary');

    chartElement.data.datasets[0].data = [1379302771, 1281935911, 326625791, 260580739, 207353391, 204924861, 190632261, 157826578, 142257519, 126451398];

    chartElement.data.datasets[0].backgroundColor = 'rgba(54, 162, 235, 0.4)';
    chartElement.data.datasets[0].borderColor = 'rgba(54, 162, 235, 0.9)';

    chartElement.data.datasets[0].label = 'Популяция в 2019 году';

    chartElement.update();
});

$('#2020').click(function () {
    console.log('2020');
    $('#2020').removeClass('btn-secondary');
    $('#2019').removeClass('btn-primary');
    $('#2020').addClass('btn-primary');
    $('#2019').addClass('btn-secondary');

    chartElement.data.datasets[0].data = [1579302771, 1381935911, 526625791, 460580739, 307353391, 304924861, 290632261, 257826578, 242257519, 326451398];

    chartElement.data.datasets[0].backgroundColor = 'rgba(255, 206, 86, 0.4)';
    chartElement.data.datasets[0].borderColor = 'rgba(255, 206, 86, 0.9)';

    chartElement.data.datasets[0].label = 'Популяция в 2020 году';

    chartElement.update();

});