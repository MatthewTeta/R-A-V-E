var once = false;
var shouldRun = false;
var counts = 0;

$(document).ready(function() {
	document.getElementById('rave-music').currentTime = 35; //35
	$('.content').click(function() {
		if (!once) {
			shouldRun = true;
			setInterval(rave, 1);
			setInterval(count, 1);
			document.getElementById('rave-music').play();
		} else {
			shouldRun = false;
			document.getElementById('rave-music').pause();
		}
		once = !once;
	});

	$('.content').keydown(function() {
		if (!once) {
			shouldRun = true;
			setInterval(rave, 1);
			document.getElementById('rave-music').play();
		} else {
			shouldRun = false;
			document.getElementById('rave-music').pause();
		}
		once = !once;
	});
});

function rave() {
	if (shouldRun) {
		var hue = 'rgb(' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ',' + (Math.floor((256)*Math.random())) + ')';
    	$('.content').css("background-color", hue);
	} else {
		$('.content').css("background-color", "white");
	}
}

function count() {
	if (shouldRun) {
		counts++;
		if (counts == 1000) {
			$(".content img").css('visibility', 'visible');
			document.getElementById('rave-music').pause();
			document.getElementById('scream').currentTime = 14.25;
			document.getElementById('scream').play();
		} else if (counts == 1300) {
			counts = 0;
			$(".content img").css('visibility', 'hidden');
			document.getElementById('rave-music').play();
			document.getElementById('scream').currentTime = 14.25;
			document.getElementById('scream').pause();
		}	
	}
}