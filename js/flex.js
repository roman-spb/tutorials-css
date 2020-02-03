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
				wrapElement.style.flexWrap = this.getAttribute('data-propvalue');
			}
		});
	}

	var alignItemsControlElement = document.getElementById('flex_alignitems_control');
	var alignItemsElement = document.getElementById('flex_directions');

	toggles = alignItemsControlElement.getElementsByTagName('input');

	//TODO for column direction
	// justifyContentElement.style.height = '700px';

	for(var i = 0; i< toggles.length; i++) {
		toggles[i].addEventListener('change', function() {
			if(this.checked) {
				alignItemsElement.style.alignItems = this.getAttribute('data-propvalue');
			}
		});
	}


	var alignContentControlElement = document.getElementById('flex_aligncontent_control');
	var alignContentElement = document.getElementById('flex_directions');

	toggles = alignContentControlElement.getElementsByTagName('input');

	for(var i = 0; i< toggles.length; i++) {
		toggles[i].addEventListener('change', function() {
			if(this.checked) {
				alignContentElement.style.alignContent = this.getAttribute('data-propvalue');
			}
		});
	}


}

function targetBox_resetProperties() {
	var tgt = document.getElementById('flex_directions');
	document.getElementById('target_width').style.backgroundColor = '';
	document.getElementById('target_height').style.backgroundColor = '';
	
	document.getElementById('target_width').value = '';
	document.getElementById('target_height').value = '';	
	
	tgt.style.width = '';
	tgt.style.height = '';
}

function  targetBox_setProperties() {
	var w = document.getElementById('target_width').value;
	var h = document.getElementById('target_height').value;

	var tgt = document.getElementById('flex_directions');

	if(!size_valid(w)) {
		document.getElementById('target_width').style.backgroundColor = '#ce5567';
	} else {
		document.getElementById('target_width').style.backgroundColor = '';
		tgt.style.width = w;
	}

	if(!size_valid(h)) {
		document.getElementById('target_height').style.backgroundColor = '#ce5567';
	} else {
		document.getElementById('target_height').style.backgroundColor = '';
		tgt.style.height = h;
	}
}

function size_valid(arg) {
	var proc = arg.trim();
	console.log(arg);
	if(proc === "") return true;
	var res = /^\d+(px)|(em)|%$/i.test(proc);
	return res;
}

