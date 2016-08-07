function Telefono (num) {
    var contador = 0;
    this.num = num;
    this.color = "red";
    this.marca = "samsumg"

    this.constructor = function() {
        return this.num + ' ' + this.color + this.marca;
    };
    this.llamar = function(numero){
        return contador = contador + 1;
    }
}


var Galaxy = new Telefono("3311007093");

console.log(Galaxy.llamar("5543111123"));
console.log(Galaxy.llamar("5543111123"));
console.log(Galaxy.llamar("5543111123"));
console.log(Galaxy.llamar("5543111123"));
