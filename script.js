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
		heightBefore = 0;
	
		if (scrollTop > curDiv.offsetTop - heightBefore){
			background_img = curDiv.getAttribute("data-bg");
			document.body.style.background = "background_img no-repeat center center fixed";
		}
	}
};