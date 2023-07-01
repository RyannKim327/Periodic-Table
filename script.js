async function api(element, symbol){
	let data = await fetch(`https://neelpatel05.pythonanywhere.com/element/symbol?symbol=${symbol}`).then(result => {
		return result.json()
	})
}

fetch("https://neelpatel05.pythonanywhere.com").then(result => {
	return result.json()
}).then(r => {
	const table = document.getElementById("table")
	const elements = [
		"H", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "He",
		"Li", "Be", "", "", "", "", "", "", "", "", "", "", "", "B", "C", "N", "O", "F", "Ne",
		"Na", "Mg", "", "", "", "", "", "", "", "", "", "", "", "Al", "Si", "P", "S", "Cl", "Ar",
		"K", "Ca", "Sc", "", "Ti", "V", "Cr", "Mn", "Fe", "Co", "Ni", "Cu", "Zn", "Ga", "Ge", "As", "Se", "Br", "Kr",
		"Rb", "Sr", "Y", "", "Zr", "Nb", "Mo", "Tc", "Ru", "Rh", "Pd", "Ag", "Cd", "In", "Sn", "Sb", "Te", "I", "Xe",
		"Cs", "Ba", "La", "", "Hf", "Ta", "W", "Re", "Os", "Ir", "Pt", "Au", "Hg", "Tl", "Pb", "Bi", "Po", "At", "Rn",
		"Fr", "Ra", "Ac", "", "Rf", "Db", "Sg", "Bh", "Hs", "Mt", "Ds", "Rg", "Cn", "Nh", "Fl", "Mc", "Lv", "Ta", "Og",
		" ", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "", "",
		"", "", "", "", "Ce", "Pr", "Nd", "Pm", "Sm", "Eu", "Gd", "Tb", "Dy", "Ho", "Er", "Tm", "Yb", "Lu", "",
		"", "", "", "", "Th", "Pa", "U", "Np", "Pu", "Am", "Cm", "Bk", "Cf", "Es", "Fm", "Md", "No", "Lr", ""
	]
	for(let i = 0; i < elements.length; i++){
		el = document.createElement("div")
		h1 = document.createElement("h5")
		l = document.createElement("span")
		if(elements[i] == " "){
			el.classList.add("space")
		}else if(elements[i] != ""){
			el.classList.add("withspan")
		}
		h1.textContent = elements[i]
		el.appendChild(h1)
		el.appendChild(l)
		table.appendChild(el)
		for(let c = 0; c < r.length; c++){
			if(r[c].symbol == elements[i]){
				el.title = r[c].name
				el.classList.add(r[c].groupBlock.replace(/\s/gi, "-"))
				l.textContent = r[c].name
				console.log(r[c]['name'] + " " + r[c]['cpkHexColor'])
				if(r[c]['cpkHexColor'].length <= 5){
					el.style.backgroundColor = `#${r[c]['cpkHexColor']}`
				}else if(r[c]['cpkHexColor'] != "0"){
					el.style.backgroundColor = `#${r[c]['cpkHexColor']}50`
				}
				el.onclick = () => {
					let e = ""
					let obj = Object.keys(r[c])
					obj.forEach(element => {
						_el = r[c][element]
						e += element.toUpperCase() + ": " + _el + "\n"
					})
					alert(e)
				}
				break
			}
		}
	}
})