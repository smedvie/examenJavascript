function dibujar(){

  var tamnio = prompt("Ingresa el tamaño","");
  tamnio = parseInt(tamnio);


for(var i=1; i<= tamnio; i++) {
   var line = "";
          for(var j=1; j<= tamnio; j++) {
                 if(j == 1 || j == tamnio || i == 1 || i == tamnio){
                       line = line + "*  "
                     // process.stdout.write("* ");
                        }else{
                      line = line + "   "
                      }
                      console.log("");
              }
       console.log(line);
   }
}
