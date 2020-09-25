window.addEventListener('DOMContentLoaded', (event) => {
	let amenityDict = {};
	window.$('input[type=checkbox]').change(function () {
		if (this.checked) {
			amenityDict[$(this).attr("data-id")] = $(this).attr("data-name");
		} else {
			delete amenityDict[$(this).attr("data-id")];
		}
		window.$('.amenities h4').text(Object.values(amenityDict).join(', '))
	})
});
