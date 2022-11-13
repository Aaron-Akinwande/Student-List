const Users = [
    // {email: "aaronisawesome.com", phone_number: "08175089438", matric: "200591025", name:"Pain Tendo", id:Math.random()},
]
var add_student = document.getElementById('add_student')

add_student.addEventListener('click' , () => {
    
    var table_name = prompt('Input your full-name' ) 
    var table_email = prompt('Input your e-mail' )
    var table_number = prompt('Input your phone number' )
    var table_age = prompt('Input your age' )
    Users.push({email: `${table_email}`, phone_number: `${table_number}`, age: `${table_age}`, name:`${table_name}`, id:Math.random()})
    console.log(table_email,table_age,table_name,table_number)
    console.log(Users)

    var content = document.getElementById('table_body');


    content.innerHTML = `${Users.map(stud=>{
        return (`
        <tr  class="bg-red-500">
        <td class='text-center text-white font-semibold'>${stud.name}</td>
        <td class='text-center text-white font-semibold'>${stud.email}</td>
        <td class='text-center text-white font-semibold'>${stud.phone_number}</td>
        <td class='text-center text-white font-semibold'>${stud.age}</td>
        </tr>
        
    `)})}`
})

var simplemodal = document.getElementById('simplemodal');
var modalopen = document.getElementById('modalopen');
var modalclose = document.getElementById('modalclose')

modalopen.addEventListener('click' ,()=>{
    if (simplemodal.classList.contains('hidden')){
        simplemodal.classList.remove('hidden');
        // simplemodal.classList.add('flex justify-center');
    } else {
        simplemodal.classList.add('hidden')    
    }
     
})

modalclose.addEventListener('click' ,()=>{
    simplemodal.classList.add('hidden')  
})

window.addEventListener('click', (e)=>{
if (e.target == simplemodal) {
    simplemodal.classList.add('hidden')  
}
})

document.getElementById('form_button').addEventListener("click", (e) => {
    e.preventDefault();
    var modal_name = document.getElementById("form_name").value;
    var modal_email = document.getElementById("form_email").value;
    var modal_number = document.getElementById("form_number").value;
    var modal_age = document.getElementById("form_age").value;    
     
    Users.push({email: `${modal_email}`, phone_number: `${modal_number}`, age: `${modal_age}`, name:`${modal_name}`, id:Math.random()})
    console.log(modal_email,modal_age,modal_name,modal_number)
    console.log(Users)

    var content = document.getElementById('table_body');


    content.innerHTML = `${Users.map(stud=>{
        return (`
        <tr  class="bg-red-500">
        <td class='text-center text-white font-semibold'>${stud.name}</td>
        <td class='text-center text-white font-semibold'>${stud.email}</td>
        <td class='text-center text-white font-semibold'>${stud.phone_number}</td>
        <td class='text-center text-white font-semibold'>${stud.age}</td>
        </tr>
        
    `)})}`

  });
