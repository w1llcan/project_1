let num = 1;
let initial_count = 0;
const num_input = document.getElementById("num");
const input_value_h1 = document.querySelector("#input-value");
const add_btn = document.getElementById("add");
const subt_btn = document.getElementById("subt");

let init_val = document.getElementById('input-value').innerHTML = 0;
let init_num = document.getElementById('num').value = 1;


const addToNumber = () => {
    init_val = parseInt(init_val);
    init_num = parseInt(init_num);
    let result = init_val + init_num;
    input_value_h1.innerHTML = result;
}

const subtFromNumber = () => {
    init_val = parseInt(init_val);
    init_num = parseInt(init_num);
    let result = init_num - init_val;
    input_value_h1.innerHTML = result;
}
 const main = () => {
     add_btn.addEventListener('click', function() {
         addToNumber("add")
     });
     subt_btn.addEventListener('click', function() {
        subtFromNumber("subt")
     })
 }

 main();