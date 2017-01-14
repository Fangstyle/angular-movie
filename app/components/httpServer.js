/**
 * Created by baocheng on 2017/1/14.
 */
'use strict';
(function (angular) {
	angular.module("myApp.service.httpServer",[]).service("HttpServer",["$window","$document",function ($window,$document)
	{
		this.jsonP = function (url,data,callback) {
			var querystring = url.indexOf('?') == -1 ? '?' : '&';
			for (var key in data){
				querystring += key+"="+data[key]+"&";
			}
			var callbackName = "fang_jsonp_"+Math.random().toString().replace(".","");
			querystring+= "callback="+callbackName;
			$window[callbackName] = callback;
			var scriptElement = $document[0].createElement('script');
			scriptElement.src= url+querystring;
			$document[0].body.appendChild(scriptElement);
		}
	}]);
})(angular)
