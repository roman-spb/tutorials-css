document.addEventListener("DOMContentLoaded", ready);

function ready() {

	// 01. flex-direction
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

	// 02. justify-content
	var justifyContentControlElement = document.getElementById('flex_justifycontent_control');
	var justifyContentElement = document.getElementById('flex_directions');

	toggles = justifyContentControlElement.getElementsByTagName('input');

	//TODO checkbox to toggle width/height

	for(var i = 0; i< toggles.length; i++) {
		toggles[i].addEventListener('change', function() {
			if(this.checked) {
				justifyContentElement.style.justifyContent = this.getAttribute('data-propvalue');
			}
		});
	}

	// 03. flex-wrap
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

	// 04. align-items

	var alignItemsControlElement = document.getElementById('flex_alignitems_control');
	var alignItemsElement = document.getElementById('flex_directions');

	toggles = alignItemsControlElement.getElementsByTagName('input');

	//TODO checkbox to toggle width/height

	for(var i = 0; i< toggles.length; i++) {
		toggles[i].addEventListener('change', function() {
			if(this.checked) {
				alignItemsElement.style.alignItems = this.getAttribute('data-propvalue');
			}
		});
	}

	// 05. align-content
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


// item subcontrols

var prop = {
	"order" : function(el, val) {
		var tgt = document.getElementById(el);
		if(tgt == null) {
			console.log(tgt + " not exists");
			return;
		} 
		tgt.style.order = val;
	},
	"flex-grow" : function(el, val) {
		var tgt = document.getElementById(el);
		if(tgt == null) {
			console.log(tgt + " not exists");
			return;
		}
		tgt.style.flexGrow = val;
	},
	"flex-shrink" : function(el, val) {
		var tgt = document.getElementById(el);
		if(tgt == null) {
			console.log(tgt + " not exists");
			return;
		}
		tgt.style.flexShrink = val;
	},
	"flex-basis" : function(el, val) {
		var tgt = document.getElementById(el);
		if(tgt == null) {
			console.log(tgt + " not exists");
			return;
		}
		tgt.style.flexBasis = val;
	},
	"align-self" : function(el, val) {
		var tgt = document.getElementById(el);
		if(tgt == null) {
			console.log(tgt + " not exists");
			return;
		}
		tgt.style.alignSelf = val;
	}
}



function apply_values(subcontrolId) {

	var cntl = document.getElementById(subcontrolId);
	if(cntl == null) { 
		alert ('control is null') ;
		return; 
	}
	var propName = cntl.getAttribute('data-propname');
	var idprefix = propName.replace('-', '') + '_';

	var f = prop[propName];
	
	var iterable = cntl.getElementsByTagName('*');
	
	for(var i = 0; i < iterable.length; i++) {
		var curr = iterable[i];
		if(curr.id && curr.id.indexOf(idprefix) === 0) {
			var targetId = "item_" + curr.id.replace(idprefix, '');
			var val = document.getElementById(curr.id).value;
			f(targetId, val);
		}
	}
}

function reset_values(subcontrolId) {
	var cntl = document.getElementById(subcontrolId);
	if(cntl == null) { 
		alert ('control is null') ;
		return; 
	}
	var propName = cntl.getAttribute('data-propname');
	var defaultVal = cntl.getAttribute('data-default');
	var idprefix = propName.replace('-', '') + '_';
	
	var iterable = cntl.getElementsByTagName('*');
	
	for(var i = 0; i < iterable.length; i++) {
		var curr = iterable[i];
		if(curr.id && curr.id.indexOf(idprefix) === 0) {
			document.getElementById(curr.id).value = defaultVal;
		}
	}
}

/* other functions */

function show_hide(targetId) {
	var el = document.getElementById(targetId);
	el.style.display = (el.style.display == 'none') ? 'flex' : 'none';
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
		tgt.style.width = isNaN(w)? w : w + 'px';
	}

	if(!size_valid(h)) {
		document.getElementById('target_height').style.backgroundColor = '#ce5567';
	} else {
		document.getElementById('target_height').style.backgroundColor = '';
		tgt.style.height = isNaN(h)? h : h + 'px';
	}
}

function size_valid(arg) {
	var proc = arg.trim();
	console.log(arg);
	if(proc === "") return true;
	var res = /^\d+((px)|(em)|%)?$/i.test(proc);
	return res;
}

