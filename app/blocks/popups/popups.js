const $ = window.$;

export default function popups() {
  $(document).on('click', '.js-open-popup', (evt) => {
    evt.preventDefault();
    const self = $(evt.target).hasClass('.js-open-popup') ? $(evt.target) : $(evt.target).closest('.js-open-popup');
    const targetPopup = $(self).attr('data-popup');
    const heightFull = $('.index').height();
    if (targetPopup === 'popup-buy-tokens') {
      $(`#${targetPopup}`).css({ 'min-height': `${heightFull}px` });
    }
    if ($('.popup.active').not(`#${targetPopup}`).length > 0) {
      $('.popup.active').find('[data-step]').removeClass('active');
      $('.popup.active').find('[data-step="step1"]').addClass('active');
      $('.popup.active').removeClass('active');
      $(`#${targetPopup}`).addClass('active');
      $('.js-open-popup.active').removeClass('active');
      $(self).addClass('active');
      $('.js-default-link').removeClass('active');
    } else if (!$(`#${targetPopup}`).hasClass('active')) {
      $(`#${targetPopup}`).addClass('active');
      $(`#${targetPopup}`).find('[data-step]').removeClass('active');
      $(`#${targetPopup}`).find('[data-step="step1"]').addClass('active');
      $('.popup-overlay').addClass('active');
      $('.js-open-popup.active').removeClass('active');
      $(self).addClass('active');
      $('.js-default-link').removeClass('active');
    } else {
      $(`#${targetPopup}`).removeClass('active');
      $('.popup.active').find('[data-step]').removeClass('active');
      $('.popup.active').find('[data-step="step1"]').addClass('active');
      $('.popup-overlay').removeClass('active');
      $('.js-open-popup.active').removeClass('active');
      $('.js-default-link').addClass('active');
    }
    $('body, html').stop().animate({
      scrollTop: $('body').offset().top,
    }, 1000, 'swing');
  });
  $(document).on('click', '.js-open-child', (evt) => {
    evt.preventDefault();
    const self = $(evt.target).hasClass('.js-open-child') ? $(evt.target) : $(evt.target).closest('.js-open-child');
    const targetPopup = $(self).attr('data-popup');
    const parentPopup = $(self).closest('.popup');
    const parentHeight = $(parentPopup).outerHeight();
    $(`#${targetPopup}`).css({ 'min-height': `${parentHeight}px` });
    $(`#${targetPopup}`).addClass('active');
    $('body, html').stop().animate({
      scrollTop: $('body').offset().top,
    }, 1000, 'swing');
  });
  $(document).on('click', '.js-close-child', (evt) => {
    evt.preventDefault();
    const self = $(evt.target).hasClass('.js-close-child') ? $(evt.target) : $(evt.target).closest('.js-close-child');
    $(self).closest('.popup').removeClass('active');
    $(self).closest('.popup').find('.form__info-message').removeClass('error');
    $(self).closest('.popup').find('.form__info-message').removeClass('success');
  });
  $(document).on('click', '.popup-overlay', () => {
    $('.popup.active').find('.form__info-message').removeClass('error');
    $('.popup.active').find('.form__info-message').removeClass('success');
    $('.popup.active').find('[data-step]').removeClass('active');
    $('.popup.active').find('[data-step="step1"]').addClass('active');
    $('.popup.active').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('.js-open-popup.active').removeClass('active');
    $('.js-default-link').addClass('active');
  });
  $(document).on('click', '.js-close-popup, .js-default-link', () => {
    $('.popup.active').find('.form__info-message').removeClass('error');
    $('.popup.active').find('.form__info-message').removeClass('success');
    $('.popup.active').find('[data-step]').removeClass('active');
    $('.popup.active').find('[data-step="step1"]').addClass('active');
    $('.popup.active').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('.js-open-popup.active').removeClass('active');
    $('.js-default-link').addClass('active');
  });
}
