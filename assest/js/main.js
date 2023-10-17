// Generate a random integer between the given bounds.
function getRandomInt(a_min, a_max) {
  a_min = Math.ceil(a_min);
  a_max = Math.floor(a_max);

  return Math.floor(Math.random() * (a_max - a_min + 1)) + a_min;
}

// Enclose the string form of a negative number in parathensis if necessary.
function enclose(a_number) {
  if (a_number < 0) {
    return "(" + a_number + ")";
  }

  return a_number.toString();
}

// Generates an equation with a random number of randomly-generated
// integers and operations.
//
// These equations are calculated from left-to right, and NOT via
// the order of operations (PEMDAS).
function generateRandomEquation() {
  // Get the number of numbers and operations to generate.
  var l_numbers = getRandomInt(2, 10);
  var l_operations = l_numbers - 1;

  // Generated numbers and operations will be placed in
  // these arrays.
  var l_numberArray = [];
  var l_opArray = [];

  // Generate our numbers.
  for (var i = 0; i < l_numbers; ++i) {
    // An integer between 1 and 100 will do.
    var l_number = getRandomInt(1, 100);

    // Draw another number to determine whether this number
    // will be positive or negative.
    var l_invert = getRandomInt(0, 1);
    if (l_invert === 0) l_numberArray.push(-l_number);
    else l_numberArray.push(l_number);
  }

  // Now randomly generate our operations.
  for (var i = 0; i < l_operations; ++i) {
    // 0: Addition
    // 1: Subtraction
    // 2: Multiplication
    // 3: Division
    l_opArray.push(getRandomInt(0, 3));
  }

  // Store the first number in our array.
  var l_result = l_numberArray[0];

  // Also, store the equation in a string to be returned.
  var l_string = l_numberArray[0];

  // Now iterate through each number...
  for (var i = 1; i < l_numbers; ++i) {
    //...and apply our operations to each subsequent number,
    // appending our string as we go.
    switch (l_opArray[i - 1]) {
      case 0:
        l_result += l_numberArray[i];
        l_string += " + " + enclose(l_numberArray[i]);
        break;
      case 1:
        l_result -= l_numberArray[i];
        l_string += " - " + enclose(l_numberArray[i]);
        break;
      case 2:
        l_result *= l_numberArray[i];
        l_string += " * " + enclose(l_numberArray[i]);
        break;
      case 3:
        l_result /= l_numberArray[i];
        l_string += " / " + enclose(l_numberArray[i]);
        break;
    }
  }

  return l_string;

  // Now finish out our string and return it.
  l_string += " = " + l_result;
  return l_string;
}

// $(document).ready(function () {
//     $("#btn-generate").click(function () {
//         $("#equations").append(
//             "<p>" + generateRandomEquation() + "</p>"
//         );
//     });
// });

// console.log(generateRandomEquation ())

// console.log(getRandomInt(2,100));

// let operation =getRandomInt(0,4);
// switch(operation){
//

// const getRandomEquation = (score=0) => {
//     const operations = ['+', '-', '*', '/', '%'];
//     const num1 = Math.floor(Math.random() * (score + 1))
//     const num2 = Math.floor(Math.random() * (score + 1))

//     const operation = operations[Math.floor(Math.random() * operations.length)]
//     console.log(operation)
//     if (operation === '/') {
//         if (num2 === 0) {
//             num2 = 1
//         }
//         return `${num1 * num2} ${operation} ${num2}`
//     }
//     return `${num1} ${operation} ${num2}`
// }

const btnsData = () => {
  const btns = document.querySelector(".btns");
  let result = "";
  for (let i = 1; i <= 9; i++) {
    result += `
        <div class="col-4">
        <button class=" btn border w-100 mt-2 rounded py-2 px-3 btn-background text-white fs-5">${i}</button>
    </div>
        `;
  }
  result += `
    <div class="col-4">
    <button class=" btn border w-100 mt-2 rounded py-2 px-3 btn-background text-white fs-5 ">clear</button>
</div>
<div class="col-4">
    <button class=" btn border w-100 mt-2 rounded py-2 px-3 btn-background text-white fs-5 ">0</button>
    </div>
    <div class="col-4">
    <button class=" btn border w-100 mt-2 rounded py-2 px-3 btn-background text-white fs-5 ">-</button>
</div>
    <div class="col-12">
    <button class=" btn border w-100 mt-2 rounded py-2 px-3 btn-background text-white fs-5" id="Enter">Enter</button>
</div>

    
    
    `;
  btns.innerHTML = result;
};
btnsData();

const numberBtn = document.querySelectorAll(".btns button");
let score = 0;
let varible=5;
let userNumber = 1;
const equation = document.querySelector('.equation');
numberBtn.forEach((item) => {
  item.addEventListener("click", () => {
    if (item.innerText != "clear" && item.innerText != "Enter") {
      document.getElementById("input").value += item.innerText;
    } else if (item.innerText === "clear") {
      document.getElementById("input").value = document
        .getElementById("input")
        .value.slice(0, -1);
    }
  });
});
const editScore = () => {
  document.getElementById("score").innerHTML = score;
};

const creatEquation = () => {
  let equation = "";

  const operation = getRandomInt(0, 4);
  // 0 ==> +
  // 1 ==> -
  // 2 ==> *
  // 3 ==> /
  // 4 ==> %

  const num1 = Math.ceil(Math.random()) * Math.floor(Math.random() *  varible++);
  const num2 = Math.ceil(Math.random()) * Math.ceil(Math.random() *  varible++);

  switch (operation) {
    case 0:
      console.log(num1 + "+" + num2);
      equation = num1 + "+" + num2;
      break;

    case 1:
      console.log(num1 + "-" + num2);
      equation = num1 + "-" + num2;
      break;
    case 2:
      console.log(num1 + "*" + num2);
      equation = num1 + "*" + num2;
      break;
    case 3:
      console.log(num1 + "/" + num2);
      equation = num1 + "/" + num2;
      break;
    case 4:
      console.log(num1 + "%" + num2);
      equation = num1 + "%" + num2;
      break;
  }

  return equation;
};
const displayEquation = ()=>{
    
    equation.innerHTML =`
    <h3 class="text-center my-3 fs-2">${creatEquation()}=??</h3>
    `

}
const showResult =()=>{
    const Enter =document.getElementById('Enter');
    console.log(equation.innerText.toString().split('=')[0])
    
    Enter.addEventListener('click',()=>{

       const equ= equation.innerText.toString().split('=')[0]
        
        if(eval(equ) == document.getElementById("input").value){
            score += 10 ;
            editScore();
            document.getElementById("input").value=''
            displayEquation()

        }
        else{
            console.log('hiii');
            console.log(document.querySelector('.math-part'))
            document.querySelector('.math-part').classList.replace('d-block','d-none');
            document.querySelector('.name-part').classList.replace('d-none','d-block')
        }

    })

}
document.getElementsByTagName('form')[0].addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('kkkkk');
    const nameInput= document.getElementById('nameInput')
    displayResult(nameInput.value,score)
    document.querySelector('.math-part').classList.replace('d-none','d-block');
    document.querySelector('.name-part').classList.replace('d-block','d-none');
    document.getElementById("input").value='';
    score=0;
    displayEquation()
    editScore()

})
const displayResult= (value,score)=>{
    document.getElementsByTagName('tbody')[0].innerHTML += `
                   <tr>
                    <td  class="text-center">${userNumber++}</td>
                    <td  class="text-center">${value}</td>
                    <td  class="text-center">${score}</td>
                  </tr>
                
    
    `

}
console.log(creatEquation());
editScore();
displayEquation();
showResult()
