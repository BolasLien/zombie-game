const itemData = [
    {
        "name": "boomer",
        "srcNormal": "./boomer/boomer.gif",
        "srcAtk": "./boomer/boomer-atk.gif",
        "atk": 1,
        "score": 2,
        "setPosition": [
            [
                {
                    "bottom": "400px",
                    "left": "1640px"//`${(1440 * now) + rand(400)}px`
                }
            ],
            [
                {
                    "bottom": "400px",
                    "left": "3080px"
                }
            ],
            [
                {
                    "bottom": "400px",
                    "left": "1640px"
                }
            ]
        ]
    },

    {
        "name": "smoke",
        "srcNormal": "./smoke/smoke.gif",
        "srcAtk": "./smoke/smoke-atk.gif",
        "atk": 1,
        "score": 3,
        "setPosition": [
            [{
                "height": `+=150px`,
                "bottom": `100px`,
                "left": "1840px"
            }],
            [{
                "height": `+=150px`,
                "bottom": `100px`,
                "left": "3280px"
            }],
            [{
                "height": `+=150px`,
                "bottom": `100px`,
                "left": "1840px"
            }]
        ]
    },

    {
        "name": "chager",
        "srcNormal": "./chager/chager.gif",
        "srcAtk": "./chager/chager-atk.gif",
        "atk": 2,
        "score": 5,
        "setPosition": [
            [{
                "height": `+=50px`,
                "bottom": `200px`,
                "left": `2440px`
            }],
            [{
                "height": `+=50px`,
                "bottom": `200px`,
                "left": `3880px`
            }],
            [{
                "height": `+=150px`,
                "bottom": `100px`,
                "left": "1840px"
            }]
        ]

    },

    {
        "name": "witch",
        "srcNormal": "./witch/witch.gif",
        "srcAtk": "./witch/witch-atk.gif",
        "atk": 1,
        "score": 2,
        "setPosition": [
            [
                {
                    "bottom": "200px",
                    "left": "1940px"
                }
            ],
            [
                {
                    "bottom": "200px",
                    "left": "3380px"
                }
            ],
            [
                {
                    "bottom": "200px",
                    "left": "1640px"
                }
            ]
        ]

    },

    {
        "name": "tank",
        "srcNormal": "./tank/tank.gif",
        "srcAtk": "./tank/tank-atk.gif",
        "srcDead": "./tank/tank-dead.gif",
        "atk": 3,
        "score": 10,
        "setPosition": [
            [
                {
                    "height": `+=50px`,
                    "bottom": "300px",
                    "left": "2040px"
                }
            ],
            [
                {
                    "height": `+=50px`,
                    "bottom": "300px",
                    "left": "3480px"
                }
            ],
            [
                {
                    "height": `+=50px`,
                    "bottom": "300px",
                    "left": "4920px"
                }
            ]
        ]
    },

    {
        "name": "tank-run",
        "srcNormal": "./tank/tank-run.gif",
        "srcAtk": "./tank/tank-atk2.gif",
        "srcDead": "./tank/tank-dead.gif",
        "atk": 3,
        "score": 10,
        "setPosition": [
            [
                {
                    "height": `+=50px`,
                    "bottom": "300px",
                    "left": "2040px"
                }
            ],
            [
                {
                    "height": `+=50px`,
                    "bottom": "300px",
                    "left": "3480px"
                }
            ],
            [
                {
                    "height": `+=50px`,
                    "bottom": "300px",
                    "left": "4920px"
                }
            ]
        ]
    },
    {
        "name": "life",
        "srcNormal": "./life.png",
        "life": 1,
        "setPosition": [
            [
                {
                    "height": `100px`,
                    "bottom": "100px",
                    "left": "1940px"
                }
            ],
            [
                {
                    "height": `100px`,
                    "bottom": "200px",
                    "left": "3380px"
                }
            ],
            [
                {
                    "height": `100px`,
                    "bottom": "300px",
                    "left": "4820px"
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

