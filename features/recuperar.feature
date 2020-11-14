# language: es
# encoding: utf-8

Característica: Recuperar una lista ordenada con las claves

Escenario: Recuperar una lista ordenada de claves
    Dado una lista con los siguientes elementos
    | "cc" | 3 |
    | "aa" | 2 |
    | "bb" | 1 |    
    Cuando se obtiene una lista de claves
    Entonces la lista tiene el orden
    | "aa" |
    | "bb" |
    | "cc" |  