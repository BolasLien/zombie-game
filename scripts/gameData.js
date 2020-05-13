const rand = (num) => {
    return Math.round(Math.random() * num);
}

const itemData = [
    {
        "name": "boomer",
        "srcNormal": "./boomer/boomer.gif",
        "srcAtk": "./boomer/boomer-atk.gif",
        "sfxAtk": "./music/boomer_shoved_01.wav",
        "sfxDead": "./music/male_boomer_pain_1.wav",
        "atkWait": 500,
        "atk": 1,
        "score": 2,
        "setPosition": [
            [
                {
                    "bottom": `${rand(200) + 400}px`,
                    "left": `${(1440 * 1) + rand(400)}px`
                }
            ],
            [
                {
                    "bottom": `${rand(200) + 400}px`,
                    "left": `${(1440 * 2) + rand(400)}px`
                }
            ],
            [
                {
                    "bottom": `${rand(200) + 400}px`,
                    "left": `${(1440 * 3) + rand(400)}px`
                }
            ]
        ],
        "moveTo": [
            [
                {
                    "bottom": `-${rand(100)}px`,
                    "left": `${1440 * 1 + rand(1000)}px`,
                    "height": `+=200px`
                }
            ],
            [
                {
                    "bottom": `-${rand(100)}px`,
                    "left": `${1440 * 2 + rand(1000)}px`,
                    "height": `+=200px`
                }
            ],
            [
                {
                    "bottom": `-${rand(100)}px`,
                    "left": `${1440 * 3 + rand(1000)}px`,
                    "height": `+=200px`
                }
            ]
        ]

    },

    {
        "name": "smoke",
        "srcNormal": "./smoke/smoke.gif",
        "srcAtk": "./smoke/smoke-atk.gif",
        "sfxAtk": "./music/smoker_attack_01.wav",
        "sfxDead": "./music/smoker_explode_01.wav",
        "atkWait": 600,
        "atk": 1,
        "score": 3,
        "setPosition": [
            [
                {
                    height: `+=150px`,
                    bottom: `${rand(100)}px`,
                    left: `${(1440 * 1) + rand(400)}px`
                }
            ],
            [
                {
                    height: `+=150px`,
                    bottom: `${rand(100)}px`,
                    left: `${(1440 * 2) + rand(400)}px`
                }
            ],
            [
                {
                    height: `+=150px`,
                    bottom: `${rand(100)}px`,
                    left: `${(1440 * 3) + rand(400)}px`
                }
            ]
        ],
        "moveTo": [
            [
                {
                    "height": `+=50px`
                }
            ],
            [
                {
                    "height": `+=50px`
                }
            ],
            [
                {
                    "height": `+=50px`
                }
            ]
        ]


    },

    {
        "name": "chager",
        "srcNormal": "./chager/chager.gif",
        "srcAtk": "./chager/chager-atk.gif",
        "sfxAtk": "./music/charger_melee01.wav",
        "sfxDead": "./music/charger_die_03.wav",
        "atkWait": 550,
        "atk": 2,
        "score": 5,
        "setPosition": [
            [{
                height: `+=50px`,
                bottom: `${100 + rand(100)}px`,
                left: `${(1440 * 1) + 800 + rand(400)}px`
            }],
            [{
                height: `+=50px`,
                bottom: `${100 + rand(100)}px`,
                left: `${(1440 * 2) + 800 + rand(400)}px`
            }],
            [{
                height: `+=50px`,
                bottom: `${100 + rand(100)}px`,
                left: `${(1440 * 3) + 800 + rand(400)}px`
            }]
        ],
        "moveTo": [
            [
                {
                    height: `+=300px`,
                    bottom: `-${rand(100)}px`,
                    left: `${(1440 * 1) + 400 + rand(600)}px`,
                }
            ],
            [
                {
                    height: `+=300px`,
                    bottom: `-${rand(100)}px`,
                    left: `${(1440 * 2) + 400 + rand(600)}px`,
                }
            ],
            [
                {
                    height: `+=300px`,
                    bottom: `-${rand(100)}px`,
                    left: `${(1440 * 3) + 400 + rand(600)}px`,
                }
            ]
        ]


    },

    {
        "name": "witch",
        "srcNormal": "./witch/witch.gif",
        "srcAtk": "./witch/witch.gif",
        "sfxAtk": "./music/boomer_shoved_01.wav",
        "sfxDead": "./music/male_boomer_pain_1.wav",
        "atkWait": 500,
        "atk": 1,
        "score": 2,
        "setPosition": [
            [
                {
                    bottom: `${rand(200)}px`,
                    left: `${(1440 * 1) + rand(1000)}px`
                }
            ],
            [
                {
                    bottom: `${rand(200)}px`,
                    left: `${(1440 * 2) + rand(1000)}px`
                }
            ],
            [
                {
                    bottom: `${rand(200)}px`,
                    left: `${(1440 * 3) + rand(1000)}px`
                }
            ]
        ],
        "moveTo": [
            [
                {

                }
            ],
            [
                {

                }
            ],
            [
                {

                }
            ]
        ]


    },

    {
        "name": "tank",
        "srcNormal": "./tank/tank.gif",
        "srcAtk": "./tank/tank-atk.gif",
        "srcDead": "./tank/tank-dead.gif",
        "sfxAtk": "./music/rip_up_rock_1.wav",
        "sfxDead": "./music/tank_pain_01.wav",
        "atkWait": 1850,
        "atk": 3,
        "score": 10,
        "setPosition": [
            [
                {
                    height: `+=50px`,
                    bottom: `${250 + rand(100)}px`,
                    left: `${(1440 * 1) + 200 + rand(600)}px`
                }
            ],
            [
                {
                    height: `+=50px`,
                    bottom: `${250 + rand(100)}px`,
                    left: `${(1440 * 2) + 200 + rand(600)}px`
                }
            ],
            [
                {
                    height: `+=50px`,
                    bottom: `${250 + rand(100)}px`,
                    left: `${(1440 * 3) + 200 + rand(600)}px`
                }
            ]
        ],
        "moveTo": [
            [
                {
                    "height": "+=300px",
                    "bottom": `-${rand(100)}px`
                }
            ],
            [
                {
                    "height": "+=300px",
                    "bottom": `-${rand(100)}px`
                }
            ],
            [
                {
                    "height": "+=300px",
                    "bottom": `-${rand(100)}px`
                }
            ]
        ]

    },

    {
        "name": "tank-run",
        "srcNormal": "./tank/tank-run.gif",
        "srcAtk": "./tank/tank-atk2.gif",
        "srcDead": "./tank/tank-dead.gif",
        "sfxAtk": "./music/rip_up_rock_1.wav",
        "sfxDead": "./music/tank_pain_02.wav",
        "atkWait": 650,
        "atk": 3,
        "score": 10,
        "setPosition": [
            [
                {
                    height: `+=50px`,
                    bottom: `${250 + rand(100)}px`,
                    left: `${(1440 * 1) + 200 + rand(600)}px`
                }
            ],
            [
                {
                    height: `+=50px`,
                    bottom: `${250 + rand(100)}px`,
                    left: `${(1440 * 2) + 200 + rand(600)}px`
                }
            ],
            [
                {
                    height: `+=50px`,
                    bottom: `${250 + rand(100)}px`,
                    left: `${(1440 * 3) + 200 + rand(600)}px`
                }
            ]
        ],
        "moveTo": [
            [
                {
                    "height": "+=300px",
                    "bottom": `-${rand(100)}px`
                }
            ],
            [
                {
                    "height": "+=300px",
                    "bottom": `-${rand(100)}px`
                }
            ],
            [
                {
                    "height": "+=300px",
                    "bottom": `-${rand(100)}px`
                }
            ]
        ]

    },
    {
        "name": "life",
        "srcNormal": "./images/life.png",
        "life": 1,
        "setPosition": [
            [
                {
                    height: `100px`,
                    bottom: `${rand(200)}px`,
                    left: `${(1440 * 1) + rand(1000)}px`
                }
            ],
            [
                {
                    height: `100px`,
                    bottom: `${rand(200)}px`,
                    left: `${(1440 * 2) + rand(1000)}px`
                }
            ],
            [
                {
                    height: `100px`,
                    bottom: `${rand(200)}px`,
                    left: `${(1440 * 3) + rand(1000)}px`
                }
            ]
        ],
        "moveTo": [
            [
                {
                    bottom: `+=50px`
                },
                {
                    bottom: `-=50px`
                }
            ],
            [
                {
                    bottom: `+=50px`
                },
                {
                    bottom: `-=50px`
                }
            ],
            [
                {
                    bottom: `+=50px`
                },
                {
                    bottom: `-=50px`
                }
            ]
        ]

    }

]

// [boomer, smoke, chager, witch, tank, tank-run, life]
const levelData = [
    [0, 100, 100, 100, 0, 0, 20],
    [100, 0, 100, 0, 0, 0, 20],
    [0, 0, 0, 0, 100, 100, 20]
]

const soundData = {
    bg: ["./music/l4d2_c4_pc.mp3", "./music/bloodharvestor2.wav", "./music/bloodharvestor2.wav", "./music/tank.wav", "./music/themonsterswithout.wav"],
    life: "./music/gift_pickup.wav",
    next: "./music/alert_clink.wav",
    home: "./music/menu_accept.wav",
    hurt: ['./music/hurtminor01.wav', './music/hurtminor02.wav', './music/hurtminor03.wav', './music/hurtminor04.wav', './music/hurtminor05.wav', './music/hurtminor06.wav']
}