const getEdad = ()=>{
  return prompt("Cual es tu edad?");
}

let free = false;

const Ingreso = (time)=>{
	// let horario = getHora();
	let edad = getEdad();
	
	if (edad >= 18) {
		if (time >= 2 && time < 7 && free == false) {
			alert("Podes pasar gratis");
			free = true;
		} else {
			alert("Podes pasar, pero pagas la entrada");
		}
			
	} else {
		alert("No podés pasar por ser menor de edad")
	}
}	

Ingreso(1)
Ingreso(3)
Ingreso(2)
Ingreso(4)

		// ESTA VALIDACION TE DEJA, EN FUNCION DE UNA VARIABLE, HACER UN SISTEMA DE INGRESO
		// EN EL CUAL DESPUES DE PRIMERA CONDICION VERDADERA, ÉSTA SE VUELVE NEGATIVA
		// Y ARROJA RESULTADO DIFERENTE .