// First Task

const firstRow = 'мама мыла раму';
const secondRow = 'собака друг человека';
let anotherText = prompt('Write a letter, please!')
let countFirstRow = 0;
let countSecondRow = 0;


function getRow(firstRow, secondRow) {
  for (let i = 0; i < firstRow.length; i++) {
    if(firstRow.charAt(i) === anotherText){
      countFirstRow++;
    }
    console.log('countFirstRow', countFirstRow);
  }
  for (let i = 0; i < secondRow.length; i++) {
    if(secondRow.charAt(i) === anotherText){
      countSecondRow++;
    }
    console.log('countSecondRow', countSecondRow);
  }

  if(countFirstRow > countSecondRow) {
    return firstRow;
  } else if (countFirstRow < countSecondRow) {
    return secondRow;
  } else {
    return 'The number of letters matches';
  }
}
console.group("First Task");
console.log(getRow(firstRow, secondRow));
console.groupEnd();

// Second Task

let setNumber = '';

function formattedPhone(phone) {
  for (let i = 0; i < phone.length; i++) {
    setNumber = phone.charAt(0) + phone.charAt(1) + '' +
      ` (${phone.charAt(2) + phone.charAt(3) + phone.charAt(4)}) ` +
      phone.charAt(5) + phone.charAt(6) + phone.charAt(7) + '-' +
      phone.charAt(8) + phone.charAt(9) + '-' + phone.charAt(10) + phone.charAt(11);
  }
  return setNumber;
}

console.group("Second Task");
console.log(formattedPhone('+71234567890'));
console.groupEnd();
