function init(){
//add your javascrip between these two lines of code
var button = document.getElementById('entrybutton');

function displaytext(){
    var textbox = document.getElementById('entryinput');
    document.getElementById('textoutput').innerHTML = textbox.value;
    alert("Imanol Sanchez: " + textbox.value);
}
button.addEventListener('click', displaytext);
}

window.addEventListener('load', init);
