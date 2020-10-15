angular.module('carouselApp', ['ui.carousel'])
  .controller('CarouselDemoController', function() {
    this.title = 'Here is the carousel demo';
	
	this.slides = [
		{
			title: "Great White in the open ocean",
			image: "../images/greatWhite.jpg",
		},
		{
			title: "Great White breaching the surface",
			image: "../images/greatWhiteBreach.jpg",
		},
		{
			title: "Greath White about with its mouth open",
			image: "../images/greatWhiteOpenMouth.jpg",
		},
		{
			title: "Small Great White up close",
			image: "../images/greatWhiteV2.jpg",
		},
	];
});