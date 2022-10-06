'use strict'
/*
* No se pueden usar:
! parseInt
! toString
*/
function BinarioADecimal(num) {
 var suma= 0;
 var posicion= 0;
 for (let i = num.length-1; i >=0;  i--) {
suma= suma + num[i]* 2 **posicion;
posicion++
}
return suma; 
}
console.log(BinarioADecimal("110111"));





function DecimalABinario(num) {
    var binario = ''
    while (num > 0) {
      binario = (num % 2) + binario
      num = Math.floor(num / 2)
    }
    return binario;
}

console.log(DecimalABinario(2))
module.exports = {
  BinarioADecimal,
  DecimalABinario,
}