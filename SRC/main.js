//Importar La clase Tarea desde task.js
import { Tarea } from "./task.js";

//Obtener referencias a los elementos del DOM
const tareaForm = document. getElementById('task-form');
const tareaInput = document.getElementById('task-input');
const tareaList = document.getElementById('task-list');

//Crear array para alamacenar Las tareas
let tareas = [];

//Función para agregar una nueva tarea
function addTask(descripcion){
//Crear una nueva instancia de la clase Tarea
const nuevaTarea = new Tarea(descripcion);

//Agregar La tarea al array de tareas
tareas. push(nuevaTarea);

//Actualizar La Lista de tareas en el DOM
renderTareas();
}

/* console.Log(tareas); */
//Función para renderizar la Lista de tareas en el DOM
function renderTareas(){
//Limpiar La Lista de tareas en el DOM
tareaList.innerHTML ='';

//Iterar sobre todas Las tareas
tareas.forEach(tarea => {
const li = document.createElement('li');
li.textContent = tarea.descripcion;
tareaList.appendChild(li);

//boton para eliminar tareas
const eliminarBtn = document.createElement('button');
eliminarBtn.textContent = "Eliminar";
eliminarBtn.classList.add('eliminar-btn');
eliminarBtn.addEventListener('click', () => 
    {
    eliminarTarea(tarea);
});

//Agregar clase Completado si la tarea esta completa
if(tarea.completado){
    li.classList.add('completada');
}



//Agregar un evento click para marcar una tarea completada
li.addEventListener('click', () =>{
    tarea.tareaCompletada();
    renderTareas();
});


li.appendChild(eliminarBtn);
tareaList.appendChild(li);
});

}

//agregar un evento al envio del formulario para agregar nuevas tareas
tareaForm. addEventListener('submit', event => {
event.preventDefault();
const descripcion = tareaInput.value.trim();
if(descripcion !== ''){
addTask(descripcion);
tareaInput.value = "";

}
});

//funcion para eliminar tarea
function eliminarTarea(tareaEliminar){
    tareas = tareas.filter(tarea => tarea !== tareaEliminar);
    renderTareas();
}






//Renderizar la lista de tareas al cargar la página
renderTareas();