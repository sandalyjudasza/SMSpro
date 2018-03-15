function init() {
	document.addEventListener("deviceready",onDeviceReady, false);
}

function onDeviceReady() {
    navigator.notification.beep(1);
    navigator.splashscreen.show();
}

function splashScreen() {

navigator.splashscreen.show();
}