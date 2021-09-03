const TAREAS = document.getElementById('Tareas')
let divTarea = document.getElementsByClassName('tarea-div')
let divBorrar = document.getElementsByClassName('borrar-button')
let pTarea = document.getElementsByClassName('p-tarea')
let botonAgregar = document.getElementById('agregar-tareas')
let input = document.getElementById('input-tarea')

//agrega una tarea a la lista
function insertarTarea(tarea){
    let divTarea = document.createElement('div')
    divTarea.className = 'tarea-div'
    let pTarea = document.createElement('p')
    pTarea.className = 'p-tarea'
    pTarea.innerText = tarea
    let divBorrar = document.createElement('button')
    divBorrar.className = 'borrar-button'
    divBorrar.innerText = 'X'
    TAREAS.appendChild(divTarea)
    divTarea.appendChild(pTarea)
    divTarea.appendChild(divBorrar)
}

//agrega a la lista lo que aparezca en el input y en el caso de no haber nada en el mismo arroja una alerta
botonAgregar.onclick = ()=> {
    if(/\s/.test(input.value)||input.value==''){
        return alert('Inserte una tarea')
    }
    else{
        insertarTarea(input.value)
    }
}