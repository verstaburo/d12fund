const $ = window.$;

export default function calculator() {
  function calculate() {
    const rateCurrencyData = $('.js-value-from').attr('data-rate-usd').replace(/'/g, '"');
    const rateCurrency = $.parseJSON(rateCurrencyData);
    const currencyFrom = $('.js-currency-from').val();
    const currencyTo = $('.js-currency-to').val();
    const currencyFromValue = $('.js-value-from');
    const currencyToValue = $('.js-value-to');
    const amount = $(currencyFromValue).val();
    const result = (Number(rateCurrency[currencyFrom]) / Number(rateCurrency[currencyTo])) * amount;
    let resultFormated;
    if (result > 1000000 || result < 0.0001) {
      resultFormated = result.toExponential(4);
    } else {
      resultFormated = result.toFixed(4);
    }
    $(currencyToValue).val(resultFormated);
  }

  $(document).on('input', '.js-value-from', calculate);
  $(document).on('change', '.js-currency-from, .js-currency-to', calculate);
}
