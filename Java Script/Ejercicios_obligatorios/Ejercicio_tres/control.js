document.getElementById('btn').addEventListener("click", clic, true)

let user = document.getElementById('user')

let password = document.getElementById('password')

function clic(e) {
	if (user.value == "" || password.value == ""){
		alert("Esta vacio eh!\nNo hay datos aqui xdxdxd")
		e.preventDefault()
		alert("Aca no se mando nada(?")
	}
	
	if(user.value.indexOf("@") === -1){
		alert("No veo un arroba (?")
		e.preventDefault()
	}

}

