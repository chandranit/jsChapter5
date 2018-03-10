var newElement = document.createElement('li');
var newText = document.createTextNode('quinoa');

newElement.appendChild(newText);

var position = document.getElementsByTagName('ul')[0];
position.appendChild(newElement);
