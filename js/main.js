//document.getElementsByClassName("list-toggle").addEventListener("click", viewButtonToggle);
var listtoggle = document.getElementsByClassName("list-toggle");

function viewButtonToggle() {
	for (var i = 0; i < listtoggle.length; i++) {
		if ( listtoggle[i].classList.contains('bi-card-list') ) {
			listtoggle[i].classList.add('bi-grid');
			listtoggle[i].classList.remove('bi-card-list');
		} else {
			listtoggle[i].classList.add('bi-card-list');
			listtoggle[i].classList.remove('bi-grid');
		}
	}
}

for (var i = 0; i < listtoggle.length; i++) {
    listtoggle[i].addEventListener('click', viewButtonToggle, false);
}