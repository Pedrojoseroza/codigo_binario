


let binario = document.getElementById('butao');
let obj = document.getElementById(("mensagem"));
let texto = obj.value;
binario.addEventListener("click", function () {
    binary(obj.value);
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

