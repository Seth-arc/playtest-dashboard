// Common chart configuration
const commonOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5, // You can adjust this value to change the chart's aspect ratio
    plugins: {
        legend: {
            labels: {
                color: '#026447',
                font: {
                    size: 12
                },
                padding: 20
            }
        }
    }
};

// Demographics Chart
const createDemographicsChart = () => {
    const ctx = document.getElementById('demographicsChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: ['Age 17-20', 'Age 21-23', 'Female', 'Non-Binary', 'Male'],
                datasets: [{
                    label: 'Number of Participants',
                    data: [1, 4, 3, 1, 1],
                    backgroundColor: [
                        'rgba(2, 100, 71, 0.6)',
                        'rgba(2, 100, 71, 0.6)',
                        'rgba(3, 140, 96, 0.6)',
                        'rgba(3, 140, 96, 0.6)',
                        'rgba(3, 140, 96, 0.6)'
                    ],
                    borderColor: '#026447',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            stepSize: 1,
                            color: '#026447'
                        }
                    },
                    x: {
                        ticks: {
                            color: '#026447'
                        }
                    }
                }
            }
        });
    }
};

// Major Distribution Chart
const createMajorChart = () => {
    const ctx = document.getElementById('majorChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: Object.keys(playtestData.demographics.majors),
                datasets: [{
                    data: Object.values(playtestData.demographics.majors),
                    backgroundColor: [
                        'rgba(2, 100, 71, 0.8)',
                        'rgba(3, 140, 96, 0.8)',
                        'rgba(4, 180, 123, 0.8)',
                        'rgba(5, 221, 150, 0.8)',
                        'rgba(6, 255, 177, 0.8)'
                    ],
                    borderColor: '#026447',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                cutout: '60%',
                plugins: {
                    legend: {
                        position: 'right',
                        align: 'center'
                    }
                }
            }
        });
    }
};

// Initialize all charts when the DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    createDemographicsChart();
    createMajorChart();
    // Add other chart initializations here
});