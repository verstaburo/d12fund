const $ = window.$;
const grecaptcha = window.grecaptcha;

export default function verifyForm() {
  let activeform;
  let formerrors;

  function isEmail(email) {
    const regex = /^([a-zA-Z0-9_.+-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,6})+$/;
    return regex.test(email);
  }
  function isTel(tel) {
    const regex = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/;
    return regex.test(tel);
  }
  function checkempty() {
    $(`#${activeform} [required]`).each(function () {
      if (!$(this).attr('data-confirm-password')) {
        if (!$(this).val()) {
          $(this).parent().addClass('error');
        } else {
          $(this).parent().removeClass('error');
        }
      }
    });
  }
  function checkselects() {
    $(`#${activeform} select[required]`).each(function () {
      if (this.value === $(this).attr('placeholder')) {
        $(this).closest('.form__wrapper').addClass('error');
      } else {
        $(this).closest('.form__wrapper').removeClass('error');
      }
    });
  }
  function confirmPassword() {
    let res;
    if ($('[data-confirm-password]').closest('.form__step').hasClass('active')) {
      if ($('[data-confirm-password]')[0].value.length > 0) {
        if ($('[data-confirm-password]')[0].value.localeCompare($('[data-confirm-password]')[1].value) !== 0) {
          $('[data-confirm-password]').parent().addClass('error');
          res = false;
        } else {
          $('[data-confirm-password]').parent().removeClass('error');
          res = true;
        }
      } else {
        $('[data-confirm-password]').parent().addClass('error');
        res = false;
      }
    }
    return res;
  }
  function checkinputs() {
    checkempty();
    if (isEmail($(`#${activeform} input[data-type="email"]`).val()) === false) {
      $(`#${activeform} input[data-type="email"]`).parent().addClass('error');
    } else {
      $(`#${activeform} input[data-type="email"]`).parent().removeClass('error');
    }
    if (isTel($(`#${activeform} input[type="tel"]`).val()) === false) {
      $(`#${activeform} input[type="tel"]`).parent().addClass('error');
    } else {
      $(`#${activeform} input[type="tel"]`).parent().removeClass('error');
    }
  }
  function checkandsubmit(button) {
    formerrors = 0;
    $(`#${activeform}`).find('.error').each(() => {
      formerrors += 1;
    });
    if (activeform === 'form-signup') {
      const currentstep = $(`#${activeform}`).find('.form__step.active').attr('data-step');
      const nexststep = $(button).attr('data-target-step');
      let capcha;
      switch (currentstep) {
        case 'step1':
          if ($(`[data-step="${currentstep}"]`).find('.error').length === 0) {
            $(`[data-step="${currentstep}"]`).removeClass('active');
            $(`[data-step="${nexststep}"]`).addClass('active');
            $(`[data-current-step="${nexststep}"]`).addClass('active');
          }
          break;
        case 'step2':
          if (confirmPassword()) {
            $(`[data-step="${currentstep}"]`).removeClass('active');
            $(`[data-step="${nexststep}"]`).addClass('active');
            $(`[data-current-step="${nexststep}"]`).addClass('active');
          } else {
              // dsaf
          }
          break;
        case 'step3':
          capcha = grecaptcha.getResponse();
          if (capcha.length) {
            $(`[data-step="${currentstep}"]`).removeClass('active');
            $(`[data-step="${nexststep}"]`).addClass('active');
            $('.link-list_steps').fadeOut(400);
          } else {
            grecaptcha.reset();
          }
          break;
        default:
          break;
      }
    } else {
      if (formerrors === 0) {
        console.log('success');
      }
      console.log('errors');
    }
  }
  $(document).on('click', '.js-validate', (evt) => {
    const self = evt.target;
    activeform = $(self).parents('form').attr('id');
    evt.preventDefault();
    checkinputs();
    checkselects();
    checkandsubmit(self);
  });
}
