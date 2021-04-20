let muralPopup;

muralPopup = WA.onEnterZone('popup_zone', () =>{
	WA.openPopup("fenster_1", 'hier gehts zu mural', [{
		label: "Mural",
		className: "primary",
		callback: (fenster_1) => {
			WA.openTab('https://app.mural.co/invitation/mural/avanade7180/1616577121346?sender=ua67182cfa5bf2c37d0600807&key=abb5a9f7-b254-47cc-a05e-f562fa87ce1a');
			fenster_1.close();
			}
		}]);
	});
			
WA.onLeaveZone('popup_zone', () => {
    fenster_1.close();
});			