//Curso JavaScript Free Code Camp

//----------Variables----------

/*
null= nulo
undefined= indefinido
boolen= booleano
string= texto
simbol=
number= numero
objets= a objetos
*/

//ej

var miVariable="Hola" /*miVariable es el valor el signo "="
es el asignador, "Hola" es el dato*/
console.log (miVariable)
//case-sensitive= se usa primero minuscula y luego mayuscula

//---------Aritmetica---------

//suma, resta, multiplicacion, division
var suma= 7 + 5;
console.log (suma)
//12
/*resto= el resto de una division, sirve para saber si un
numero es par o impar*/
var resto= 5%1;
console.log(resto)
//0

/*si agrego ++ al valor de la variable suma 1 y lo 
asigna a la variable*/
var librosComprados= 105;
console.log (librosComprados)
//105
librosComprados ++;
console.log (librosComprados)
//106
librosComprados --;
console.log(librosComprados)
//105

//asignar suma
var a=20;
console.log(a);
a=a+5;
console.log (a);
a+=5;
console.log(a);//forma correcta
//20
//25
//30

//-------------CADENA DE CARACTERES

/*texto
uso de comillas dobles o simples, todo lo que este entre
comillas es considerado un caracter, incluso
espacios en blanco.
para omitir las comillas cuando necesito que esten
en el texto se agrega una \ de las comillas. 
ej*/

var a= "soy una cadera \"con comillas\"";
console.log(a);

//otra opcion es usar la comilla simple

//SECUENCIA DE ESCAPE
/* Combinacion de caractteres que no se representan a si mismos
/' comilla simple
/" comilla doble 
/n linea nueva= mostrar en otra linea
/r retorno de carro
/t tabulacion
/b retroceso
/f salto de pagina
*/

//----LONGITUD DE CARACTERES

//cantidad de caracteres en la cadena

var miCadena= "a";
console.log (miCadena.length);
//1

//------CORCHETES

//acceder a los caracteres individuales de la cadena
//ej
//CADENA = JAVASCRIPT
//INDICE = 0123456789

var lenguajeDeProgramacion="JavasCript";
console.log (lenguajeDeProgramacion [0]);
//J

//son inmutables

//----LET
//se usa para que si se declara una variable con el mismo nombre salte un error, no pasa con var

//----CONST
//las variables declaradas usando const son de solo lectura. Son un valor constante, 
//lo que significa que una vez que una variable es asignada con const, no se puede reasignar.

//------ARREGLOS
//estructura para almacenar varios valores en una misma estructura. Se escriben entre []

var miArreglo = [10,20,30];
console.log (miArreglo);
//[10, 20, 30]

console.log (miArreglo[0]);
//10
//Arreglos multidimensionales

var miArreglo=[[1,2,3],[4,5,6],[7,8,9]];
console.log (miArreglo [0]);
console.log (miArreglo[0][2])
//[1,2,3]
//3

//-------METODOS
//.PUSH
//se usa para agregar elementos al final del arreglo

var estaciones = ["verano", "primavera", "otono"]

estaciones.push ("invierno")
console.log (estaciones)

//.POP
//remover el ultimo elemento de un arreglo

estaciones.pop ();
console.log (estaciones);

//de manera individual
estacion = estaciones.pop ();
console.log (estacion);

/*.pop() se utiliza para sacar un valor del final de un arreglo. Podemos almacenar este valor sacado asignándolo a 
una variable. En otras palabras, .pop() elimina el último elemento de un arreglo y devuelve ese elemento.
Cualquier tipo de entrada puede ser sacada de un arreglo: números, cadenas, incluso arreglos anidados.

const threeArr = [1, 4, 6];
const oneDown = threeArr.pop();
console.log(oneDown);
console.log(threeArr);
El primer console.log mostrará el valor 6 y el segundo mostrará el valor [1, 4].*/


//.SHIFT
// remueve el primer elemento

var estacionesConShift = ["verano", "primavera", "otono", "invierno"]
estacionesConShift.shift ();
console.log (estacionesConShift);

//ARREGLOS EJ LISTA DE COMPRAS

var miLista= [["cereal", 3],["leche", 2], ["galletas", 4]];
console.log ("voy a comprar " + miLista [0][1] + " kilos de " + miLista [0][0]);

//.UNSHIFT

/*.unshift() funciona exactamente como .push(), pero en lugar de añadir el elemento al final del arreglo, 
unshift() añade el elemento al principio del arreglo.

Ejemplo:

const ourArray = ["Stimpson", "J", "cat"];
ourArray.shift();
ourArray.unshift("Happy");

Después del shift, ourArray tendrá el valor ["J", "cat"]. Después del unshift, 
ourArray tendrá el valor ["Happy", "J", "cat"].*/


//----------------FUNCIONES

// function: para ejecutar bloque de codigo

function mostrarMensaje(){
    console.log ("hola mundo");
}
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();
mostrarMensaje();

function sumar(a,b){
    var suma=a+b;
    console.log ("el resultado de " + a + " + " + b + " es " + suma);
}

sumar (5,3);
sumar (2000,5);
sumar (3,6);
sumar (55593, 5);
sumar ("pos","ta");

//VARIABLE GLOBAL= SE PUEDE USAR EN CUALQUIER LUGAR
// VARIABLE LOCAL= SOLO DENTRO DE LA FUNCION

//RETURN
//retornar un valor

function suma(a,b){
    return a + b;
}

console.log (suma (3,2));
console.log (suma (3,2));

//---------------DATOS BOOLEANOS = true false

// IGUALDAD

console.log (5==5);
console.log (5=="5")
 
//IGUALDAD ESTRICTA - RECONOCE EL TIPO DE DATO

console.log (5==="5")
/* puedes determinar el tipo de una variable o un valor con el operador typeof, de la siguiente manera:

typeof 3
typeof '3'
typeof 3 devuelve la cadena number y typeof '3' devuelve la cadena string.
*/

// DESIGUALDAD

console.log (5!==1);
console.log (5!==5);

//MAYOR QUE

console.log (5>2);
console.log (5>6);

//MAYOR O IGUAL QUE

console.log (5>=5);
console.log (5>=6);

//MENOR QUE

console.log (5<6);
console.log (5<3);

//MENOR O IGUAL QUE

console.log (5<=7);
console.log (5<=3);

//---------------OPERADORES BOOLEANOS
//OR ||
//la operacion es verdadera si uno o ambos son verdaderos

var a=8;
console.log(a<9) || (a>10);

//NOT !
//si la expresion es falsa se convierte en verdadera, y viseversa

var a=9;
console.log(!(a<10));

//------------CONDICIONALES
//permite que un bloque de codigo se ejecute o no
//IF - si

var b=10;
if (b>5){
    console.log("esta operacion es verdadera");
}

//ELSE
//clausula desp de if que sirve de respaldo. lo que ocurrira si es falso

if (b>20){
    console.log("mostrar");
}else{ console.log ("sino, iria esto");
}

//ELSE IF
//manejar varias condiciones y decidir que pasa si una alguna es verdadera

function clasicarValor (valor){
    if (valor%2==0){
        console.log ("divisible por dos");
    }else if (valor%3==0){
        console.log("divisible por 3");
    }else{
        console.log("no es divisible entre las opciones");
    }
}

clasicarValor(15)

//ej golf

//tabla (par es el promedio que se espera de un jugador de golf)

//golpes   - retornar
//1          "hole in one"
//<= par -2  "eagle"  
//par -1     "birdie"
//par +1     "bogey"
//par +2     "double bogey"
//>= par +3  "go home"

function puntajeDeGolf(par,golpes){
    if (golpes==1){
        console.log("hole in one");
    }else if (golpes<= par -2){
        console.log ("eagle");
    }else if (golpes == par -1){
        console.log ("birdie");
    }else if (golpes == par +1){
        console.log ("bogey");
    }else if (golpes == par +2){
        console.log ("double boegey");
    }else if (golpes >= +3)
        console.log ("go home!")
}

puntajeDeGolf(3,5)

//SWITCH
//permite decidir que va a suceder con ese valor en particular
//se define con case y termina con break, detiene el proceso cuando el caso es correcto

/*var producto= "hamburguesa";
switch (producto){
    case 1: "pizza";
        console.log("cuesta 1000 pesos");
        break;
    case 2: "hamburguesa";
        console.log ("cuesta 1500 pesos");
        break;
    case 3: "helado";
        console.log ("cuesta 700 pesos");
        break;
}
console.log (producto) 
NO SALIO*/

//DEFAULT
// respaldo para cuando no hay un valor definido

function seleccionarIdioma(valor){
    var idioma;
    switch(valor){
        case 1: idioma= "espanol";
        break;
        case 2: idioma= "frances";
        break;
        case 3: idioma= "italiano";
        break;
        default: idioma= "ingles";
        break;
    }
    return idioma
}
console.log(seleccionarIdioma(2));

//SENTENCIA SWICTH

function clasificarVolumen(valor){
    var volumen;
    switch (valor){
        case 1: 
            volumen="bajo";
        break;
        case 2:
        case 3:
            volumen="intermedio";
        break;
    }
    return volumen;
}
console.log (clasificarVolumen(3));

//RETORNAR VALOR BOOLEANO

function esMenorQue(a,b){
    return a < b;
}
console.log (esMenorQue(2,3));

// RETORNO ANTICIPADO
// se usa para anticiparse a un valor inesperado

function calcularRaizCuadrada (numero){
    if (numero < 0){
        return undefined;//si el numero es positivo no se va a ejecutar, se ejecutara el siguiente
    }
        return Math.sqrt (numero);
}
console.log (calcularRaizCuadrada(25));

//BLACK JACK

var conteo=0;// defino en cero porque voy a sumar o restar para generar positivos o negativos
 function contarCartas(carta){
     var decision;
     switch (carta){
         case 2:
         case 3:
         case 4:
         case 5:
         case 6:
             conteo ++;
         break;
         case 10:
         case "J":
         case "Q":
         case "K":
         case "A":
             conteo --;
         break;
     }
     if (conteo > 0){
         decision = " Apostar";
     }else {
         decision = " Esperar";
     }
     return conteo + decision

 }

 console.log (contarCartas(3));
 console.log (contarCartas("K"));
 console.log (contarCartas(4));
 console.log (contarCartas(5));
 console.log (contarCartas("Q"));
 console.log (contarCartas("A"));

 //-------------OBJETOS

 //permiten guardar un conjunto que este relacionado a sus distintos valore

 var miPerro =/*asigna un objeto*/ {
//propiedades | valores
     "nombre": "Gino",
     "edad": 5,
     "peso": 6,
     "raza": "beagle"
 };

 // NOTACION DE PUNTO
 //para acceder a prpiedades

 var miPerro =/*asigna un objeto*/ {
    //propiedades | valores
         "nombre": "Gino",
         "edad": 5,
         "peso": 6,
         "raza": "beagle"
 }

console.log (miPerro.nombre);

//NOTACION DE CORCHETES
//permite acceder a propiedades que estan ente comillas por tener espacio entreo los caracteres.

//ej. conosole.log(miCuaderno["numero de pagina"]);

//se puede asignar una variable a una propiedad para trabajarla luego

var resultados={
    1:"Nora",
    2: "Gino",
    3: "Estef",
    4:"kiara"
};
var posicion = 2;
console.log (resultados[posicion]);

//ACTUALIZAR PROPIEDADES
//permitir que el objeto cambie durante la ejecucion

var mochila = {
    "color": "azul",
    "tamano": "mediano",
    "contenido": [
        "botella de agua",
        "cuaderno"
    ]
}
console.log (mochila.color);
mochila.color = "verde";
console.log (mochila.color);

mochila.contenido.push("lapiz");
console.log (mochila.contenido);

//agregar propiedades

var curso = {
    "titulo": "JavaScript",
    "duracion": 300,
    "idioma": "espanol"
}
curso.estudiantes = 150;

console.log (curso);

//eliminar propiedades
//delete

delete curso.duracion;
console.log (curso)

//OPERADORES PARA BUSQUEDA

function buscarElementoQuimico (simbolo) {
    var simbolosQuimicos = {
        "Al": "aluminio",
        "S": "azufre",
        "CL": "cloro"
    }
    return simbolosQuimicos;
}
console.log (buscarElementoQuimico("Al"));
//no salio


//VERIFICAR PROPIEDADES

miCuaderno.hasOwnProperty ("color")// miCuaderno tiene la propiedad color?
//sirve mucho para condicionales. si tiene esa propiedad sera true sino false

function verificarPropiedad (obj, propiedad){
    if (obj.hasOwnProperty (propiedad)){
        return "Propiedad: "+ obj [propiedad]
    }else{
        return "El objeto no tiene esta propiedad";
    }
}

var miCuaderno = {
    "color": "verde",
    "categoria": 3,
    "precio": 4.56
}

console.log (verificarPropiedad(miCuaderno,"color"));
console.log (verificarPropiedad (miCuaderno, "paginas"));

//OBJETOS COMPLEJOS

var ordenesDePizzas = [
    {
        "tipo": "margarita",
        "tamano": "individual",
        "precio": 5.67,
        "topings": [
            "extra queso",
            "champignon",
            "pina"
        ],
        "para llevar": true
    },
    {
        "tipo": "cuatro quesos",
        "tamano": "familiar",
        "precio": 18.43,
        "toppings": [
            "extra queso",
            "pimenton"
        ],
        "para llevar": false
    }
]
//el primer objeto en el indice 0, el segundo en el 1. los objs van separados por ,

console.log (ordenesDePizzas [0].topings)

//OBJETOS ANIDADOS
//objetos dentro de objetos

miReceta = {
    "descripcion": "mi postre favorito",
    "costo": 15.6,
    "ingredientes": {
        "masa": {
            "harina": "100 g",
            "sal": "1 cucharadita"
        },
        "cobertura": {
            "chocolate": " 4 cucharaditas",
            "azucar": "120 g"
        }
    }
}
console.log (miReceta.ingredientes.masa.sal);
//1 cucharadira
console.log (miReceta.descripcion);
//mi postre favorito

//Acceder a un elemento dentro de un arreglo en un objeto

varMisPlantas = [
    {
        tipo: "flores",
        lista: [
            "rosas", "tulipanes", "diente de leon"
            ]
        },
    {
        tipo: "arboles",
        lista: [
            "abeto", "pino", "abedul"
            ]
        }
]

var primeraFlor = varMisPlantas[0].lista[0];
var tercerArbol = varMisPlantas[1].lista[2];

console.log (primeraFlor);
//rosas
console.log (tercerArbol);
//abedul

//---------CICLOS
//permiten repetir una secuencia de operaciones un determinado numero de veces

//WHILE
//debe ser true para continuar el ciclo

var i = 0;
while /*(conidicion que debe ser verdadera)*/ (i<8){
    console.log ("hola");
    i++
}

var miArreglo2 = [];
var i = 0;
while (i<10){
    miArreglo2.push (i);
    i++
}
console.log(miArreglo2);
/*[
    0, 1, 2, 3, 4,
    5, 6, 7, 8, 9
  ]*/

  var numeros = [2,3,4,5,6,8,9,34];
  while (numeros.length > 4){
      numeros.pop()
  }
  console.log (numeros)

  //[ 2, 3, 4, 5 ]

  //FOR
  //cuando sabemos cuantas instrucciones necesitamos. Se usan variables y se actualizan

  for (/*variable del ciclo*/var i = 0; /*si*/ i < 10; /*entonces*/ i ++ );
  //mientras i sea menor que 10 el ciclo continua

  var otroArr = [4,6,8,2];
  var total = 0;
  for (var i = 0; i < otroArr.length; i ++){
      total += otroArr [i]
  }
  console.log (total);
  //20. No lo entendi

  var lenguajes = '"j.s","phyton", "java';
  for (var i = 0; i < lenguajes.length; i++){
      console.log (lenguajes[i].toUpperCase()/*convierte a mayuscula*/);
  }

  function contarNumerosPares (arreglo){
    var total = 0;
    /*inicio la variable en 0, desp le digo que si es menor que la longitud del arreglo sume 1. Desp le digo
    que si ese valor es divisible por 2 sume 1 la variable "total".*/
    for (var i = 0; i < arreglo.length; i ++){
        if (arreglo [i]/*especifica el lugar del elemento en el arreglo*/ % 2 == 0){
        total ++
    }
    return total
}
console.log ([5,3,1,6,8])
  }

  /* la variable total parte de 0, en el for la var i parte de 0, si i es menor a la longitud del arreglo
  entonces i suma 1. y su ese valor de i en el arreglo es un numero divisible por 2, a la var total le sumo 1
  arreglo [i] es el lugar del elemento dentro del arreglo que estoy trayendo para ver si es par*/

  //FOR ANIDADOS
  //ciclos dentro de ciclos

  var nuevoArr = [[1,2,3], [4,5,6], [7,8,9]];
  for (var i = 0; i < nuevoArr.length; i++){
      var arregloAnidado = nuevoArr [i];
    for (var j = 0; j < arregloAnidado.length; j ++ ){
        console.log (arregloAnidado [j]);
    }
  }

  //DO WHILE
  //hace si o si una vuleta y desp sigue si es verdadera. se usa por ej. si necesito que un usuario modifique un valor


  var x = 10;

  do{
      console.log(x);
      x++;
  }
  while (x<10);

  //EJ BUSCAR PERFIL

  var contactos= [
      {
          "nombre": "nora",
          "apellido": "nav",
          "num":"54",
          "gustos": ["pizza", "programacion"]
      },
      {
          "nombre": "harry",
          "apellido": "potter",
          "numero": "509",
          "gustos": ["magia", "howarts"],
      },
      {
          "nombre": "sherlok",
          "apellido": "holmes",
          "numero": "898",
          "gustos": ["misterio", "opio"]
      }
  ]

  function buscarPerfil (nombre, propiedad){
      for (var i=0; i<contactos.length;i++){
          //emepzar'a en 0 e ira actualizando
          if (contactos[i].nombre===nombre)
          return contactos[i][propiedad] || "la propiedad no existe"
      }
      console.log (buscarPerfil(nora))
      //esto quiere decir que en el indice de contactos va a buscar nombre, si coincide con el nombre entonces va a retornar
      // la propiedad que tiene nombre o la propiedad no existe
  }

  //NUMERO ALEATORIO
  //MATH

  function generarFuncionAleatoria () {
      return Math.random();
  }

  console.log (generarFuncionAleatoria())

  //NUMERO ALEATORIO ENTERO
  //FLOOR
  //quita el decimal y redondea hacia abajo

  var numeroAleatorioEntre0y19 = Math.floor (Math.random()*20)
  console.log (numeroAleatorioEntre0y19)
  //como floor redondea hacia abajo nunca sera mayor a 19

  function generarEnteroAleatorio (limiteSuperior){
    return Math.floor (Math.random()*limiteSuperior);
  }
  console.log (generarEnteroAleatorio(5))

  //RANGO ESPECIFICO

  function rangoAleat (limiteInf, limiteSup){
      return Math.floor (Math.random()*(limiteSup-limiteInf+1)) + limiteInf;
  }
  console.log (rangoAleat(3,8))

  //PARSE INT
  //convierte una cadena de caracteres a un entero

  console.log(parseInt("5ho6la"))

  //OPERADOR TERNARIO
  //?
  //si esta operacion es verdadera retornara el valor, sino (:)
  //un condicional que reemplaza la sintaxis de IF

  function retornarMinimo (x,y){
      return x < y ? x : y;
  }

console.log (retornarMinimo (10,9));

var a = 9;
var b = 8;

function calcular () {
    return a > b ? b*2 : a + 15;
}

console.log (calcular (a,b))

//CONDICIONALES MULTIPLES

function compararNum (a,b){
    return a == b ? "a y b son iguales" : a > b ? "a es mayor que b" : "b es mayor que a"
}

console.log (compararNum(8,9))

//  VAR vs LET
// con var puedo declarar mas de una vez y se ira reemplazando

var nombre = "Nico";
var nombre = "Adolfo";
console.log (nombre)

//con let no se puede declarar mas de una vez

let nombre = "Nico";
let nombre = "Adolfo";
console.log (nombre)
//error

//si puedo reasignar el valor:

let nombre = "Nico";
nombre = "Adolfo";
console.log (nombre)

//var puede usarse dentro o fuera de un bloque
//let solo dentro del bloque

//CONSTANTES
//no se puede modificar el valor un vez asignado, pero puede mutar. puede escrisirse con mayuscula

function calcularArea (radio){
    const PI = 3.14;
    if (radio < 0){
        return undefined
    }
    else {
        return PI * (radio**2);
    }
}
console.log (calcularArea(10))

//ej mutar const

const MIARREGLO = [1,2,3]; 
MIARREGLO [0] = 0;
console.log (MIARREGLO)

//OBJETO INMUTABLE
//para que sea inmutable se usa freeze. previene la mutacion
 let colores = {
     "verde": "#erc1",
     "azul": "#dsdz"
 }

 Object.freeze(colores);

 console.log(colores)

 //FUNCIONES FLECHA
 //toma el parametro y retorna el objeto

 const flecha = () => new Date ();

 const sumarTres = (x) => x + 3;

 console.log(sumarTres(5));

 //paso esta funcion a funcion flecha

 /*function calcularArea (radio){
    const PI = 3.14;
    if (radio < 0){
        return undefined
    }
    else {
        return PI * (radio**2);
    }
}*/

const calcularArea = (radio) => { const PI = 3.14; if (radio < 0) return; else return PI * (radio**2)} 
console.log (calcularArea(10))

//para concatenar arr

/*const concatenar = function concatenarArr (arr1,arr2) {
    return arr1.concat(arr2);
}

console.log (concatenar ([1,2], [3,4,5]));*/
//[ 1, 2, 3, 4, 5 ]

const concatenar = (arr1,arr2) => {return arr1.concat(arr2)};
console.log (concatenar([3,4,5], [6,7,8]));
//[ 3, 4, 5, 6, 7, 8 ]

//VALOR POR DEFECTO EN FUNCIONES FLECHA

const VALORPORDEFECTO = (num, valor = 1) => num + valor;

console.log (VALORPORDEFECTO(54))

//OPERADOR REST
//convierte los valores que use en un arreglo

function operadorRest (...args){
return(args)
}
console.log (operadorRest(1,2,3,4))

//OPERADIR SPREAD
//convierte un arr en elementos individuales

const numerosArr = [1,2,3];
function sumarArr (a,b,c) {
    return a+b+c;
}
console.log (sumarArr(...numerosArr));

//OPERADOR DE DESESTRUCTURACION

const usuario1 = {
   "nombre": "gino",
   "apellido": "reni"
    }


const {nombre, apellido} = usuario1;
console.log (usuario1)
//no entendi

//ASIGNAR VARIABLE
[a,b,c]=[1,2,3]
console.log (b)

//invertir valor
var a= 1;
var b = 2;
[a,b]=[b,a]


console.log (b)

//OPERADOR REST EN ARR

var a;
var b;
var c;
var arr;

[a,b,c,...arr] = [1,2,3,4,5,6,7]
console.log (arr)

// PLANTILLAS LATERALES
//acento invertido en lugar de comillas `
// pueden contener ambos tipos de comillas
// las lineas se preservan como se escriben
// para reemplazar una variable se escribe $ (variable). tmb se puede escribir entre expresiones {}

var a = 6;
console.log (`el valor de a es ${a}`)

var persona = {
    "nombre": "gino",
    "edad": "20",
    "idioma": "espanol"
}

const saludo = `hola, mi nombre es ${persona.nombre}`;
console.log (saludo)

const crearPersona = (nombre, edad, idioma) => ({nombre, edad, idioma});//las llaves son para retornar un obj
//los valores se reemplazan cuando se llame al obj

console.log (crearPersona ("gino", "20", "espanol"))
//{ nombre: 'gino', edad: '20', idioma: 'espanol' }

//METODOS
//definir funciones dentro de un obj
//this: se refiere al obj, la propiedad va a buscarse dentro del obj

const persona = {
    nombre: "Isabel",
    presentarse: function (){
        return `mi nombre es ${this.nombre}`;
    }
}
console.log (persona.presentarse ())

//CLASES
//class
//crear muchos objetos con la misma estructura
//comienzan con letras mayusculas
//es una forma distinta de crear un obj
//asigno el valor del parametro a la propiedad del obj que estoy creando con this
class TrasnsbordadorEspacial {
    constructor (planeta) {
        this.planeta = planeta;
    }
}

var zeus = new TrasnsbordadorEspacial ("Jupiter")
//creo un obj. que tiene como propiedad planeta, esa propiedad es jupiter
console.log (zeus.planeta)

//GETTERS Y SETTERS
//definir funciones en una clase
//proteger la data del O.

class Libro{
    contructor (autor){
        this._autor=autor;//por convencion _ getters perimite obtener el valor de una propiedad privada
        //las propiedades que comienzan con un guión bajo "” son internas y no deben ser manipuladas desde el exterior del objeto.
    }
};

let autorDelLibro = {
    nombre: "El Gato",
    apellido: "Dumas",
    get nombreCompleto () {
       return `${this.nombre} ${this.apellido}`;
}
}
console.log (autorDelLibro.nombreCompleto)

//GETTERS: get. una función sin argumentos, que funciona cuando se lee una propiedad.
//SETTERS: set – una función con un argumento, que se llama cuando se establece la propiedad.

/*Una de los grandes usos de los getters y setters es que permiten tomar el control de una propiedad de datos 
“normal” y reemplazarla un getter y un setter y así refinar su comportamiento.

Imagina que empezamos a implementar objetos usuario usando las propiedades de datos “nombre” y “edad”:*/

function User(name, age) {
  this.name = name;
  this.age = age;
}

var john = new User("John", 25);

alert( john.age ); // 25
/*…Pero tarde o temprano, las cosas pueden cambiar. En lugar de “edad” podemos decidir almacenar “cumpleaños”, 
porque es más preciso y conveniente:*/

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;
}

var john = new User("John", new Date(1992, 6, 1));

/*Ahora, ¿qué hacer con el viejo código que todavía usa la propiedad de la “edad”?

Podemos intentar encontrar todos esos lugares y arreglarlos, pero eso lleva tiempo y puede ser difícil de hacer 
si ese código está escrito por otras personas. Y además, la “edad” es algo bueno para tener en “usuario”, 
¿verdad? En algunos lugares es justo lo que queremos.

Pues mantengámoslo.

Añadiendo un getter para la “edad” resuelve el problema:*/

function User(name, birthday) {
  this.name = name;
  this.birthday = birthday;

  // La edad se calcula a partir de la fecha actual y del cumpleaños
  Object.defineProperty(this, "age", {
    get() {
      let todayYear = new Date().getFullYear();
      return todayYear - this.birthday.getFullYear();
    }
  });
}

let john = new User("John", new Date(1992, 6, 1));

alert( john.birthday ); // El cumpleaños está disponible
alert( john.age );      // ...así como la edad 
//Ahora el viejo código funciona también y tenemos una buena propiedad adicional.

//SETTERS
//La sintaxis  set  asocia la propiedad de un objeto a una función que será 
//llamada cuando haya un intento de asignar valor a esa propiedad.

//FIN