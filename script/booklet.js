// JavaScript Document
function click_book_cover()
{
	var book_cover = document.getElementById("book_cover");
	var book_cover_state = book_cover.style.webkitTransform;
	if(book_cover_state == "rotateY(-81deg)"){
		book_cover.style.transition = "-webkit-transform 1000ms ease-in";
		book_cover.style.webkitTransform = "rotateY(-1deg)";
		book_cover.style.transition = "all 1s";
		book_cover.style.boxShadow = "2px 2px 20px 3px rgba(0,0,0,0.75)";
	}
	else{
		book_cover.style.transition = "-webkit-transform 1000ms ease-out";
		book_cover.style.webkitTransform = "rotateY(-81deg)";
		book_cover.style.transition = "all 1s";
		book_cover.style.boxShadow = "2px 2px 20px 3px rgba(0,0,0,0.25)";
	}
}