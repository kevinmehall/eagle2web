(function(){

var svgRoot = document.documentElement

var svg   = document.documentElement
var svgNS = svg.namespaceURI
var selectedSignalElem
var defaultMessage = 'Click a signal'

function addOverlay(){
	getRoot(document)
	selectedSignalElem = document.createElementNS(svgNS, 'text')
	selectedSignalElem.setAttribute('x', 10)
	selectedSignalElem.setAttribute('y', 20)
	selectedSignalElem.setAttribute('fill', 'white')
	svgRoot.appendChild(selectedSignalElem)
	setOverlay(defaultMessage)
}

function setOverlay(t){
	if (selectedSignalElem.firstChild){
		selectedSignalElem.removeChild(selectedSignalElem.firstChild)
	}
	selectedSignalElem.appendChild(document.createTextNode(t))

}

setTimeout(addOverlay, 10)

function arr(a){
	return Array.prototype.slice.call(a)
}

function $$(selector){
	return arr(document.querySelectorAll(selector));
}

svgRoot.addEventListener('click', function(e){
	if (e.button !== 0) return;
	var parent = e.target.parentElement
	if (parent && parent.classList.contains('signal')){
		var signal = parent.dataset.name;
		console.log(signal)
		highlightSignal(signal)
	}else{
		highlightSignal(null);
	}
})

function highlightSignal(name){
	setOverlay(name || defaultMessage)
	$$('.selectedSignal').forEach(function(i){i.classList.remove('selectedSignal')})
	if (name){
		$$('g.signal').forEach(function(i){
			if (i.dataset.name === name){
				arr(i.querySelectorAll('*')).forEach(function(n){
					n.classList.add('selectedSignal')
				})
			}
		})
	}
}

})()