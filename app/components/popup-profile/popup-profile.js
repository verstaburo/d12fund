const $ = window.$;

export default function switchTextToEdit() {
  $(document).on('click', '.js-edit-on', (evt) => {
    evt.preventDefault();
    const self = $(evt.target).hasClass('js-edit-on') ? $(evt.target) : $(evt.target).closest('.js-edit-on');
    $(self).siblings('.form__textfield').attr('contenteditable', 'true');
    $(self).siblings('[data-type="email"]').removeAttr('readonly');
    $(self).fadeOut(300);
  });

  $(document).on('keyup', '.form__textfield', (evt) => {
    const self = $(evt.target).hasClass('form__textfield') ? $(evt.target) : $(evt.target).closest('.form__textfield');
    if (evt.keyCode === 13) {
      $(self).find('br').remove();
      $(self).siblings('input[type="hidden"]').val($(self).text());
      $(self).siblings('.js-edit-on').fadeIn();
      $(self).attr('contenteditable', 'false');
    }
  });

  $(document).on('input', '.form__textfield', (evt) => {
    const self = $(evt.target).hasClass('form__textfield') ? $(evt.target) : $(evt.target).closest('.form__textfield');
    $(self).siblings('input[type="hidden"]').val($(self).text());
  });

  $(document).on('keyup', '#form-edit-profile [data-type="email"]', (evt) => {
    const self = $(evt.target);
    if (evt.keyCode === 13) {
      $(self).siblings('.js-edit-on').fadeIn();
      $(self).attr('readonly', 'true');
    }
  });

  $(document).on('focusout', '.form__textfield, #form-edit-profile [data-type="email"]', (evt) => {
    const self = $(evt.target);
    if ($(self).hasClass('form__textfield')) {
      $(self).siblings('input[type="hidden"]').val($(self).text());
      $(self).attr('contenteditable', 'false');
    }

    if ($(self).is('[data-type="email"]')) {
      $(self).attr('readonly', 'true');
    }

    $(self).siblings('.js-edit-on').fadeIn();
  });
}
