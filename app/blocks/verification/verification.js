const $ = window.$;

// отправка формы
function submitform(formid, button) {
  $(button).attr('disabled', 'disabled');
  $(button).addClass('loading');
  $.ajax({
    url: 'https://echo.htmlacademy.ru', // вписать нужное
    type: 'POST',
    dataType: 'html',
    data: $(`#${formid}`).serialize().concat(`&form=${formid}`),
    success() {
      setTimeout(() => {
        $(button).removeClass('loading');
        $(button).removeAttr('disabled');
        $(`#${formid}`).find('.form__info-message').addClass('success').removeClass('error');
        document.getElementById(formid).reset();
      }, 250);
    },
    error() {
      setTimeout(() => {
        $(button).removeClass('loading');
        $(`#${formid}`).find('.form__error').text('Failed to send form');
        $(`#${formid}`).find('.form__info-message').addClass('error').removeClass('success');
      }, 250);
    },
  });
}

export default function verifyForm() {
  let activeform;
  let formerrors;
  let errormessage;

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
          errormessage.push(`<p> <b>${$(this).parent().siblings('.form__label').text()}</b> : emptie field </p>`);
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
        errormessage.push(`<p><b> ${$(this).closest('.form__wrapper').siblings('.form__label').text()}</b> : emptie field</p>`);
      } else {
        $(this).closest('.form__wrapper').removeClass('error');
      }
    });
  }
  function confirmPassword() {
    if ($('[data-confirm-password]')[0].value.length > 0) {
      if ($('[data-confirm-password]')[0].value.localeCompare($('[data-confirm-password]')[1].value) !== 0) {
        $('[data-confirm-password]').parent().addClass('error');
        errormessage.push('<p> passwords do not match </p>');
      } else {
        $('[data-confirm-password]').parent().removeClass('error');
      }
    } else {
      $('[data-confirm-password]').parent().addClass('error');
      errormessage.push('<p> empty passwords </p>');
    }
  }
  function checkinputs() {
    checkempty();
    if ($(`#${activeform} input[data-type="email"]`).length > 0 && isEmail($(`#${activeform} input[data-type="email"]`).val()) === false) {
      $(`#${activeform} input[data-type="email"]`).parent().addClass('error');
      errormessage.push('<p> Email is empty or incorrect </p>');
    } else {
      $(`#${activeform} input[data-type="email"]`).parent().removeClass('error');
    }
    if ($(`#${activeform} input[type="tel"]`).length > 0 && isTel($(`#${activeform} input[type="tel"]`).val()) === false) {
      $(`#${activeform} input[type="tel"]`).parent().addClass('error');
      errormessage.push('<p> Telephone is empty or incorrect </p>');
    } else {
      $(`#${activeform} input[type="tel"]`).parent().removeClass('error');
    }
  }
  function checkandsubmit(button) {
    formerrors = 0;
    $(`#${activeform}`).find('.error').each(() => {
      formerrors += 1;
    });
    if (formerrors === 0) {
      submitform(activeform, button);
    }
    $(`#${activeform}`).find('.form__error').text(' ');
    $(`#${activeform}`).find('.form__error').append(errormessage.join(' '));
    $(`#${activeform}`).find('.form__info-message').addClass('error').removeClass('success');
  }
  $(document).on('click', '.js-validate', (evt) => {
    evt.preventDefault();
    const self = $(evt.target).hasClass('js-validate') ? $(evt.target) : $(evt.target).closest('.js-validate');
    activeform = $(self).parents('form').attr('id');
    errormessage = [];
    $(`#${activeform}`).find('.form__info-message').removeClass('error').removeClass('success');
    checkinputs();
    checkselects();
    if ($('[data-confirm-password]').length > 0) {
      confirmPassword();
    }
    checkandsubmit(self);
  });
}
