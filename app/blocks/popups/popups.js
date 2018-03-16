const $ = window.$;

export default function popups() {
  $(document).on('click', '.js-open-popup', (evt) => {
    evt.preventDefault();
    const self = $(evt.target).hasClass('.js-open-popup') ? $(evt.target) : $(evt.target).closest('.js-open-popup');
    const targetPopup = $(self).attr('data-popup');
    if ($('.popup.active').not(`#${targetPopup}`).length > 0) {
      $('.popup.active').find('[data-step]').removeClass('active');
      $('.popup.active').find('[data-step="step1"]').addClass('active');
      $('.popup.active').removeClass('active');
      $(`#${targetPopup}`).addClass('active');
      $('.js-open-popup.active').removeClass('active');
      $(self).addClass('active');
    } else if (!$(`#${targetPopup}`).hasClass('active')) {
      $(`#${targetPopup}`).addClass('active');
      $(`#${targetPopup}`).find('[data-step]').removeClass('active');
      $(`#${targetPopup}`).find('[data-step="step1"]').addClass('active');
      $('.popup-overlay').addClass('active');
      $('.js-open-popup.active').removeClass('active');
      $(self).addClass('active');
    } else {
      $(`#${targetPopup}`).removeClass('active');
      $('.popup.active').find('[data-step]').removeClass('active');
      $('.popup.active').find('[data-step="step1"]').addClass('active');
      $('.popup-overlay').removeClass('active');
      $('.js-open-popup.active').removeClass('active');
    }
    $('body, html').stop().animate({
      scrollTop: $('body').offset().top,
    }, 1000, 'swing');
  });
  $(document).on('click', '.popup-overlay, .popup .form__button[type="submit"]', () => {
    $('.popup.active').find('[data-step]').removeClass('active');
    $('.popup.active').find('[data-step="step1"]').addClass('active');
    $('.popup.active').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('.js-open-popup.active').removeClass('active');
  });
}
