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
  // '10' = '.';
  //  '11' = '-';
  //   **********
    let letterArr = [];
    let arr = [...expr];

// for (let i of arr )
    for(let i =0; i<=arr.length; i=+10) {
//получаем подмасивы будущих символов
      letterArr.push(arr.splice(0, 10));
    }

   let tempArr = letterArr.map((i) =>{ 
       if(i.includes('*')) {
           return '  ';
       } else {
          return  parseInt(i.join('')).toString();
     return  parseInt(i.join(''));

       }
    })
               let newArr = []
    let arrOfArr = tempArr.map((s) => {
  //строки, которые нужно преобразовать в символы
      
         // подмассивы символов
       s = s.split('').filter((el,i)=>(i%2));
     return s.join('');
    })
 let result  = arrOfArr.map( i => {

      const replace_0 = '.';
      const replace_1 = '-';

const result1 = i.replaceAll(0, replace_0);
const result2 = result1.replaceAll(1, replace_1);
      // console.log(result2);
    return result2;
})

  
 let morse_entries = Object.entries(MORSE_TABLE)

     let decoder  = result.map( i => {
         //ищем полученные значения в массиве как ключ о объекте
         for(let key of morse_entries) {
        if(i ===" ") {
             return i; //пробелы
       
         }else if (i ===key[0]) {
              // k= i[1];
             return key[1];
          }
           // console.log(result[k])
       }
         
           })
  return decoder.join('');

}
decode("0011101110000000101100101110100010111010**********000000001100101010100000000010**********001011111000001111110010111010000000101000111011100000000010");
  


module.exports = {
    decode
}