/**
 * 
 * @authors c-Ku (chyhoosun@gmail.com)
 * @Weibo	https://weibo.com/345950626
 * @FB		https://www.facebook.com/chyhao.sun
 * @date    2017-04-25 17:14:40
 * 
 */

// 使用方法：
// 直接调用$('元素').cUp();

;(function ($){
	$.fn.cUp = function () {
		var xhr = new XMLHttpRequest();
		xhr.open('post', 'upload.php', true);

		xhr.upload.onprogress = function (ev){
			var scal = ev.loaded / ev.total;
			progress.style.width = scal * 500 + 'px';
			num.innerHTML = Math.round(ev.loaded / ev.total*100) + "%";
		};

		xhr.onload = function (){
			var info = JSON.parse(xhr.responseText);
		};

		// 异步上传二进制文件
		var f = new FormData();
		f.append("file", $(this).files[0]);
		xhr.send(f);
	}
})(jQuery);