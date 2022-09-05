const prev = document.querySelector('.app__output_num-prev')
const now = document.querySelector('.app__output_num-now')

const operators = Array.from(document.querySelectorAll('.operator'))

operators.map((button) => {
	button.addEventListener('click', (e) => {
		switch(e.target.innerText){
			case 'C':
				prev.innerText = ''
				now.innerText = ''
				break
			case 'CE':
				if(now.innerText){
					now.innerText = now.innerText.slice(0, -1)
				}
				break
			case '=':
				prev.innerText = now.innerText
				now.innerText = eval(now.innerText)
				break
			default: 
				if(now.innerText == 0){
					now.innerText = ''
				}
				now.innerText += e.target.innerText
		}
	})
})
