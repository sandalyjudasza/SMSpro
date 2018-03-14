function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
	navigator.notification.beep(1);
}

function deviceInfo() {

	info =  'Hi, I am your smartphone :-)' + '\n' +
			'===========' + '\n' +
			'Name and surname : KAMIL SZMIT '    + 		'\n' + 
			'Email : 			kamil2000-12@o2.pl	'+	'\n' + 
			'Website  			NONE			 	'+ 	'\n' + 
			'DEANS GRUP NUMBER: 1011' + 				'\n' + 
			'FIELD  :     IT    '	+ 					'\n' + 
			'Device Version : '  + device.version  + '\n';

	navigator.notification.alert(info);
	
}
var app = {
    sendSms: function() {
        var number = document.getElementById('numberTxt').value;
        var message = document.getElementById('messageTxt').value;
        alert(number);
        alert(message);

        //CONFIGURATION
        var options = {
            replaceLineBreaks: false, // true to replace \n by a new line, false by default
            android: {
                intent: 'INTENT'  // send SMS with the native android SMS messaging
                //intent: '' // send SMS without open any other app
            }
        };

        var success = function () { alert('Message sent successfully'); };
        var error = function (e) { alert('Message Failed:' + e); };
        sms.send(number, message, options, success, error);
    }
};