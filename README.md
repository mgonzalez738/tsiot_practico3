# tsiot_practico3
Practico 3 de la materia Testing de Sistemas de Internet de las Cosas

## Característica: Gestionar las parejas almacenadas en la lista

Escenario: Agregar un elemento a una lista vacia
* Dado una lista vacía
* Cuando se agrega la pareja { "clave": "valor" }
* Entonces la lista tiene 1 elemento almacenado

Escenario: Agregar un elemento a una lista con elementos
* Dado una lista con los siguientes elementos\
| "uno"  | 1 |
* Cuando se agrega la pareja { "dos": 2 }
* Entonces la lista tiene 2 elementos almacenados

Escenario: Eliminar un elemento de una lista con elementos
* Dado una lista con los siguientes elementos\
| "uno"  | 1 |\
| "dos"  | 2 |\
| "tres" | 3 |
* Cuando se elimina la clave "dos"
* Entonces la lista tiene 2 elementos almacenados

Escenario: Actualizar el valor de un elemento de una lista con elementos
* Dado una lista con los siguientes elementos\
| "uno"  | 1 |
* Cuando se actualiza la pareja { "uno": 2 }
* Entonces se obtiene el valor "2"

## Característica: Buscar valores en la lista a partir de las claves

Escenario: Buscar un valor en una lista vacía
* Dado una lista vacía
* Cuando se busca la clave "clave"
* Entonces devuelve NaN

Escenario: Lista con un elemento
* Dado una lista con los siguientes elementos\
| "clave" | "valor"|
* Cuando se busca la clave "clave"
* Entonces se obtiene el valor "valor"

Escenario: Buscar una clave que no existe
* Dado una lista con los siguientes elementos\
| "clave" | "valor"|
* Cuando se busca la clave "clave2"
* Entonces devuelve NaN

## Característica: Recuperar una lista ordenada con las claves

Escenario: Recuperar una lista ordenada de claves
* Dado una lista con los siguientes elementos\
| "cc" | 3 |\
| "aa" | 2 |\
| "bb" | 1 |    
* Cuando se obtiene una lista de claves
* Entonces la lista tiene el orden\
| "aa" |\
| "bb" |\
| "cc" |