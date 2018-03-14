const $ = window.$;

export default function editAvatar() {
  function readURL(file, elem) {
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        $(elem).siblings('.avatar').find('.avatar__image').attr('src', e.target.result);
      };
      reader.readAsDataURL(file);
    }
  }

  $(document).on('change', '.js-upload input', function () {
    readURL(this.files[0], $(this).closest('.upload'));
  });

  $(document).on('change', '.js-upload-mix input', function () {
    if ($(this).find('.upload__text_light').length > 0) {
      $(this).find('.upload__text_light').remove();
    }
    $(this).closest('.upload').find('.upload__content').append(`<span class="upload__text upload__text_light">${this.files[0].name}</span>`);
  });

  $('.js-upload-mix').on('drag dragstart dragend dragover dragenter dragleave drop', (e) => {
    e.preventDefault();
    e.stopPropagation();
  })
  .on('dragover dragenter', function () {
    $(this).addClass('dragover');
  })
  .on('dragleave dragend drop', function () {
    $(this).removeClass('dragover');
  })
  .on('drop', function (e) {
    const droppedFiles = e.originalEvent.dataTransfer.files;
    if ($(this).find('.upload__text_light').length > 0) {
      $(this).find('.upload__text_light').remove();
      $(this).find('input[type="hidden"]').remove();
    }
    $(this).find('.upload__content').append(`<span class="upload__text upload__text_light">${droppedFiles[0].name}</span>`);
    const tElem = $(this);
    const reader = new FileReader();
    reader.readAsDataURL(droppedFiles[0]);
    reader.onload = function (evt) {
      $(tElem).append(`<input type="hidden" name="file[]" value="${evt.target.result}">`);
    };
  });
}
