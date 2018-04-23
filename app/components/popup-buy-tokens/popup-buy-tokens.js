/* eslint-disable no-unused-vars */
import Choices from 'choices.js';

const $ = window.$;

export default function cryptocurrencyChosen() {
  const choices = new Choices('.js-currency-from', {
    searchEnabled: false,
    itemSelectText: '',
  });

  function choosenCC(opt) {
    choices.setValueByChoice(opt);
  }

  $(document).on('click', '.js-cryptocurrency-select', (evt) => {
    const self = $(evt.target).hasClass('js-cryptocurrency-select') ? $(evt.target) : $(evt.target).closest('.js-cryptocurrency-select');
    const selection = $(self).attr('data-select');
    if (!$(self).is('select')) {
      $(self).closest('.form').find('.js-open-popup').click();
      choosenCC(selection);
    }
  });
  $(document).on('change', '.js-cryptocurrency-select', (evt) => {
    const self = $(evt.target);
    const selection = $(self).val();
    $(self).closest('.form').find('.js-open-popup').click();
    choosenCC(selection);
  });
}
/* eslint-enable no-unused-vars */
