const HomeButton = document.querySelector(".home")
const GymButton = document.querySelector(".gym")
const MotivationButton = document.querySelector(".motivation")
// const copyfunction = document.querySelector(".maindata")
// const cpybtn = document.querySelector(".cpybutton")
const loadingdiv = document.querySelector(".loadingdiv")
const SuccessButton = document.querySelector(".success")

const LoveButton = document.querySelector(".love")
const mixed = document.querySelector(".mixed")
const gym = document.querySelector(".gym")
const MOtivation = document.querySelector(".motivation")


async function getmixed(maincator) {
  try {
    const data =  await fetch("./quotes.json")
    const maindata = await data.json()
       if(maindata){
loadingdiv.innerHTML = ``
}
   mixed.innerHTML = "";
    const result = maindata[maincator]

    result.forEach(result=>{
      const anotherElement = document.createElement('div')
      anotherElement.classList = "mixeddiv"

      const div1 = document.createElement('div')
      div1.className = "iddiv"
      div1.textContent = `${result.id}`
      const maindata = document.createElement('div')
      maindata.className = "maindata"
      maindata.textContent= `${result.text}` 

      const button = document.createElement('button')
      button.className = "cpybutton"
      button.textContent = `Copy`


      // 
      button.addEventListener("click",()=>[
        navigator.clipboard.writeText(`${result.text}`).then(()=>{
          return alert("copied success")
        })
        .catch((error)=>{
          console.log("error occur in copy the text",error)
        })
      ])
      anotherElement.append(div1)
      anotherElement.append(maindata)
      anotherElement.append(button)
//       anotherElement.innerHTML = `
//       <main>${result.id}</main>
// <div class = "maincontent">${result.text}</div>
// <button class = "copybtn"> copy</button>
//       `
      mixed.appendChild(anotherElement)
//       copybtn.addEventListener("click",()=>{
//   navigator.clipboard.writeText(`${result.text}`)
// })
    }
  
  )
  } catch (error) {
    console.log("Error in fetching the data",error)
    
  }
}
window.addEventListener("DOMContentLoaded",()=>{
  getmixed('mixed')
})

HomeButton.addEventListener("click",()=>{
  getmixed('mixed')
})
GymButton.addEventListener("click",()=>{
  getmixed('gym')
})
MotivationButton.addEventListener("click",()=>{
  getmixed('motivation')
})
LoveButton.addEventListener("click",()=>{
  getmixed('love')
})
SuccessButton.addEventListener("click",()=>{
  getmixed('success')
})
// const copyvalue = copyfunction.innerHTML
// console.log(copyvalue)
// console.log(copyvalue)
// cpybtn.addEventListener("click",()=>{
//   navigator.clipboard.writeText(copyfunction)
// })