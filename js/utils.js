window.ben={};
function diff(arr, arr1) {
	var a = [];
	var b = [];
	var r;
	for(var i = 0; i < arr.length; i++) {
		var index = arr1.indexOf(arr[i]);
		if(index != -1) {
			var r = a[i];
			for(var j = index; j < arr1.length; j++) {
				if(arr1[j] == arr[i]) {
					arr1.splice(j, 1);
					j = j - 1;
				}
			}
			for(var k = i + 1; k < arr.length; k++) {
				if(arr[k] == arr[i]) {
					arr.splice(k, 1);
					k = k - 1;
				}
			}
			arr.splice(i, 1);
			i = i - 1;
		}
	}
	return arr.concat(arr1);
}
Date.prototype.format = function(format) {
	var o = {
		"M+": this.getMonth() + 1, //month 
		"d+": this.getDate(), //day 
		"h+": this.getHours() - 8, //hour 
		"m+": this.getMinutes(), //minute 
		"s+": this.getSeconds(), //second 
		"q+": Math.floor((this.getMonth() + 3) / 3), //quarter 
		"S": this.getMilliseconds() //millisecond 
	}

	if(/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
	}

	for(var k in o) {
		if(new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}