function getNumber(settings) {
  let num

  switch (settings) {
    case(10):
      num =  Math.round(Math.random() * 10)
    // eslint-disable-next-line no-fallthrough
    default:
      num = Math.round(Math.random() * settings * 10) + 1
  }

  return num
}

function getOper(settings) {
  let length = settings.length;

  let rand = 1 + Math.random() * (length + 1 - 1);
  rand = Math.floor(rand);

  let opper = settings[rand - 1];

  return opper;
}

export function getFields(number, opper) {
  const mark = getOper(opper);

  let num1 = getNumber(number);
  let num2 = getNumber(number);

  if(mark == '*') {
    num1 = Math.round(num1 / 2 + 1)
    num2 = Math.round(num2 / 2 + 1)
  }

  return {
    num1,
    num2,
    mark
  }
}