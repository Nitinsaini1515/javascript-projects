// Password generator
// console.log("hello world")
const passset = document.querySelector(".passset")
const range = document.querySelector(".range")
const lengthrange = document.querySelector(".lengthrange")
const genbtn = document.querySelector('.genbtn')
const Capital = document.querySelector("#check1")
const small = document.querySelector("#check2")
const symbols = document.querySelector("#check3")
const numbers = document.querySelector("#check4")
const copyicon = document.querySelector(".copyicon")
lengthrange.innerHTML = range.value
range.addEventListener("input",()=>{
  lengthrange.innerHTML = range.value
})

// Capitalsletter.charAt(math.floor(Math.random()*Capitalsletter.length))

function generatepassword(){
let Capitalsletter = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let smallLatter = "abcdefghijklmnopqrstuvwxyz"
let numbersAdd = "1234567890"
let symbolsAdd = "@#$%!&*_";

let generatepass = "";
let allChar = ""

allChar += Capital.checked?Capitalsletter:""
allChar += small.checked?smallLatter:""
allChar += symbols.checked?symbolsAdd:""
allChar += numbers.checked?numbersAdd:""
// return generatepass
if (allChar === "" || allChar.length == 0) {
  return generatepass
}

//infintie loop problem
// let i = 1
// while(i<=range.value){
  // generatepass += allChar.charAt(Math.floor(Math.random()*allChar.length))
  //   i++
  // }
  for(let i=1;i<=range.value;i++){
     generatepass += allChar.charAt(Math.floor(Math.random()*allChar.length))
  }
return generatepass
}

copyicon.addEventListener("click",()=>{
  if(passset.value.length>=1 || passset.value != ""){

    navigator.clipboard.writeText(passset.value)
    // copyicon.title = "Text copied"
    alert("Text copied")
  }
})

genbtn.addEventListener("click",()=>{
  passset.value = generatepassword()
})
