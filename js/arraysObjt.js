var articulos = [
    {nombre: "Bici", costo:3000},
    {nombre: "TV", costo:2500},
    {nombre: "Libro", costo:320},
    {nombre: "Celular", costo:10000},
    {nombre: "LapTop", costo:20000},
    {nombre: "Teclado", costo:500},
    {nombre: "Audifonos", costo:1700},
];

var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

var articulosMapeados = articulos.map(function(articulo){
    return articulo.nombre
});

var articulosEncontrados = articulos.find(function(articulo){
    return articulo.nombre === "LapTop"
});

articulos.forEach(function (articulo) {
    console.log(articulo.nombre);
});

var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700
});