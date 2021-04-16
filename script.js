WA.onEnterZone('myZone', () => {
WA.sendChatMessage('Hello!', 'Mr Robot');

})

WA.onLeaveZone('myZone', () => {
	WA.sendChatMessage("Goodbye!", 'Mr Robot');
})	