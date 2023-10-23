document.addEventListener('DOMContentLoaded', function() {



    function main() {  
      let todos = []; // store all the todos
  
      // add three todos
      addTodo(todos, "Walk the dog", 5);
      addTodo(todos, "Clean the room", 3);
      addTodo(todos, "Pay the bill", 2);
      renderTodos(todos);
    }
  
  
    function renderTodos(todos) {
      todoList.innerHTML = ''; //refresh , instead of overwrite , nesscsay
      for (let todo of todos) { //
        console.log(todos);
        const li = document.createElement('li');
        li.className = 'list-group-item d-flex justify-content-between align-items-center';
        li.innerHTML = `
                  ${todo.name} <span class="badge bg-primary">${todo.urgency}</span>
                  <button class="btn btn-danger btn-sm delete-btn" data-id="${todo.id}">Delete</button>
                  
                  `;
                  
                  li.querySelector(".delete-btn").addEventListener('click', function() {
                    deleteTask(todos, todo.id);
                    renderTodos(todos)
                    
                });
                
                  
        
        todoList.appendChild(li);
    }}
    main();
    }) 
