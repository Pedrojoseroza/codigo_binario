/*
============================================================
    PARTE DO HEXADECIMAL
=========================================================
*/
let traducao = document.getElementById('traduzir');
traducao.addEventListener("click", function() {
    let hexaNum = document.getElementById('hexadecimal');
    console.log(Number(hexaNum.value));
    brazil(Number(hexaNum.value));
  })
function brazil(num) {
    let hexaExibido = ``;
    let hexadecimal = num;
while (hexadecimal > 1){
    if (hexadecimal % 16 >= 10) {
        switch (hexadecimal % 16) {
            case 10:
                hexaExibido += `A`;
                break;
            case 11:
                hexaExibido += `B`;
                break;
            case 12: 
                hexaExibido += `C`;
            break;
            case 13: 
                hexaExibido += `D`;
            break;
            case 14: 
                hexaExibido += `E`;
            break;
            case 15: 
                hexaExibido += `F`;
            break;
        }
    } else {
        hexaExibido += hexadecimal % 16;
    }
    hexadecimal = Math.floor(hexadecimal / 16);
}
hexaExibido+= hexadecimal;
hexaExibido = hexaExibido.split("").reverse().join("");
resultadoHexa.textContent = hexaExibido;
}