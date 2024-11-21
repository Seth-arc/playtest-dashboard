// data.js
const playtestData = {
    // Demographics and Player Background
    demographics: {
        age: {
            '17-20': 1,
            '21-23': 4
        },
        gender: {
            'Female': 3,
            'Non-Binary': 1,
            'Male': 1
        },
        majors: {
            'Economics & History': 1,
            'Public Policy & History': 1,
            'Economics & Theatre': 1,
            'Economics': 1,
            'Government & Political Science': 1
        },
        level: {
            'Undergraduate': 5
        },
        boardgameExperience: {
            'Yes': 5
        }
    },

    // Learning Assessment
    conceptUnderstanding: {
        labels: ['Financial Capital', 'Social Capital', 'Cultural Capital', 'Human Capital', 'Intersectionality', 'Systemic Bias'],
        understanding: {
            'Strong Understanding': [0, 1, 0, 2, 2, 2],
            'Good Understanding': [5, 4, 0, 2, 3, 2],
            'Moderate Understanding': [0, 0, 5, 1, 0, 1]
        }
    },

    // Learning Preferences
    learningPreferences: {
        aspects: {
            'Competitive Elements': 4,
            'Collaborative Play': 4,
            'Storytelling and Narrative': 4,
            'Problem-Solving Challenges': 4,
            'Reward Systems': 3,
            'Visual Stimulation': 3,
            'Achievement Satisfaction': 2
        }
    },

    // Game Format and Component Effectiveness
    componentEffectiveness: {
        clarity: {
            labels: ['Game Board', 'Cards', 'Tokens', 'Profile Sheet'],
            ratings: {
                'Very Clear': [1, 2, 3, 3],
                'Clear': [3, 2, 0, 2],
                'Neutral': [1, 1, 2, 0]
            }
        },
        quality: {
            labels: ['Game Board', 'Cards', 'Tokens', 'Profile Sheet'],
            ratings: {
                'Excellent': [5, 4, 3, 0],
                'Good': [0, 1, 1, 0],
                'Fair': [0, 0, 1, 0]
            }
        }
    },

    // Game Mechanics and Dynamics
    gameMechanics: {
        ruleClarity: {
            'Clear': 4,
            'Neutral': 1
        },
        ruleDifficulty: {
            'Easy': 4,
            'Moderate': 1
        },
        profileComprehension: {
            'Mostly Comprehensive': 3,
            'Somewhat Comprehensive': 1,
            'Not Rated': 1
        }
    },

    // Player Experience
    playerExperience: {
        engagement: {
            'Very Engaging': 4,
            'Engaging': 1
        },
        mostEngaging: {
            'Role-Playing': 4,
            'Interacting with other players': 5,
            'Making choices that affect economic outcomes': 3,
            'Tracking results of decisions': 2
        },
        leastEngaging: {
            'Tracking results of decisions': 2,
            'Recording reflection responses': 4
        }
    },

    // Game Format Preferences
    formatPreferences: {
        'Physical Board Game': {
            'Very Interested': 5
        },
        'Digital Browser Game': {
            'Very Interested': 1,
            'Somewhat Interested': 4
        },
        'Virtual Reality Experience': {
            'Somewhat Interested': 2,
            'Not At All Interested': 3
        },
        'Mobile App Version': {
            'Very Interested': 1,
            'Somewhat Interested': 2,
            'Not At All Interested': 2
        }
    },

    // Educational Impact
    educationalImpact: {
        learningOutcomes: {
            labels: [
                'Relationship between identity and economic outcomes',
                'Different types of capital',
                'Economic barriers and opportunities',
                'Intersectionality in economic contexts'
            ],
            understanding: {
                'Strong Understanding': [3, 4, 1, 2],
                'Good Understanding': [2, 1, 4, 2],
                'Moderate Understanding': [0, 0, 0, 1]
            }
        },
        effectiveComponents: {
            'Character profiles': 5,
            'Capital management': 5,
            'Economic sector navigation': 1,
            'Event and Capital cards': 4,
            'Player interactions': 3,
            'Reflection prompts': 3
        }
    },

    // Recommendations and Improvements
    recommendations: [
        {
            category: 'Game Design',
            items: [
                'Add character-specific goals and ambitions',
                'Implement time components or set number of rounds',
                'Add barriers on the board based on character attributes',
                'Add weight to dice rolls based on capital levels',
                'Create multiple paths to endpoint',
                'Implement trend-based system for capital gains/losses'
            ]
        },
        {
            category: 'Game Mechanics',
            items: [
                'Clarify relationship between different types of capital',
                'Add group events affecting multiple players',
                'Create clearer exchange ratios between capitals',
                'Implement character-specific advantages',
                'Add risk/reward decisions'
            ]
        },
        {
            category: 'Educational Integration',
            items: [
                'Create structured post-game reflection activities',
                'Develop module-specific profiles',
                'Build reflection templates',
                'Create assessment rubrics',
                'Design learning outcome matrices'
            ]
        },
        {
            category: 'Implementation Suggestions',
            items: [
                'Use as post-module reflection tool',
                'Adapt for study abroad programs',
                'Implement in community education settings',
                'Create facilitator guides for classroom use',
                'Develop quick-reference materials'
            ]
        }
    ],

    // Implementation Context
    recommendedContexts: {
        'University courses': 5,
        'Professional development': 1,
        'Community education': 5,
        'Personal learning': 4
    }
};