let cantidad_alumnos =  Number(prompt("ingrese cantidad de alumnos"))
let nota
let promedio
let suma = 0

if(isNaN(cantidad_alumnos)){
    alert("ingresó un dato incorrecto, no se puede continuar la operación")
}

function sacar_promedio(){
    promedio = suma / cantidad_alumnos
}

for (let i = 0; i < cantidad_alumnos; i++) {
    nota = Number(prompt("ingrese notas de los alumnos"))
    if(nota > 10 || isNaN(nota)){
        alert("ingresó un dato incorrecto, no se puede continuar la operación")
        break
    }
    suma += nota
}

if(!isNaN(nota)){
    sacar_promedio()
        alert("La nota promedio de todos los alumnos es:" + " " + promedio)
}