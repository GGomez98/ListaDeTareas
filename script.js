const INPUT_TAREAS = document.getElementById('input-tarea')
const BOTON_AGREGAR_TAREAS = document.getElementById('boton-tareas')
const LISTA_TAREAS = document.getElementById('ul-tareas')
const ITEM_TAREA = document.getElementsByClassName('li')
const BOTON_CERRAR = document.getElementsByClassName('close-button')
const TEXTO_TAREA = document.getElementsByClassName('p')
let tareas = []

function agregarTarea(tarea){
    tareas.push(tarea)
    // agrega el item y colorea su fondo segun su posición en la lista
    let li = document.createElement('li')
    li.className = 'li'
    if(tareas.lastIndexOf(tarea)%2==0){
        li.style.backgroundColor = '#DCDAD9'
    } else{
        li.style.backgroundColor = 'white'
    }
    LISTA_TAREAS.appendChild(li)
    //agrega el texto
    let p = document.createElement('p')
    p.className = 'p'
    p.innerText = tarea
    li.appendChild(p)
    // argega el boton de borrar
    let button = document.createElement('button')
    button.className = 'close-button'
    button.innerText = 'X'
    li.appendChild(button)
}

//agrega a la lista los elementos del input siempre y cuando no empieze con un espacio en blanco o tenga algo escrito
BOTON_AGREGAR_TAREAS.addEventListener('click', enlistarTarea)

function enlistarTarea(){
    if(/^\s/.test(INPUT_TAREAS.value)||INPUT_TAREAS.value == ''){
        alert('Introduzca una tarea')
        INPUT_TAREAS.value = ''
    }
    else{
        agregarTarea(INPUT_TAREAS.value)
        INPUT_TAREAS.value = ''
    }
}

// elimina las tareas de la lista
LISTA_TAREAS.addEventListener('click', removerItem)

function removerItem(e){
    if(e.target.className == 'close-button'){
        let item = e.target.parentElement;
        LISTA_TAREAS.removeChild(item)
        tareas.splice(tareas.indexOf(e),1)
    } 
}
