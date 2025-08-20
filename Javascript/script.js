


let binario = document.getElementById('butao');
let obj = document.getElementById(("mensagem"));

binario.addEventListener("click", function () { 
    binary(obj.value);
    
})
let texto = document.getElementById('butao2');
texto.addEventListener("click", function() {
    let result = document.getElementById('resultado').value;
    reverseBinary(result);
    console.log("calma...");
})
function binary(text) {
    let letra = ""
    let numero = 0;
    let mensagemValida = true;
    let exibiçãoFinal = "";
    text = text.split("");
    for (let i = 0; i < text.length; i++) {
        letra = text[i];
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
        if (mensagemValida) {
            let binarioExibido = "";
            let binario = numero;
            while (binario > 1) {
                binarioExibido += binario % 2;
                binario = Math.floor(binario / 2);
            }
            binarioExibido += binario;
            while (binarioExibido.length < 8) {
                binarioExibido += "0";
            }
            binarioExibido = binarioExibido.split("").reverse().join("");
            exibiçãoFinal += binarioExibido;
            exibiçãoFinal += " "
        } else {
            exibiçãoFinal = "INFORME SOMENTE CARACTERES VÁLIDOS!!!"
        }
    }
    resultado.textContent = exibiçãoFinal;
}
function reverseBinary(codigo) {
    codigo = codigo.split(" ");
    if (codigo[codigo.length-1] === ""){
    codigo.splice(-1, 1);
    }
    let num = 0;
    let conteudo = "";
    for (let p = 0; p < codigo.length; p++) {
        let element = codigo[p];
        element = element.split("");
        if (element.length === 8) {
            num = 0;
            for (let q = 0; q < element.length; q++) {
                switch (element[q]) {
                    case "0":
                        num *= 2;
                        break;
                    case "1":
                        num = (num * 2) + 1;
                        break;
                    default:
                        conteudo = "Infromer valores válidos!!!"
                        break;
                }
            }
            switch (num) {
                case 32:
                    conteudo += " ";
                    break;
                case 44:
                    conteudo += ",";
                    break;
                case 48:
                    conteudo += "0";
                    break;
                case 49:
                    conteudo += "1";
                    break;
                case 50:
                    conteudo += "2";
                    break;
                case 51:
                    conteudo += "3";
                    break;
                case 52:
                    conteudo += "4";
                    break;
                case 53:
                    conteudo += "5";
                    break;
                case 54:
                    conteudo += "6";
                    break;
                case 55:
                    conteudo += "7";
                    break;
                case 56:
                    conteudo += "8";
                    break;
                case 57:
                    conteudo += "9";
                    break;
                case 65:
                    conteudo += "A";
                    break;
                case 66:
                    conteudo += "B";
                    break;
                case 67:
                    conteudo += "C";
                    break;
                case 68:
                    conteudo += "D";
                    break;
                case 69:
                    conteudo += "E";
                    break;
                case 70:
                    conteudo += "F";
                    break;
                case 71:
                    conteudo += "G";
                    break;
                case 72:
                    conteudo += "H";
                    break;
                case 73:
                    conteudo += "I";
                    break;
                case 74:
                    conteudo += "J";
                    break;
                case 75:
                    conteudo += "K";
                    break;
                case 76:
                    conteudo += "L";
                    break;
                case 77:
                    conteudo += "M";
                    break;
                case 78:
                    conteudo += "N";
                    break;
                case 79:
                    conteudo += "O";
                    break;
                case 80:
                    conteudo += "P";
                    break;
                case 81:
                    conteudo += "Q";
                    break;
                case 82:
                    conteudo += "R";
                    break;
                case 83:
                    conteudo += "S";
                    break;
                case 84:
                    conteudo += "T";
                    break;
                case 85:
                    conteudo += "U";
                    break;
                case 86:
                    conteudo += "V";
                    break;
                case 87:
                    conteudo += "W";
                    break;
                case 88:
                    conteudo += "X";
                    break;
                case 89:
                    conteudo += "Y";
                    break;
                case 90:
                    conteudo += "Z";
                    break;
                case 97:
                    conteudo += "a";
                    break;
                case 98:
                    conteudo += "b";
                    break;
                case 99:
                    conteudo += "c";
                    break;
                case 100:
                    conteudo += "d";
                    break;
                case 101:
                    conteudo += "e";
                    break;
                case 102:
                    conteudo += "f";
                    break;
                case 103:
                    conteudo += "g";
                    break;
                case 104:
                    conteudo += "h";
                    break;
                case 105:
                    conteudo += "i";
                    break;
                case 106:
                    conteudo += "j";
                    break;
                case 107:
                    conteudo += "k";
                    break;
                case 108:
                    conteudo += "l";
                    break;
                case 109:
                    conteudo += "m";
                    break;
                case 110:
                    conteudo += "n";
                    break;
                case 111:
                    conteudo += "o";
                    break;
                case 112:
                    conteudo += "p";
                    break;
                case 113:
                    conteudo += "q";
                    break;
                case 114:
                    conteudo += "r";
                    break;
                case 115:
                    conteudo += "s";
                    break;
                case 116:
                    conteudo += "t";
                    break;
                case 117:
                    conteudo += "u";
                    break;
                case 118:
                    conteudo += "v";
                    break;
                case 119:
                    conteudo += "w";
                    break;
                case 120:
                    conteudo += "x";
                    break;
                case 121:
                    conteudo += "y";
                    break;
                case 122:
                    conteudo += "z";
                    break;
                default:
                    conteudo = "Infome valores válidos!!!"
                    break;
            }
        } else {
            conteudo = "Informe valores válidos!!!"
        }
    }
    mensagem.textContent = conteudo;
    obj.textContent = conteudo;
}

