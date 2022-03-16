// increment count when button is clicked

let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
    count += 1;
    countEl.innerText = count;
};

// save count when button is clicked

function save() {
    console.log(count)
}