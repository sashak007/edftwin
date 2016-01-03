$(document).ready(function() {

	$('section').waypoint(function(direction) {

		var location,
				activeSection = $(this.element);

		if(direction === 'down'){
    	activeSection = $(this.element).next();
    } 
    
    activeSection = $(this.element);

    location = activeSection.attr('id');

    // console.log('location : '+location)
    // console.log('direction : '+direction)
		$('nav div a').removeClass('active');

		$('div [data-label="'+location+'"] a').addClass('active');

	},{offset : '70%'});

	$('section').waypoint(function(direction) {

		var location,
				activeSection = $(this.element);

  	if (direction === 'up'){
    	activeSection = $(this.element).prev();
    }
    
    activeSection = $(this.element);

    location = activeSection.attr('id');

		$('nav div a').removeClass('active');

		$('div [data-label="'+location+'"] a').addClass('active');

	},{offset : 'bottom-in-view'});
	// {offset:'-60%'}
});