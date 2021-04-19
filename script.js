WA.onEnterZone('myZone', () => {
WA.sendChatMessage('Hello!', 'Pikatchu');
	WA.openTab('https://www.wikipedia.org/');
});



WA.onLeaveZone('myZone', () => {
	WA.sendChatMessage("Goodbye!", 'Pikatchu');
	
});	
