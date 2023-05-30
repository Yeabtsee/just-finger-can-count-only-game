const todoList=[{
    name: 'make dinner',
    dueDate: '2023-05-23'},
    {
    name:'wash dishes',
    dueDate: '2023-05-24'}
];

renderTodoList();

function renderTodoList(){
   let todoListHTML='';
        for(let i=0; i<todoList.length; i++){
            const todoObject = todoList[i];
           // const name= todoObjectname;
            //const dueDate = todoObject.dueDate;
            const {name}= todoObject;
            const {dueDate} = todoObject;
            const html = 
            `
            <div class="todo-list">${name}</div>
            <div class="due-date" >${dueDate}</div>          
            <button class="delete-button" onclick="
                todoList.splice(${i},1);
                renderTodoList();
            ">Delete</button>
            
            `;
            todoListHTML += html;
        }
    

        document.querySelector('.js-todo-list').innerHTML = todoListHTML
}

function addTodo(){
   const inputElement =  document.querySelector('.js-name-input');
   const name = inputElement.value;

   const dateInputElement = document.querySelector('.js-due-date-input');
  
   const dueDate = dateInputElement.value;
  
   todoList.push({
   // name: name,
    //dueDate: dueDate;
    name,
    dueDate
   });


   inputElement.value='';
   dateInputElement.value='';

   renderTodoList();
}