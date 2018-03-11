var list = document.getElementsByTagName('li');
var heading = document.querySelector('h2');
var text = heading.firstChild.nodeValue;

var totalItems = list.length;
var newHeading = text + '<span>' + totalItems + '</span>';
heading.innerHTML = newHeading;
