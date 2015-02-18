x = function(e){
	document.body.style.background = this.value;
}
formElemtent = document.getElementById("text");
writeElement = document.getElementById("write");
document.getElementById("text").addEventListener('input',x);