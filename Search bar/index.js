const inputText = document.querySelector(".input-text");
const allData = document.querySelector(".all-data");
  const userdata = []
const getData = async () => {
  try {
    const data = await fetch(`./data.json`);
    const users = await data.json();
    // console.log(users)

    if(data){
      allData.innerHTML = " "
    }
    users.forEach((users) => {
      const li = document.createElement("li");
      userdata.push(li)
      console.log(li)
      li.insertAdjacentHTML(
        "afterbegin",
        `
 <div class="users-list"> 
 <img src= ${users.profile_photo} alt=${users.profile_photo}>
<p>${users.name}</p>
<a href=${users.github_url} alt = ""  > Github acc</a>
    </div>

`
      );
      allData.appendChild(li);
    });
  } catch (error) {
    console.error("There is an error to fetch an data from the api");
  }
};

inputText.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase();

  userdata.forEach((curElem) => {
    const text = curElem.textContent.toLowerCase();
    if (text.includes(value)) {
      curElem.classList.remove("hide");
    } else {
      curElem.classList.add("hide");
    }
  });
});

getData();
