const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

let pointer = 3;

for (let i = 0; i < items.length; i++) {
    if(i == pointer){
        document.querySelector(".slider").innerHTML +=
        `
        <div class="item active">
            <img src="${items[i]}" alt="${title[i]}">
        </div>
        <div class="title active">
            <h1>${title[i]}</h1>
            <h2>${text[i]}</h2>
        </div>
        `
        document.querySelector(".cards-box").innerHTML +=
        `
        <div class="card active">
            <img src="${items[i]}" alt="${title[i]}">
        </div>
        `
    } else {
        document.querySelector(".slider").innerHTML +=
        `
        <div class="item">
            <img src="${items[i]}" alt="${title[i]}">
        </div>
        <div class="title">
            <h1>${title[i]}</h1>
            <h2>${text[i]}</h2>
        </div>
        `
        document.querySelector(".cards-box").innerHTML +=
        `
        <div class="card">
            <img src="${items[i]}" alt="${title[i]}">
        </div>
        `
    }
}

const btn1 = document.getElementById("btn1");
const btn2 = document.getElementById("btn2");
let slider = document.getElementsByClassName("item");
let titleArray = document.getElementsByClassName("title");
let cardArray = document.getElementsByClassName("card");

btn1.addEventListener("click", function(){

    slider[pointer].classList.remove("active");
    titleArray[pointer].classList.remove("active");
    cardArray[pointer].classList.remove("active");

    if(pointer == 0){
        pointer = items.length - 1;
    } else {
        pointer -= 1;
    }

    console.log(pointer);
    slider[pointer].classList.add("active");
    titleArray[pointer].classList.add("active");
    cardArray[pointer].classList.add("active");
});

btn2.addEventListener("click", function () {

    slider[pointer].classList.remove("active");
    titleArray[pointer].classList.remove("active");
    cardArray[pointer].classList.remove("active");

    if (pointer == 4) {
        pointer = 0;
    } else {
        pointer += 1;
    }

    console.log(pointer);
    slider[pointer].classList.add("active");
    titleArray[pointer].classList.add("active");
    cardArray[pointer].classList.add("active");
});