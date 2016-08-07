

$( ".arr" ).html("");
$( ".cpi" ).html("");

function copiarArray(array){
var array = [ "Alan", "Mirna", "Ismael", "Sylvia"];
var copia = [];

for ( var i = 0 ; i < array.length ; i++) {
   copia[i] = array[i];
}

$( ".arr" ).html(array);
$( ".cpi" ).html(copia);

console.log(array);
console.log(copia);

return copia;
}

