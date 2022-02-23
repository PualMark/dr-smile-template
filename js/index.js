// Start on #inicio
    var url = document.URL, 
      index = url.indexOf("#"),
      hash = index != -1 ? url.substring(index+1) : "";

    if(hash === ""){
        location.hash = "#inicio";
    }


// Toggle Button Function to Show Navigation Bar Mobile
function showNavbar() {
	//input
	var checkBox = document.getElementById('show-nav')
	//navigation bar
	var content = document.getElementById('main-nav')
	//Toggle Lines
	//line 1
	var line1 = document.getElementById('toggle-line1')
	//line 2
	var line2 = document.getElementById('toggle-line2')

	if(checkBox.checked == true){
		content.style.display = 'block'
		content.style.animation = 'nav-display .4s'
		//lines
		line1.style.animation = 'toggle-line-1 .4s forwards'
		line2.style.animation = 'toggle-line-2 .4s forwards'
	}else{
		content.style.animation = 'nav-nodisplay .4s forwards'
		line1.style.animation = 'toggle-line-out-1 .4s forwards'
		line2.style.animation = 'toggle-line-out-2 .4s forwards'
	}
}

//Smooth Scroll
$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 400, function(){

        window.location.hash = hash;
      });
    } // End if
  });
});