document.addEventListener("DOMContentLoaded", ready);

function ready() {
	console.log && console.log('DOM ready');
	
	// 01. directions
	var directionsControlElement = document.getElementById('flex_direction_control');
	var directionsElement = document.getElementById('flex_directions');

	var toggles = directionsControlElement.getElementsByTagName('input');

	for(var i = 0; i< toggles.length; i++) {
		toggles[i].addEventListener('change', function() {
			if(this.checked) {
				directionsElement.style.flexDirection = this.getAttribute('data-propvalue');
			}
		});
	}


	var justifyContentControlElement = document.getElementById('flex_justifycontent_control');
	var justifyContentElement = document.getElementById('flex_directions');

	toggles = justifyContentControlElement.getElementsByTagName('input');

	//TODO for column direction
	// justifyContentElement.style.height = '700px';

	for(var i = 0; i< toggles.length; i++) {
		toggles[i].addEventListener('change', function() {
			if(this.checked) {
				justifyContentElement.style.justifyContent = this.getAttribute('data-propvalue');
			}
		});
	}

	var wrapControlElement = document.getElementById('flex_wrap_control');
	var wrapElement = document.getElementById('flex_directions');

	toggles = wrapControlElement.getElementsByTagName('input');


	for(var i = 0; i< toggles.length; i++) {
		toggles[i].addEventListener('change', function() {
			if(this.checked) {
				
				var val = this.getAttribute('data-propvalue');
				if(val.indexOf('wrap') != -1) {
					wrapElement.style.width = '450px';
				} else {
					wrapElement.style.width = '';
				}
				
				wrapElement.style.flexWrap = this.getAttribute('data-propvalue');
			}
		});
	}

	var alignItemstControlElement = document.getElementById('flex_alignitems_control');
	var alignItemsElement = document.getElementById('flex_directions');

	toggles = alignItemstControlElement.getElementsByTagName('input');

	//TODO for column direction
	// justifyContentElement.style.height = '700px';

	for(var i = 0; i< toggles.length; i++) {
		toggles[i].addEventListener('change', function() {
			if(this.checked) {
				alignItemsElement.style.alignItems = this.getAttribute('data-propvalue');
			}
		});
	}



}


