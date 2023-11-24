//elementos
const todoform = document.querySelector('#todo-form')
const todoinput = document.querySelector('#todo-input')
const todolist = document.querySelector('#todo-list')
const editform = document.querySelector('#edit-form')
const editinput = document.querySelector('#edit-input')
const canceedit = document.querySelector('#cancel-edit-btn')

let oldinputvalue

//função
function save(texto) {
    const todo = document.createElement('div')
    todo.classList.add('todo')

    const title = document.createElement('h3')
    title.innerText = texto
    todo.appendChild(title)

    const butto = document.createElement('button')
    butto.classList.add('finish-todo')
    butto.innerHTML = '<i class="fa-solid fa-check"></i>'
    todo.appendChild(butto)
    

    const edit = document.createElement('button')
    edit.classList.add('edit-todo')
    edit.innerHTML = '<i class="fa-solid fa-pen"></i>'
    todo.appendChild(edit)

    const remove = document.createElement('button')
    remove.classList.add('removes-todo')
    remove.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    todo.appendChild(remove)

    
    todolist.append(todo)

    todoinput.value = ''
    todoinput.focus()
    
}

function toggleform() {
    editform.classList.toggle('hide')
    todoform.classList.toggle('hide')
    todolist.classList.toggle('hide')
}
//eventos
todoform.addEventListener('submit', function(form){
    form.preventDefault()

    const input = todoinput.value

    if (input) {
        save(input)
    }
})

function updatetodo(texto){
    const todos = document.querySelectorAll('.todo')
    todos.forEach((todo) => {
        let todotile = todo.querySelector('h3')

        if (todotile.innerText === oldinputvalue){
            todotile.innerText = texto
        }
    }
    )
}

document.addEventListener('click', function(click){
    const targetel = click.target
    const pai_target = targetel.closest('div')
    let todo_title

    if (pai_target && pai_target.querySelector('h3')){
        todo_title = pai_target.querySelector('h3').innerText
    }

    if (targetel.classList.contains('finish-todo')){
        pai_target.classList.toggle('done')
    }

    if (targetel.classList.contains('edit-todo')){
        toggleform()

        editinput.value = todo_title
        oldinputvalue = todo_title
    }

    if (targetel.classList.contains('removes-todo')){
        pai_target.remove()
    }
    
})

canceedit.addEventListener('click', function(form){
    form.preventDefault()

    toggleform( )
})


editform.addEventListener('submit', function(event){
    event.preventDefault()

    const editinputevalue = editinput.value
    if (editinputevalue){
        updatetodo(editinputevalue)
    }
    toggleform()
})