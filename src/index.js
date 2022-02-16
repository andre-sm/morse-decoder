const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    return expr.split('**********').map(word => {
        const arr = [];
        for(let i = 0; i < word.length; i = i + 10) {
            const letters = word.slice(i, i + 10).replace(/^0+/, '');
            function replacePattern(match) {
                return match === '10' ? '.' : '-';
            }
            const morseLetter = letters.replace(/10|11/g, replacePattern);
            const decodedLetter = MORSE_TABLE[morseLetter];
            arr.push(decodedLetter);
        }
        return arr.join('');
    }).join(' ');
}

module.exports = {
    decode
}