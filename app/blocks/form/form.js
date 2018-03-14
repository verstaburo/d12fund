const $ = window.$;

export function showPass() {
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

export function formStepsSwitcher() {
  $(document).on('click', '.js-next-step', (evt) => {
    evt.preventDefault();
    const self = $(evt.target).hasClass('.js-next-step') ? $(evt.target) : $(evt.target).closest('.js-next-step');
    const nextStep = $(self).attr('data-target-step');
    $('[data-step]').removeClass('active');
    $(`[data-step="${nextStep}"]`).addClass('active');
  });
}
