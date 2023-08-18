let num1= 8
let num2= 2
let numEl=document.getElementById("num1-el").textContent=num1
let numEl2=document.getElementById("num2-el").textContent=num2
let sumEl=document.getElementById("sum")


function add()
{
    let result=num1+num2
    sumEl.textContent='Sum:'+ result 
}
function sub()
{
    let result = num1-num2
    sumEl.textContent='Sub:'+ result
}
function div()
{
    let result = num1/num2
    sumEl.textContent='Div:'+ result
}
function mul()
{
    let result = num1*num2
    sumEl.textContent='Mul:'+ result
}