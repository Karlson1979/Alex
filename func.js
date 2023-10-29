

const nameInput = document.querySelector("#name");
const ageInput = document.querySelector("#age");
const cityInput = document.querySelector("#city");
const createButton = document.querySelector("#create");
const userSection = document.querySelector("#users-section");
const searchInput = document.querySelector("#search");
const sortingByNameCheckbox=document.querySelector('#sort-by-name')
const sortingByAgeCheckbox=document.querySelector('#sort-by-age')



let users = [];

let changingUser=undefined

const deleteUser = (indexOfUser) => {
  users = users.filter((el, i) => i !== indexOfUser);
  renderUsers(users);
};

const editUser=(indexOfUser)=>{
  changingUser={data:users[indexOfUser], index:indexOfUser}

  createButton.textContent='Save changes'
  nameInput.value=changingUser.data.name
  ageInput.value=changingUser.data.age
  cityInput.value=changingUser.data.city

}

function renderUsers(usersToRender) {
  userSection.innerHTML = "";

  const usersContent = usersToRender.map(
    (user) => ` <div class='user-card'>
  
  <p> ${user.name}</p>
  <span>${user.age}</span>
  <p>${user.city}</p>
  <button class='delete-user-button'>Delete</button>
  <button class='edit-user-button'>Edit</button>

  </div>`
  );

  usersContent.forEach((userLayout) => {
    userSection.innerHTML += userLayout;
  });

  const deleteButton = [...document.querySelectorAll(".delete-user-button")];
  deleteButton.forEach((button, i) => {
    button.onclick = () => deleteUser(i);
  });
  const editButtons=[...document.querySelectorAll('.edit-user-button')]
  editButtons.forEach((button, i) => {
    button.onclick = () => editUser(i);
  })
}

createButton.onclick = () => {
  const name = nameInput.value;
  const age = +ageInput.value;
  const city = cityInput.value;

  if (name==''||age==''||city==''){
   return  alert('fill in the details')
  };

  if (changingUser){

users[changingUser.index]={
  name:name,
  age:age,
  city:city,
}

changingUser=undefined;
createButton.textContent='Create User'
  }


else{
  const user = { name, age, city };
  users.push(user);
  
}
  nameInput.value = "";
  ageInput.value = "";
  cityInput.value = "";
  
  renderUsers(users);
};

const sorting={
  names:()=>{
    const usersCopy=[...users]
    usersCopy.sort((user1,user2)=>user1.name.localeCompare(user2.name))
    renderUsers(usersCopy)
  },
  ages:()=>{
    const usersCopy=[...users]
    usersCopy.sort((user1,user2)=>user1.age-user2.age)
    renderUsers(usersCopy)
  }
  }


// searchButton.onclick = () => {
//   const usersToRender=users.filter((user)=>user.name.includes(searchInput.value))
  
//   renderUsers(usersToRender)
// };
// cancelSearchButton.onclick=()=>{
//   renderUsers(users)
//   searchInput.value=''
// }
searchInput.oninput=(event)=>{
  const usersToRender=users.filter(({name,age,city})=>[name,age.toString(),city].some((element)=>element.includes(event.target.value)))
renderUsers(usersToRender)

}

 sortingByNameCheckbox.onchange=(event)=>{
if (event.target.checked){
  sorting.names()
  sortingByAgeCheckbox.checked=false

} else{
  renderUsers(users)
}

sortingByAgeCheckbox.onchange=(event)=>{
  if (event.target.checked){
    sorting.ages()
    sortingByNameCheckbox.checked=false
  
  } else{
    renderUsers(users)
  }
 } }
