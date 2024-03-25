const product = {
    crazy: {
        name: 'Crazy',
        price: 31000,
        amound: 0,
        img: './image/image 1.png',
        get totalsum() {
            return this.price * this.amound
        },
    },
    light: {
        name: 'light',
        price: 26000,
        amound: 0,
        img: './image/image 2.png',
        get totalsum() {
            return this.price * this.amound
        },
    }, cheeseburger: {
        name: 'cheeseburger',
        price: 29000,
        amound: 0,
        img: './image/image 3.png',
        get totalsum() {
            return this.price * this.amound
        },
    }, dburger: {
        name: 'dburger',
        price: 24000,
        amound: 0,
        img: './image/image 4.png',
        get totalsum() {
            return this.price * this.amound
        },
    },
}

const 
productBtns = document.querySelectorAll('.wrapper__bottom-btn'),
basketBtn = document.querySelector('.wrapper__top-btn'),
basketindicator = document.querySelector('.wrapper__top-indicator'),
basketModal = document.querySelector('.basket'),
closeBasketModal = document.querySelector('.basket__top-btnClose'),
bsaketChechlist = document.querySelector('..basket__checklist'),
basketTotalPrice = document.querySelector('.basket__bottom-totalPrice'),
basketPrint = document.querySelector('.basket__bottom');
