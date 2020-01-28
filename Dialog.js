(function () {
	"use strict";

	Office.initialize = function (reason) {
		var testName = getParameterByName('test');
		switch(testName) {
			case "emptymessage":
				test_DialogApi_emptyMessageResponse();
				break;
			case "redirectDNE":
				test_DialogApi_redirectDNE();
				break;
			case "redirectHttp":
				test_DialogApi_redirectHttp();
				break;
			case "redirectBing":
				test_DialogApi_redirectBing();
				break;
			case "basic":
			default:
				test_DialogApi_basicTest()
		}
	};
	
	function one()
    {
        Office.context.ui.messageParent("Picked 1");
    }

    function two() {
        Office.context.ui.messageParent("Picked 2");
    }
	function test_DialogApi_emptymessageResponse() {
		Office.context.ui.messageParent("");
	}

	function test_DialogApi_basicTest() {
		Office.context.ui.messageParent("Test message successful");
	}

	function test_DialogApi_redirectDNE() {
		window.location.replace("https://localhost:7010/cannotfindfile.html");
	}

	function test_DialogApi_redirectHttp() {
		window.location.replace("http://localhost:7010/app/home/dialog/dialog.html");
	}

	function test_DialogApi_redirectBing() {
		window.location.replace("http://www.bing.com");
	}

	function getParameterByName(name, url) {
		if (!url) url = window.location.href;
		name = name.replace(/[\[\]]/g, "\\$&");
		var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
				results = regex.exec(url);
		if (!results) return null;
		if (!results[2]) return '';
		return decodeURIComponent(results[2].replace(/\+/g, " "));
	}
})();
