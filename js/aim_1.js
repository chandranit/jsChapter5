var startItem = document.getElementsByTagName('ul')[0];

// adding a new node in the last
var lastItem = document.createElement('li');
var text1 = document.createTextNode('sweet corn');
lastItem.appendChild(text1);
startItem.appendChild(lastItem);

// adding a new node in the begnning
var firstItem = document.createElement('li');
var text2 = document.createTextNode('Kale');
firstItem.appendChild(text2);
startItem.insertBefore(firstItem, startItem.firstChild);
