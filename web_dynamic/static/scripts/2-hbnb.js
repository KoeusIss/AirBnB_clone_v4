const $ = window.$;
window.addEventListener('DOMContentLoaded', (event) => {
  $.get('http://0.0.0.0:5001/api/v1/status/', (response) => {
    (response.status === "OK") ? $('DIV#api_status').addClass('available') : $('DIV#api_status').removeClass('available');
  });
  const amenityDict = {};
  $('input[type=checkbox]').change(function () {
    if (this.checked) {
      amenityDict[$(this).attr('data-id')] = $(this).attr('data-name');
    } else {
      delete amenityDict[$(this).attr('data-id')];
    }
    $('.amenities h4').text(Object.values(amenityDict).join(', '));
  });
});
