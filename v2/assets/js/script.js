$(document).ready(function() {

});

function mountModule(elem, color, height) {
	let mount = document.getElementById(elem);
	let mounted = document.getElementsByClassName("mounted_module");

	Array.prototype.forEach.call(mounted, element => {
		console.log(element);
		element.classList.remove("mounted_module");
		element.classList.add("unmounted_module");
	});

	mount.classList.remove("unmounted_module");
	mount.classList.add("mounted_module");

	let folder = document.getElementById("folder-page");
	folder.style.maxHeight = height;
	folder.style.backgroundColor = color;

}



