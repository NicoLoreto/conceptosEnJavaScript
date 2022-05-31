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
//case-sensitive= se usa primero minuscula y luego mayuscula# conceptosEnJavaScript

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