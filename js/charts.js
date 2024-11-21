// Common chart configuration
const commonOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1.5,
    plugins: {
        legend: {
            labels: {
                color: '#026447',
                font: { size: 12 },
                padding: 20
            }
        }
    }
};

// Demographics Charts
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
                    backgroundColor: 'rgba(2, 100, 71, 0.6)',
                    borderColor: '#026447',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                plugins: { legend: { display: false } },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: { stepSize: 1, color: '#026447' }
                    },
                    x: { ticks: { color: '#026447' } }
                }
            }
        });
    }
};

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
                cutout: '60%'
            }
        });
    }
};

// Learning Assessment Charts
const createUnderstandingChart = () => {
    const ctx = document.getElementById('understandingChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: playtestData.conceptUnderstanding.labels,
                datasets: Object.entries(playtestData.conceptUnderstanding.understanding).map(([key, values]) => ({
                    label: key,
                    data: values,
                    backgroundColor: `rgba(2, 100, 71, ${key === 'Strong Understanding' ? 0.8 : key === 'Good Understanding' ? 0.6 : 0.4})`,
                    borderColor: '#026447',
                    borderWidth: 1
                }))
            },
            options: {
                ...commonOptions,
                scales: {
                    y: { beginAtZero: true, stacked: true },
                    x: { stacked: true }
                }
            }
        });
    }
};

const createLearningPreferencesChart = () => {
    const ctx = document.getElementById('learningPreferencesChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(playtestData.learningPreferences.aspects),
                datasets: [{
                    label: 'Preference Level',
                    data: Object.values(playtestData.learningPreferences.aspects),
                    backgroundColor: 'rgba(2, 100, 71, 0.4)',
                    borderColor: '#026447',
                    borderWidth: 2
                }]
            },
            options: commonOptions
        });
    }
};

// Game Format Charts
const createComponentEffectivenessChart = () => {
    const ctx = document.getElementById('componentEffectivenessChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: playtestData.componentEffectiveness.clarity.labels,
                datasets: Object.entries(playtestData.componentEffectiveness.clarity.ratings).map(([key, values]) => ({
                    label: key,
                    data: values,
                    backgroundColor: `rgba(2, 100, 71, ${key === 'Very Clear' ? 0.8 : key === 'Clear' ? 0.6 : 0.4})`,
                    borderColor: '#026447',
                    borderWidth: 1
                }))
            },
            options: {
                ...commonOptions,
                scales: {
                    y: { beginAtZero: true, stacked: true },
                    x: { stacked: true }
                }
            }
        });
    }
};

const createComponentQualityChart = () => {
    const ctx = document.getElementById('componentQualityChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: playtestData.componentEffectiveness.quality.labels,
                datasets: Object.entries(playtestData.componentEffectiveness.quality.ratings).map(([key, values]) => ({
                    label: key,
                    data: values,
                    backgroundColor: `rgba(2, 100, 71, ${key === 'Excellent' ? 0.8 : key === 'Good' ? 0.6 : 0.4})`,
                    borderColor: '#026447',
                    borderWidth: 1
                }))
            },
            options: {
                ...commonOptions,
                scales: {
                    y: { beginAtZero: true, stacked: true },
                    x: { stacked: true }
                }
            }
        });
    }
};

// Game Mechanics Charts
const createRuleClarityChart = () => {
    const ctx = document.getElementById('ruleClarityChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(playtestData.gameMechanics.ruleClarity),
                datasets: [{
                    data: Object.values(playtestData.gameMechanics.ruleClarity),
                    backgroundColor: ['rgba(2, 100, 71, 0.8)', 'rgba(3, 140, 96, 0.6)'],
                    borderColor: '#026447',
                    borderWidth: 1
                }]
            },
            options: commonOptions
        });
    }
};

const createProfileComprehensionChart = () => {
    const ctx = document.getElementById('profileComprehensionChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(playtestData.gameMechanics.profileComprehension),
                datasets: [{
                    data: Object.values(playtestData.gameMechanics.profileComprehension),
                    backgroundColor: [
                        'rgba(2, 100, 71, 0.8)',
                        'rgba(3, 140, 96, 0.6)',
                        'rgba(4, 180, 123, 0.4)'
                    ],
                    borderColor: '#026447',
                    borderWidth: 1
                }]
            },
            options: commonOptions
        });
    }
};

// Player Experience Charts
const createEngagementChart = () => {
    const ctx = document.getElementById('engagementChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: Object.keys(playtestData.playerExperience.engagement),
                datasets: [{
                    data: Object.values(playtestData.playerExperience.engagement),
                    backgroundColor: [
                        'rgba(2, 100, 71, 0.8)',
                        'rgba(3, 140, 96, 0.6)'
                    ],
                    borderColor: '#026447',
                    borderWidth: 1
                }]
            },
            options: commonOptions
        });
    }
};

const createEngagingAspectsChart = () => {
    const ctx = document.getElementById('engagingAspectsChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(playtestData.playerExperience.mostEngaging),
                datasets: [{
                    label: 'Number of Players',
                    data: Object.values(playtestData.playerExperience.mostEngaging),
                    backgroundColor: 'rgba(2, 100, 71, 0.6)',
                    borderColor: '#026447',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: { stepSize: 1 }
                    }
                }
            }
        });
    }
};

// Format Preferences Chart
const createFormatPreferencesChart = () => {
    const ctx = document.getElementById('formatPreferencesChart')?.getContext('2d');
    if (ctx) {
        const labels = Object.keys(playtestData.formatPreferences);
        const datasets = ['Very Interested', 'Somewhat Interested', 'Not At All Interested'].map(interest => ({
            label: interest,
            data: labels.map(format => playtestData.formatPreferences[format][interest] || 0),
            backgroundColor: `rgba(2, 100, 71, ${interest === 'Very Interested' ? 0.8 : interest === 'Somewhat Interested' ? 0.6 : 0.4})`,
            borderColor: '#026447',
            borderWidth: 1
        }));

        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: labels,
                datasets: datasets
            },
            options: {
                ...commonOptions,
                maintainAspectRatio: true,
                aspectRatio: 2, // Increase this value to reduce height
                scales: {
                    y: { 
                        beginAtZero: true, 
                        stacked: true
                    },
                    x: { 
                        stacked: true
                    }
                }
            }
        });
    }
};

// Educational Impact Charts
const createLearningOutcomesChart = () => {
    const ctx = document.getElementById('learningOutcomesChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: playtestData.educationalImpact.learningOutcomes.labels,
                datasets: Object.entries(playtestData.educationalImpact.learningOutcomes.understanding).map(([key, values]) => ({
                    label: key,
                    data: values,
                    backgroundColor: `rgba(2, 100, 71, ${key === 'Strong Understanding' ? 0.8 : key === 'Good Understanding' ? 0.6 : 0.4})`,
                    borderColor: '#026447',
                    borderWidth: 1
                }))
            },
            options: {
                ...commonOptions,
                scales: {
                    y: { beginAtZero: true, stacked: true },
                    x: { stacked: true }
                }
            }
        });
    }
};

const createEffectiveComponentsChart = () => {
    const ctx = document.getElementById('effectiveComponentsChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'bar',
            data: {
                labels: Object.keys(playtestData.educationalImpact.effectiveComponents),
                datasets: [{
                    label: 'Effectiveness Rating',
                    data: Object.values(playtestData.educationalImpact.effectiveComponents),
                    backgroundColor: 'rgba(2, 100, 71, 0.6)',
                    borderColor: '#026447',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                indexAxis: 'y',
                scales: {
                    x: {
                        beginAtZero: true,
                        ticks: { stepSize: 1 }
                    }
                }
            }
        });
    }
};

// Recommendations Category Charts
const createRecommendationsByTypeChart = () => {
    const ctx = document.getElementById('recommendationsByTypeChart')?.getContext('2d');
    if (ctx) {
        const categories = playtestData.recommendations.map(rec => rec.category);
        const itemCounts = playtestData.recommendations.map(rec => rec.items.length);

        new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: categories,
                datasets: [{
                    data: itemCounts,
                    backgroundColor: [
                        'rgba(2, 100, 71, 0.8)',
                        'rgba(3, 140, 96, 0.7)',
                        'rgba(4, 160, 110, 0.6)',
                        'rgba(5, 180, 125, 0.5)'
                    ],
                    borderColor: '#026447',
                    borderWidth: 1
                }]
            },
            options: {
                ...commonOptions,
                aspectRatio: 2,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });
    }
};

const createRecommendationPriorityChart = () => {
    const ctx = document.getElementById('recommendationPriorityChart')?.getContext('2d');
    if (ctx) {
        const categories = playtestData.recommendations.map(rec => rec.category);
        const priorityData = categories.map((_, index) => ({
            category: categories[index],
            count: playtestData.recommendations[index].items.length,
            priority: 5 - index // Assuming order implies priority
        }));

        new Chart(ctx, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: 'Recommendation Priority',
                    data: priorityData.map(item => ({
                        x: item.priority,
                        y: item.count,
                        r: item.count * 5
                    })),
                    backgroundColor: 'rgba(2, 100, 71, 0.6)'
                }]
            },
            options: {
                ...commonOptions,
                aspectRatio: 2,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Priority Level'
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Number of Recommendations'
                        }
                    }
                }
            }
        });
    }
};

const createImplementationContextChart = () => {
    const ctx = document.getElementById('implementationContextChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(playtestData.recommendedContexts),
                datasets: [{
                    label: 'Implementation Context Rating',
                    data: Object.values(playtestData.recommendedContexts),
                    backgroundColor: 'rgba(2, 100, 71, 0.4)',
                    borderColor: '#026447',
                    borderWidth: 2
                }]
            },
            options: {
                ...commonOptions,
                aspectRatio: 2,
                scales: {
                    r: {
                        beginAtZero: true,
                        max: 5,
                        ticks: {
                            stepSize: 1
                        }
                    }
                }
            }
        });
    }
};

// Add to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... existing chart initializations ...

});

// Initialize all charts
document.addEventListener('DOMContentLoaded', function() {
    createDemographicsChart();
    createMajorChart();
    createUnderstandingChart();
    createLearningPreferencesChart();
    createComponentEffectivenessChart();
    createComponentQualityChart();
    createRuleClarityChart();
    createProfileComprehensionChart();
    createEngagementChart();
    createEngagingAspectsChart();
    createFormatPreferencesChart();
    createLearningOutcomesChart();
    createEffectiveComponentsChart();
    createRecommendationsByTypeChart();
    createRecommendationPriorityChart();
    createImplementationContextChart();
    // Add any additional chart initializations here
});

