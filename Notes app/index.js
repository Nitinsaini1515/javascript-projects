const inputnotes = document.querySelector(".inputnotes");
const createbtn = document.querySelector(".createbtn");
const containerapp = document.querySelector(".container2");
// const deletebtn = document.querySelector('.delete')
// const editbtn = document.querySelector('.edit')

function generatenotes() {
  let getdata = inputnotes.value.trim();
  console.log(getdata);

  if (inputnotes.value != "" || inputnotes.length == 0) {
    const createElem = document.createElement("div");
    createElem.classList.add("newelem");

    // method 1
    // createElem.innerHTML = `

    // <div>
    //       <span class="mainpara">${getdata}</span>
    //       <i class="fa-solid fa-trash delete"></i>
    //       <i class="fa-solid fa-pen-to-square edit"></i>
    //     </div>
    // `
    // method 2


    const maindata = document.createElement("span");
    maindata.className = "mainpara";
    maindata.innerHTML = getdata;

    const deletebtn = document.createElement("i");
    deletebtn.className = "fa-solid fa-trash delete";

    const editbtn = document.createElement("i");
    editbtn.className = "fa-solid fa-pen-to-square edit";

    createElem.appendChild(maindata);
    createElem.appendChild(deletebtn);
    createElem.appendChild(editbtn);

    containerapp.appendChild(createElem);


    //setting localstorage
    // let letters = "abcdefghijklmnopqrstuvwxyz";
    // const random = Math.floor(Math.random() * 50);
    // console.log(random);
    // localStorage.setItem(random, getdata);


// delete functionality
    deletebtn.addEventListener("click", () => {
      containerapp.removeChild(createElem);
    });
//     window.addEventListener('load',()=>{
//   const savedvalue = localStorage.getItem(getdata)
//   maindata.innerHTML = savedvalue

// })
   
  } else {
    alert("Please enter some notes ");
  }

  inputnotes.value = "";
}

createbtn.addEventListener("click", () => {
  generatenotes();
});
