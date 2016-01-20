(function(){
	function NewPopup(sType, sUrl, sText, pWidth, pHeight){

		var pWidth 	= pWidth || 640;
		var pHeight = pHeight || 320;

		var sText 	= sText || "";
		var sUrl 	= sUrl || "";

		var pCenterTop 		= window.innerHeight / 2 - pHeight / 2 || window.html.clientHeight / 2 - pHeight / 2;
		var pCenterLeft 	= window.innerWidth / 2 - pWidth / 2 || window.html.clientWidth / 2 - pWidth / 2;

		var sTypeArray = [
			"facebook", 	
			"twitter", 	
			"google",
			"buffer",
			"stumbleupon"
		];
		var sSharArray = [
			"//www.facebook.com/sharer.php?u={sUrl}",
			"//twitter.com/intent/tweet?text={sText}&url={sUrl}",
			"//plus.google.com/share?url={sUrl}",
			"//bufferapp.com/add?url={sUrl}&text={sText}",
			"//www.stumbleupon.com/submit?url={sUrl}&title={sText}"
		];

		for(var i = 0; i < sTypeArray.length ; i++){
			if(sType.toLowerCase() == sTypeArray[i]){
				var sPopup = sSharArray[i].replace('{sUrl}', sUrl);
				var sPopup = sPopup.replace('{sText}', sText);

				window.open(sPopup, "Share on " + sTypeArray[i], "width=" + pWidth + ", height=" + pHeight + ", top=" + pCenterTop + ", left=" + pCenterLeft + "");
			}
		}
	}
	document.getElementById("sb-fb").addEventListener("click", function(event){
		var fbP = this.getAttribute("sb-popupD").split(" ");
		var fbPWidth = fbP[0];
		var fbPHeight = fbP[1];

		var fbSUrl = this.getAttribute("sb-url");
		var fbSText = this.getAttribute("sb-text");
		var fbSType = "FACEBOOK";

		NewPopup(fbSType, fbSUrl, fbSText, fbPWidth, fbPHeight);
	});

	document.getElementById("sb-tw").addEventListener("click", function(event){
		var twP = this.getAttribute("sb-popupD").split(" ");
		var twPWidth = twP[0];
		var twPHeight = twP[1];

		var twSUrl = this.getAttribute("sb-url");
		var twSText = this.getAttribute("sb-text");
		var twSType = "TWITTER";

		NewPopup(twSType, twSUrl, twSText, twPWidth, twPHeight);
	});

	document.getElementById("sb-go").addEventListener("click", function(event){
		var goP = this.getAttribute("sb-popupD").split(" ");
		var goPWidth = goP[0];
		var goPHeight = goP[1];

		var goSUrl = this.getAttribute("sb-url");
		var goSText = this.getAttribute("sb-text");
		var goSType = "GOOGLE";

		NewPopup(goSType, goSUrl, goSText, goPWidth, goPHeight);
	});

	document.getElementById("sb-bu").addEventListener("click", function(event){
		var buP = this.getAttribute("sb-popupD").split(" ");
		var buPWidth = buP[0];
		var buPHeight = buP[1];

		var buSUrl = this.getAttribute("sb-url");
		var buSText = this.getAttribute("sb-text");
		var buSType = "BUFFER";

		NewPopup(buSType, buSUrl, buSText, buPWidth, buPHeight);
	});

	document.getElementById("sb-su").addEventListener("click", function(event){
		var suP = this.getAttribute("sb-popupD").split(" ");
		var suPWidth = suP[0];
		var suPHeight = suP[1];

		var suSUrl = this.getAttribute("sb-url");
		var suSText = this.getAttribute("sb-text");
		var suSType = "STUMBLEUPON";

		NewPopup(suSType, suSUrl, suSText, suPWidth, suPHeight);
	});
})();