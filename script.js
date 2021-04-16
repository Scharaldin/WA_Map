WA.onEnterZone('myZone', () => {
WA.sendChatMessage('Hello!', 'Pikatchu');
});



WA.onLeaveZone('myZone', () => {
	WA.sendChatMessage("Goodbye!", 'Pikatchu');
	
});	
