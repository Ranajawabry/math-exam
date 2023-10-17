// Generate a random integer between the given bounds.
function getRandomInt(a_min, a_max) {
  a_min = Math.ceil(a_min);
  a_max = Math.floor(a_max);

  return Math.floor(Math.random() * (a_max - a_min + 1)) + a_min;
}



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
let userArr=[] ;
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
      equation = (num1*num2) + "/" + num2;
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
            document.getElementById('nameInput').value=''
            document.querySelector('.math-part').classList.replace('d-block','d-none');
            document.querySelector('.name-part').classList.replace('d-none','d-block');
            varible=0;
        }

    })

}
document.getElementsByTagName('form')[0].addEventListener('submit',(e)=>{
    e.preventDefault()
    console.log('kkkkk');
    const nameInput= document.getElementById('nameInput')
    
    userArr.push({name:nameInput.value , score})
    userArr.sort((a, b) => (a.score < b.score) ? 1 : -1);
    
    console.log(userArr);
    document.querySelector('.math-part').classList.replace('d-none','d-block');
    document.querySelector('.name-part').classList.replace('d-block','d-none');
    document.getElementById("input").value='';
    score=0;
    displayEquation()
    editScore()
    displayResult(userArr);

})
const displayResult= (arr)=>{
    
    let result = ''

    arr.forEach((item,index)=>{
        result +=`
        <tr>
        <td  class="text-center">${index}</td>
        <td  class="text-center">${item.name}</td>
        <td  class="text-center">${item.score}</td>
      </tr>
        
        `
    })

    document.getElementsByTagName('tbody')[0].innerHTML = result

}

displayResult(userArr);
console.log(creatEquation());
editScore();
displayEquation();
showResult()
