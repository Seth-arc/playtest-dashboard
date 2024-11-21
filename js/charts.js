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

// 1. Interactive Treemap Chart for Recommendation Categories
const createRecommendationsTreemap = () => {
    const ctx = document.getElementById('recommendationsTreemapChart')?.getContext('2d');
    if (ctx) {
        const categories = playtestData.recommendations.map(rec => ({
            category: rec.category,
            count: rec.items.length,
            percentage: (rec.items.length / playtestData.recommendations.reduce((acc, curr) => acc + curr.items.length, 0) * 100).toFixed(1)
        }));

        new Chart(ctx, {
            type: 'pie',
            data: {
                labels: categories.map(cat => `${cat.category} (${cat.percentage}%)`),
                datasets: [{
                    data: categories.map(cat => cat.count),
                    backgroundColor: [
                        'rgba(42, 72, 88, 0.8)',
                        'rgba(84, 123, 151, 0.8)',
                        'rgba(136, 166, 188, 0.8)',
                        'rgba(212, 163, 115, 0.8)'
                    ],
                    borderColor: 'white',
                    borderWidth: 2
                }]
            },
            options: {
                ...commonOptions,
                aspectRatio: 1.5,
                plugins: {
                    legend: {
                        position: 'right',
                        labels: {
                            font: {
                                family: 'Montserrat',
                                size: 12
                            },
                            padding: 20
                        }
                    },
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const category = playtestData.recommendations[context.dataIndex];
                                return `${category.items.length} recommendations`;
                            }
                        }
                    }
                }
            }
        });
    }
};

// 2. Priority Matrix Bubble Chart
const createPriorityMatrix = () => {
    const ctx = document.getElementById('priorityMatrixChart')?.getContext('2d');
    if (ctx) {
        const categories = playtestData.recommendations.map((rec, index) => ({
            x: index + 1,  // Implementation complexity
            y: rec.items.length,  // Number of recommendations
            r: rec.items.length * 5,  // Bubble size
            category: rec.category
        }));

        new Chart(ctx, {
            type: 'bubble',
            data: {
                datasets: [{
                    label: 'Recommendation Categories',
                    data: categories,
                    backgroundColor: 'rgba(2, 100, 71, 0.6)',  // Updated to match theme
                    borderColor: 'rgba(2, 100, 71, 0.8)',      // Updated to match theme
                    borderWidth: 2,
                    hoverBackgroundColor: 'rgba(2, 100, 71, 0.8)',
                    hoverBorderColor: '#026447',
                    pointStyle: 'circle'
                }]
            },
            options: {
                ...commonOptions,
                scales: {
                    x: {
                        title: {
                            display: true,
                            text: 'Implementation Priority',
                            color: '#026447'
                        },
                        grid: {
                            display: false
                        }
                    },
                    y: {
                        title: {
                            display: true,
                            text: 'Number of Recommendations',
                            color: '#026447'
                        },
                        grid: {
                            display: false
                        }
                    }
                },
                plugins: {
                    tooltip: {
                        callbacks: {
                            label: (context) => {
                                const data = context.raw;
                                return [
                                    `Category: ${data.category}`,
                                    `Recommendations: ${data.y}`,
                                    `Priority Level: ${data.x}`
                                ];
                            }
                        },
                        backgroundColor: 'rgba(2, 100, 71, 0.8)',
                        titleColor: '#ffffff',
                        bodyColor: '#ffffff',
                        borderColor: '#026447',
                        borderWidth: 1
                    }
                }
            }
        });
    }
};

// 3. Implementation Context Radar Chart
const createImplementationContextRadar = () => {
    const ctx = document.getElementById('implementationContextChart')?.getContext('2d');
    if (ctx) {
        new Chart(ctx, {
            type: 'radar',
            data: {
                labels: Object.keys(playtestData.recommendedContexts),
                datasets: [{
                    label: 'Implementation Suitability',
                    data: Object.values(playtestData.recommendedContexts),
                    backgroundColor: 'rgba(42, 72, 88, 0.2)',
                    borderColor: 'rgba(42, 72, 88, 0.8)',
                    borderWidth: 2,
                    pointBackgroundColor: 'rgba(212, 163, 115, 0.8)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(42, 72, 88, 1)'
                }]
            },
            options: {
                ...commonOptions,
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

// Function to populate recommendation lists
const populateRecommendations = () => {
    const categories = {
        'Game Design': 'gameDesignList',
        'Game Mechanics': 'gameMechanicsList',
        'Educational Integration': 'educationalList',
        'Implementation Suggestions': 'implementationList'
    };

    // Populate content and set up dropdowns
    playtestData.recommendations.forEach(rec => {
        const listElement = document.getElementById(categories[rec.category]);
        if (listElement) {
            const ul = document.createElement('ul');
            ul.className = 'space-y-2 text-gray-700';
            
            rec.items.forEach((item, index) => {
                const li = document.createElement('li');
                li.className = 'recommendation-item flex items-start mb-2';
                li.style.transitionDelay = `${index * 50}ms`;
                li.innerHTML = `
                    <svg class="w-4 h-4 mt-1 mr-2 text-[#026447]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                    </svg>
                    <span>${item}</span>
                `;
                ul.appendChild(li);
            });
            listElement.appendChild(ul);
        }
    });

    // Set up dropdown functionality
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
    dropdownButtons.forEach(button => {
        button.addEventListener('click', () => {
            const content = button.nextElementSibling;
            const isOpen = !content.classList.contains('hidden');
            
            // Close all dropdowns
            document.querySelectorAll('.dropdown-content').forEach(dropdown => {
                dropdown.classList.add('hidden');
                dropdown.previousElementSibling.classList.remove('active');
                dropdown.querySelectorAll('.recommendation-item').forEach(item => {
                    item.classList.remove('show');
                });
            });

            // If clicking on a closed dropdown, open it
            if (!isOpen) {
                content.classList.remove('hidden');
                button.classList.add('active');
                
                // Animate items
                setTimeout(() => {
                    content.querySelectorAll('.recommendation-item').forEach(item => {
                        item.classList.add('show');
                    });
                }, 50);
            }
        });
    });
};

// Add to your DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
    // ... existing chart initializations ...

});

document.addEventListener('DOMContentLoaded', populateRecommendations);

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
    createRecommendationsTreemap();
    createPriorityMatrix();
    // Add any additional chart initializations here
});

