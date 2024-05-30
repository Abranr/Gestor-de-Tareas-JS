//Definir la clase task
export function Tarea(descripcionTarea){
    this.descripcion = descripcionTarea;
    this.completado = false;
}

//Metodo para marcar la tarea como completado
Tarea.prototype.tareaCompletada = function(){
    this.completado = !this.completado;

}