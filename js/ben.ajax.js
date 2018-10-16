window.ben.ajax = function(option){
	var ajaxServerUrl = ben.comm.getAjaxServerUrl() + option.ajaxServerUrl;//请求地址
	var data = option.param || {};
	var type = option.type || 'GET';
	var dataType = option.dataType || 'json';
	var timeout = option.timeout || 60000;
	var contentType = option.dataType || 'application/json';
	var onSuccess = option.onSuccess;
	var onException = option.onException;
	var onError = option.onError; 
	var showWaiting = option.showWaiting == false ? false : true; 
	
	if(showWaiting){
		plus.nativeUI.showWaiting();
	}
		
	mui.ajax(ajaxServerUrl, {
		data: JSON.stringify(data),
		type: type,
		dataType: dataType,
		timeout: timeout,
		contentType: contentType,
		success: function(aData) {
			if(showWaiting){
				plus.nativeUI.closeWaiting();
			}
			if(aData != null && aData.Result == 200) {
				if(onSuccess!=null){
					return onSuccess(aData.Data);
				}
			} else {
				mui.toast("获取数据出错");
				if(onException != null) {
					return onException(aData);
				}
				console.log(aData.Description)
			}
		},
		error: function(xhr, type, errorThrown) {
			if(showWaiting){
				plus.nativeUI.closeWaiting();
			}
			mui.toast('网络不佳，请稍后重试');
			if(onError!=null){
				return onError(xhr, type, errorThrown);
			}
			console.log(xhr.responseText)
		}
	});
}
