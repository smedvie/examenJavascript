var suma = 0;
var usr = 0;
$( ".total" ).html("");

function sumatoria() {	

  	do {
      	var str = prompt("ingresa un número", "");
      	
      	if(!isNaN(str) && (typeof str != "undefined")) {
      		usr = parseInt(str)
      		suma = suma + usr;
      		$( ".total" ).html(suma);
      	}
  	} while (str != "fin");
  	$( ".total" ).html(suma);


}