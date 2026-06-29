lucide.createIcons();

const ctx = document.getElementById('myChart');

new Chart(ctx, {
type: 'line',
    data: {
        labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun'],
        datasets: [{
            label: 'Vendas',
            data: [28, 34, 31, 45, 52, 61],
            borderColor: '#F26419',
            backgroundColor: 'rgba(225, 132, 78, 0.08)',
            fill: true,
            borderWidth: 3,
            tension: 0.4,
            pointBackgroundColor: '#f26519',
            pointRadius: 4,
            pointHoverRadius: 6,
        }]
    },
    options: {
        plugins: {
            legend: {
            display: false,
        },
            tooltip: {
                backgroundColor: '#0D0D0D',
                titleColor: '#979797',
                bodyColor: '#ffffff',
                borderColor: '#202128',
                borderWidth: 1,
            }
        },
        scales: {
            x: {
                grid: { color: '#0022ff00' },
                ticks: { color: '#767676', font: { size: 14 }}
            },
            y: {
                beginAtZero: true,
                grid: { color: '#202128' },
                ticks: { color: '#767676', font: { size: 14 } }
            }
        }
    }
});
