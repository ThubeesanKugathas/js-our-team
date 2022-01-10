const team = [
    {
      name: 'Wayne Barnett',
      role: 'Founder & CEO',
      image: 'wayne-barnett-founder-ceo.jpg',
    },
    {
      name: 'Angela Caroll',
      role: 'Chief Editor',
      image: 'angela-caroll-chief-editor.jpg',
    },
    {
      name: 'Walter Gordon',
      role: 'Office Manager',
      image: 'walter-gordon-office-manager.jpg',
    },
    {
      name: 'Angela Lopez',
      role: 'Social Media Manager',
      image: 'angela-lopez-social-media-manager.jpg',
    },
    {
      name: 'Scott Estrada',
      role: 'Developer',
      image: 'scott-estrada-developer.jpg',
    },
    {
      name: 'Barbara Ramos',
      role: 'Graphic Designer',
      image: 'barbara-ramos-graphic-designer.jpg',
    },
  ];
  
const containerHtml = document.querySelector('.team-container');

// ciclo per inserire ogni team member 
for (let i = 0; i < team.length; i++) {

  containerHtml.innerHTML += 
  `
  <div class="team-card">
    <div class="card-image">
      <img src="./img/${team[i].image}" alt="member profile"/>
    </div>
    <div class="card-text">
      <h3>${team[i].name}</h3>
      <p>${team[i].role}</p>
    </div>
  </div>  
  `

}

/*
<div class="form-container">
  <label for="name">Name </label>
  <input type="text" id="name" />
  <label for="role">Role </label>

  <input type="text" id="role" />
  <label for="name">Image </label>
  <input type="text" id="image" />
  <button type="button" id="addMemberButton">Add</button>
</div>
*/

// aggiungere team member dai input
const nameHtml = document.getElementById('name');
const roleHtml = document.getElementById('role');
const imageHtml = document.getElementById('name');
const buttonHtml = document.getElementById('addMemberButton');

buttonHtml.addEventListener('click', function(){
  const newMember = {
    name: nameHtml,
    role: roleHtml,
  }

  console.log(newMember);
})