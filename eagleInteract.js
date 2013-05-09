(function(){

var svgRoot = document.documentElement


function arr(a){
	return Array.prototype.slice.call(a)
}

function $$(selector){
	return arr(document.querySelectorAll(selector));
}

svgRoot.addEventListener('click', function(e){
	var parent = e.target.parentElement
	if (parent && parent.classList.contains('signal')){
		var signal = parent.dataset.name;
		console.log(signal)
		highlightSignal(signal)
	}
})

function highlightSignal(name){
	$$('.selectedSignal').forEach(function(i){i.classList.remove('selectedSignal')})
	$$('g.signal').forEach(function(i){
		if (i.dataset.name === name){
			arr(i.querySelectorAll('*')).forEach(function(n){
				n.classList.add('selectedSignal')
			})
		}
	})
}

})()