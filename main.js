//BIND

// function applySalesTax(taxRate, price) {
//     return price + price * taxRate;
// }

// const applyCATax = applySalesTax.bind(null, 0.0725);

// const bobsMembership = {
//     name : 'Bob',
//     total : 250,

// };

// const jillsMembership = {
//     name : 'Jill',
//     total : 899,
// }

// function collectMonthlyFee(fee) {
//     const remaining = this.total - fee;
//     this.total = remaining;
//     return this.name + ' remaining balance:' + remaining;
// }

// const collectBobsFee = collectMonthlyFee.bind(bobsMembership, 5);
// const collectJillsFee = collectMonthlyFee.bind(jillsMembership, 35);

// BINDING CALLBACKS

const blue = {
    breed : 'Pitbull',
    name : 'Blue',
    dance : function(dance) {
        console.log('THIS IS:', this);
        console.log(`WOOF, I am a ${this.name} and I like to ${dance} `);
    },
    play : function(... toys) {
        for (let toy of toys) {
            console.log (`${this.name} plays with ${toy}`);
        }
    },
    greet() {
        alert (`${this.name} SAYS WOOOF!`);
    }

};

document
    .querySelector('#btn-1')
    .addEventListener('click', blue.greet.bind(blue));

const btnA = document.querySelector('#a');
const btnB = document.querySelector('#b');
const btnC = document.querySelector('#c');

function popUp(msg) {
    alert('Secret message is ' + msg);
}

btnA.addEventListener('click', popUp.bind(null, 'Button A says Hi'));
btnB.addEventListener('click', popUp.bind(null, 'Button B says HEY'));
btnC.addEventListener('click', popUp.bind(null, 'Button C says SUP'));

//     btnA.addEventListener('click', function () {
//         popUp('BUTTON A SAYS HI!')
//     });
//     btnA.addEventListener('click', function () {
//         popUp('BUTTON B SAYS HELLO!')
//     });
//     btnA.addEventListener('click', function () {
//         popUp('BUTTON C SAYS SUP!')
//     });
// }


// CONSTRUCTOR FUNCTIONS AND NEW 

const rightTriangle = {
    a : 9,
    b : 12,
    getArea() {
        return this.a * this.b / 2;
    },
    getHypotenuse() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    }
};

function Triangle(a,b) {
    this.a = a;
    this.b = b;
    this.getArea = function() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    };
    this.getHypotenuse = function() {
        return Math.sqrt(this.a ** 2 + this.b ** 2);
    };
}