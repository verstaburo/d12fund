const $ = window.$;

export function numericFormat(value, thSep, dcSep) {
  const thousandsSep = (!thSep) ? ' ' : thSep;
  const decimalSep = (!dcSep) ? '.' : dcSep;
  const res = value.toString();
  const lZero = (value < 0);
  let fLen = res.lastIndexOf('.');
  fLen = (fLen > -1) ? fLen : res.length;
  let tmpRes = res.substring(fLen);
  let cnt = -1;
  for (let ind = fLen; ind > 0; ind -= 1) {
    cnt += 1;
    if (((cnt % 3) === 0) && (ind !== fLen) && (!lZero || (ind > 1))) {
      tmpRes = thousandsSep + tmpRes;
    }
    tmpRes = res.charAt(ind - 1) + tmpRes;
  }
  return tmpRes.replace('.', decimalSep);
}

export default function updatePrice() {
  // price change imitation
  function strToNumber(str) {
    const price = str.split(' ');
    const floatPart = `.${price[1].split('.')[1]}`;
    const integerPart = price[1].split('.')[0];
    const tmpRes = integerPart.split(',');
    let result = '';
    for (let i = 0; i < tmpRes.length; i += 1) {
      result += tmpRes[i];
    }
    return parseFloat(result + floatPart);
  }

  if ($('.rate').length > 0) {
    setInterval(() => {
      $('.rate__price').each((i, el) => {
        const currentPrice = strToNumber($(el).text());
        const newPrice = currentPrice + Math.round((Math.random() * 10) - (Math.random() * 10), 3);
        if ((newPrice - currentPrice) > 0) {
          if ($(el).siblings('.rate__arrow').hasClass('is-down')) {
            $(el).siblings('.rate__arrow').removeClass('is-down');
          }
          $(el).addClass('animate-up').text(`$ ${numericFormat(newPrice, ',', '.')}`);
          setTimeout(() => {
            $(el).removeClass('animate-up');
          }, 300);
        } else {
          if (!$(el).siblings('.rate__arrow').hasClass('is-down')) {
            $(el).siblings('.rate__arrow').addClass('is-down');
          }
          $(el).addClass('animate-down').text(`$ ${numericFormat(newPrice, ',', '.')}`);
          setTimeout(() => {
            $(el).removeClass('animate-down');
          }, 300);
        }
      });
    }, 1000);
  }
}
