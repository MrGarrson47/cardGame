const Cards = [
    {name:'Ace', suit: 'Hearts', value: 1, id: '1h', src: process.env.PUBLIC_URL + '/cards/aceHearts.jpg'},
    {name:'Ace', suit: 'Diamonds', value: 1, id: '1d', src: process.env.PUBLIC_URL + '/cards/aceDiamond.jpg'},
    {name:'Ace', suit: 'Clubs', value: 1, id: '1c', src: process.env.PUBLIC_URL + '/cards/aceClubs.jpg'},
    {name:'Ace', suit: 'Spades', value: 1, id: '1s', src: process.env.PUBLIC_URL + '/cards/aceSpades.jpg'},

    {name:'Two', suit: 'Hearts', value: 2, id: '2h', src: process.env.PUBLIC_URL + '/cards/twoHearts.jpg'},
    {name:'Two', suit: 'Diamonds', value: 2, id: '2d', src: process.env.PUBLIC_URL + '/cards/twoDiamond.jpg'},
    {name:'Two', suit: 'Clubs', value: 2, id: '2c', src: process.env.PUBLIC_URL + '/cards/twoClubs.jpg'},
    {name:'Two', suit: 'Spades', value: 2, id: '2s', src: process.env.PUBLIC_URL + '/cards/twoSpades.jpg'},

    {name:'Three', suit: 'Hearts', value: 3, id: '3h', src: process.env.PUBLIC_URL + '/cards/threeHearts.jpg'},
    {name:'Three', suit: 'Diamonds', value: 3, id: '3d', src: process.env.PUBLIC_URL + '/cards/threeDiamond.jpg'},
    {name:'Three', suit: 'Clubs', value: 3, id: '3c', src: process.env.PUBLIC_URL + '/cards/threeClubs.jpg'},
    {name:'Three', suit: 'Spades', value: 3, id: '3s', src: process.env.PUBLIC_URL + '/cards/threeSpades.jpg'},

    {name:'Four', suit: 'Hearts', value: 4, id: '4h', src: process.env.PUBLIC_URL + '/cards/fourHearts.jpg'},
    {name:'Four', suit: 'Diamonds', value: 4, id: '4d', src: process.env.PUBLIC_URL + '/cards/fourDiamond.jpg'},
    {name:'Four', suit: 'Clubs', value: 4, id: '4c', src: process.env.PUBLIC_URL + '/cards/fourClubs.jpg'},
    {name:'Four', suit: 'Spades', value: 4, id: '4s', src: process.env.PUBLIC_URL + '/cards/fourSpades.jpg'},

    {name:'Five', suit: 'Hearts', value: 5, id: '5h', src: process.env.PUBLIC_URL + '/cards/fiveHearts.jpg'},
    {name:'Five', suit: 'Diamonds', value: 5, id: '5d', src: process.env.PUBLIC_URL + '/cards/fiveDiamond.jpg'},
    {name:'Five', suit: 'Clubs', value: 5, id: '5c', src: process.env.PUBLIC_URL + '/cards/fiveClubs.jpg'},
    {name:'Five', suit: 'Spades', value: 5, id: '5s', src: process.env.PUBLIC_URL + '/cards/fiveSpades.jpg'},

    {name:'Six', suit: 'Hearts', value: 6, id: '6h', src: process.env.PUBLIC_URL + '/cards/sixHearts.jpg'},
    {name:'Six', suit: 'Diamonds', value: 6, id: '6d', src: process.env.PUBLIC_URL + '/cards/sixDiamond.jpg'},
    {name:'Six', suit: 'Clubs', value: 6, id: '6c', src: process.env.PUBLIC_URL + '/cards/sixClubs.jpg'},
    {name:'Six', suit: 'Spades', value: 6, id: '6s', src: process.env.PUBLIC_URL + '/cards/sixSpades.jpg'},

    {name:'Seven', suit: 'Hearts', value: 7, id: '7h', src: process.env.PUBLIC_URL + '/cards/sevenHearts.jpg'},
    {name:'Seven', suit: 'Diamonds', value: 7, id: '7d', src: process.env.PUBLIC_URL + '/cards/sevenDiamond.jpg'},
    {name:'Seven', suit: 'Clubs', value: 7, id: '7c', src: process.env.PUBLIC_URL + '/cards/sevenClubs.jpg'},
    {name:'Seven', suit: 'Spades', value: 7, id: '7s', src: process.env.PUBLIC_URL + '/cards/sevenSpades.jpg'},

    {name:'Eight', suit: 'Hearts', value: 8, id: '8h', src: process.env.PUBLIC_URL + '/cards/eightHearts.jpg'},
    {name:'Eight', suit: 'Diamonds', value: 8, id: '8d', src: process.env.PUBLIC_URL + '/cards/eightDiamond.jpg'},
    {name:'Eight', suit: 'Clubs', value: 8, id: '8c', src: process.env.PUBLIC_URL + '/cards/eightClubs.jpg'},
    {name:'Eight', suit: 'Spades', value: 8, id: '8s', src: process.env.PUBLIC_URL + '/cards/eightSpades.jpg'},

    {name:'Nine', suit: 'Hearts', value: 9, id: '9h', src: process.env.PUBLIC_URL + '/cards/nineHearts.jpg'},
    {name:'Nine', suit: 'Diamonds', value: 9, id: '9d', src: process.env.PUBLIC_URL + '/cards/nineDiamond.jpg'},
    {name:'Nine', suit: 'Clubs', value: 9, id: '9c', src: process.env.PUBLIC_URL + '/cards/nineClubs.jpg'},
    {name:'Nine', suit: 'Spades', value: 9, id: '9s', src: process.env.PUBLIC_URL + '/cards/nineSpades.jpg'},

    {name:'Ten', suit: 'Hearts', value: 10, id: '10h', src: process.env.PUBLIC_URL + '/cards/tenHearts.jpg'},
    {name:'Ten', suit: 'Diamonds', value: 10, id: '10d', src: process.env.PUBLIC_URL + '/cards/tenDiamond.jpg'},
    {name:'Ten', suit: 'Clubs', value: 10, id: '10c', src: process.env.PUBLIC_URL + '/cards/tenClubs.jpg'},
    {name:'Ten', suit: 'Spades', value: 10, id: '10s', src: process.env.PUBLIC_URL + '/cards/tenSpades.jpg'},

    {name:'Jack', suit: 'Hearts', value: 10, id: 'jh', src: process.env.PUBLIC_URL + '/cards/jackHearts.jpg'},
    {name:'Jack', suit: 'Diamonds', value: 10, id: 'jd', src: process.env.PUBLIC_URL + '/cards/jackDiamond.jpg'},
    {name:'Jack', suit: 'Clubs', value: 10, id: 'jc', src: process.env.PUBLIC_URL + '/cards/jackClubs.jpg'},
    {name:'Jack', suit: 'Spades', value: 10, id: 'js', src: process.env.PUBLIC_URL + '/cards/jackSpades.jpg'},

    {name:'Queen', suit: 'Hearts', value: 10, id: 'qh', src: process.env.PUBLIC_URL + '/cards/queenHearts.jpg'},
    {name:'Queen', suit: 'Diamonds', value: 10, id: 'qd', src: process.env.PUBLIC_URL + '/cards/queenDiamond.jpg'},
    {name:'Queen', suit: 'Clubs', value: 10, id: 'qc', src: process.env.PUBLIC_URL + '/cards/queenClubs.jpg'},
    {name:'Queen', suit: 'Spades', value: 10, id: 'qs', src: process.env.PUBLIC_URL + '/cards/queenSpades.jpg'},

    {name:'King', suit: 'Hearts', value: 10, id: 'kh', src: process.env.PUBLIC_URL + '/cards/kingHearts.jpg'},
    {name:'King', suit: 'Diamonds', value: 10, id: 'kd', src: process.env.PUBLIC_URL + '/cards/kingDiamond.jpg'},
    {name:'King', suit: 'Clubs', value: 10, id: 'kc', src: process.env.PUBLIC_URL + '/cards/kingClubs.jpg'},
    {name:'King', suit: 'Spades', value: 10, id: 'ks', src: process.env.PUBLIC_URL + '/cards/kingSpades.jpg'},
]

export default Cards;