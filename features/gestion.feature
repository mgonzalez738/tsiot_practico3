# language: es
# encoding: utf-8

Característica: Gestionar las parejas almacenadas en la lista

Escenario: Agregar un elemento a una lista vacia
    Dado una lista vacía
    Cuando se agrega la pareja { "clave": "valor" }
    Entonces la lista tiene 1 elemento almacenado

Escenario: Agregar un elemento a una lista con elementos
    Dado una lista vacía con los siguientes elementos
    | "uno"  | 1 |
    Cuando se agrega la pareja { "dos": 2 }
    Entonces la lista tiene 2 elementos almacenados

