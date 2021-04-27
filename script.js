//Tiled Variablen für definierte Zonen

var zoneMural = "popup_mural";
var zonePDF = "zone_pdf";
var zoneYouTube = "zone_youtube";
var zoneVideoStream = "zone_videoStream";
var zonePictureLink = "zone_pictureLink";
var zonePictureUpload = "zone_pictureUpload";
var zoneAudioPlayable = "zone_audioPlayable";
var zoneWhiteboard = "popup_whiteboard";

//Variablen die auf inhalte Verweisen

var muralLink = "https://app.mural.co/invitation/mural/avanade7180/1616577121346?sender=ua67182cfa5bf2c37d0600807&key=abb5a9f7-b254-47cc-a05e-f562fa87ce1a";
var whiteboardLink = "https://www.microsoft.com/de-de/microsoft-365/microsoft-whiteboard/digital-whiteboard-app";
var PDF = 'https://scharaldin.github.io/WA_Map/testPDF.pdf';
var currentPopup = undefined;


WA.onEnterZone('myZone', () => {
WA.sendChatMessage('Wenn du ein Meeting versehentlich beendet hast und wieder rein willst musst du erst aus dem Besprechungsraum gehen und wieder rein laufen !!! ', 'Info');
});



WA.onLeaveZone('myZone', () => {
	WA.sendChatMessage("Bis später", 'Info');
	
});	
	

WA.onEnterZone(zoneMural, () => {
	closePopUp();
	currentPopup = WA.openPopup("test", 'Hallo ich bin ein Muralboard, willst du mich aufrufen?',[
	{
		label: "Ja, bitte!",
		className: "primary",
		callback: (popup) => {
			WA.openTab(muralLink);
			popup.close();
			}
		},{label: "Nein, lieber nicht",
		className: "warning",
		callback: (popup) => {
			popup.close();
		}
	}]);
});


WA.onEnterZone(zoneWhiteboard, () => {
	closePopUp();
	currentPopup = WA.openPopup("test_whiteboard", 'Ich bin ein Whiteboard, möchtest du mich aufrufen ?',[
	{
		label: "Ja, bitte!",
		className: "primary",
		callback: (popup) => {
			WA.openTab(whiteboardLink);
			popup.close();
			}
		},{label: "Nein, lieber nicht",
		className: "warning",
		callback: (popup) => {
			popup.close();
		}
	}]);
});




WA.onEnterZone(zonePDF, () => {
	closePopUp();
	currentPopup = WA.openPopup("popup_pdf", 'Ich bin ein PDF, möchtest du mich aufrufen ?',[
	{
		label: "Ja, bitte!",
		className: "primary",
		callback: (popup) => {
			WA.openCoWebSite(PDF);
			popup.close();
			}
		},{label: "Nein, lieber nicht",
		className: "warning",
		callback: (popup) => {
			popup.close();
		}
	}]);
});

WA.onLeaveZone(zoneMural, () =>{
	closePopUp();
});

WA.onLeaveZone(zoneWhiteboard, () =>{
	closePopUp();
});

WA.onLeaveZone(zonePDF, () =>{
	closePopUp();
	WA.closeCoWebSite();
});

function closePopUp(){
if(currentPopup !== undefined) {
	currentPopup.close();
	currentPopup = undefined;
	}
}