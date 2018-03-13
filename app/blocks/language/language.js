const $ = window.$;

export default function languageSelect() {
  /* eslint-disable no-unused-vars */
  /* eslint-disable object-shorthand */
  $(document).on('click', '.js-lang-select', (evt) => {
    const self = $(evt.target).hasClass('js-lang-select') ? $(evt.target) : $(evt.target).closest('.js-lang-select');
    const langValue = $(self).attr('data-value').split(',');
    if (langValue[0].length > 0) {
      $('.language').attr('title', langValue[0]);
    }
    if (langValue[1].length > 0) {
      $('.language__image').attr('src', langValue[1]);
    }
    $('.popup.active').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('.js-open-popup.active').removeClass('active');
  });
  /* eslint-enable object-shorthand */
  /* eslint-enable no-unused-vars */
}
