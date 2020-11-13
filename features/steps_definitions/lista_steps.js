const { Before, Given, When, Then } = require('@cucumber/cucumber')
const expect = require("chai").expect;
const Lista = require("../../src/lista");

let contexto = {};

Given('una lista vacía', function () {
    contexto.lista = new Lista();
});

Given('una lista vacía con los siguientes elementos', function (tabla) {
    contexto.lista = new Lista();
    tabla.rawTable.forEach(pareja => {
        contexto.lista.push(eval(pareja[0]), eval(pareja[1]));
    });
   
});

When('se agrega la pareja {}', function (pareja) {
    pareja = JSON.parse(pareja);
    contexto.lista.push(Object.keys(pareja)[0], Object.values(pareja)[0]);
});

Then('la lista tiene {int} elemento(s) almacenado(s)', function (cantidad) {
    expect(contexto.lista.count()).to.equal(cantidad);
});

