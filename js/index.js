// =======================variable part===============
let to_in = document.querySelector('.to_in')
let to_btn = document.querySelector('.to_btn')
let error = document.querySelector('.error')
let todo_list = document.querySelector('.todo_list')
console.log(to_in,to_btn,error);

to_btn.addEventListener('click',()=>{
    if(to_in.value==''){
        error.innerHTML='Please add your task'
        }else{
            error.innerHTML=''
            // ===================tag creation=============

    let todo_card=document.createElement('div')
    let todo_input=document.createElement('input')
    let todo_edit= document.createElement('button')
    let todo_del = document.createElement('button')

    // =========================appenchild==========
    
    todo_list.appendChild(todo_card)
    todo_card.appendChild(todo_input)
    todo_card.appendChild(todo_edit)
    todo_card.appendChild(todo_del)

    // ==============add class==================

    todo_card.classList.add('todo_card')
    todo_card.classList.add('todo_input')
    todo_card.classList.add('todo_edit')
    todo_del.classList.add('todo_del')
    // ==================add content=============

    todo_edit.innerHTML='Edit'
    todo_del.innerHTML='Delete'
    todo_input.value=to_in.value
    todo_input.setAttribute('readonly' ,'readonly')
    to_in.value=''


// ======================delete=================
todo_del.addEventListener('click',()=>{
    todo_card.remove()

})
todo_edit.addEventListener('click',()=>{
    if(todo_edit.innerHTML=='Edit'){
        todo_edit.innerHTML='Save'
    todo_input.removeAttribute('readonly' ,'readonly')
    }else{
        todo_edit.innerHTML='Edit'
        todo_input.setAttribute('readonly' ,'readonly')

        
    }
})
}
})


