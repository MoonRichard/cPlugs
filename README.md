# cPlugs

Tags： JavaScript jQuery

---

>Git: https://github.com/c-Ku/cPlugs

>ReadMe: https://www.zybuluo.com/c-Ku/note/736546

## cAjax (v1.0.1)

Add the following code to your page when using cAjax.
    
```
cAjax({
	method: 'get',      // get || post
	link: 'test.php',
	data: {
		test1: 'test1',
		test2: 'test2'
	},
	success: function (data) {
		console.log('success: ' + data);
	},
	error: function (data) {
		console.log('error: ' + data);
	}
});
```

## cUp (v1.0.1)
Simply using cUp like this.
```
$('#file').cUp()
```




