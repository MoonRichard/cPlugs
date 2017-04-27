/**
 * 
 * @authors c-Ku (chyhoosun@gmail.com)
 * @date    2017-04-18 16:34:16
 * 
 */

function cAjax(obj) {
	var date = new Date().getTime(),
		data = cAjaxSer(obj.data);

	try {
		var xhr = new XMLHttpRequest();
	} catch(e) {
		var xhr = new ActiveXObject('Microsoft.XMLHTTP');
	}

	obj.link += obj.method == 'get' ? '?' + data + '&' + date : '';

	xhr.open(obj.method, obj.link, true);

	if (obj.method == 'post') {
		xhr.setRequestHeader("Content-Type",'application/x-www-form-urlencoded');
		xhr.send(data);
	} else {
		xhr.send();
	}

	xhr.onreadystatechange = function () {
		if (xhr.readyState == 4) {
			if (xhr.status == 200) {
				if (obj.success) {
					if (typeof obj.success === 'function') {
						obj.success(xhr.responseText);
						// JSON.parse(xhr.responseText);
					} else {
						alert(xhr.responseText);
					}
				}
			} else {
				if (obj.error) {
					if (typeof obj.error === 'function') {
						obj.error(xhr.status + ' ' + xhr.responseText);
					} else {
						alert(xhr.status + ' ' + xhr.responseText);
					}
				} else {
					alert(xhr.status + ' ' + xhr.responseText);
				}
			}
		}
	};
}

function cAjaxSer(obj) {
	var data = '', num = Object.keys(obj).length, n = 0;
	for (var i in obj) {
		data += i + '=' + obj[i];
		data += ++n < num ? '&' : '';
	}
	return data;
}