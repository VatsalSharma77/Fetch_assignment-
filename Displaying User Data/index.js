document.getElementById('fetch').addEventListener('click', fetchUsers);


function fetchUsers() {
    fetch("https://reqres.in/api/users").then(function(response){
        return response.json();
    }).then(function(data){
        displayUsers(data.data);
    }).catch(function(error){
        console.log("Something Error Occure",error);
    })
    
    
}

function displayUsers(users) {
  const usersContainer = document.getElementById('user-display');
  usersContainer.innerHTML = '';

  users.forEach(user => {
    const userCard = document.createElement('div');
    userCard.classList.add('userCard');

    const avatar = document.createElement('img');
    avatar.src = user.avatar;
    avatar.alt = 'User Avatar';
    avatar.classList.add('userAvatar');

    const name = document.createElement('p');
    name.textContent = `Name: ${user.first_name} ${user.last_name}`;

    const email = document.createElement('p');
    email.textContent = `Email: ${user.email}`;

    userCard.appendChild(avatar);
    userCard.appendChild(name);
    userCard.appendChild(email);

    usersContainer.appendChild(userCard);
  });
}
