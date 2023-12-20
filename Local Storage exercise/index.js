let form = document.querySelector('form');
let name = document.getElementById('name');
let age = document.getElementById('age');
let gn_data = document.getElementById('gn-btn');
let tbody = document.querySelector('tbody');

form.addEventListener('submit',function(e){
    // e.preventDefault();
    localStorage.setItem('name',name.value);
    localStorage.setItem('age',age.value);
})

gn_data.addEventListener('click',function(){
    let user_name = localStorage.getItem('name');
    let user_age = localStorage.getItem('age');
    // console.log(user_age,user_name);
    let row = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    td1.innerText=user_name;
    td2.innerText = user_age;
    row.append(td1,td2);
    tbody.append(row);
    
})
