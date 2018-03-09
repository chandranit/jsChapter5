var item = document.getElementById('two');
var elItem = item.firstChild.nodeValue;
elItem = elItem.replace('pine nuts','Kale');
item.firstChild.nodeValue = elItem;
