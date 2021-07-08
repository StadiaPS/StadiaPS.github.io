document.getElementById('jam').innerHTML =  new Date().toLocaleTimeString()

setInterval(function(){
	document.getElementById('jam').innerHTML =  new Date().toLocaleTimeString()
}, 1000)