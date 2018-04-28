const $ = window.$;

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
    if ($('[data-confirm-password]')[0].value.length > 0) {
      if ($('[data-confirm-password]')[0].value.localeCompare($('[data-confirm-password]')[1].value) !== 0) {
        $('[data-confirm-password]').parent().addClass('error');
      } else {
        $('[data-confirm-password]').parent().removeClass('error');
      }
    } else {
      $('[data-confirm-password]').parent().addClass('error');
    }
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
  function checkandsubmit() {
    formerrors = 0;
    $(`#${activeform}`).find('.error').each(() => {
      formerrors += 1;
    });
    if (formerrors === 0) {
      // Отправка формы
      // $.ajax({
      //   url: 'https://echo.htmlacademy.ru', // вписать нужное
      //   type: 'POST',
      //   dataType: 'html',
      //   data: $(`#${activeform}`).serialize().concat(`&form=${activeform}`),
      //   success(data) {
      //     console.log(data);
      //     console.log('success');
      //   },
      //   error(data) {
      //     console.log(data);
      //     console.log('error');
      //   },
      //   complete(data) {
      //     console.log(data);
      //     console.log('complete');
      //   },
      // });
    }
  }
  $(document).on('click', '.js-validate', (evt) => {
    const self = evt.target;
    activeform = $(self).parents('form').attr('id');
    evt.preventDefault();
    checkinputs();
    checkselects();
    confirmPassword();
    checkandsubmit();
  });
}
