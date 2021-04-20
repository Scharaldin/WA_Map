WA.onEnterZone('myZone', () => {
WA.sendChatMessage('Hello your Muralboard will open in about two seconds!', 'Pikatchu');
setTimeout(() => WA.openTab('https://app.mural.co/invitation/mural/avanade7180/1616577121346?sender=ua67182cfa5bf2c37d0600807&key=abb5a9f7-b254-47cc-a05e-f562fa87ce1a'), 2500);
});



WA.onLeaveZone('myZone', () => {
	WA.sendChatMessage("Goodbye have a nice day!", 'Pikatchu');
	
});	


let muralPopup;

muralPopup = WA.onEnterZone('popup_zone', () =>{
	WA.openPopup("test", 'Hallo ich bin eine Pflanze und ich habe ein Muralboard für dich!!!', [{
		label: "Zu Mural",
		className: "primary",
		callback: (popup) => {
			WA.openTab('https://app.mural.co/invitation/mural/avanade7180/1616577121346?sender=ua67182cfa5bf2c37d0600807&key=abb5a9f7-b254-47cc-a05e-f562fa87ce1a');
			popup.close();
			}
		},{label: "Schließen",
		className: "warning",
		callback: (popup) => {
			popup.close();
		}
			
		}]);
	});
			
WA.onLeaveZone('popup_zone', () => {
    muralPopup.close();
});			