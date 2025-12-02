


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
    // ---------------------------
    // ASCII 0–31 (controle)
    // ---------------------------
    case "\x00": numero = 0; break;   // NUL
    case "\x01": numero = 1; break;   // SOH
    case "\x02": numero = 2; break;   // STX
    case "\x03": numero = 3; break;   // ETX
    case "\x04": numero = 4; break;   // EOT
    case "\x05": numero = 5; break;   // ENQ
    case "\x06": numero = 6; break;   // ACK
    case "\x07": numero = 7; break;   // BEL
    case "\b":   numero = 8; break;   // BS
    case "\t":   numero = 9; break;   // TAB
    case "\n":   numero = 10; break;  // LF
    case "\x0B": numero = 11; break;  // VT
    case "\x0C": numero = 12; break;  // FF
    case "\r":   numero = 13; break;  // CR
    case "\x0E": numero = 14; break;  // SO
    case "\x0F": numero = 15; break;  // SI
    case "\x10": numero = 16; break;
    case "\x11": numero = 17; break;
    case "\x12": numero = 18; break;
    case "\x13": numero = 19; break;
    case "\x14": numero = 20; break;
    case "\x15": numero = 21; break;
    case "\x16": numero = 22; break;
    case "\x17": numero = 23; break;
    case "\x18": numero = 24; break;
    case "\x19": numero = 25; break;
    case "\x1A": numero = 26; break;
    case "\x1B": numero = 27; break;  // ESC
    case "\x1C": numero = 28; break;
    case "\x1D": numero = 29; break;
    case "\x1E": numero = 30; break;
    case "\x1F": numero = 31; break;

    // ---------------------------
    // Espaço e pontuação
    // ---------------------------
    case " ": numero = 32; break;
    case "!": numero = 33; break;
    case "\"": numero = 34; break;
    case "#": numero = 35; break;
    case "$": numero = 36; break;
    case "%": numero = 37; break;
    case "&": numero = 38; break;
    case "'": numero = 39; break;
    case "(": numero = 40; break;
    case ")": numero = 41; break;
    case "*": numero = 42; break;
    case "+": numero = 43; break;
    case ",": numero = 44; break;
    case "-": numero = 45; break;
    case ".": numero = 46; break;
    case "/": numero = 47; break;

    // ---------------------------
    // 0–9
    // ---------------------------
    case "0": numero = 48; break;
    case "1": numero = 49; break;
    case "2": numero = 50; break;
    case "3": numero = 51; break;
    case "4": numero = 52; break;
    case "5": numero = 53; break;
    case "6": numero = 54; break;
    case "7": numero = 55; break;
    case "8": numero = 56; break;
    case "9": numero = 57; break;

    // ---------------------------
    // Símbolos
    // ---------------------------
    case ":": numero = 58; break;
    case ";": numero = 59; break;
    case "<": numero = 60; break;
    case "=": numero = 61; break;
    case ">": numero = 62; break;
    case "?": numero = 63; break;
    case "@": numero = 64; break;

    // ---------------------------
    // A–Z
    // ---------------------------
    case "A": numero = 65; break;
    case "B": numero = 66; break;
    case "C": numero = 67; break;
    case "D": numero = 68; break;
    case "E": numero = 69; break;
    case "F": numero = 70; break;
    case "G": numero = 71; break;
    case "H": numero = 72; break;
    case "I": numero = 73; break;
    case "J": numero = 74; break;
    case "K": numero = 75; break;
    case "L": numero = 76; break;
    case "M": numero = 77; break;
    case "N": numero = 78; break;
    case "O": numero = 79; break;
    case "P": numero = 80; break;
    case "Q": numero = 81; break;
    case "R": numero = 82; break;
    case "S": numero = 83; break;
    case "T": numero = 84; break;
    case "U": numero = 85; break;
    case "V": numero = 86; break;
    case "W": numero = 87; break;
    case "X": numero = 88; break;
    case "Y": numero = 89; break;
    case "Z": numero = 90; break;

    case "[": numero = 91; break;
    case "\\": numero = 92; break;
    case "]": numero = 93; break;
    case "^": numero = 94; break;
    case "_": numero = 95; break;
    case "`": numero = 96; break;

    // ---------------------------
    // a–z
    // ---------------------------
    case "a": numero = 97; break;
    case "b": numero = 98; break;
    case "c": numero = 99; break;
    case "d": numero = 100; break;
    case "e": numero = 101; break;
    case "f": numero = 102; break;
    case "g": numero = 103; break;
    case "h": numero = 104; break;
    case "i": numero = 105; break;
    case "j": numero = 106; break;
    case "k": numero = 107; break;
    case "l": numero = 108; break;
    case "m": numero = 109; break;
    case "n": numero = 110; break;
    case "o": numero = 111; break;
    case "p": numero = 112; break;
    case "q": numero = 113; break;
    case "r": numero = 114; break;
    case "s": numero = 115; break;
    case "t": numero = 116; break;
    case "u": numero = 117; break;
    case "v": numero = 118; break;
    case "w": numero = 119; break;
    case "x": numero = 120; break;
    case "y": numero = 121; break;
    case "z": numero = 122; break;

    case "{": numero = 123; break;
    case "|": numero = 124; break;
    case "}": numero = 125; break;
    case "~": numero = 126; break;

    // ---------------------------
    // DEL
    // ---------------------------
    case "\x7F": numero = 127; break;
        // ---------------------------
    // 128–159 (Windows-1252 especiais)
    // ---------------------------
    case "€": numero = 128; break;     // Euro Sign
    case "\x81": numero = 129; break;
    case "‚": numero = 130; break;     // Single Low-9 Quotation Mark
    case "ƒ": numero = 131; break;     // Latin Small Letter F With Hook
    case "„": numero = 132; break;     // Double Low-9 Quotation Mark
    case "…": numero = 133; break;     // Ellipsis
    case "†": numero = 134; break;     // Dagger
    case "‡": numero = 135; break;     // Double Dagger
    case "ˆ": numero = 136; break;     // Modifier Letter Circumflex
    case "‰": numero = 137; break;     // Per Mille Sign
    case "Š": numero = 138; break;     // S caron
    case "‹": numero = 139; break;     // Single Left Angle Quote
    case "Œ": numero = 140; break;     // OE ligature
    case "\x8D": numero = 141; break;
    case "Ž": numero = 142; break;     // Z caron
    case "\x8F": numero = 143; break;

    case "\x90": numero = 144; break;
    case "‘": numero = 145; break;     // Left single quote
    case "’": numero = 146; break;     // Right single quote
    case "“": numero = 147; break;     // Left double quote
    case "”": numero = 148; break;     // Right double quote
    case "•": numero = 149; break;     // Bullet
    case "–": numero = 150; break;     // En-dash
    case "—": numero = 151; break;     // Em-dash
    case "˜": numero = 152; break;     // Small tilde
    case "™": numero = 153; break;     // TM symbol
    case "š": numero = 154; break;     // s caron
    case "›": numero = 155; break;     // Single Right Angle Quote
    case "œ": numero = 156; break;     // oe ligature
    case "\x9D": numero = 157; break;
    case "ž": numero = 158; break;     // z caron
    case "Ÿ": numero = 159; break;

    // ---------------------------
    // 160–191 (espaços e símbolos)
    // ---------------------------
    case " ": numero = 160; break;     // Non-breaking space
    case "¡": numero = 161; break;
    case "¢": numero = 162; break;
    case "£": numero = 163; break;
    case "¤": numero = 164; break;
    case "¥": numero = 165; break;
    case "¦": numero = 166; break;
    case "§": numero = 167; break;
    case "¨": numero = 168; break;
    case "©": numero = 169; break;
    case "ª": numero = 170; break;
    case "«": numero = 171; break;
    case "¬": numero = 172; break;
    case "­": numero = 173; break;     // Soft hyphen
    case "®": numero = 174; break;
    case "¯": numero = 175; break;

    case "°": numero = 176; break;
    case "±": numero = 177; break;
    case "²": numero = 178; break;
    case "³": numero = 179; break;
    case "´": numero = 180; break;
    case "µ": numero = 181; break;
    case "¶": numero = 182; break;
    case "·": numero = 183; break;
    case "¸": numero = 184; break;
    case "¹": numero = 185; break;
    case "º": numero = 186; break;
    case "»": numero = 187; break;
    case "¼": numero = 188; break;
    case "½": numero = 189; break;
    case "¾": numero = 190; break;
    case "¿": numero = 191; break;

    // ---------------------------
    // 192–223 (Letras maiúsculas acentuadas)
    // ---------------------------
    case "À": numero = 192; break;
    case "Á": numero = 193; break;
    case "Â": numero = 194; break;
    case "Ã": numero = 195; break;
    case "Ä": numero = 196; break;
    case "Å": numero = 197; break;
    case "Æ": numero = 198; break;
    case "Ç": numero = 199; break;
    case "È": numero = 200; break;
    case "É": numero = 201; break;
    case "Ê": numero = 202; break;
    case "Ë": numero = 203; break;
    case "Ì": numero = 204; break;
    case "Í": numero = 205; break;
    case "Î": numero = 206; break;
    case "Ï": numero = 207; break;

    case "Ð": numero = 208; break;
    case "Ñ": numero = 209; break;
    case "Ò": numero = 210; break;
    case "Ó": numero = 211; break;
    case "Ô": numero = 212; break;
    case "Õ": numero = 213; break;
    case "Ö": numero = 214; break;
    case "×": numero = 215; break;
    case "Ø": numero = 216; break;
    case "Ù": numero = 217; break;
    case "Ú": numero = 218; break;
    case "Û": numero = 219; break;
    case "Ü": numero = 220; break;
    case "Ý": numero = 221; break;
    case "Þ": numero = 222; break;
    case "ß": numero = 223; break;

    // ---------------------------
    // 224–255 (Letras minúsculas acentuadas)
    // ---------------------------
    case "à": numero = 224; break;
    case "á": numero = 225; break;
    case "â": numero = 226; break;
    case "ã": numero = 227; break;
    case "ä": numero = 228; break;
    case "å": numero = 229; break;
    case "æ": numero = 230; break;
    case "ç": numero = 231; break;
    case "è": numero = 232; break;
    case "é": numero = 233; break;
    case "ê": numero = 234; break;
    case "ë": numero = 235; break;
    case "ì": numero = 236; break;
    case "í": numero = 237; break;
    case "î": numero = 238; break;
    case "ï": numero = 239; break;

    case "ð": numero = 240; break;
    case "ñ": numero = 241; break;
    case "ò": numero = 242; break;
    case "ó": numero = 243; break;
    case "ô": numero = 244; break;
    case "õ": numero = 245; break;
    case "ö": numero = 246; break;
    case "÷": numero = 247; break;
    case "ø": numero = 248; break;
    case "ù": numero = 249; break;
    case "ú": numero = 250; break;
    case "û": numero = 251; break;
    case "ü": numero = 252; break;
    case "ý": numero = 253; break;
    case "þ": numero = 254; break;
    case "ÿ": numero = 255; break;

    // ---------------------------
    // Default
    // ---------------------------
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
        for (let numeral of element) {
            if (numeral == 0) {
                num *= 2;
            } else if (numeral == 1) {
                num = num * 2 + 1;
            } else {
                dadoValido = false;
                break;
            }    
        }
        switch (num) {
    // ASCII 0–31 (controle)
    case 0: palavra += "\x00"; break;
    case 1: palavra += "\x01"; break;
    case 2: palavra += "\x02"; break;
    case 3: palavra += "\x03"; break;
    case 4: palavra += "\x04"; break;
    case 5: palavra += "\x05"; break;
    case 6: palavra += "\x06"; break;
    case 7: palavra += "\x07"; break;
    case 8: palavra += "\b"; break;
    case 9: palavra += "\t"; break;
    case 10: palavra += "\n"; break;
    case 11: palavra += "\x0B"; break;
    case 12: palavra += "\x0C"; break;
    case 13: palavra += "\r"; break;
    case 14: palavra += "\x0E"; break;
    case 15: palavra += "\x0F"; break;
    case 16: palavra += "\x10"; break;
    case 17: palavra += "\x11"; break;
    case 18: palavra += "\x12"; break;
    case 19: palavra += "\x13"; break;
    case 20: palavra += "\x14"; break;
    case 21: palavra += "\x15"; break;
    case 22: palavra += "\x16"; break;
    case 23: palavra += "\x17"; break;
    case 24: palavra += "\x18"; break;
    case 25: palavra += "\x19"; break;
    case 26: palavra += "\x1A"; break;
    case 27: palavra += "\x1B"; break;
    case 28: palavra += "\x1C"; break;
    case 29: palavra += "\x1D"; break;
    case 30: palavra += "\x1E"; break;
    case 31: palavra += "\x1F"; break;

    // ASCII 32–47 (símbolos)
    case 32: palavra += " "; break;
    case 33: palavra += "!"; break;
    case 34: palavra += "\""; break;
    case 35: palavra += "#"; break;
    case 36: palavra += "$"; break;
    case 37: palavra += "%"; break;
    case 38: palavra += "&"; break;
    case 39: palavra += "'"; break;
    case 40: palavra += "("; break;
    case 41: palavra += ")"; break;
    case 42: palavra += "*"; break;
    case 43: palavra += "+"; break;
    case 44: palavra += ","; break;
    case 45: palavra += "-"; break;
    case 46: palavra += "."; break;
    case 47: palavra += "/"; break;

    // 48–57 (números)
    case 48: palavra += "0"; break;
    case 49: palavra += "1"; break;
    case 50: palavra += "2"; break;
    case 51: palavra += "3"; break;
    case 52: palavra += "4"; break;
    case 53: palavra += "5"; break;
    case 54: palavra += "6"; break;
    case 55: palavra += "7"; break;
    case 56: palavra += "8"; break;
    case 57: palavra += "9"; break;

    // 58–64
    case 58: palavra += ":"; break;
    case 59: palavra += ";"; break;
    case 60: palavra += "<"; break;
    case 61: palavra += "="; break;
    case 62: palavra += ">"; break;
    case 63: palavra += "?"; break;
    case 64: palavra += "@"; break;

    // A–Z
    case 65: palavra += "A"; break;
    case 66: palavra += "B"; break;
    case 67: palavra += "C"; break;
    case 68: palavra += "D"; break;
    case 69: palavra += "E"; break;
    case 70: palavra += "F"; break;
    case 71: palavra += "G"; break;
    case 72: palavra += "H"; break;
    case 73: palavra += "I"; break;
    case 74: palavra += "J"; break;
    case 75: palavra += "K"; break;
    case 76: palavra += "L"; break;
    case 77: palavra += "M"; break;
    case 78: palavra += "N"; break;
    case 79: palavra += "O"; break;
    case 80: palavra += "P"; break;
    case 81: palavra += "Q"; break;
    case 82: palavra += "R"; break;
    case 83: palavra += "S"; break;
    case 84: palavra += "T"; break;
    case 85: palavra += "U"; break;
    case 86: palavra += "V"; break;
    case 87: palavra += "W"; break;
    case 88: palavra += "X"; break;
    case 89: palavra += "Y"; break;
    case 90: palavra += "Z"; break;

    // ASCII 91–96
    case 91: palavra += "["; break;
    case 92: palavra += "\\"; break;
    case 93: palavra += "]"; break;
    case 94: palavra += "^"; break;
    case 95: palavra += "_"; break;
    case 96: palavra += "`"; break;

    // a–z
    case 97: palavra += "a"; break;
    case 98: palavra += "b"; break;
    case 99: palavra += "c"; break;
    case 100: palavra += "d"; break;
    case 101: palavra += "e"; break;
    case 102: palavra += "f"; break;
    case 103: palavra += "g"; break;
    case 104: palavra += "h"; break;
    case 105: palavra += "i"; break;
    case 106: palavra += "j"; break;
    case 107: palavra += "k"; break;
    case 108: palavra += "l"; break;
    case 109: palavra += "m"; break;
    case 110: palavra += "n"; break;
    case 111: palavra += "o"; break;
    case 112: palavra += "p"; break;
    case 113: palavra += "q"; break;
    case 114: palavra += "r"; break;
    case 115: palavra += "s"; break;
    case 116: palavra += "t"; break;
    case 117: palavra += "u"; break;
    case 118: palavra += "v"; break;
    case 119: palavra += "w"; break;
    case 120: palavra += "x"; break;
    case 121: palavra += "y"; break;
    case 122: palavra += "z"; break;

    // 123–127
    case 123: palavra += "{"; break;
    case 124: palavra += "|"; break;
    case 125: palavra += "}"; break;
    case 126: palavra += "~"; break;
    case 127: palavra += "\x7F"; break;

    // -----------------------------
    // LATIN-1 / Windows-1252 (128–159)
    // -----------------------------
    case 128: palavra += "€"; break;
    case 129: palavra += "\x81"; break;
    case 130: palavra += "‚"; break;
    case 131: palavra += "ƒ"; break;
    case 132: palavra += "„"; break;
    case 133: palavra += "…"; break;
    case 134: palavra += "†"; break;
    case 135: palavra += "‡"; break;
    case 136: palavra += "ˆ"; break;
    case 137: palavra += "‰"; break;
    case 138: palavra += "Š"; break;
    case 139: palavra += "‹"; break;
    case 140: palavra += "Œ"; break;
    case 141: palavra += "\x8D"; break;
    case 142: palavra += "Ž"; break;
    case 143: palavra += "\x8F"; break;

    case 144: palavra += "\x90"; break;
    case 145: palavra += "‘"; break;
    case 146: palavra += "’"; break;
    case 147: palavra += "“"; break;
    case 148: palavra += "”"; break;
    case 149: palavra += "•"; break;
    case 150: palavra += "–"; break;
    case 151: palavra += "—"; break;
    case 152: palavra += "˜"; break;
    case 153: palavra += "™"; break;
    case 154: palavra += "š"; break;
    case 155: palavra += "›"; break;
    case 156: palavra += "œ"; break;
    case 157: palavra += "\x9D"; break;
    case 158: palavra += "ž"; break;
    case 159: palavra += "Ÿ"; break;

    // -----------------------------
    // LATIN-1 160–191
    // -----------------------------
    case 160: palavra += " "; break;
    case 161: palavra += "¡"; break;
    case 162: palavra += "¢"; break;
    case 163: palavra += "£"; break;
    case 164: palavra += "¤"; break;
    case 165: palavra += "¥"; break;
    case 166: palavra += "¦"; break;
    case 167: palavra += "§"; break;
    case 168: palavra += "¨"; break;
    case 169: palavra += "©"; break;
    case 170: palavra += "ª"; break;
    case 171: palavra += "«"; break;
    case 172: palavra += "¬"; break;
    case 173: palavra += "­"; break;
    case 174: palavra += "®"; break;
    case 175: palavra += "¯"; break;
    case 176: palavra += "°"; break;
    case 177: palavra += "±"; break;
    case 178: palavra += "²"; break;
    case 179: palavra += "³"; break;
    case 180: palavra += "´"; break;
    case 181: palavra += "µ"; break;
    case 182: palavra += "¶"; break;
    case 183: palavra += "·"; break;
    case 184: palavra += "¸"; break;
    case 185: palavra += "¹"; break;
    case 186: palavra += "º"; break;
    case 187: palavra += "»"; break;
    case 188: palavra += "¼"; break;
    case 189: palavra += "½"; break;
    case 190: palavra += "¾"; break;
    case 191: palavra += "¿"; break;

    // -----------------------------
    // LATIN-1 192–255
    // -----------------------------
    case 192: palavra += "À"; break;
    case 193: palavra += "Á"; break;
    case 194: palavra += "Â"; break;
    case 195: palavra += "Ã"; break;
    case 196: palavra += "Ä"; break;
    case 197: palavra += "Å"; break;
    case 198: palavra += "Æ"; break;
    case 199: palavra += "Ç"; break;
    case 200: palavra += "È"; break;
    case 201: palavra += "É"; break;
    case 202: palavra += "Ê"; break;
    case 203: palavra += "Ë"; break;
    case 204: palavra += "Ì"; break;
    case 205: palavra += "Í"; break;
    case 206: palavra += "Î"; break;
    case 207: palavra += "Ï"; break;
    case 208: palavra += "Ð"; break;
    case 209: palavra += "Ñ"; break;
    case 210: palavra += "Ò"; break;
    case 211: palavra += "Ó"; break;
    case 212: palavra += "Ô"; break;
    case 213: palavra += "Õ"; break;
    case 214: palavra += "Ö"; break;
    case 215: palavra += "×"; break;
    case 216: palavra += "Ø"; break;
    case 217: palavra += "Ù"; break;
    case 218: palavra += "Ú"; break;
    case 219: palavra += "Û"; break;
    case 220: palavra += "Ü"; break;
    case 221: palavra += "Ý"; break;
    case 222: palavra += "Þ"; break;
    case 223: palavra += "ß"; break;
    case 224: palavra += "à"; break;
    case 225: palavra += "á"; break;
    case 226: palavra += "â"; break;
    case 227: palavra += "ã"; break;
    case 228: palavra += "ä"; break;
    case 229: palavra += "å"; break;
    case 230: palavra += "æ"; break;
    case 231: palavra += "ç"; break;
    case 232: palavra += "è"; break;
    case 233: palavra += "é"; break;
    case 234: palavra += "ê"; break;
    case 235: palavra += "ë"; break;
    case 236: palavra += "ì"; break;
    case 237: palavra += "í"; break;
    case 238: palavra += "î"; break;
    case 239: palavra += "ï"; break;
    case 240: palavra += "ð"; break;
    case 241: palavra += "ñ"; break;
    case 242: palavra += "ò"; break;
    case 243: palavra += "ó"; break;
    case 244: palavra += "ô"; break;
    case 245: palavra += "õ"; break;
    case 246: palavra += "ö"; break;
    case 247: palavra += "÷"; break;
    case 248: palavra += "ø"; break;
    case 249: palavra += "ù"; break;
    case 250: palavra += "ú"; break;
    case 251: palavra += "û"; break;
    case 252: palavra += "ü"; break;
    case 253: palavra += "ý"; break;
    case 254: palavra += "þ"; break;
    case 255: palavra += "ÿ"; break;
}
        exibeTexto += palavra;
    }
    if (dadoValido) {
        binary.value = "";
        text.value = exibeTexto;
    } else {
        binary.value = "";
        text.value = "Informe dados válidos!";
    }
}

