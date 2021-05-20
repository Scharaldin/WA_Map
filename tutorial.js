var zoneTutorialStart = "zone_tutorialStart";
var zoneComms = "zone_tutorialComms";
var commsPDF = '';

WA.onEnterZone(zoneTutorialStart,() => {
	currentPopup = WA.openPopup("popup_tutorialStart",'Is it your first time on Workadventu.re? Please walk to the right side. You already know how to use Workadventu.re? Skip the introduction and walk to the left.',[
		{
				label:"Ok, thanks!",
				className: "warning",
				callback: (popup) => {
					popup.close();
				}
			}
		
	])
});


WA.onEnterZone(zoneComms,() => {
			WA.openCoWebSite(commsPDF);
});

WA.onLeaveZone(zoneTutorialStart, () =>{
	closePopUp();
});

WA.onLeaveZone(zoneComms, () =>{
	closePopUp();
	WA.closeCoWebSite();
})