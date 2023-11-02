var estudiantes = ["Maria", "Sergio", "Rosa", "Daniel"];

function saludarEstudiantes(estudiante) {
    console.log(`Hola, ${estudiante}`);    
}

for (let i = 0; i < estudiantes.length; i++) {
    saludarEstudiantes(estudiantes[i]);
}

for (var estudiante of estudiantes) {
    saludarEstudiantes(estudiante);    
}

estudiantes.forEach(estudiante => {
    saludarEstudiantes(estudiante);        
});
