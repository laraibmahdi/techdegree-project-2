/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/



/*
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/
const ulForButton = document.querySelector(".link-list");
 const ulForList = document.querySelector(".student-list");

 

function students(list, page) {
   const startIndex = (page*9) - 9;
   const endIndex = page*9 ;
   const ulForList = document.querySelector(".student-list");
   ulForList.innerHTML = "";
   for (let i=0; i<list.length; i++) {
    if (i>=startIndex && i<endIndex) {
      const li = document.createElement("li");
      li.className = "student-item cf"
      ulForList.appendChild(li);
      const div = document.createElement("div");
      div.className = "student-details";
      li.appendChild(div);
      const img = document.createElement("IMG");
      img.className = "avatar"
      img.src = list[i].picture.large;
      div.appendChild(img);
      const  h3 = document.createElement("h3");
      h3.textContent = list[i].name.first + list[i].name.last;
      div.appendChild(h3);
      let span = document.createElement("span");
      span.className = "email";
      span.textContent =list[i].email;
      div.appendChild(span);
      const div2 = document.createElement("div");
      div2.className = "joined-details";
      li.appendChild(div2);
      const span2 = document.createElement("span");
      span2.className = "date";
      span2.textContent = `Joined ${list[i].registered.date}`;
      div2.appendChild(span2);
    };    
   };
};



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/
function buttons(list) {
  
const div = document.querySelector(".pagination")
const valueOfButtons = Math.ceil(list.length/9);
const ulForButton = document.querySelector(".link-list");
div.appendChild(ulForButton);
ulForButton.innerHTML = "";
for (let i=0 ; i<valueOfButtons ; i++) {
  const liForButton = document.createElement("li");
  ulForButton.appendChild(liForButton);
  const button = document.createElement("button");
  button.textContent = i+1;
  liForButton.appendChild(button);

};
const activeButton = document.querySelector("button")
activeButton.className = "active";
  // Adding a class to Pagination button when it is clicked
  
 ulForButton.addEventListener("click",(e) => {
   const button = e.target
  if (button.tagName === "BUTTON") {
  const prevActiveButton = document.querySelector(".active");
  prevActiveButton.className = "";
  e.target.className = "active";
  students(data, button.textContent);

  
  
};
 });
};    

 // creating a input field and button for searching 
  const header = document.querySelector(".header")
  const label = document.createElement("label")
  label.className = "student-search";
  header.appendChild(label);
  const span = document.createElement("span");
  span.textContent = "Search by name";
  label.appendChild(span);
  const input = document.createElement("input");
  input.placeholder = "Search by name ...";
  label.appendChild(input);
  const searchButton = document.createElement("button");
  const img = document.createElement("img");
  img.src = "img/icn-search.svg";
  searchButton.appendChild(img);
  label.appendChild(searchButton);
  
  // creating a new li for storing search results
  function filterData(list) {
  searchButton.addEventListener("click" ,(e) => {
    const ulForList = document.querySelector(".student-list");
    ulForList.innerHTML = "";
    for (let i =0; i<list.length; i++) {
  if (input.value === list[i].name.first.toUpperCase() || input.value === list[i].name.first.toLowerCase() ||
      input.value === list[i].name.last.toUpperCase() || input.value === list[i].name.last.toLowerCase()   ||
      input.value === list[i].name.first.toUpperCase().charAt(0) || input.value === list[i].name.first.toLowerCase().charAt(0) 
)
  {
    const li = document.createElement("li");
    li.className = "student-item cf"
    ulForList.appendChild(li);
    const div = document.createElement("div");
    div.className = "student-details";
    li.appendChild(div);
    const img = document.createElement("IMG");
    img.className = "avatar";
    img.src = list[i].picture.large;
    div.appendChild(img);
    const  h3 = document.createElement("h3");
    h3.textContent = list[i].name.first + list[i].name.last;
    div.appendChild(h3);
    let span = document.createElement("span");
    span.className = "email";
    span.textContent =list[i].email;
    div.appendChild(span);
    const div2 = document.createElement("div");
    div2.className = "joined-details";
    li.appendChild(div2);
    const span2 = document.createElement("span");
    span2.className = "date";
    span2.textContent = `Joined ${list[i].registered.date}`;
    div2.appendChild(span2);
    
  } 

  // creating a newPaginatonButton
  };
  function newButtons(list) {
    const calculator = list.getElementsByTagName('li');
    buttons(calculator);
  };
     
  
  newButtons(ulForList);
  });

};
  
      
  
   
 









// Call functions

buttons(data);
students(data,1);
filterData(data);



