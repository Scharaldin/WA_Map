WA.onEnterZone('myZone', () => {
WA.sendChatMessage('Hello!', 'Pikatchu');

WA.openPopup("popuparea", 'test', [{
        label: "Close",
        className: "primary",
        callback: (popup) => {
            // Close the popup when the "Close" button is pressed.
            popup.close();
        }
});
}]);



WA.onLeaveZone('myZone', () => {
	WA.sendChatMessage("Goodbye!", 'Pikatchu');
	WA.onLeaveZone('myZone', () => {
    helloWorldPopup.close();
	}
});	