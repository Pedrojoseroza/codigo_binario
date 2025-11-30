


let binario = document.getElementById('butao');
let texto = document.getElementById('butao2');

let text = document.getElementById(("texto"));
binario.addEventListener("click", function () { 
    text = document.getElementById(("texto"));    
    changeToBinary(text.value);
    
})
let binary = document.getElementById('binario');

texto.addEventListener("click", function() {
    binary = document.getElementById('binario');
    reverseBinary(binary.value);
})
function changeToBinary(message) {
    message = message.split("");
    let mensagemValida = true;
    let exibeBinario = "";
    for (const letra of message) {
        let arrayBinario = [];
        let numero = 0;
        switch (letra) {
            case " ":
                numero = 32;
                break;
            case ",":
                numero = 44;
                break;
            case 0:
                numero = 48;
                break;
            case 1:
                numero = 49;
                break;
            case 2:
                numero = 50;
                break;
            case 3:
                numero = 51;
                break;
            case 4:
                numero = 52;
                break;
            case 5:
                numero = 53;
                break;
            case 6:
                numero = 54;
                break;
            case 7:
                numero = 55;
                break;
            case 8:
                numero = 56;
                break;
            case 9:
                numero = 57;
                break;
            case "A":
            case "Á":
            case "Ã":
            case "Â":
                numero = 65;
                break;
            case "B":
                numero = 66;
                break;
            case "C":
                numero = 67;
                break;
            case "D":
                numero = 68;
                break;
            case "E":
            case "Ê":
            case "É":
                numero = 69;
                break;
            case "F":
                numero = 70;
                break;
            case "G":
                numero = 71;
                break;
            case "H":
                numero = 72;
                break;
            case "I":
                numero = 73;
                break;
            case "J":
                numero = 74;
                break;
            case "K":
                numero = 75;
                break;
            case "L":
                numero = 76;
                break;
            case "M":
                numero = 77;
                break;
            case "N":
                numero = 78;
                break;
            case "O":
            case "Ô":
            case "Õ":
                numero = 79;
                break;
            case "P":
                numero = 80;
                break;
            case "Q":
                numero = 81;
                break;
            case "R":
                numero = 82;
                break;
            case "S":
                numero = 83;
                break;
            case "T":
                numero = 84;
                break;
            case "U":
                numero = 85;
                break;
            case "V":
                numero = 86;
                break;
            case "W":
                numero = 87;
                break;
            case "X":
                numero = 88;
                break;
            case "Y":
                numero = 89;
                break;
            case "Z":
                numero = 90;
                break;
            case "a":
            case "á":
            case "ã":
                numero = 97;
                break;
            case "b":
                numero = 98;
                break;
            case "c":
                numero = 99;
                break;
            case "d":
                numero = 100;
                break;
            case "e":
            case "é":
            case "ê":
                numero = 101;
                break;
            case "f":
                numero = 102;
                break;
            case "g":
                numero = 103;
                break;
            case "h":
                numero = 104;
                break;
            case "i":
                numero = 105;
                break;
            case "j":
                numero = 106;
                break;
            case "k":
                numero = 107;
                break;
            case "l":
                numero = 108;
                break;
            case "m":
                numero = 109;
                break;
            case "n":
                numero = 110;
                break;
            case "o":
            case "ó":
            case "õ":
            case "ô":
                numero = 111;
                break;
            case "p":
                numero = 112;
                break;
            case "q":
                numero = 113;
                break;
            case "r":
                numero = 114;
                break;
            case "s":
                numero = 115;
                break;
            case "t":
                numero = 116;
                break;
            case "u":
                numero = 117;
                break;
            case "v":
                numero = 118;
                break;
            case "w":
                numero = 119;
                break;
            case "x":
                numero = 120;
                break;
            case "y":
                numero = 121;
                break;
            case "z":
                numero = 122;
                break;
            default:
                mensagemValida = false;
                break;
        }
        while (numero >= 1) {
            if (numero % 2 == 0) {
                arrayBinario.unshift("0");
            } else {
                arrayBinario.unshift("1");
            }
            numero = Math.floor(numero / 2);
            //Atribui ao contrário nos caracteres
        }
        while (arrayBinario.length % 8 !== 0) {
            arrayBinario.unshift("0");
        }
        exibeBinario += arrayBinario.join("");
        exibeBinario += " ";
    }
    if (mensagemValida) {
        text.value = ""
        binary.value = exibeBinario;
    } else {
        binary.innerHTML = "INFORME SOMENTE CARACTERES VÁLIDOS!";
    }
}
function reverseBinary(codigo) {
    codigo = codigo.trimRight();
    codigo = codigo.split(" ");
    let exibeTexto = "";
    let dadoValido = true;
    for (let element of codigo) {
        let num = 0;
        let palavra = "";
        element = element.split("");
        for (let 
            numeral of element) {
            if (numeral == 0) {
                num *= 2;
            } else if (numeral == 1) {
                num = num * 2 + 1;
            }    
        }
        switch (num) {
            case 32:
                palavra += " ";
                break;
            case 44:
                palavra += ",";
                break;
            case 48:
                palavra += "0";
                break;
            case 49:
                palavra += "1";
                break;
            case 50:
                palavra += "2";
                break;
            case 51:
                palavra += "3";
                break;
            case 52:
                palavra += "4";
                break;
            case 53:
                palavra += "5";
                break;
            case 54:
                palavra += "6";
                break;
            case 55:
                palavra += "7";
                break;
            case 56:
                palavra += "8";
                break;
            case 57:
                palavra += "9";
                break;
            case 65:
                palavra += "A";
                break;
            case 66:
                palavra += "B";
                break;
            case 67:
                palavra += "C";
                break;
            case 68:
                palavra += "D";
                break;
            case 69:
                palavra += "E";
                break;
            case 70:
                palavra += "F";
                break;
            case 71:
                palavra += "G";
                break;
            case 72:
                palavra += "H";
                break;
            case 73:
                palavra += "I";
                break;
            case 74:
                palavra += "J";
                break;
            case 75:
                palavra += "K";
                break;
            case 76:
                palavra += "L";
                break;
            case 77:
                palavra += "M";
                break;
            case 78:
                palavra += "N";
                break;
            case 79:
                palavra += "O";
                break;
            case 80:
                palavra += "P";
                break;
            case 81:
                palavra += "Q";
                break;
            case 82:
                palavra += "R";
                break;
            case 83:
                palavra += "S";
                break;
            case 84:
                palavra += "T";
                break;
            case 85:
                palavra += "U";
                break;
            case 86:
                palavra += "V";
                break;
            case 87:
                palavra += "W";
                break;
            case 88:
                palavra += "X";
                break;
            case 89:
                palavra += "Y";
                break;
            case 90:
                palavra += "Z";
                break;
            case 97:
                palavra += "a";
                break;
            case 98:
                palavra += "b";
                break;
            case 99:
                palavra += "c";
                break;
            case 100:
                palavra += "d";
                break;
            case 101:
                palavra += "e";
                break;
            case 102:
                palavra += "f";
                break;
            case 103:
                palavra += "g";
                break;
            case 104:
                palavra += "h";
                break;
            case 105:
                palavra += "i";
                break;
            case 106:
                palavra += "j";
                break;
            case 107:
                palavra += "k";
                break;
            case 108:
                palavra += "l";
                break;
            case 109:
                palavra += "m";
                break;
            case 110:
                palavra += "n";
                break;
            case 111:
                palavra += "o";
                break;
            case 112:
                palavra += "p";
                break;
            case 113:
                palavra += "q";
                break;
            case 114:
                palavra += "r";
                break;
            case 115:
                palavra += "s";
                break;
            case 116:
                palavra += "t";
                break;
            case 117:
                palavra += "u";
                break;
            case 118:
                palavra += "v";
                break;
            case 119:
                palavra += "w";
                break;
            case 120:
                palavra += "x";
                break;
            case 121:
                palavra += "y";
                break;
            case 122:
                palavra += "z";
                break;
            default:
                dadoValido = false;
                break;
        }
        exibeTexto += palavra;
    }
    if (dadoValido) {
        binary.value = "";
        text.value = exibeTexto;
    } else {
        text.innerHTML = "Informe dados válidos!";
    }
}

