const $ = window.$;

export default function showPass() {
  $(document).on('click', '.js-show-pass', (evt) => {
    const self = $(evt.target).hasClass('.js-show-pass') ? $(evt.target) : $(evt.target).closest('.js-show-pass');
    const targetInput = $(self).siblings('input');
    if ($(targetInput).is('[type="password"]')) {
      $(targetInput).attr('type', 'text');
    } else {
      $(targetInput).attr('type', 'password');
    }
  });
}
