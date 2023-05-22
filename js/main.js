document.getElementById("list-toggle").addEventListener("click", viewButtonToggle);

function viewButtonToggle() {
	if ( document.getElementById("list-toggle").classList.contains('bi-card-list') ) {
		document.getElementById("list-toggle").classList.add('bi-grid');
		document.getElementById("list-toggle").classList.remove('bi-card-list');
	} else {
		document.getElementById("list-toggle").classList.add('bi-card-list');
		document.getElementById("list-toggle").classList.remove('bi-grid');
	}
}