const singlepics = document.querySelectorAll('.singlepic')

singlepics.forEach((singlepic) => {
	singlepic.addEventListener('click', ()=>{
	removeActive();
		singlepic.classList.add('active')
	})
})

function removeActive () {
	singlepics.forEach((singlepic)=> {
		singlepic.classList.remove('active')
	})
}