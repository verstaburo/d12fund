// http://fancyapps.com/fancybox/3/
import '@fancyapps/fancybox';

import { freeze, unfreeze } from '../js-functions/freeze';

const $ = window.$;

export default function popups() {
  $('.js-fancybox').fancybox({
    afterLoad: freeze,
    afterClose: unfreeze,
  });
  $(document).on('click', '.js-open-popup', (evt) => {
    evt.preventDefault();
    const self = $(evt.target).hasClass('.js-open-popup') ? $(evt.target) : $(evt.target).closest('.js-open-popup');
    const targetPopup = $(self).attr('data-popup');
    if ($('.popup.active').not(`#${targetPopup}`).length > 0) {
      $('.popup.active').removeClass('active');
      $(`#${targetPopup}`).addClass('active');
      $('.js-open-popup.active').removeClass('active');
      $(self).addClass('active');
    } else if (!$(`#${targetPopup}`).hasClass('active')) {
      $(`#${targetPopup}`).addClass('active');
      $('.popup-overlay').addClass('active');
      $('.js-open-popup.active').removeClass('active');
      $(self).addClass('active');
    } else {
      $(`#${targetPopup}`).removeClass('active');
      $('.popup-overlay').removeClass('active');
      $('.js-open-popup.active').removeClass('active');
    }
  });
  $(document).on('click', '.popup-overlay', () => {
    $('.popup.active').removeClass('active');
    $('.popup-overlay').removeClass('active');
    $('.js-open-popup.active').removeClass('active');
  });
}
