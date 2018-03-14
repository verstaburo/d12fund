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

  $(document).on('change', '.upload input', function () {
    readURL(this.files[0], $(this).closest('.upload'));
  });
}
