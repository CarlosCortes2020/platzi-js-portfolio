//Variables y operaciones

//1 - Responde las siguientes preguntas en la sección de comentarios:
    //¿Qué es una variable y para qué sirve?
        //Una variable es un espacio de memoria que puede obtener diferentes valores dependiendo del tipo de dato asignado
    //¿Cuál es la diferencia entre declarar e inicializar una variable?
        //Una variable pude ser declarada sin valor asignado, y posteriormente dentro del codigo asignarle valores; Inicializar una variable implica asignarle un valor ya sea al momento de declararla o posteriormente.
    //¿Cual es la diferencia entres sumar numeros y concatenar strings?
        //La suma de numeros implica operaciones que3 dan como resultado otro numero distinto a los que se estan sumando; Por otro lado, la concatenación de strings implica que las cadenas de caracteres originales apareceran tal cual en el producto final en el orden que se halla asignado la concatenacion
    //¿Cual operador me permite sumar o concatenar?
        //El simbolo de "+" permite sumar numeros o concatenar cadenas de caracteres.

//2 - Determina el nombre y tipo de dato para almacenar en variables la siguiente informacion
    //Nombre: string
    //Apellido: string
    //Nombre de usuario en Platzi: string
    //Edad: number
    //Correo electronico: string
    //Mayor de edad: boolean
    //Dinero ahorrado: number
    //Deudas: number

//3 - Traduce a código JS las variables del ejemplo anterior y deja tu código en los comentarios.
    var nombre = "Ivan";
    var apellido = "Cortés";
    var user = "fedokhar";
    var edad = 42;
    var eMail = "ivan.cortes@gmail.com";
    var mayorEdad = true;
    var ahorro = 321654;
    var deudas = 312654;
//4 - Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
    //Nombre completo (nombre + apellido)
    var nCompleto = nombre + " " + apellido;
    console.log(nCompleto);
    //Dinero real (dinero ahorrado menos deudas)
    var rAhorro = ahorro - deudas;
    console.log(rAhorro);

//Funciones

//1 - Responde las siguientes preguntas enla seccion de comentarios
    //¿Qué es una función?
        //Una funcion es un bloque de codigo que puede ser llamado desde cualquier parte de la caplicación
    //¿Cuándo me sirve usar una función en mi código?
        //Cuando es necesario usar un mismo bloque de codigo varias veces, y para evitar repetir codigo
    //¿Cuál es la diferencia entre parámetros y argumentos de una función?
        //Los parametros son las variables que dentro delas funciones se usan para las operaciones internas y los argumentos, son los datos que escribimos como entradas a las funciones
//2 - Convierte el siguiente código en una función,pero, cambiando cuando sea necesario las variables constantes por parametros y argumentos en una funcion:
    function fullName(name, lastName, nickname) {
        return console.log(`Mi nombre completo es ${name} ${lastName}, pero prefiero que me digas ${nickname}`);        
    }

//Condicionales

//1 - Responde las siguientes preguntas enla sección de comentarios:
    //¿Que es un condicional?
        //Es una expresion que nos devuelve un valor de true o false
    //¿Qué tipos de condicionales existen en JS y cuales son sus diferencias?
        //if
        //if (condition) {

        //}
        //if (condition) {
            
        //} else {
            
        //}

        //switch (key) {
        //    case value:
                
        //        break;

        //    default:
        //        break;
        //}
    //¿Puedo combinar funciones y condicionales?
        //Podemos utilizar condicionales dentro de una funcion y arrojar un resultado como paramtro de salida dela funcion
//2 - Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if
    const tipoDeSuscripcion = "Basic";
    if (tipoDeSuscripcion === "Free") {
        console.log("Solo puedes tomar los cursos gratis")        
    } else if (tipoDeSuscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")        
    } else if (tipoDeSuscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")        
    } else if (tipoDeSuscripcion === "ExpertPlus") {
        console.log("Tu y alguien mas pueden tomar todos los cursos de Platzi durante un año")        
    }

//3 - Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if)
    const tipoDeSuscripcion = "Basic";
    if (tipoDeSuscripcion === "Free") {
        console.log("Solo puedes tomar los cursos gratis")        
    } 
    if (tipoDeSuscripcion === "Basic") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes")        
    } 
    if (tipoDeSuscripcion === "Expert") {
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año")        
    } 
    if (tipoDeSuscripcion === "ExpertPlus") {
        console.log("Tu y alguien mas pueden tomar todos los cursos de Platzi durante un año")        
    }

//Ciclos

//1 - Responde las siguientes preguntas en la seccion de comentarios
    //¿Que es un ciclo?
        //Es un bloque de codigo que se ejecutarár hast aque se cumplasn las condiciones previamente establecidas
    //¿Qué tipos de ciclos existen en JS?
        //Ciclos
        //for (let index = 0; index < array.length; index++) {
        //    const element = array[index];
            
        
        //}
        //array.forEach(element => {
            
        //});
        //for (const key in object) {
        //    if (Object.hasOwnProperty.call(object, key)) {
        //        const element = object[key];
                
        //    }
        //}

        //for (const iterator of object) {
            
        //}

        //while (condition) {
            
        //}
    //¿Qué es un ciclo infinito y por que es un problema?
        //Es un ciclo en el cual nunca se cumple la condicion de finalizacion, lo cual genera el overflow y saturacion del procesador
    //¿Puedo mezclar ciclos y condicionales?
        //Afirmativo, dentro de los ciclos  podemos realizar operaciones con condicionales
//2 - Replica el comportamiento de los siguientes ciclos for utilizando ciclos while
    for (let i = 0; i < 5; i++) {
        console.log("El valor de i es: " + i);
        
    }

    var i = 0;
    while (i < 5) {
        console.log("El valor de i es: " + i);
        i++;                
    }

    for (let i = 10; i >= 2; i--) {
        console.log("El valor de i es: " + i);
        
    }

    var i = 10;
    while (i >= 2) {
        console.log("El valor de i es: " + i);
        i--;                
    }

//3 - 

    




