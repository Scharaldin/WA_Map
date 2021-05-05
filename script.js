//Tiled Variablen für definierte Zonen

var zoneMural = "popup_mural";
var zonePDF = "zone_pdf";
var zoneYouTube = "zone_youtube";
var zoneVideoStream = "zone_videoStream";
var zonePictureLink = "zone_pictureLink";
var zonePictureUpload = "zone_pictureUpload";
var zoneAudioPlayable = "zone_audioPlayable";
var zoneWhiteboard = "popup_whiteboard";
var zoneRundgang = "zone_NPCRundgang";

//Variablen die auf inhalte Verweisen

var muralLink = "https://app.mural.co/invitation/mural/avanade7180/1616577121346?sender=ua67182cfa5bf2c37d0600807&key=abb5a9f7-b254-47cc-a05e-f562fa87ce1a";
var whiteboardLink = "https://www.microsoft.com/de-de/microsoft-365/microsoft-whiteboard/digital-whiteboard-app";
var PDF = 'https://scharaldin.github.io/WA_Map/testPDF.pdf';
var PictureLink = 'https://www.her-career.com/dokumente/logo/104440_rgb_72.jpg';
var PictureUpload = 'https://scharaldin.github.io/WA_Map/real2.png';
var YouTube = 'https://www.youtube.com/embed/GimrxP2U0ZE';
var VideoStream = "a";
var PhysicalStudio = 'https://tour.metareal.com/apps/player?asset=0bc88dca-2e1b-4292-9cf8-1b299a509de1&position=0.00x1.00y0.00z&rotation=0.00x-336.96y0.00z' ;

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

WA.onEnterZone(zoneRundgang, () => {
	closePopUp();
	currentPopup = WA.openPopup("popup_NPCRundgang", 'Willst du sehen wie das Physische Studio aussieht?',[
		{
			label: "Ja",
			className: "primary",
			callback: (popup) => {
				WA.openCoWebSite(PhysicalStudio);
				popup.close();
			}
		},{
				label: "Nein",
				className: "warning",
				callback:(popup) => {
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

WA.onEnterZone(zoneYouTube, () => {
	closePopUp();
	currentPopup = WA.openPopup("popup_youtube", 'Ich bin ein YouTube Video, möchtest du mich aufrufen ?',[
	{
		label: "Ja, bitte!",
		className: "primary",
		callback: (popup) => {
			WA.openCoWebSite(YouTube);
			popup.close();
			}
		},{label: "Nein, lieber nicht",
		className: "warning",
		callback: (popup) => {
			popup.close();
		}
	}]);
});

WA.onEnterZone(zonePictureLink, () => {
	closePopUp();
	currentPopup = WA.openPopup("popup_pictureLink", 'Ich bin ein Verlinktes Bild, möchtest du mich aufrufen ?',[
	{
		label: "Ja, bitte!",
		className: "primary",
		callback: (popup) => {
			WA.openCoWebSite(PictureLink);
			popup.close();
			}
		},{label: "Nein, lieber nicht",
		className: "warning",
		callback: (popup) => {
			popup.close();
		}
	}]);
});

WA.onEnterZone(zonePictureUpload, () => {
	closePopUp();
	currentPopup = WA.openPopup("popup_pictureLink", 'Ich bin ein Hochgeladenes Bild, möchtest du mich aufrufen ?',[
	{
		label: "Ja, bitte!",
		className: "primary",
		callback: (popup) => {
			WA.openCoWebSite(PictureUpload);
			popup.close();
			}
		},{label: "Nein, lieber nicht",
		className: "warning",
		callback: (popup) => {
			popup.close();
		}
	}]);
});



WA.onEnterZone(zoneAudioPlayable, () => {
	closePopUp();
	currentPopup = WA.openPopup("popup_audioPlayable", 'Hörst du diese Musik ?',[])
});


WA.onLeaveZone(zoneAudioPlayable, () =>{
	closePopUp();
});

WA.onLeaveZone(zoneMural, () =>{
	closePopUp();
});

WA.onLeaveZone(zoneRundgang, () =>{
	closePopUp();
	WA.closeCoWebSite();
})

WA.onLeaveZone(zoneWhiteboard, () =>{
	closePopUp();
});

WA.onLeaveZone(zonePDF, () =>{
	closePopUp();
	WA.closeCoWebSite();
});

WA.onLeaveZone(zonePictureLink, () =>{
	closePopUp();
	WA.closeCoWebSite();
});

WA.onLeaveZone(zonePictureUpload, () =>{
	closePopUp();
	WA.closeCoWebSite();
});

WA.onLeaveZone(zoneYouTube, () =>{
	closePopUp();
	WA.closeCoWebSite();
});

function closePopUp(){
if(currentPopup !== undefined) {
	currentPopup.close();
	currentPopup = undefined;
	}
}