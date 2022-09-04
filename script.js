// JS

let count = 0;
let counted = document.getElementById('counter')
let savedEntr = document.getElementById('saved');

// console.log(savedEntries);

function increment() {
    count += 1;
    counted.textContent = count;
    console.log(count);
}

function save() {
    let countStr = count + ' - ';
    // savedEntr = document.getElementById('saved');
    savedEntr.textContent += countStr;
    console.log(count);
    counted.textContent = 0;
    count = 0;
}



// console.log(`Let's count people on the subway`);



