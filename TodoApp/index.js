//get element in the program

const btn=document.getElementById('addbtn');
//listern to click events and call function Addtodo
btn.addEventListener('click',Addtodo);

//adding Addtodo function
function Addtodo() {
    //user input
    const inputtext=document.getElementById('todo-text').value;
    //input=userInput.value;
    //console.log(inputtext)
    let todolist=document.querySelector('ul');
    //validate userinput
    if (inputtext !=''){
        //create li element

        let todo=document.createElement('li');//<li></li>
        todo.innerHTML=`${inputtext} <div id="deletetodo" >Delete</div>`;
        //append 'ul'
        todolist.appendChild(todo);
        //empty the text-box
        document.getElementById('todo-text').value='';

        //put focus on the text-box
        document.getElementById('todo-text').focus();
    } else{
        alert('please provide todo!')
    }
    //alert("function runs")
}