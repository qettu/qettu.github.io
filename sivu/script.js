// toinen sivu

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
	
	scrollTop = window.pageYOffset;
	test.innerHTML = scrollTop;
	allDivs = document.getElementsByTagName('alue');
	
	for( i=0; i< allDivs.length; i++ )
	{
		curDiv = allDivs[i];
		heightBefore = 100;
		console.log(scrollTop);
		console.log(curDiv.offsetTop);
		console.log(heightBefore);
		console.log(curDiv.offsetTop - heightBefore);
		
		if (scrollTop > curDiv.offsetTop - heightBefore){
			console.log("Bg Image change to...");
			background_img = curDiv.getAttribute("data-bg");
			console.log(curDiv.getAttribute("data-bg"));
			document.body.style.backgroundImage = background_img;
		}
	}
};



// Tekstien lisääminen tekstialueisiin, koska rivinvaihtoja ei voi lisätä
// ilman javascriptiä
function log(text, tekstialue) {
    tekstialue.value = text + '\r\n';
}

tekstialue1 = document.getElementById("tekstialue1");
tekstialue2 = document.getElementById("tekstialue2");

log("Blenderillä mallinnettu Sopwith F-1 Camel.\n\n - Koko malli on toteutettu alusta asti itse ilman valmiita 3D-malleja tai niiden osia.\n - Kaikki tekstuurit ovat itse valokuvattuja tai proseduraalisesti luotuja.\n - Projekti on edelleen kesken. Seuraava tavoite on maisema ja animoitu hahmo, joilla olisi mahdollista toteuttaa lyhyt, loppuun asti renderöity ja jälkiprosessoitu lyhytanimaatio.", tekstialue1)
log("Futuristinen käytävä. \n\n Pieni blenderillä tehty 3D-malli, jonka kaikki materiaalit ovat proseduraalisesti toteutettuja. ", tekstialue2)
