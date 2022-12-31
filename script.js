//your code here
let text = document.getElementById("evaluatedText")
let length = document.getElementById("letterCount")

text.addEventListener('keyup',(e)=>{
  let str = text.value;
  length.innerHTML = str.length
  console.log(str.length)
  
})