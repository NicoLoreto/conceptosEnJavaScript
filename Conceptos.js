/*METODOS EN ARRAY

FUNCIONES DE ORDEN SUPERIOR

como primer parametro recibiran una funcion principal donde se escribe la logica, deberia ser una funcion pura (sin efectos secundarios,
retornando siempre los mismos parametros).

MAP
trasforma
cuando tenemos un array y queremos obtener otro array de otra cosa. transformo los elementos del array */

//const numeros = [3,10,20,50];
//const dobles = numeros.map (function (numero,posicion,numeros){})
    //function: funcion trasformadora
    //numero: asigna la funcion a trasformar
    //posicion: la posicion en el array
    //numeros nos se suele usar

    //generalmente se usa para modificar un elemento de array original. la funcion puede escribirse como
    //function (_, posicion), porque solko nos ineteresa la posicion


const numeros = [3,10,20,50]; 
const dobles = numeros.map (function(numero){
    return numero*2
})

console.log (dobles)

//FILTER
//define por cada elemento si pasa o no al nuevo array. el resultado es un nuevo array con los elementos
//que cumplan cierta condicion. PREDICADO

const productos = [
    {
        id: "jsk",
        nombre: "camisa",
        precio: 500
    },
    {
        id: "15b",
        nombre: "zapatillas",
        precio: 2000
    },
    {
        id:"34rr",
        nombre: "pantalon",
        precio: 1500
    }

];

const esBarato = (producto) => producto.precio < 1000;//"producto" es cada objeto, puede ser cualquier nombre
const productosBaratos = productos.filter (esBarato);

console.log (productosBaratos)

//REDUCE
//necesita un array y un valor inicial
//opera con un elemento a la vez hasta llegar a un unico resultado
// el primer parametro sera la funcion reductora, la que actualiza el acumulador y el segundo es el valor inicial
//del acumulador. la funcion reductora recibe como primer parametro el acumulador
//(el valor que tiene el acumulador antes de girar la palanca)

const numerosArray = [3,10,20,50];
const acumular = (acumulador, numero) => acumulador + numero;

//la funcion acumular recibe recibe los parametros acumulador y numero. y desp retorna el nuevo valor acumulado

let total = numerosArray.length > 0 ? numerosArray.reduce (acumular, 0) : "el array esta vacio";//lenght se pone para que lo haga si el 
//array no esta vacio

console.log (total)

//CLASE
//define las caracteristicas del objeto
//Objeto: una instancia de una clase
//Popiedad: una caracteristica del obj.
//Metodo: una capacidad del obj.
//Constructor: metodo llamado en el momento de la creacion de instancias

function Persona (){

}

let persona = new Persona
//instancia de la clase Persona
//llemo a la clase para acceder a sus metodos


function Persona (nombre, edad, lugarDeNacimiento){
    this.nombre = nombre;
    this.edad = edad;
    this.lugarDeNacimiento = lugarDeNacimiento;
}

let nico = new Persona ("Nico", 32, "Pergamino")

console.log (nico);

let noe = new Persona ("Noe", 33, "Pergamino")

console.log (noe);

//FUNCION RECURSIVA
//Una función recursiva es una función que se llama a sí misma hasta que se interrumpe. Una función 
//recursiva siempre tiene una condición que evita que la función se llame a sí misma en algún momento.
//le damos a la función una condición conocida como caso base.
//El caso base es la condición que le dice a la función cuando dejar de llamarse a sí misma
//lo primero que hicimos fue definir el caso base. ¿Por qué? Porque la función primero que nada necesita saber 
//cuándo dejará de llamarse a sí misma.

let cuentaAtras = numero => {
    //base case
    if (numero === 0) {
        return;
    }
    console.log(numero);
    return cuentaAtras(numero - 1);
};
console.log(cuentaAtras(5)) // 5, 4, 3, 2, 1


/*Si continuamente restamos dos a un número hasta que el número más pequeño sea 0(cero) o 1(uno) 
entonces podemos saber si el número es par o impar.

Intentemos eso con recursión. Entonces, dado el número 6, nuestro programa debería devolver 'Par' 
porque 6-2-2-2 = 0. Dado 7, nuestro programa debería devolver 'impar' porque 7-2-2-2 = 1.*/

let parImpar = (numero) => {
    if (numero === 0) {
        return 'Par';
    } else if (numero === 1) {
        return 'Impar';
    } else {
        return parImpar(numero - 2);
    }
};
console.log(parImpar(20)) // Par
console.log(parImpar(75)) // Impar
console.log(parImpar(98)) // Par
console.log(parImpar(113)) // Impar


console.log([2,3,4,5], 3-1)

// EJERCICIO PARA BUSCAR PROP Y VALORES EN UN ARREGLO
//es importante usar un bucle para automatizar cada busqueda
//con in puedo saber si un elemento est'a dentro de un arr u obj
//primero rastreo tosos los indices con la i. por eso.length
//en cada arr va a buscar

const contacts = [
    {
      firstName: "Akira",
      lastName: "Laine",
      number: "0543236543",
      likes: ["Pizza", "Coding", "Brownie Points"],
    },
    {
      firstName: "Harry",
      lastName: "Potter",
      number: "0994372684",
      likes: ["Hogwarts", "Magic", "Hagrid"],
    },
    {
      firstName: "Sherlock",
      lastName: "Holmes",
      number: "0487345643",
      likes: ["Intriguing Cases", "Violin"],
    },
    {
      firstName: "Kristian",
      lastName: "Vos",
      number: "unknown",
      likes: ["JavaScript", "Gaming", "Foxes"],
    },
  ];
  
  function lookUpProfile(name, prop) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].firstName === name) {
        if (prop in contacts[i]) {
          return contacts[i][prop];
        } else {
          return "No such property";
        }
      }
    }
    return "No such contact";
  

  }
  
  console.log (lookUpProfile("Sherlock", "Holmes"));

//CUANDO NO TENGO QUE RETORNAR ES PORQ ME OLVIDE DE DECLARAR LA VAR

//Radix (Base)
/*La función parseInt() analiza una cadena y devuelve un entero. Recibe un segundo argumento para la base (radix), 
que especifica la base del número representado en la cadena. La base (radix) puede ser un número entero entre 2 y
 36.

La llamada a la función se realiza de la siguiente manera:

parseInt(string, radix);
Y aquí hay un ejemplo:

const a = parseInt("11", 2);
La variable radix indica que 11 está en el sistema binario, o base 2. Este ejemplo convierte la cadena 11 a
 un entero 3.

Utiliza parseInt() en la función convertToInteger para convertir un número binario en un número entero, y 
devolverlo.*/

//UNSHIFT
//.unshift() funciona exactamente como .push(), pero en lugar de añadir el elemento al final del arreglo, 
//unshift() añade el elemento al principio del arreglo.

function countdown(n){
    if (n<1){
      return []
    }else{
      const cuenta = countdown(n-1);
      cuenta.unshift(n);
      return cuenta;
    }
    
  
  }
  console.log (countdown(10));

  function rangeOfNumbers(startNum, endNum) {
    if (startNum <= endNum){
      const rango =  rangeOfNumbers(startNum+1, endNum);
      rango.unshift(startNum)
      return rango
    }else{
    return [];}
  };

  console.log (rangeOfNumbers(4,20))

  //Si una función flecha tiene un solo parámetro, los paréntesis que encierran el parámetro pueden ser omitidos.

  const doubler = item => item * 2;

  //VALOR MAXIMO
  //para calcular el valor máximo en un arreglo

//const arr = [6, 89, 3, 45];
//const maximus = Math.max(...arr);

//maximus tendría un valor de 89.
//...arr devuelve un arreglo desempacado. En otras palabras, propaga el arreglo. Sin embargo, 
//el operador de propagación sólo funciona en el lugar, como en un argumento de función o en un arreglo 
//literal

//DESESTRUCTURACION
//para asignar los valores directamente desde un objeto.
//Aquí, las variables name y age serán creadas y se asignarán los valores respectivos a partir del objeto user. Puedes observar que esto es mucho más limpio.
//Puedes extraer tantos o pocos valores del objeto como desees.

const user = { name: 'John Doe', age: 34 };
const { name } = user;
console.log (user)

/*La desestructuración te permite asignar un nuevo nombre de variable al extraer valores. 
Puedes hacer esto al poner el nuevo nombre después de dos puntos al asignar el valor.*/

/*const user = { name: 'John Doe', age: 34 };
Así es como puedes dar nuevos nombres de variables en la asignación:

const { name: userName, age: userAge } = user;
Puedes leerlo como "obtén el valor de user.name y asígnalo a una nueva variable llamada userName" 
y así sucesivamente. El valor de userName sería la cadena John Doe, y el valor de userAge sería el número 34.*/

/*desestructuración para asignar variables desde objetos anidados
Puedes usar los mismos principios de las dos lecciones anteriores para desestructurar los valores desde objetos 
anidados.

Usando un objeto similar a los ejemplos anteriores:

const user = {
  johnDoe: { 
    age: 34,
    email: 'johnDoe@freeCodeCamp.com'
  }
};
Así es como se extraen los valores de propiedades de objetos y se los asigna a variables con el mismo nombre:

const { johnDoe: { age, email }} = user;
Y así es como se puede asignar los valores de las propiedades de un objeto a variables con diferentes nombres:

const { johnDoe: { age: userAge, email: userEmail }} = user

Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando 
las variables lowToday y highToday con los valores de today.low y today.high del objeto LOCAL_FORECAST.*/

const LOCAL_FORECAST = {
  yesterday: { 
    low: 61, 
    high: 75 
  },
  today: { 
    low: 64, 
    high: 77 
    },
  tomorrow: { 
    low: 68, 
    high: 80 
    }
};

// Cambia solo el código debajo de esta línea

const {today: {low: lowToday, high:highToday}} =  LOCAL_FORECAST;

// Cambia solo el código encima de esta línea

const source = [1,2,3,4,5,6,7,8,9,10];
function removeFirstTwo(list) {
  // Cambia solo el código debajo de esta línea

  const list = [...arr]; // Cambia esta línea

  // Cambia solo el código encima de esta línea
  return arr;
}
const arr = removeFirstTwo(source);

console.log (source)

//funciones breves y declarativas
//eliminar la palabra clave function y los dos puntos al definir funciones en objetos. Aquí hay un 
//ejemplo de esta sintaxis:

const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  }
};


/* la palabra clave class declara una nueva función, a la cual se añade un constructor. 
Este constructor se invoca cuando new es llamado para crear un nuevo objeto.*/

class SpaceShuttle {
  constructor(targetPlanet) {
    this.targetPlanet = targetPlanet;
  }
}
const zeus = new SpaceShuttle('Jupiter');

//El método constructor es un método especial para crear e inicializar un objeto creado con una clase.

//getters y setters.

//obtener valores de un objeto y establecer el valor de una propiedad dentro de un objeto.

/*Las funciones getter están destinadas a simplemente devolver (get) el valor de la variable privada de un objeto 
al usuario sin que el usuario acceda directamente a la variable privada.

Las funciones setter están destinadas a modificar (set) el valor de la variable privada de un objeto basado en 
el valor pasado a la función setter. Este cambio podría implicar cálculos, o incluso sobrescribir completamente el 
valor anterior.*/

class Book {
  constructor(author) {
    this._author = author;
  }
  // getter
  get writer() {
    return this._author;
  }
  // setter
  set writer(updatedAuthor) {
    this._author = updatedAuthor;
  }
}
const novel = new Book('anonymous');
console.log(novel.writer);
novel.writer = 'newAuthor';
console.log(novel.writer);

//TEST

/*Si quieres encontrar la palabra the en la cadena The dog chased the cat, puedes utilizar la siguiente expresión 
regular: /the/. Ten en cuenta que las comillas no son requeridas dentro de la expresión regular.

JavaScript tiene múltiples formas de usar expresiones regulares. Una forma de probar una expresión regular es 
usando el método .test(). El método .test() toma la expresión regular, la aplica a una cadena (que se coloca 
  dentro de los paréntesis), y devuelve true o false si tu patrón encuentra algo o no.*/

let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);

//El método test aquí devuelve true.*/

/*Puedes buscar múltiples patrones usando el operador alternation o OR: |.

Este operador coincide con los patrones antes o después de él. Por ejemplo, si deseas coincidir con las cadenas 
yes o no, la expresión 
regular que quieres es /yes|no/.

También puedes buscar más de dos patrones. Puedes hacer esto añadiendo más patrones con más operadores OR 
separándolos, como /yes|no|maybe/.*/

/* BANDERA i
para ignorar la capitalizacion se usa la bandera i
Puedes coincidir ambos casos utilizando algo llamado bandera. Existen otras banderas, pero aquí te centrarás en 
la que ignora la capitalización de las letras, la bandera i. Puedes usarla añadiéndola a la expresión regular. 
Un ejemplo de uso de esta bandera es /ignorecase/i. 
Esta expresión regular puede coincidir con las cadenas ignorecase, igNoreCase e IgnoreCase.*/

/*Para utilizar el método .match(), aplica el método a una cadena y pasa la expresión regular dentro de los 
paréntesis.

Este es un ejemplo:*/

"Hello, World!".match(/Hello/);
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);
//Aquí el primer match devolverá ["Hello"] y el segundo devolverá ["expressions"].

//Ten en cuenta que la sintaxis .match es lo "opuesto" al método .test que has estado utilizando hasta ahora:

/*'string'.match(/regex/);
/regex/.test('string');

let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);
Aquí match devolverá ["Repeat"].*/

/*BANDERA g

Para buscar o extraer un patrón más de una vez, puedes utilizar la bandera g.*/

let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);

//Y aquí match devuelve el valor ["Repeat", "Repeat", "Repeat"]

/*El carácter de comodín . coincidirá con cualquier carácter único. El comodín también es llamado dot y period. 
Puedes utilizar el carácter de comodín como cualquier otro carácter en la expresión regular. Por ejemplo, si 
quieres hacer coincidir hug, huh, hut, y hum, puedes usar la la expresión regular /hu./ para que coincida con 
las cuatro palabras.*/

let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr);
huRegex.test(hugStr);

//Ambas llamadas a test devolverán true.*/

/*Completa la expresión regular unRegex para que coincida con las cadenas run, sun, fun, pun, nun, y bun. 
Tu expresión regular debe usar el carácter de comodín.*/

let exampleStr = "Let's have fun with regular expressions!";
let unRegex = /.un/; // Cambia esta línea
let result = unRegex.test(exampleStr);

/*
Puedes buscar un patrón literal con cierta flexibilidad utilizando las clases de caracteres. Las clases de 
caracteres te permiten definir un grupo de caracteres que deseas coincidir colocándolos dentro de corchetes 
([ y ]).

Por ejemplo, si quieres hacer coincidir bag, big, y bug pero no bog. Puedes crear la expresión regular 
/b[aiu]g/ para hacer esto. [aiu] es la clase de caracteres que solo coincidirá con los caracteres a, i, o u.*/

let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex);
bagStr.match(bgRegex);
bugStr.match(bgRegex);
bogStr.match(bgRegex);

//En orden, las cuatro llamadas de match devolverán los valores ["big"], ["bag"], ["bug"], and null.

/*Usa una clase de caracteres con las vocales (a, e, i, o u) en tu expresión regular vowelRegex para encontrar 
todas las vocales en la cadena quoteSample.

Nota: Asegúrate de hacer coincidir tanto las vocales mayúsculas como minúsculas.*/

let quoteSample = "Beware of bugs in the above code; I have only proved it correct, not tried it.";
let vowelRegex = /[aeiou]/gi; //Cambia esta línea
let resultado = quoteSample.match(vowelRegex); // Cambia esta línea 

//RECORDAR QUE LAS BANDERAS VAN FUERA DE LA BARRA /. SI ESCRIBO DENTRO LO TOMAR COMO CARACTER.
//POR EJ. SI QUIERO BUSCAR HUMOS /H[U]M[O]S/GI

/*Dentro de un conjunto de caracteres, puedes definir un rango de caracteres a coincidir usando un carácter de 
guion: -.

Por ejemplo, para hacer coincidir las letras minúsculas desde la a a la e usarías [a-e].*/

let catStr = "cat";
let batStr = "bat";
let matStr = "mat";
let bgRRegex = /[a-e]at/;
catStr.match(bgRegex);
batStr.match(bgRRegex);
matStr.match(bgRRegex);

//En orden, las tres llamadas a match devolverán los valores ["cat"], ["bat"] y null.

/*También funciona para hacer coincidir un rango de números.

Por ejemplo, /[0-5]/ coincide con cualquier número entre 0 y 5, incluyendo 0 y 5.

Además, es posible combinar un rango de letras y números en un único conjunto de caracteres.*/

let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
jennyStr.match(myRegex);

/*
/w. Este atajo equivale a [A-Za-z0-9_]. Esta clase de caracteres coincide con letras mayúsculas y minúsculas 
más números. 
Ten en cuenta que esta clase de caracteres también incluye el carácter de guión bajo (_).
*/

let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers);
shortHand.test(numbers);
longHand.test(varNames);
shortHand.test(varNames);

//Las cuatro llamadas a test devolverán true.

//.W es lo contrario de \w 
// el patrón contrario usa letra mayúscula. Este atajo es lo mismo que [^A-Za-z0-9_].

/*
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand);
sentence.match(shortHand);
El primer match devuelve el valor ["%"] y el segundo devuelve ["!"].
*/

//Estos atajos de clases de caracteres también son conocidos como clases de caracteres abreviados.

//\d
//atajo para buscar caracteres de dígitos. Esto es igual a la clase de caracteres [0-9], la cual busca un solo 
//carácter de cualquier número entre cero y nueve.

let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g; // Cambia esta línea
let resuuult = movieName.match(numRegex).length;

//El atajo para buscar caracteres que no sean dígitos es \D. Esto es igual a la clase de caracteres [^0-9], 
//el cual busca un único carácter que no sea un número entre cero y nueve.

let movieeName = "2001: A Space Odyssey";
let noNumRegex = /\D/g; // Cambia esta línea
let ressult = movieeName.match(noNumRegex).length;

/*también podrías crear un conjunto de caracteres que no desees coincidir. Este tipo de conjuntos de caracteres se 
llaman conjuntos de caracteres negados.

CARET

Para crear un conjunto de caracteres negados colocas un carácter de intercalación (^) después del corchete de 
apertura y antes de los caracteres que no quieres coincidir.

Por ejemplo, /[^aeiou]/gi coincide con todos los caracteres que no son una vocal. Ten en cuenta que caracteres 
como ., !, [, @, / y el espacio en blanco coinciden; el conjunto de caracteres de vocal negados sólo excluye los 
caracteres de vocal.

Crea una sola expresión regular que coincida con todos los caracteres que no son un número o una vocal. Recuerda 
incluir las banderas apropiadas en la expresión regular.*/

let quoteSamples = "3 blind mice.";
let myRegexx = /[^0123456789aeiou]/gi; // Cambia esta línea
let resultt = quoteSamples.match(myRegexx); // Cambia esta línea


//Fuera de un conjunto de caracteres, el caret es utilizado para buscar patrones al principio de las cadenas.

let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);

/*La primera llamada test devolverá true, mientras que la segunda retornara false.


Puedes buscar el final de las cadenas usando el carácter del signo de dólar $ al final de la expresión regular.*/

let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);

//La primera llamada a test devuelve true, mientras que la segunda retorna false.

/*coincidir con un carácter (o grupo de caracteres) que aparezca una o más veces seguidas. Esto significa que 
aparece al menos una vez, y puede repetirse.

Puedes usar el carácter + para comprobar si es así. Recuerda, el carácter o patrón debe estar presente 
consecutivamente. Es decir, el carácter tiene que repetirse uno tras otro.

Por ejemplo, /a+/g encontraría una coincidencia en abc y regresaría ["a"]. Debido al +, también encontraría 
una sola coincidencia en aabc y regresaría ["aa"].

Si en su lugar estuvieras comprobando la cadena abab, se encontrarían dos coincidencias y regresaría ["a", "a"] 
porque los caracteres a no están en fila; hay una b entre ellos. Finalmente, dado que no hay una a en la cadena 
bcd, no se encontraría una coincidencia.*/

let difficultSpelling = "Mississippi";
let myRegeex = /s+/gi; // Cambia esta línea
let resuult = difficultSpelling.match(myRegeex);

/*También hay una opción para hacer coincidir caracteres que aparecen cero o más veces.

El carácter que hace esto es el asterisco o la estrella: *
.*/

let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;


soccerWord.match(goRegex);
gPhrase.match(goRegex);
oPhrase.match(goRegex);

//En orden, los tres match devolverán los valores ["goooooooo"], ["g"], y null.

//Recuerda que se utiliza el signo más + para buscar uno o más caracteres y el asterisco * para buscar cero o más caracteres. 

/*
coincidencia perezosa encuentra la parte más pequeña posible de la cadena que satisface el patrón de 
la expresión regular.

Puedes aplicar la expresión regular /t[a-z]*i/ a la cadena "titanic". Esta expresión regular es básicamente un 
patrón que comienza con t, termina con i, y tiene algunas letras intermedias.

Las expresiones regulares son por defecto codiciosas, por lo que la coincidencia devolvería ["titani"]. Encuentra 
la sub-cadena más grande posible que se ajusta al patrón.

Sin embargo, puedes usar el carácter ? para cambiarla a una coincidencia perezosa. "titanic" al coincidir con la 
expresión regular ajustada de /t[a-z]*?i/ devuelve ["ti"].

Nota: Se debe evitar analizar HTML con expresiones regulares, pero coincidir patrones con una cadena HTML 
utilizando expresiones regulares está completamente bien.

Corrige la expresión regular /<.*>/ para que devuelva la etiqueta HTML <h1> y no el texto "<h1>Winter is c
oming</h1>". Recuerda que el comodín . en una expresión regular coincide con cualquier carácter.*/

let text = "<h1>Winter is coming</h1>";
let myRegeeex = /<.*?>/; // Cambia esta línea
let resulttt = text.match(myRegeeex);

/*
Los nombres de usuario se utilizan en todas partes en Internet. Son los que dan a los usuarios una identidad única 
en tus sitios favoritos.

Se necesita comprobar todos los nombres de usuario en una base de datos. Estas son algunas reglas simples que los 
usuarios deben seguir al crear su nombre de usuario.

Los nombres de usuario sólo pueden utilizar caracteres alfanuméricos.

Los únicos números del nombre de usuario tienen que estar al final. Puede tener un cero o más al final. El nombre 
de usuario no puede iniciar con un número.

Las letras del nombre de usuario pueden ser minúsculas y mayúsculas.

Los nombres de usuario deben tener al menos dos caracteres. Un nombre de usuario de dos caracteres sólo puede 
utilizar letras del alfabeto como caracteres.

Cambia la expresión regular userCheck para que se ajuste a las restricciones indicadas anteriormente.*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z][a-z]+\d*$|^[a-z]\d\d+$/ig; // Cambia esta línea
let reesult = userCheck.test(username);

/* hacer que coincidan los espacios en blanco o los espacios entre las letras.

Puedes buscar los espacios en blanco usando \s que es una s minúscula. Este patrón no solo coincide con 
los espacios en blanco, también con los caracteres de retorno de carro, tabulaciones, alimentación de formulario
 y saltos de línea. Puedes pensar que es similar a las clases de caracteres 

*/

let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);

//Esta llamada a match debe devolver [" ", " "].

/*Busca caracteres que no sean espacios en blanco usando \S, la cual es una s mayúscula. Este patrón no coincidirá 
con los caracteres de espacios en blanco, retorno de carro, tabulaciones, alimentación de formulario y saltos de 
línea. Puedes pensar que es similar a la clase de caracteres [^ \r\t\f\n\v].*/

let whiteeSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteeSpace.match(nonSpaceRegex).length;

//El valor devuelto por el método .length sería 32.

/*
Puedes especificar el número inferior y superior de patrones utilizando especificadores de cantidad. Para los especificadores de cantidad 
utilizamos llaves ({ y }). Pon dos números entre las llaves - para el número inferior y superior de patrones.

Por ejemplo, para que coincida con la letra a si aparece entre 3 y 5 veces en la cadena ah, la expresión regular debe ser /a{3,5}h/.*/

let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4);
multipleA.test(A2);

//La primera llamada a test devuelve true, mientras que la segunda devuelve false.

/*
Para especificar sólo el número inferior de patrones, mantén el primer número seguido de una coma.

Por ejemplo, para hacer coincidir solo con la cadena hah cuando la letra a aparezca al menos 3 veces, la expresión regular 
sería /ha{3,}h/.
*/

let Aa4 = "haaaah";
let Aa2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleAa = /ha{3,}h/;
multipleA.test(A4);
multipleA.test(A2);
multipleA.test(A100);

//En orden, las tres llamadas a test devuelven true, false y true.

let haStr = "Hazzzzah";
let haRegex = /Haz{4,}ah/; // Cambia esta línea
let resssult = haRegex.test(haStr);

/*
Para especificar un cierto número de patrones, simplemente pon ese número entre corchetes.

Por ejemplo, para que coincida con la palabra hah solo con la letra a 3 veces, tu expresión regular sera /ha{3}h/.

let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4);
multipleHA.test(A3);
multipleHA.test(A100);
En orden, las tres llamadas a test devuelven false, true y false.
*/

/*Puedes especificar la posible existencia de un elemento con un signo de interrogación, ?. Esto comprueba cero o uno de los elementos 
precedentes. Puedes pensar que este símbolo dice que el elemento anterior es opcional.

Por ejemplo, hay ligeras diferencias en inglés americano y británico y puedes usar el signo de interrogación para coincidir con ambas 
ortografías.*/

let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american);
rainbowRegex.test(british);

//Ambos usos del método test devolverán true.

/*Utiliza los lookaheads en el pwRegex para que coincida con las contraseñas que tengan más de 5 caracteres y dos dígitos 
consecutivos.*/

let sampleWord = "astronaut";
let pwRegex = /(?=\w{6})(?=\D*\d{2})/; // Cambia esta línea
let reeesult = pwRegex.test(sampleWord);

/*A veces queremos comprobar grupos de caracteres utilizando una expresión regular y para conseguirlo usamos paréntesis ().

Si deseas encontrar Penguin o Pumpkin en una cadena, puedes usar la siguiente expresión regular: /P(engu|umpk)in/g

Luego, comprueba si los grupos de cadena deseados están en la cadena de prueba usando el método test().
*/

let tesstStr = "Pumpkin";
let tesstRegex = /P(engu|umpk)in/;
tesstRegex.test(tesstStr);

//El método test aquí devolverá true.

//PALABRAS REPETIDAS

/*Digamos que quieres hacer coincidir una palabra que aparece varias veces como la siguiente.

let repeatStr = "row row row your boat";

Los grupos de captura se construyen encerrando entre paréntesis el patrón de expresión regular a capturar. En este caso, el objetivo es 
capturar una palabra formada por caracteres alfanuméricos, por lo que el grupo de captura será \w+ encerrado entre paréntesis: /(\w+)/.

La subcadena que coincide con el grupo se guarda en una "variable" temporal, a la que se puede acceder dentro de la misma expresión 
regular utilizando una barra invertida y el número del grupo de captura (por ejemplo, \1). Los grupos de captura se numeran 
automáticamente por la posición de sus paréntesis de apertura (de izquierda a derecha), empezando por el 1.

El siguiente ejemplo encuentra cualquier palabra que aparezca tres veces separada por un espacio:

let repeatRegex = /(\w+) \1 \1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["row row row", "row"]
El uso del método .match() en una cadena devolverá un arreglo con la subcadena coincidente, junto con sus grupos capturados.*/

//REMPLACE
/*Puedes buscar y reemplazar texto en una cadena usando .replace() en una cadena. Las entradas para .replace() son primero el patrón de 
expresiones regulares que deseas buscar. El segundo parámetro es la cadena para reemplazar la coincidencia o una función para hacer 
algo.

let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");
La llamada replace devolverá la cadena The sky is blue..

También puedes acceder a grupos de captura en la cadena de reemplazo con signos de dólar. ($).

"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');
La llamada replace devolverá la cadena Camp Code.*/

let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/; // Cambia esta línea
let replaceText = "$3 $2 $1"; // Cambia esta línea
let resuuuult = str.replace(fixRegex, replaceText);

/*
A veces no se quieren caracteres en espacios en blanco alrededor de 
las cadenas, pero están ahí. El proceso típico de las cadenas de texto es eliminar el espacio en blanco al 
inicio y al final del mismo.

Escribe una expresión regular y usa los métodos de cadena apropiados para eliminar espacios en blanco al principio y al final de las 
cadenas.
*/

let hello = "   Hello, World!  ";
let wsRegex = /^\s+|\s+$/g; // Cambia esta línea
let resullt = hello.replace(wsRegex, ""); // Cambia esta línea

//tomo el espacio en blanco del principio ^ o el espacio en blanco del final $ y lo reemplazo por un espacio vacio ""

/*
typeof para comprobar la estructura de datos, o tipo, de una 
variable. 
Aquí hay algunos ejemplos que utilizan typeof:

console.log(typeof "");
console.log(typeof 0);
console.log(typeof []);
console.log(typeof {});
En orden, la consola mostrará las cadenas string, number, object, y object.

JavaScript reconoce siete tipos de datos primitivos (inmutables): Boolean, Null, Undefined, Number, String, Symbol (nuevo con ES6), y 
BigInt (nuevo con ES2020), y un tipo para elementos mutables: Object. Ten en cuenta que en JavaScript, los arreglos son técnicamente un 
tipo de objeto.
*/

//SUMAR UN VALOR CON EL Q SIGUE EN UN ARRAY
let myArray = [1, 2, 3];
let arraySum = myArray.reduce((previous, current) =>  previous + current);
console.log(`Sum of array values is: ${arraySum}`);

//SPLIT()
//separa los caracteres en elementos de un array

function pruebaSplit (texto){
  let mostrarArray = texto.split("");
 return mostrarArray;
}
console.log (pruebaSplit("otto"))

//REVERSE()
//da vuelta a los array

function pruebaReverse (texto){
  let mostrarReverse = texto.split("").reverse();
 return mostrarReverse;
}
console.log (pruebaReverse("gato"))

//JOIN
//une los elementos de un array en un string

function pruebaJoin (texto){
  let mostrarJoin = texto.split("").reverse().join("");
 return mostrarJoin;
}
console.log (pruebaJoin("gato"))

//EJ PALINDROMO

function compararTexto (texto){
  let palindromo = texto.split("").reverse().join("");
return texto === palindromo
}
console.log (compararTexto("anana"));

//INDEXSAR ELEMENTO DE UN ARREGLO A CUALQUIER COSA
let myyArray = ["a", "b", "c", "d"];
// Cambia solo el código debajo de esta línea
myyArray[1] = "Esta es la letra b";

// Cambia solo el código encima de esta línea
console.log(myyArray);

//Array.push() y Array.unshift().

/*
Ambos métodos toman uno o más elementos como parámetros y los agregan al arreglo que hizo la llamada; el método 
push() agrega los elementos al final del arreglo, mientras que unshift() los agrega al inicio. Considera lo 
siguiente:

let twentyThree = 'XXIII';
let romanNumerals = ['XXI', 'XXII'];

romanNumerals.unshift('XIX', 'XX');
romanNumerals tendrá el valor ['XIX', 'XX', 'XXI', 'XXII'].

romanNumerals.push(twentyThree);
romanNumerals tendrá el valor ['XIX', 'XX', 'XXI', 'XXII', 'XXIII']. Ten en cuenta que también podemos pasar 
variables, que nos permiten una mayor flexibilidad en la modificación dinámica de los datos de nuestro arreglo.
*/

//pop () y shift ()
/*
Tanto push() como unshift() tienen métodos correspondientes que son casi opuestos funcionales: pop() y shift(). 
Como ya habrás adivinado, en lugar de agregar, 
pop() elimina un elemento al final de un arreglo, mientras que shift() elimina un elemento al principio
*/

let greetings = ['whats up?', 'hello', 'see ya!'];

greetings.pop();
//greetings tendrá el valor ['whats up?', 'hello'].

greetings.shift();
//greetings tendrá el valor ['hello'].

//También podemos devolver el valor del elemento eliminado con cualquiera de los dos métodos así:

let popped = greetings.pop();
//greetings tendrá el valor [] y popped tendría el valor hello.

//splice(). splice()
//eliminar cualquier número de elementos consecutivos de cualquier parte de un arreglo.

/*splice() puede tomar hasta 3 parámetros, pero por ahora, nos centraremos sólo en los 2 primeros. Los primeros 
dos parámetros de splice() son enteros que representan índices, o posiciones, de elementos en el arreglo a la que 
splice() está siendo llamado. Y recuerda que los arreglos están indexados en cero, por lo que para indicar el 
primer elemento de un arreglo, usaríamos 0. El primer parámetro de splice() representa el índice del arreglo a 
partir del cual se empiezan a eliminar los elementos, mientras que el segundo parámetro indica el número de 
elementos a eliminar. 
el primer indice se cuenta como a eliminar, por ej splice(2,3), el elemento que esta en el indice 2 sera eliminado junto a los dos 
siguientes.
Por ejemplo:
*/

let array = ['today', 'was', 'not', 'so', 'great'];

array.splice(2, 2);

/*Aquí eliminamos 2 elementos, comenzando con el tercer elemento (en el índice 2). array tendrá el valor 
['today', 'was', 'great'].

splice() no sólo modifica el arreglo que llama, sino que también devuelve un nuevo arreglo que contiene el 
valor de los elementos eliminados:
*/

let arrray = ['I', 'am', 'feeling', 'really', 'happy'];

let newArray = arrray.splice(3, 2);
//newArray tiene el valor ['really', 'happy'].

/*
puedes usar el tercer parámetro del splice(), compuesto por uno o varios elementos, para agregarlo al arreglo. Esto puede ser increíblemente útil para 
cambiar rápidamente un elemento, o un conjunto de elementos, por otro.
*/

const numberss = [10, 11, 12, 12, 15];
const startIndex = 3;
const amountToDelete = 1;

numberss.splice(startIndex, amountToDelete, 13, 14);
console.log(numberss);

//La segunda ocurrencia de 12 es removida, y agregamos 13 y 14 en el mismo índice. El arreglo numbers ahora será 
//[ 10, 11, 12, 13, 14, 15 ].
/*
Aquí, comenzamos con un arreglo de números. A continuación, pasamos lo siguiente a splice(): El índice en el que empezar a borrar 
elementos (3), el número de elementos a borrar (1), y el resto de argumentos (13, 14) se insertarán a partir de ese mismo índice. 
Ten en cuenta que puede haber cualquier número de elementos (separados por comas) después de amountToDelete, cada uno de los cuales es 
insertado.
*/

//slice()
/*
El siguiente método que cubriremos es slice(). En lugar de modificar un arreglo, slice() copia o extrae un número determinado de 
elementos a un nuevo arreglo, dejando intacto el arreglo al que se llama. slice() toma sólo 2 parámetros: el primero es el índice en el 
que se inicia la extracción, y el segundo es el índice en el que se detiene la extracción (la extracción se producirá hasta el índice, 
  pero sin incluir el elemento en este índice). Considera esto:
  */

let weatherConditions = ['rain', 'snow', 'sleet', 'hail', 'clear'];

let todaysWeather = weatherConditions.slice(1, 3);

//todaysWeather tendrá el valor ['snow', 'sleet'], mientras que weatherConditions todavía tendrá 
//['rain', 'snow', 'sleet', 'hail', 'clear'].

//operador de propagacion ...
//permite copiar fácilmente todos los elementos de una arreglo, en orden.

//podemos utilizar el operador de propagación para copiar un arreglo de esta manera:

let thisArray = [true, true, undefined, false, null];
let thatArray = [...thisArray];

//thatArray es igual a [true, true, undefined, false, null]. thisArray permanece sin cambios y thatArray contiene los mismos elementos 
//que thisArray.

/*
Otra gran ventaja del operador de propagación es la capacidad de combinar arreglos, 
o de insertar todos los elementos de un arreglo en otro, en cualquier índice
*/
let thissArray = ['sage', 'rosemary', 'parsley', 'thyme'];

let thattArray = ['basil', 'cilantro', ...thissArray, 'coriander'];

//thatArray tendrá el valor ['basil', 'cilantro', 'sage', 'rosemary', 'parsley', 'thyme', 'coriander'].

/*
indexOf(), que nos permite comprobar rápida y fácilmente la presencia de un elemento en un arreglo. indexOf() toma un elemento como parámetro, y cuando lo llama, devuelve la posición, o índice, de ese elemento, o -1 si el elemento no existe en el arreglo.

Por ejemplo:
*/

let fruits = ['apples', 'pears', 'oranges', 'peaches', 'pears'];

fruits.indexOf('dates');
fruits.indexOf('oranges');
fruits.indexOf('pears');

//indexOf('dates') devuelve -1, indexOf('oranges') devuelve 2, e indexOf('pears') devuelve 1 (el primer índice en el que 
//existe cada elemento).
//recordar que devuelve numeros, no el string. si esta devuelve la posicion en la que esta, si no esta devuelve -1.
//se usa mucho en condicionales para devolver booleanos. if (arr.indexOf(elem)>=0){return true}else{return false}. Tengo que poner
//el 0 porque si no esta sera siempre -1

/*
cuando se trabaja con arreglos, es muy útil poder iterar a través de cada elemento para encontrar uno o más elementos que podamos 
necesitar, o manipular un arreglo en función de los elementos de datos que cumplen un determinado conjunto de criterios. JavaScript 
ofrece varios métodos incorporados que iteran sobre arreglos de formas ligeramente diferentes para conseguir distintos resultados 
(como every(), forEach(), map(), etc.), sin embargo, la técnica que es más flexible y nos ofrece la mayor cantidad de control es un 
simple bucle for.
Considera lo siguiente:
*/

function greaterThanTen(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 10) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

greaterThanTen([2, 12, 8, 14, 80, 0, 1]);

/*Usando un bucle for, esta función itera y accede a cada elemento del arreglo, y lo somete a una simple prueba que hemos creado. 
De esta manera, hemos determinado de forma sencilla y programática qué elementos de datos son mayores que 10, y hemos devuelto un nuevo
 arreglo, [12, 14, 80], que contiene esos elementos.
 */

 //Los arreglos pueden contener, o incluso estar completamente formados por otros arreglos.

  let nestedArray = [
    ['deep'],
    [
      ['deeper'], ['deeper'] 
    ],
    [
      [
        ['deepest'], ['este']
      ],
      [
        [
          ['deepest-est?']
        ]
      ]
    ]
  ];

  /*
  El arreglo deep está anidado a 2 niveles de profundidad. El arreglo deeper está a 3 niveles de profundidad. Los arreglos deepest están 
  anidados a 4 niveles y el arreglo deepest-est? a 5.

Si bien este ejemplo puede parecer complicado, este nivel de complejidad no es desconocido, ni siquiera inusual, cuando se trata de 
grandes cantidades de datos. Sin embargo, todavía podemos acceder muy fácilmente a los niveles más profundos de un arreglo tan complejo 
con notación de corchetes:
*/

console.log(nestedArray[2][1][0][0][0]);
//Esto registra la cadena deepest-est?. Y ahora que sabemos dónde está ese dato, podemos restablecerlo si es necesario:

//nestedArray[2][1][0][0][0] = 'deeper still';

console.log(nestedArray[2][1][0][0][0]);
//Ahora registra deeper still.

console.log (nestedArray[2][0][1])

  /*Hemos definido una variable, myNestedArray, como un arreglo. Modifica myNestedArray, utilizando cualquier combinación de cadenas, 
  números y booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerda que el arreglo 
  más externo es el nivel 1). En algún lugar del tercer nivel, 
  incluye la cadena deep, en el cuarto nivel, incluye la cadena deeper y en el quinto nivel, incluye la cadena deepest.
  */
 
  let myNestedArray = [
 
    ['unshift', false, 1, 2, 3, 'complex', 'nested'],
    [
      ['loop', 'shift', 6], [7, 1000, 'method']
    ],
    [
      ['deep','concat', false, true, 'spread', 'array'],
      [
        ['deeper'],
        ['mutate', 1327.98, 'splice', 'slice', 'push'],
        [
          ['deepest', 'iterate', 1.3849, 7], ['8.4876', 'arbitrary', 'depth']
        ]
      ]
    ]
      

  ];
  
  console.log(myNestedArray[2][1][2][1][1])

/*los objetos no son más que colecciones de pares clave-valor. En otras palabras, son piezas de datos (valores) asignados a 
identificadores únicos llamados propiedades (claves). Mira un ejemplo:
*/

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true
};

/*El código anterior define un objeto de un personaje, tekkenCharacter. Tiene tres propiedades, cada una de 
las cuales se asigna un valor específico. Si se quiere agregar una propiedad adicional, como "origin" (origen), se puede hacer asignando 
origin al objeto:
*/

tekkenCharacter.origin = 'South Korea';

/*Esto usa la notación de puntos. Si observas el objeto tekkenCharacter, ahora incluirá la propiedad origin. Hwoarang también tenía el 
cabello naranja. Puedes agregar esta propiedad con la notación de corchetes:
*/

tekkenCharacter['hair color'] = 'dyed orange';

/*La notación de corchetes es necesaria si tu propiedad tiene un espacio en ella o si se quiere utilizar una variable para nombrar la 
propiedad. En el caso anterior, la propiedad está entre comillas para denotar que es una cadena y se agregará exactamente como se muestra.
Sin las comillas, se evaluará como una variable y el nombre de la propiedad será el valor que tenga la variable. He aquí un ejemplo con 
una variable:
*/

const eyes = 'eye color';

tekkenCharacter[eyes] = 'brown';

//Tras agregar todos los ejemplos, el objeto se verá así:

const tekkenCharacter = {
  player: 'Hwoarang',
  fightingStyle: 'Tae Kwon Doe',
  human: true,
  origin: 'South Korea',
  'hair color': 'dyed orange',
  'eye color': 'brown'
};

//delete
/*
podemos eliminarla utilizando la palabra clave delete de esta manera:
*/
delete foods.apples;

//Evaluar si un objeto tiene una propiedad
/*
dos maneras diferentes de hacerlo. Uno utiliza el método hasOwnProperty() y el otro utiliza la palabra clave in. Si tenemos un objeto users con una propiedad de Alan, podríamos comprobar su presencia de cualquiera de las siguientes maneras:

users.hasOwnProperty('Alan');
'Alan' in users;
Ambos devuelven true.
*/



/*
Termina de escribir la función para que devuelva true si el 
objeto pasado contiene los cuatro nombres, Alan, Jeff, Sarah 
and Ryan y devuelva false en caso contrario.
*/


let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea

  if (userObj.hasOwnProperty ('Alan')&&
      userObj.hasOwnProperty ('Sarah')&&
      userObj.hasOwnProperty ('Jeff')&&
      userObj.hasOwnProperty ('Ryan')){
    return true;
  }else {
    return false;
  }

  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users));

/*
A veces es necesario iterar por todas las claves de un objeto. Esto requiere una sintaxis específica en JavaScript llamada sentencia for...in. Para nuestro objeto users, esto podría verse así:

for (let user in users) {
  console.log(user);
}

Esto registrará Alan, Jeff, Sarah, y Ryan, cada valor en 
su propia línea.

*/

const userss = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Cambia solo el código debajo de esta línea
  let result = 0;
  for (let usuario in usersObj){
    if (usersObj[usuario].online === true){
      result++
    }
  }
  return result
}
  // Cambia solo el código encima de esta línea

console.log(countOnline(userss));
//con 'usuario' lo determino. determino como se va a llamar cada elemento del obj. usersObj[usuario]

/*
podemos generar un arreglo que contenga todas las claves almacenadas en un objeto utilizando el método Object.keys() y pasando 
un objeto como argumento. 
Esto devolverá un arreglo con cadenas que representan cada propiedad del objeto
*/

let usersss = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea
let prop = Object.keys(obj);
return prop
  // Cambia solo el código encima de esta línea
}

console.log(getArrayOfUsers(usersss));

//[ 'Alan', 'Jeff', 'Sarah', 'Ryan' ]

let useer = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};


function addFriend(userObj, friend) {
  // Cambia solo el código debajo de esta línea
  userObj.data.friends.push(friend);
  return useer.data.friends

  // Cambia solo el código encima de esta línea
}

console.log(addFriend(useer, 'Pete'));

//Invierte la cadena proporcionada.

function separarArr (textt){
  let texto=textt.split('').reverse().join('');
  return texto
}

console.log(separarArr('hola'))

// Devuelve el factorial del entero proporcionado.

function factorialize(num) {
  
  for (let i=0; i <= num; i++){
  return i;
  }
  let numero=num*i;
  return numero;
}

factorialize(5);

function factorialize(num) {
  for (let i=0; i<=num; i++){
  if (num === 0){
    return
  }
  return num*i;
  }
}


console.log (factorialize(5));

function factorialize(num) {
  if(num === 0){
    return 1
  }else{
    return  num * factorialize(num-1)
  }
}


console.log (factorialize(5));

//FORM
/*
El método from() toma como entrada un array y devuelve otra matriz. Si proporcionamos una cadena como entrada, 
crea un array con cada carácter de la cadena como un elemento del array. Toma los siguientes parámetros como 
argumentos:
objeto: es el objeto de entrada que se va a convertir en un array.
mapFunction: es un argumento opcional que especifica la función del mapa para llamar a los elementos del array.
thisValue: se utiliza para representar el valor this del objeto en la mapFunction.
console.log(Array.from('delftstack'));
*/

//SPREAD
/*El operador spread desempaqueta los objetos iterables. Repite cualquier objeto iterable y lo expande en su 
lugar. Cuando se usa el operador de propagación en una cadena, obtenemos un array de subcadenas donde cada 
subcadena es un carácter individual de la cadena.
*/

const stTr = 'delftstack';
const arRr = [...stTr];
console.log(arRr);