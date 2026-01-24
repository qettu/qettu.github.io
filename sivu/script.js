// main

var test = document.getElementById("test"); /*TODO: remove*/
var paperielementti = document.getElementById("muistiopaperi1");
var kaikkiTekstielementit = document.getElementsByClassName('tekstialue');

// Fontti säädetään tekstin koko ensimmäisen muistilapun rivien mukaan 
// (1.5 rivivälillä täytyy jakaa 33.267 muistilappukuva)
function adjustFontSize() {
	const windowWidth = window.innerWidth;

	for (var i = 0; i < kaikkiTekstielementit.length; i++) {
		kaikkiTekstielementit[i].style.fontSize = muistiopaperi1.offsetHeight/33.267+'px';
	}
}


// Säädetään fontti jo alussa oikein
adjustFontSize();
window.addEventListener('resize', adjustFontSize);

// Osioiden taustakuvan muuttuminen rullatessa
document.onscroll = function() {
	// Taustakuva vain, jos ruutu on tarpeeksi leveä
	if (!(window.matchMedia("(max-width: 1000px)").matches)){
		
		
		scrollTop = window.pageYOffset;
		// test.innerHTML = scrollTop;
		allDivs = document.getElementsByClassName('alue');
		
		for( i=0; i< allDivs.length; i++ )
		{
			curDiv = allDivs[i];
			heightBefore = 100;
			console.log("scrolled from top:")
			console.log(scrollTop);
			console.log("Offset from top:")
			console.log(curDiv.offsetTop);
			console.log(heightBefore);
			console.log(curDiv.offsetTop - heightBefore);
			
			if (scrollTop > curDiv.offsetTop - heightBefore){
				console.log("Bg Image change to...");
				background_img = curDiv.getAttribute("data-bg");
				console.log(curDiv.getAttribute("data-bg"));
				document.body.style.backgroundImage =  'url("' + background_img + '")';
				document.body.style.backgroundRepeat = "no-repeat";
				document.body.style.backgroundAttachment = "fixed";
				document.body.style.backgroundPosition = "center";
				document.body.style.backgroundSize = "cover";
			}
		}
		// document.body.style.backgroundImage = 'url("images/sopwith_camel_rendered.jpg")';
	} else {
		document.body.style.background = "none";
		document.body.style.backgroundColor = "#222";
	}
	adjustFontSize();
};

// Overlayn näyttäminen sähköpostia klikattaessa
function overlayOn(){
	document.getElementById("overlay").style.display = "block";
}
function overlayOff(){
	document.getElementById("overlay").style.display = "none";
}
emailKuvake = document.getElementById("email-kuvake");
emailKuvake.onclick = function() {overlayOn(); return false};
//overlay_alue = document.getElementById("overlay");
//overlay_alue.onclick = function() {overlayOff(); return false};


// Tekstien lisääminen tekstialueisiin, koska rivinvaihtoja ei voi lisätä
// ilman javascriptiä
function log(text, tekstialue) {
    tekstialue.value = text + '\r\n';
}

tekstialue1 = document.getElementById("tekstialue1");
tekstialue2 = document.getElementById("tekstialue2");
tekstialue3 = document.getElementById("tekstialue3");

log("Sopwith F-1 Camel modeled with Blender \n\n I created this model along with its textures for a shortfilm, but the project is still in progress (the background is in the early stage, and the character is in the making). Most of the textures are procedural.", tekstialue1)
log("Futuristic corridor \n\n A simple 3D model with only procedural textures. ", tekstialue2)
log("I have coded a program (using C++ and LunarG's Vulkan SDK) that can load 3D models and textures from .gltf files and pre-mipmapped KTX texture files. The base of the program is built by following Alexander Overvoorde's Vulkan tutorial (hyperlink below). I have later added Blinn-Phong lighting and some other features. The main code includes 3,000 lines of C++-code. In addition, the program contains GLSL-coded shaders translated into SPIR-V. ", tekstialue3)
log("This old project combined wildlife photografing and programming. The Android app, made with Android Studio and Java, allows the user to save butterfly observations (including weather, temperature, location and species) and browse common butterflies based on their characteristics.", tekstialue4)


//log("Blenderillä mallinnettu Sopwith F-1 Camel.\n\n - Malli on toteutettu alusta asti itse.\n - Kaikki tekstuurit ovat itse valokuvattuja tai proseduraalisesti luotuja.\n - Projekti on edelleen kesken. Seuraava tavoite on maisema ja animoitu hahmo, joilla olisi mahdollista toteuttaa lyhyt, loppuun asti renderöity ja jälkiprosessoitu lyhytanimaatio.", tekstialue1)
//log("Futuristinen käytävä. \n\n Pieni Blenderillä tehty 3D-malli, jonka kaikki materiaalit ovat proseduraalisesti toteutettuja. ", tekstialue2)
//log("Olen toteuttanut C++-kielellä LunarG:n julkaisemaa Vulkan SDK:ta käyttäen ohjelman, joka pystyy lataamaan 3D-malleja .obj-tiedostoista ja liittämään niihin tekstuureja. Ohjelman runko on toteutettu seuraamalla Alexander Overvoorden Vulkan tutoriaalia (linkki ohessa). Myöhemmin olen lisännyt ohjelmaan Blinn-Phong valaistusmallin ja muutamia muita ominaisuuksia. Pääohjelmassa on yli 3000 riviä C++-koodia. Lisäksi ohjelmaan kuuluu GLSL-koodia. Projekti jatkuu edelleen.", tekstialue3)
//log("Tämä (jo vanha) projekti yhdisti luontokuvaamisen ja koodaamisen. Ohjelmaan pystyi tallentamaan helposti perhoshavaintoja sisältäen säätilan, lämpötilan, paikan ja lajin. Lisäksi sovelluksesta pystyi helposti hakemaan perhosia niiden tuntomerkkien avulla. Sovellus toimi hyvin ja tuli valmiiksi. Sitä ei kuitenkaan koskaan julkaistu.", tekstialue4)
