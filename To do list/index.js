console.log("Hello world")
const inputText = document.querySelector(".inputclass")
const submitButton = document.querySelector(".submitbutton")
const mainhtmlcontainer = document.querySelector(".mainhtmlcontainer")

const dataFunction =()=>{
  
  const textdata = inputText.value.trim();
  console.log(textdata)

  if (textdata !=="") {
    
     const maindiv = document.createElement('div')
     maindiv.classList.add('maindiv')

 const checkbox = document.createElement('input')
 checkbox.type = "checkbox"
 checkbox.className = "checkbox"

  const label = document.createElement('label')
 label.for = "checkbox"
 label.className = "mainhtml"
 label.innerHTML = textdata

   const deleteButton = document.createElement('i')
 deleteButton.className = "fa-solid fa-xmark delete "


 checkbox.addEventListener('change',()=>{

  if (checkbox.checked) {
    label.style.textDecoration = "line-through"
    
  }else{
     label.style.textDecoration = "none"
  }
 
 })
 maindiv.appendChild(checkbox)
 maindiv.appendChild(label)
 maindiv.appendChild(deleteButton)
 
 mainhtmlcontainer.appendChild(maindiv)
  deleteButton.addEventListener("click",()=>{
    mainhtmlcontainer.removeChild(maindiv)
  })
  
// submitButton.addEventListener("click",()=>{
//   textdata.innerHTML = ""
// })
}


else{
  alert("Enter any task here")
}
  
}

submitButton.addEventListener("click",()=>{
  dataFunction()
  inputText.value = ""
})





















// const dataArray = []
// const inputlistener = inputText.addEventListener(".input",(e)=>{
//   e.target.value
// })
// const dataFunction  =()=>{
  
// const thedataarray = dataArray.push(inputlistener)
// mainHtml.textContent = thedataarray
// }

// submitButton.addEventListener("click",()=>{
// dataFunction()
// })


// if(checkbox=checked){

// }
// else{

// }

// deleteItem.addEventListener("click",()=>{

// })